// Baddies Tax DIY™ — Complexity & Escalation Engine
// Evaluates taxpayer facts and returns Complexity Level 0..5 with escalation triggers.

export interface EscalationStatus {
  level: 0 | 1 | 2 | 3 | 4 | 5
  levelName: string
  recommendation: 'diy' | 'diy_ai_assist' | 'pro_review' | 'full_prep' | 'outside_scope'
  reasons: string[]
  mandatoryEscalation: boolean
}

export function evaluateReturnComplexity(facts: {
  scheduleCGrossIncome?: number
  hasRentalIncome?: boolean
  hasCryptoTransactions?: boolean
  hasMultiStateResidency?: boolean
  hasForeignAccounts?: boolean
  hasIrsNotice?: boolean
  hasMissingBasis?: boolean
}): EscalationStatus {
  const reasons: string[] = []
  let level: 0 | 1 | 2 | 3 | 4 | 5 = 0

  if (facts.scheduleCGrossIncome && facts.scheduleCGrossIncome > 0) {
    level = Math.max(level, 1) as any
    reasons.push('Schedule C Self-Employment Income detected (QBI & SE Tax eligible)')
  }

  if (facts.hasCryptoTransactions) {
    level = Math.max(level, 2) as any
    reasons.push('Digital Asset / Cryptocurrency transactions require cost basis verification')
  }

  if (facts.hasRentalIncome) {
    level = Math.max(level, 2) as any
    reasons.push('Schedule E Rental Property Income requires depreciation schedule review')
  }

  if (facts.hasMultiStateResidency) {
    level = Math.max(level, 3) as any
    reasons.push('Multi-State Residency income allocation required')
  }

  if (facts.hasIrsNotice) {
    level = Math.max(level, 4) as any
    reasons.push('Active IRS Notice or Audit inquiry requires Enrolled Agent or CPA review')
  }

  if (facts.hasForeignAccounts) {
    level = Math.max(level, 4) as any
    reasons.push('Foreign Bank & Financial Accounts (FBAR / Form 8938) reporting needed')
  }

  const levelNames: Record<number, string> = {
    0: 'Level 0 — DIY Suitable',
    1: 'Level 1 — AI Guided Filing',
    2: 'Level 2 — Recommended Pro Review',
    3: 'Level 3 — Mandatory Professional Review',
    4: 'Level 4 — Specialist Enrolled Agent / CPA Required',
    5: 'Level 5 — Outside Supported Platform Scope',
  }

  const recommendations: Record<number, 'diy' | 'diy_ai_assist' | 'pro_review' | 'full_prep' | 'outside_scope'> = {
    0: 'diy',
    1: 'diy_ai_assist',
    2: 'pro_review',
    3: 'pro_review',
    4: 'full_prep',
    5: 'outside_scope',
  }

  return {
    level,
    levelName: levelNames[level] || 'Level 0 — DIY Suitable',
    recommendation: recommendations[level] || 'diy',
    reasons,
    mandatoryEscalation: level >= 3
  }
}
