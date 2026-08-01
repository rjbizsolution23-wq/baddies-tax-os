// Baddies Tax Services™ — Funnel Template Registry

import { taxIndividualTemplate, taxSelfEmployedTemplate } from './templates/taxPreparation'
import { businessTaxTemplate } from './templates/businessTax'
import { taxResolutionTemplate, taxIrsNoticeTemplate } from './templates/taxResolution'
import { taxProTrainingTemplate, serviceBureauRecruitmentTemplate } from './templates/taxBusinessGrowth'
import { taxReferralPartnerTemplate, taxRetentionRenewalTemplate } from './templates/taxReferrals'

export const TEMPLATES: Record<string, (q: Record<string, string | undefined>) => string> = {
  'tax-individual': taxIndividualTemplate,
  'tax-self-employed': taxSelfEmployedTemplate,
  'tax-business': businessTaxTemplate,
  'tax-resolution': taxResolutionTemplate,
  'tax-irs-notice': taxIrsNoticeTemplate,
  'tax-pro-training': taxProTrainingTemplate,
  'service-bureau-recruitment': serviceBureauRecruitmentTemplate,
  'tax-referral-partner': taxReferralPartnerTemplate,
  'tax-retention-renewal': taxRetentionRenewalTemplate,
  'tax-concierge': taxIndividualTemplate,
  'tax-itin': taxIndividualTemplate,
  'tax-expat': taxIndividualTemplate,
  'tax-amended': taxIndividualTemplate,
  'tax-extension': taxIndividualTemplate,
  'tax-virtual': taxIndividualTemplate,
}
