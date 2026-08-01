// Baddies Tax DIY™ — Baddie Tax Guide™ AI Gateway & Boundary Enforcer
// Implements Master Directive Section 3 (Mandatory Product Boundary) and Section 8 (AI Tax Guide).

export interface AiTaxGuideResponse {
  answer: string
  taxYear: number
  jurisdiction: string
  sourceReference: string
  confidence: number
  recommendProReview: boolean
  disclaimer: string
}

export function answerTaxQuestionBounded(
  query: string,
  context: { taxYear?: number; jurisdiction?: string; facts?: Record<string, any> }
): AiTaxGuideResponse {
  const taxYear = context.taxYear || 2025
  const jurisdiction = context.jurisdiction || 'US-Federal'
  const qLower = query.toLowerCase()

  let answer = ''
  let sourceReference = 'IRS Publication 17 (2025 Tax Guide for Individuals)'
  let recommendProReview = false

  if (qLower.includes('w-2') || qLower.includes('w2') || qLower.includes('wages')) {
    answer = 'Box 1 on your W-2 contains your taxable wages, Box 2 contains your federal income tax withheld. Enter these exact values into the W-2 section.'
    sourceReference = 'IRS Form W-2 Instructions (2025)'
  } else if (qLower.includes('schedule c') || qLower.includes('self-employed') || qLower.includes('1099')) {
    answer = 'Schedule C reports income and expenses from a sole proprietorship. You can deduct ordinary and necessary business expenses. Net profit is subject to 15.3% self-employment tax.'
    sourceReference = 'IRS Publication 334 (Tax Guide for Small Business)'
    recommendProReview = true
  } else if (qLower.includes('child credit') || qLower.includes('ctc') || qLower.includes('eitc')) {
    answer = 'The Child Tax Credit provides up to $2,000 per qualifying child under age 17. The Earned Income Tax Credit (EITC) is a refundable credit for low-to-moderate-income working taxpayers.'
    sourceReference = 'IRS Publication 596 (Earned Income Credit)'
  } else if (qLower.includes('refund') || qLower.includes('guarantee')) {
    answer = 'Your estimated refund is calculated deterministically based on your entered income, deductions, and withholding. Baddies Tax DIY™ does not guarantee refunds or eligibility.'
    sourceReference = 'Baddies Tax DIY™ Boundary Policy (Section 3)'
  } else {
    answer = `For tax year ${taxYear}, ensure all source documents (W-2, 1099s) are uploaded and confirmed. Your final return liability is computed deterministically by the rules engine.`
  }

  return {
    answer,
    taxYear,
    jurisdiction,
    sourceReference,
    confidence: recommendProReview ? 0.88 : 0.98,
    recommendProReview,
    disclaimer: 'Notice: Baddie Tax Guide™ provides software explanations and general tax education. Final calculations are governed exclusively by the deterministic tax engine.',
  }
}
