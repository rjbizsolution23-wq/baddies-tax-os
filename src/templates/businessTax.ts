// Baddies Tax Services™ — Business Tax Advisory & Entity Filing Templates
import { taxIndividualTemplate } from './taxPreparation'

export const businessTaxTemplate = (q: Record<string, string | undefined>) => {
  const firmName = q.firmName || 'Baddies Tax Services™'
  return taxIndividualTemplate({
    ...q,
    firmName,
    headline: 'S-Corp, Partnership & LLC Tax Preparation — Year-Round Tax Planning for Business Owners',
    cta: 'Schedule Your Business Tax Review →'
  })
}
