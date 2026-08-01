// Baddies Tax DIY™ — Filing Path Delivery Models & Upgrade State Manager

export type FilingPathId = 'diy_standard' | 'diy_ai_assist' | 'pro_review' | 'full_service_prep'

export interface FilingPathDefinition {
  id: FilingPathId
  name: string
  tagline: string
  federalPrice: number
  statePrice: number
  description: string
  features: string[]
  badge?: string
}

export const FILING_PATHS: Record<FilingPathId, FilingPathDefinition> = {
  diy_standard: {
    id: 'diy_standard',
    name: 'Baddies Tax DIY Free / Standard',
    tagline: 'Prepare independently with deterministic accuracy.',
    federalPrice: 49,
    statePrice: 39,
    description: 'Best for taxpayers with straightforward tax situations who want guided interviews and e-filing.',
    features: [
      'Guided 7-step adaptive tax interview',
      'W-2 & 1099 document OCR import',
      'Form 1040, Schedule 1-3, A, B, C, D, E, SE',
      'Child Tax Credit, EITC & QBI Sec 199A',
      '0-error MeF schema validation',
      'Direct federal & state e-file transmission',
    ],
  },
  diy_ai_assist: {
    id: 'diy_ai_assist',
    name: 'Baddies Tax DIY Plus AI Assist',
    tagline: 'Guided filing with plain-language AI explanations.',
    federalPrice: 99,
    statePrice: 49,
    badge: 'Popular for Self-Employed',
    description: 'Includes DIY Standard plus interactive Baddie Tax Guide™ AI assistance, document field extraction, and tax term explanations.',
    features: [
      'All DIY Standard features',
      'Baddie Tax Guide™ conversational assistant',
      'Document summarization & OCR verification',
      'Real-time deduction & credit explanations',
      'Missing document checklists',
      'Form & worksheet calculation breakdowns',
    ],
  },
  pro_review: {
    id: 'pro_review',
    name: 'Baddies Tax Pro Review™',
    tagline: 'Complete your interview, then a credentialed pro reviews your return.',
    federalPrice: 199,
    statePrice: 49,
    badge: 'Recommended for Schedule C',
    description: 'You enter your facts, then an Enrolled Agent (EA) or CPA performs a line-by-line due-diligence review before signing and filing.',
    features: [
      'All DIY Plus AI Assist features',
      'Dedicated CPA or Enrolled Agent assignment',
      'Line-by-line audit risk & credit due-diligence review',
      'Clarifying question workflow without data re-entry',
      'Professional sign-off & filing authorization',
      'Post-filing audit defense support',
    ],
  },
  full_service_prep: {
    id: 'full_service_prep',
    name: 'Full-Service Pro Prep™',
    tagline: 'Hand off your documents. A pro prepares your return from start to finish.',
    federalPrice: 349,
    statePrice: 69,
    badge: 'White-Glove Tax Service',
    description: 'Drop off W-2s, 1099s, and expenses. A credentialed tax professional handles full interview, preparation, review, and e-filing.',
    features: [
      'White-glove professional intake & preparation',
      '1-on-1 consultation session (phone or video)',
      'Complex Schedule C, rental, or multi-state handling',
      'Full preparer signature & responsibility',
      'Priority e-file submission queue',
      'Year-round tax planning guidance',
    ],
  },
}

export function evaluatePathUpgrade(currentFacts: Record<string, any>): {
  recommendedPath: FilingPathId
  reasons: string[]
} {
  const reasons: string[] = []
  if (currentFacts.hasScheduleC && (currentFacts.grossBusinessIncome || 0) > 50000) {
    reasons.push('Schedule C business income over $50,000 requires QBI & self-employment tax verification.')
  }
  if (currentFacts.hasCrypto || currentFacts.hasMultiState) {
    reasons.push('Digital asset transactions or multi-state residency detected.')
  }
  if (currentFacts.hasEitc || currentFacts.hasChildTaxCredit) {
    reasons.push('High-risk refundable credit subject to IRS Circular 230 due-diligence requirements.')
  }

  if (reasons.length >= 2) {
    return { recommendedPath: 'pro_review', reasons }
  } else if (reasons.length === 1) {
    return { recommendedPath: 'diy_ai_assist', reasons }
  }
  return { recommendedPath: 'diy_standard', reasons: ['Simple return eligible for standard DIY filing.'] }
}
