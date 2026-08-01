// Baddies Tax Services™ — Referral Partner & Retention Funnel Templates
import { taxIndividualTemplate } from './taxPreparation'

export const taxReferralPartnerTemplate = (q: Record<string, string | undefined>) => {
  const firmName = q.firmName || 'Baddies Tax Services Partner Network™'
  return taxIndividualTemplate({
    ...q,
    firmName,
    headline: 'Referral Partner Network for Bookkeepers, Realtors, Attorneys & Financial Coaches',
    cta: 'Become a Compliant Tax Referral Partner →'
  })
}

export const taxRetentionRenewalTemplate = (q: Record<string, string | undefined>) => {
  const firmName = q.firmName || 'Baddies Tax Services Client Portal™'
  return taxIndividualTemplate({
    ...q,
    firmName,
    headline: 'Welcome Back! Lock In Your Early Tax Season Spot & Update Your 2025 Filing Info',
    cta: 'Re-Activate Your Taxpayer Intake →'
  })
}
