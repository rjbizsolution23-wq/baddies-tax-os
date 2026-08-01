// Baddies Tax DIY™ — IRC §7216 Consent & GLBA WISP Audit Engine
// Implements Master Directive Section 22 (Section 7216) and Section 25 (Audit Logging).

export interface TaxpayerConsent {
  id: string
  taxpayerId: string
  consentType: '7216_preparation_use' | '7216_pro_review_disclosure' | 'marketing_opt_in'
  consentText: string
  granted: boolean
  grantedAt: string
  ipAddress: string
  version: string
}

export function generate7216ConsentPayload(taxpayerName: string, purpose: string): string {
  return `PURSUANT TO SECTION 7216 OF THE INTERNAL REVENUE CODE (26 U.S.C. §7216) AND TREAS. REG. §301.7216-3, YOU HEREBY AUTHORIZE BADDIES TAX SERVICES LLC TO USE AND/OR DISCLOSE YOUR TAX RETURN INFORMATION FOR TAX YEAR 2025 SOLELY FOR THE PURPOSE OF: ${purpose.toUpperCase()}. THIS CONSENT IS AFFIRMATIVE, VOLUNTARY, AND DATED ${new Date().toLocaleDateString('en-US')}.`
}

export function logAuditEvent(event: {
  actor: string
  action: string
  resource: string
  ip: string
  details?: Record<string, any>
}): void {
  console.log(`[AUDIT_LOG] ${new Date().toISOString()} | Actor: ${event.actor} | Action: ${event.action} | Resource: ${event.resource} | IP: ${event.ip}`)
}
