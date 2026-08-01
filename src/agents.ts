// ── Baddies Tax OS™ — AI Agent layer ──────────────────────────
// Autonomous tax-copy and SEO/AEO optimization agents running on Workers AI.

import { BRAND_SITE_SLUGS } from './funnels'
import { runLLM, aiConfigured, type AiEnv } from './ai'

export type AgentEnv = AiEnv & {
  DB?: any
}

export const AGENT_WEEK_MS = 7 * 24 * 3600 * 1000

export const AGENT_FIELDS = ['seoTitle', 'seoDesc', 'seoKeywords'] as const

const AGENT_SYSTEM = `You are the Tax SEO/SGE/AEO optimization agent for Baddies Tax Services™ (Baddies Tax OS™). You rewrite search-facing metadata to maximize visibility in:
1. Classic Google/Bing SEO (keyword-rich, <60 char titles, <155 char descriptions)
2. Google SGE / AI Overviews (clear tax entity statements, direct answers)
3. Answer engines — ChatGPT, Perplexity, Claude (question-answer phrasing, factual tax claims)
Rules: Strict Circular 230 and IRC §7216 compliance — NO guaranteed refunds, NO "pennies on the dollar" claims, NO fake IRS affiliation. You respond with ONLY a valid JSON object, no markdown, no explanation.`

const extractJSON = (text: string): Record<string, string> | null => {
  const fenced = text.match(/```(?:json)?\s*([\s\S]*?)```/)
  const candidate = fenced ? fenced[1] : text
  const start = candidate.indexOf('{')
  const end = candidate.lastIndexOf('}')
  if (start === -1 || end === -1 || end <= start) return null
  try {
    const parsed = JSON.parse(candidate.slice(start, end + 1))
    if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
      const clean: Record<string, string> = {}
      for (const [k, v] of Object.entries(parsed)) {
        if (typeof v === 'string' || typeof v === 'number') clean[k] = String(v).slice(0, 400)
      }
      return clean
    }
  } catch { /* noop */ }
  return null
}

export const logAgent = async (env: AgentEnv, agent: string, funnel: string | null, action: string, detail = '') => {
  try { await env.DB?.prepare('INSERT INTO agent_log (agent, funnel, action, detail) VALUES (?,?,?,?)').bind(agent, funnel, action, detail.slice(0, 500)).run() } catch { /* never throws */ }
}

export const optimizeFunnelCopy = async (
  env: AgentEnv,
  funnel: string,
  context: { views7d?: number; leads7d?: number } = {}
): Promise<{ ok: boolean; overrides?: Record<string, string>; error?: string }> => {
  if (!aiConfigured(env) || !env.DB) return { ok: false, error: 'AI or DB binding missing' }
  if (BRAND_SITE_SLUGS.has(funnel)) return { ok: true, overrides: {} }
  try {
    const niche = funnel.replace(/-/g, ' ')
    const user = `Funnel: "${niche}" Baddies Tax Services landing page.
Current date: ${new Date().toISOString().slice(0, 10)}. Write fresh search-optimized tax metadata. Respond with exactly this JSON:
{"seoTitle": "<compelling <60 char title for tax practice>", "seoDesc": "<direct-answer 120-155 char meta description>", "seoKeywords": "<6-10 comma-separated tax keywords>"}`

    const raw = await runLLM(env, AGENT_SYSTEM, user, 500, 0.8)
    const parsed = extractJSON(raw)
    if (!parsed || !parsed.seoTitle) { await logAgent(env, 'seo-agent', funnel, 'parse_fail', raw.slice(0, 200)); return { ok: false, error: 'Could not parse agent output' } }

    const overrides: Record<string, string> = {}
    for (const f of AGENT_FIELDS) if (parsed[f]) overrides[f] = parsed[f]
    let existing: Record<string, string> = {}
    try {
      const row = await env.DB.prepare('SELECT overrides FROM copy_overrides WHERE funnel=?').bind(funnel).first()
      if (row?.overrides) existing = JSON.parse(row.overrides as string)
    } catch { /* fresh */ }
    const merged = { ...existing, ...overrides }
    await env.DB.prepare('INSERT INTO copy_overrides (funnel, overrides, agent, updated_at) VALUES (?,?,?,CURRENT_TIMESTAMP) ON CONFLICT(funnel) DO UPDATE SET overrides=excluded.overrides, agent=excluded.agent, updated_at=CURRENT_TIMESTAMP')
      .bind(funnel, JSON.stringify(merged), 'seo-agent').run()
    await logAgent(env, 'seo-agent', funnel, 'optimized', overrides.seoTitle || '')
    return { ok: true, overrides }
  } catch (e: any) {
    await logAgent(env, 'seo-agent', funnel, 'error', String(e?.message || e))
    return { ok: false, error: String(e?.message || e).slice(0, 300) }
  }
}

export const optimizeAllFunnels = async (env: AgentEnv, funnels: string[]): Promise<{ ok: boolean; optimized: string[]; failed: string[] }> => {
  const optimized: string[] = []
  const failed: string[] = []
  for (const f of funnels) {
    const r = await optimizeFunnelCopy(env, f, {})
    ;(r.ok ? optimized : failed).push(f)
  }
  await logAgent(env, 'seo-agent', null, 'batch_complete', `optimized ${optimized.length}, failed ${failed.length}`)
  return { ok: failed.length === 0, optimized, failed }
}

export const getCopyOverrides = async (env: AgentEnv, funnel: string): Promise<Record<string, string>> => {
  if (BRAND_SITE_SLUGS.has(funnel)) return {}
  try {
    const row = await env.DB?.prepare('SELECT overrides FROM copy_overrides WHERE funnel=?').bind(funnel).first()
    if (row?.overrides) return JSON.parse(row.overrides as string)
  } catch { /* noop */ }
  return {}
}

export const maybeRefreshFunnel = async (env: AgentEnv, funnel: string): Promise<void> => {
  if (BRAND_SITE_SLUGS.has(funnel)) return
  try {
    const row = await env.DB?.prepare('SELECT updated_at FROM copy_overrides WHERE funnel=?').bind(funnel).first()
    const last = row?.updated_at ? new Date(String(row.updated_at) + 'Z').getTime() : 0
    if (Date.now() - last < AGENT_WEEK_MS) return
    await env.DB?.prepare('INSERT INTO copy_overrides (funnel, overrides, agent, updated_at) VALUES (?, COALESCE((SELECT overrides FROM copy_overrides WHERE funnel=?),\'{}\'), \'seo-agent\', CURRENT_TIMESTAMP) ON CONFLICT(funnel) DO UPDATE SET updated_at=CURRENT_TIMESTAMP').bind(funnel, funnel).run()
    await optimizeFunnelCopy(env, funnel, {})
  } catch { /* background */ }
}

export const trackView = async (env: AgentEnv, funnel: string): Promise<void> => {
  try {
    await env.DB?.prepare("INSERT INTO funnel_views (funnel, day, views) VALUES (?, date('now'), 1) ON CONFLICT(funnel, day) DO UPDATE SET views = views + 1").bind(funnel).run()
  } catch { /* never throws */ }
}
