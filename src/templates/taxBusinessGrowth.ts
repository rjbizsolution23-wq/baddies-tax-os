// Baddies Tax Services™ — Tax Pro Training & Service Bureau Recruitment Templates
import { taxIndividualTemplate } from './taxPreparation'

export const taxProTrainingTemplate = (q: Record<string, string | undefined>) => {
  const firmName = q.firmName || 'Baddies Tax Services Academy™'
  return taxIndividualTemplate({
    ...q,
    firmName,
    headline: 'Launch Your Own Tax Preparation Agency & Get PTIN / EFIN Ready',
    cta: 'Explore Tax Office Training & Software →'
  })
}

export const serviceBureauRecruitmentTemplate = (q: Record<string, string | undefined>) => {
  const firmName = q.firmName || 'Baddies Service Bureau Command™'
  return taxIndividualTemplate({
    ...q,
    firmName,
    headline: 'Scale Your Tax Offices with White-Label Tax Software, EFIN Partnering & Bank Products',
    cta: 'Apply for Service Bureau Partnership →'
  })
}
