import { Hono } from 'hono'
import { dashboardPage } from './pages/dashboard'
import { taxPage } from './pages/tax'
import { creditPage } from './pages/credit'
import { emailsPage } from './pages/emails'
import { compliancePage } from './pages/compliance'
import { builderPage } from './pages/builder'
import { brandPage } from './pages/brand'
import { seoPage } from './pages/seo'
import { integrationsPage } from './pages/integrations'
import { leadsPage } from './pages/leads'
import { ecosystemPage, ecosystemBrandPage, ECOSYSTEM_BRANDS } from './pages/ecosystem'
import { passportPage } from './pages/passport'
import { api, INDEXNOW_KEY } from './api'
import { agentsPage } from './pages/agents'
import { mailerPage } from './pages/mailer'
import { analyticsPage } from './pages/analytics'
import { deployPage } from './pages/deploy'
import { webinarsPage } from './pages/webinars'
import { clientsPage } from './pages/clients'
import { verifyPage } from './pages/verify'
import { trafficPage } from './pages/traffic'
import { fleetPage } from './pages/fleet'
import { brandApi, mcp, llmsTxt } from './brandapi'
import { docsPage } from './pages/docs'
import { taxAgencyInABoxPage } from './pages/agencyInABox'
import { diyPortalPage } from './pages/diyPortal'
import { FUNNEL_SLUGS } from './funnels'
import { TEMPLATES } from './templateRegistry'
import { getCopyOverrides, trackView, maybeRefreshFunnel } from './agents'

type AppBindings = { DB?: D1Database; AI?: any }
const app = new Hono<{ Bindings: AppBindings }>()

const html = (body: string) =>
  new Response(body, { headers: { 'Content-Type': 'text/html; charset=utf-8' } })

// ── Baddies Tax OS™ Command Pages & DIY Platform ─────────────
app.get('/', (c) => html(dashboardPage()))
app.get('/diy', (c) => html(diyPortalPage()))
app.get('/diy/portal', (c) => html(diyPortalPage()))
app.get('/diy/interview', (c) => html(diyPortalPage()))
app.get('/tax-agency-in-a-box', (c) => html(taxAgencyInABoxPage()))
app.get('/start-a-tax-business', (c) => html(taxAgencyInABoxPage()))
app.get('/tax-business-software', (c) => html(taxAgencyInABoxPage()))
app.get('/tax-office-automation', (c) => html(taxAgencyInABoxPage()))
app.get('/tax-service-bureau-platform', (c) => html(taxAgencyInABoxPage()))
app.get('/tax-firm-growth-system', (c) => html(taxAgencyInABoxPage()))
app.get('/baddies-tax-os', (c) => html(taxAgencyInABoxPage()))
app.get('/launch-your-tax-agency', (c) => html(taxAgencyInABoxPage()))
app.get('/tax', (c) => html(taxPage()))
app.get('/resolution', (c) => html(creditPage()))
app.get('/credit', (c) => html(creditPage()))
app.get('/events', (c) => html(webinarsPage()))
app.get('/emails', (c) => html(emailsPage()))
app.get('/compliance', (c) => html(compliancePage()))
app.get('/builder', (c) => html(builderPage()))
app.get('/brand', (c) => html(brandPage()))
app.get('/seo', (c) => html(seoPage()))
app.get('/integrations', (c) => html(integrationsPage()))
app.get('/leads', (c) => html(leadsPage()))
app.get('/bureau', (c) => html(fleetPage()))
app.get('/ecosystem', (c) => html(ecosystemPage()))
app.get('/ecosystem/:slug', (c) => {
  const page = ecosystemBrandPage(c.req.param('slug'))
  return page ? html(page) : c.notFound()
})
app.get('/credentials', (c) => html(passportPage()))
app.get('/passport', (c) => html(passportPage()))
app.get('/agents', (c) => html(agentsPage()))
app.get('/mailer', (c) => html(mailerPage()))
app.get('/analytics', (c) => html(analyticsPage()))
app.get('/deploy', (c) => html(deployPage()))
app.get('/webinars', (c) => html(webinarsPage()))
app.get('/clients', (c) => html(clientsPage()))
app.get('/verify', (c) => html(verifyPage()))
app.get('/traffic', (c) => html(trafficPage()))
app.get('/fleet', (c) => html(fleetPage()))
app.get('/docs', (c) => html(docsPage()))

// ── API layer ──────────────────────────────────────────────
app.route('/api', api)
app.route('/api/brand', brandApi)
app.route('/mcp', mcp)
app.get('/llms.txt', (c) => c.text(llmsTxt(new URL(c.req.url).origin)))

// ── Live Tax Funnel Templates ──────────────────────────────────
app.get('/t/:slug', async (c) => {
  const slug = c.req.param('slug')
  const tpl = TEMPLATES[slug]
  if (!tpl) return c.notFound()
  const q: Record<string, string | undefined> = c.req.query()
  q._slug = slug

  if (c.env?.DB) {
    try {
      const overrides = await getCopyOverrides(c.env, slug)
      for (const [k, v] of Object.entries(overrides)) if (!q[k]) q[k] = v
    } catch { /* render fallback */ }

    try {
      c.executionCtx.waitUntil(trackView(c.env, slug))
      if (c.env.AI || (c.env as any).OPENROUTER_API_KEY || (c.env as any).HF_API_TOKEN) c.executionCtx.waitUntil(maybeRefreshFunnel(c.env, slug))
    } catch { /* noop */ }
  }
  return html(tpl(q))
})

// ── Short Funnel Links ─────────────────────────────────────────
app.get('/f/:code', async (c) => {
  const code = c.req.param('code')
  if (!c.env?.DB || !/^[a-z0-9]{3,12}$/.test(code)) return c.redirect('/', 302)
  const row = await c.env.DB.prepare('SELECT template, params FROM funnel_links WHERE code = ?').bind(code).first<{ template: string; params: string }>()
  if (!row) return c.redirect('/', 302)
  c.executionCtx?.waitUntil?.(c.env.DB.prepare('UPDATE funnel_links SET clicks = clicks + 1 WHERE code = ?').bind(code).run())
  return c.redirect(`/t/${row.template}${row.params ? '?' + row.params : ''}`, 302)
})

// ── Health Check ───────────────────────────────────────────────
app.get('/health', (c) => c.json({ status: 'ok', app: 'baddies-tax-os', version: '8.0.0' }))

// ── SEO Infrastructure — sitemap.xml + robots.txt ─────────────
const PAGES = ['/', '/tax', '/resolution', '/emails', '/compliance', '/builder', '/leads', '/credentials', '/bureau', '/brand', '/seo', '/integrations', '/agents', '/mailer', '/analytics', '/deploy', '/webinars', '/clients', '/verify', '/traffic', '/docs']
const FUNNELS = [...FUNNEL_SLUGS]

app.get('/sitemap.xml', (c) => {
  const base = new URL(c.req.url).origin
  const today = new Date().toISOString().slice(0, 10)
  const urls = [...PAGES, ...FUNNELS.map((f) => `/t/${f}`)]
    .map((p) => `  <url><loc>${base}${p}</loc><lastmod>${today}</lastmod><changefreq>weekly</changefreq><priority>${p === '/' ? '1.0' : p.startsWith('/t/') ? '0.9' : '0.7'}</priority></url>`)
    .join('\n')
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } })
})

app.get(`/${INDEXNOW_KEY}.txt`, (c) => c.text(INDEXNOW_KEY))

app.get('/robots.txt', (c) => {
  const base = new URL(c.req.url).origin
  return c.text(`User-agent: *\nAllow: /\n\nUser-agent: GPTBot\nAllow: /\nUser-agent: PerplexityBot\nAllow: /\nUser-agent: ClaudeBot\nAllow: /\n\nSitemap: ${base}/sitemap.xml\n`)
})

// ── Universal Thank-You Page ──────────────────────────────────
app.get('/thank-you', (c) => {
  const q = c.req.query()
  const name = q.headline || 'Tax Intake Received! \u{1F389}'
  const msg = q.msg || 'Your tax information has been securely transmitted. A credentialed tax professional from Baddies Tax Services™ will review your submission and contact you within one business day.'
  const back = q.back || '/'
  return html(`<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Tax Intake Received | Baddies Tax OS™</title><meta name="robots" content="noindex, nofollow">
<link rel="icon" type="image/svg+xml" href="/static/favicon.svg"><script src="https://cdn.tailwindcss.com"></script>
<link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@700;800&family=Inter:wght@400;500&display=swap" rel="stylesheet">
<style>body{font-family:Inter,sans-serif}h1{font-family:Poppins,sans-serif}</style></head>
<body class="bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-900 min-h-screen flex items-center justify-center p-6 text-white">
<main class="max-w-lg w-full text-center">
  <div class="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-2xl shadow-emerald-500/30"><i class="fas fa-check text-4xl"></i></div>
  <h1 class="text-4xl font-extrabold mb-4">${name.replace(/</g, '&lt;')}</h1>
  <p class="text-slate-300 leading-relaxed mb-8">${msg.replace(/</g, '&lt;')}</p>
  <div class="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8 text-left text-sm text-slate-300 space-y-3">
    <p class="font-bold text-white text-base"><i class="fas fa-list-check text-emerald-400 mr-2"></i>What Happens Next</p>
    <p><span class="text-emerald-400 font-bold mr-2">1.</span>Our credentialed preparers review your intake today.</p>
    <p><span class="text-emerald-400 font-bold mr-2">2.</span>You receive a secure upload link for your tax documents.</p>
    <p><span class="text-emerald-400 font-bold mr-2">3.</span>We review your eligible deductions and prepare your return.</p>
  </div>
  <a href="${back.replace(/"/g, '')}" class="inline-block bg-gradient-to-r from-emerald-600 to-emerald-500 font-bold px-8 py-3.5 rounded-xl hover:opacity-90 transition"><i class="fas fa-arrow-left mr-2"></i>Back to Command Center</a>
  <p class="text-slate-500 text-xs mt-10">&copy; ${new Date().getFullYear()} Baddies Tax Services LLC &middot; Powered by Baddies Tax OS™</p>
</main>
</body></html>`)
})

// ── Branded 404 & Error Page ──────────────────────────────────
const errorPage = (code: number, title: string, msg: string) => `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${code} — ${title} | Baddies Tax OS™</title><meta name="robots" content="noindex">
<link rel="icon" type="image/svg+xml" href="/static/favicon.svg"><script src="https://cdn.tailwindcss.com"></script>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@800&family=Inter:wght@400;500&display=swap" rel="stylesheet">
<style>body{font-family:Inter,sans-serif}h1,p.code{font-family:Poppins,sans-serif}</style></head>
<body class="bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-900 min-h-screen flex items-center justify-center p-6 text-white text-center">
<main><p class="code text-8xl font-extrabold bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent mb-4">${code}</p>
<h1 class="text-2xl font-extrabold mb-3">${title}</h1>
<p class="text-slate-400 mb-8 max-w-md mx-auto">${msg}</p>
<a href="/" class="inline-block bg-gradient-to-r from-emerald-600 to-emerald-500 font-bold px-8 py-3.5 rounded-xl hover:opacity-90 transition">← Return to Tax Command Center</a>
<p class="text-slate-600 text-xs mt-10">&copy; ${new Date().getFullYear()} Baddies Tax Services LLC · Baddies Tax OS™</p></main></body></html>`

app.notFound((c) => new Response(errorPage(404, 'Page Not Found', 'That route doesn\u2019t exist. Head back to the Baddies Tax Command Center.'), { status: 404, headers: { 'Content-Type': 'text/html; charset=utf-8' } }))
app.onError((err, c) => {
  console.error('Unhandled error:', err)
  return new Response(errorPage(500, 'System Error', 'Our technical team has been notified — please try again in a moment.'), { status: 500, headers: { 'Content-Type': 'text/html; charset=utf-8' } })
})

export default app
