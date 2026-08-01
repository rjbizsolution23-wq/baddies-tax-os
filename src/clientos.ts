// Baddies Tax OS™ — Taxpayer CRM & Case Operations Engine
// Baddies Tax Services™ — The Complete Tax Agency-in-a-Box Operating System

export type ClientOsEnv = { DB?: any }

// Controlled lifecycle stages
export const LIFECYCLE_STAGES = [
  'lead', 'contacted', 'consultation_scheduled', 'consultation_completed',
  'intake_sent', 'intake_completed', 'docs_requested', 'docs_received',
  'preparation_started', 'preparer_review', 'quality_review', 'client_review',
  'signature_pending', 'payment_pending', 'transmitted', 'accepted', 'rejected',
  'case_open', 'investigation', 'strategy_proposed', 'irs_submission', 'resolution_reached',
  'active_taxpayer', 'recurring_advisory', 'referral_partner', 'office_active',
  'inactive', 'lost', 'do_not_contact',
] as const

// Brand / Operating Center Registry
export const BRANDS: Record<string, { name: string; icon: string; color: string }> = {
  tax_prep:      { name: 'Baddies Tax Preparation',      icon: 'fa-file-invoice-dollar', color: '#10b981' },
  tax_resolution:{ name: 'Baddies Tax Resolution',       icon: 'fa-scale-balanced',       color: '#d4a72c' },
  tax_advisory:  { name: 'Baddies Business Tax Advisory',icon: 'fa-chart-pie',            color: '#047857' },
  service_bureau:{ name: 'Baddies Service Bureau Command',icon: 'fa-building-user',       color: '#f59e0b' },
}

// Tax Pipelines
export const PIPELINES: Record<string, { name: string; brand: string; stages: string[] }> = {
  tax_lead: {
    name: 'Tax Lead Pipeline', brand: 'tax_prep',
    stages: ['New Tax Lead', 'Contact Attempted', 'Consultation Scheduled', 'Consultation Completed', 'Qualified', 'Engagement Sent', 'Engagement Signed', 'Intake Started', 'Documents Requested', 'Documents Received', 'Ready for Preparation', 'Closed Lost'],
  },
  tax_prep: {
    name: 'Tax Preparation Operations', brand: 'tax_prep',
    stages: ['Engagement Signed', 'Intake Pending', 'Documents Pending', 'Documents Under Review', 'Preparation Started', 'Questions Outstanding', 'Preparer Review', 'Quality Review', 'Client Review', 'Signature Pending', 'Payment Pending', 'Ready to File', 'Transmitted', 'Accepted', 'Rejected / Correction', 'Completed'],
  },
  tax_resolution: {
    name: 'Tax Resolution Case Center', brand: 'tax_resolution',
    stages: ['New Resolution Case', 'Initial Evaluation', 'Authorization Pending (Form 2848)', 'Transcripts Requested', 'Compliance Investigation', 'Financial Analysis (Form 433-A/F)', 'Resolution Strategy Drafted', 'Client Approval', 'Submitted to IRS / State', 'Agency Review', 'Negotiation', 'Resolution Reached', 'Payment Plan Active', 'Case Closed'],
  },
  tax_advisory: {
    name: 'Business Tax Advisory', brand: 'tax_advisory',
    stages: ['Advisory Lead', 'Discovery Call', 'Financial Data Received', 'Entity & Tax Projection Review', 'Strategy Proposal', 'Advisor Review', 'Client Presentation', 'Implementation Active', 'Quarterly Review', 'Annual Renewal'],
  },
  service_bureau: {
    name: 'Service Bureau & Office Management', brand: 'service_bureau',
    stages: ['Prospect Office', 'Demo Scheduled', 'Application Submitted', 'Credential Verification (PTIN/EFIN)', 'Software Provisioned', 'Training Completed', 'Test Return Approved', 'Active Tax Office', 'At Risk / Audit', 'Offboarded'],
  },
}

// Funnel slug -> Pipeline mapping
export const FUNNEL_PIPELINE: Record<string, string> = {
  'tax-individual': 'tax_prep',
  'tax-self-employed': 'tax_prep',
  'tax-business': 'tax_advisory',
  'tax-resolution': 'tax_resolution',
  'tax-irs-notice': 'tax_resolution',
  'tax-pro-training': 'service_bureau',
  'service-bureau-recruitment': 'service_bureau',
  'tax-referral-partner': 'tax_lead',
  'tax-retention-renewal': 'tax_prep',
}

export const pipelineForFunnel = (funnel: string | undefined): string => {
  if (!funnel) return 'tax_prep'
  if (funnel.includes('resolution') || funnel.includes('notice') || funnel.includes('back-tax')) return 'tax_resolution'
  if (funnel.includes('business') || funnel.includes('s-corp') || funnel.includes('advisory')) return 'tax_advisory'
  if (funnel.includes('bureau') || funnel.includes('pro') || funnel.includes('office') || funnel.includes('efin')) return 'service_bureau'
  return FUNNEL_PIPELINE[funnel] || 'tax_prep'
}

// Health Factors for Taxpayers & Offices
export const HEALTH_FACTORS = [
  { key: 'intake',       label: 'Tax Intake Completion',     weight: 20 },
  { key: 'documents',    label: 'Document Upload Readiness',  weight: 20 },
  { key: 'credentials',  label: 'Credential Verification',    weight: 20 },
  { key: 'signatures',   label: 'E-Signatures Completed',    weight: 20 },
  { key: 'payments',     label: 'Invoice Payment Status',    weight: 20 },
]

export const healthBand = (score: number) => {
  if (score >= 80) return { label: 'Good Standing', color: 'emerald', text: 'text-emerald-400', bg: 'bg-emerald-500/20' }
  if (score >= 50) return { label: 'Action Required', color: 'amber', text: 'text-amber-400', bg: 'bg-amber-500/20' }
  return { label: 'At Risk', color: 'rose', text: 'text-rose-400', bg: 'bg-rose-500/20' }
}

export const computeHealth = (client: any): { score: number; details: Record<string, number> } => {
  let score = 50
  const details: Record<string, number> = {}
  if (client.consent_email && client.consent_sms) score += 10
  if (client.lifecycle_stage === 'active_taxpayer' || client.lifecycle_stage === 'accepted') score += 20
  if (client.risk_flags && client.risk_flags.length > 0) score -= 20
  score = Math.max(0, Math.min(100, score))
  return { score, details }
}

export const logActivity = async (env: ClientOsEnv, clientId: number, kind: string, subject: string, body = '', actor = 'system') => {
  try {
    await env.DB?.prepare('INSERT INTO activities (client_id, kind, subject, body, actor) VALUES (?,?,?,?,?)')
      .bind(clientId, kind, subject.slice(0, 200), body.slice(0, 1000), actor).run()
  } catch { /* never fails */ }
}

export const convertLeadToClient = async (env: ClientOsEnv, lead: any): Promise<{ clientId: number; oppId?: number }> => {
  if (!env.DB) return { clientId: 0 }
  const pipeKey = pipelineForFunnel(lead.funnel)
  const pipe = PIPELINES[pipeKey] || PIPELINES.tax_prep
  const firstStage = pipe.stages[0]

  const cleanEmail = (lead.email || '').trim().toLowerCase()
  let existing = await env.DB.prepare('SELECT id FROM clients WHERE email = ? AND email != ""').bind(cleanEmail).first<{ id: number }>()

  let clientId = existing?.id
  if (!clientId) {
    const res = await env.DB.prepare(`
      INSERT INTO clients (first_name, last_name, email, phone, lead_source, funnel, brand, lifecycle_stage, lead_id)
      VALUES (?,?,?,?,?,?,?,?,?)
    `).bind(
      lead.name || 'Taxpayer Lead', '', cleanEmail || null, lead.phone || null,
      lead.source || 'funnel', lead.funnel || 'tax-individual', pipe.brand, 'lead', lead.id || null
    ).run()
    clientId = res.meta.last_row_id as number
  }

  const oppRes = await env.DB.prepare(`
    INSERT INTO opportunities (client_id, pipeline, stage, title, value, owner)
    VALUES (?,?,?,?,?,?)
  `).bind(clientId, pipeKey, firstStage, `Tax Return — ${lead.name || cleanEmail || 'New Lead'}`, 350, 'Unassigned').run()

  await logActivity(env, clientId, 'system', `Captured tax lead via ${lead.funnel || 'funnel'}`, `Pipeline: ${pipe.name}`)
  return { clientId, oppId: oppRes.meta.last_row_id as number }
}
