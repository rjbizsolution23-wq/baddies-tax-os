// Baddies Tax DIY™ — Deterministic Tax Calculation Engine
// Rule Package: Tax Year 2025 / 2026
// System of Record for Form 1040, Schedules 1-3, Schedule A, B, C, D, E, SE, EITC, CTC, QBI.

export interface TaxPayerFacts {
  taxYear: number
  filingStatus: 'single' | 'mfj' | 'mfs' | 'hoh' | 'qw'
  age: number
  spouseAge?: number
  isBlind?: boolean
  spouseIsBlind?: boolean
  dependentsCount: number
  childrenUnder17Count: number
  
  // Income
  w2Wages: number
  w2FederalWithholding: number
  w2StateWithholding: number
  interestIncome: number
  dividendIncome: number
  capitalGainsNet: number
  scheduleCGrossIncome: number
  scheduleCExpenses: number
  rentalNetIncome: number
  
  // Adjustments & Deductions
  educatorExpenses: number
  studentLoanInterest: number
  hsaDeduction: number
  itemizedDeductionsTotal?: number // If > standard deduction
  
  // State
  stateCode?: string
}

export interface TaxCalculationResult {
  taxYear: number
  filingStatus: string
  grossIncome: number
  scheduleCNetProfit: number
  selfEmploymentTax: number
  seTaxDeduction: number
  adjustedGrossIncome: number
  standardDeduction: number
  itemizedDeduction: number
  allowableDeduction: number
  qbiDeduction: number
  taxableIncome: number
  tentativeTax: number
  childTaxCredit: number
  earnedIncomeCredit: number
  totalCredits: number
  taxAfterCredits: number
  totalPayments: number
  estimatedStateTax: number
  refundAmount: number
  balanceDue: number
  effectiveTaxRate: number
  marginalTaxRate: number
  complexityScore: number // 0..5
  calculationTrace: string[]
}

const STANDARD_DEDUCTIONS_2025: Record<string, number> = {
  single: 15000,
  mfs: 15000,
  mfj: 30000,
  qw: 30000,
  hoh: 22500,
}

export function calculateDeterministicTax(facts: TaxPayerFacts): TaxCalculationResult {
  const trace: string[] = []
  trace.push(`[TaxEngine 2025] Initializing calculation for filing status: ${facts.filingStatus.toUpperCase()}`)

  // 1. Schedule C & Self-Employment Tax
  const schCNet = Math.max(0, (facts.scheduleCGrossIncome || 0) - (facts.scheduleCExpenses || 0))
  let seTax = 0
  let seDeduction = 0

  if (schCNet >= 400) {
    const seTaxableIncome = schCNet * 0.9235
    const ssCap = 176100
    const ssTax = Math.min(seTaxableIncome, ssCap) * 0.124
    const medicareTax = seTaxableIncome * 0.029
    seTax = Math.round(ssTax + medicareTax)
    seDeduction = Math.round(seTax * 0.5)
    trace.push(`Schedule C Net Profit: $${schCNet}. SE Tax Calculated: $${seTax} (SE Deduction: $${seDeduction})`)
  }

  // 2. Gross Income & AGI
  const totalGrossIncome = (facts.w2Wages || 0) + 
                           (facts.interestIncome || 0) + 
                           (facts.dividendIncome || 0) + 
                           (facts.capitalGainsNet || 0) + 
                           schCNet + 
                           (facts.rentalNetIncome || 0)

  const totalAdjustments = seDeduction + 
                          Math.min(300, facts.educatorExpenses || 0) + 
                          Math.min(2500, facts.studentLoanInterest || 0) + 
                          (facts.hsaDeduction || 0)

  const agi = Math.max(0, totalGrossIncome - totalAdjustments)
  trace.push(`Total Gross Income: $${totalGrossIncome}. Total Above-The-Line Adjustments: $${totalAdjustments}. AGI: $${agi}`)

  // 3. Deductions
  let baseStd = STANDARD_DEDUCTIONS_2025[facts.filingStatus] || 15000
  if (facts.age >= 65) baseStd += (facts.filingStatus === 'single' || facts.filingStatus === 'hoh') ? 1600 : 1300
  if (facts.spouseAge && facts.spouseAge >= 65) baseStd += 1300

  const itemized = facts.itemizedDeductionsTotal || 0
  const allowableDeduction = Math.max(baseStd, itemized)
  trace.push(`Standard Deduction: $${baseStd}. Itemized Deduction: $${itemized}. Allowable Deduction: $${allowableDeduction}`)

  // 4. QBI Deduction (Sec 199A)
  let qbiDeduction = 0
  if (schCNet > 0 && agi > allowableDeduction) {
    const tentativeQBI = schCNet * 0.20
    const taxableBeforeQBI = agi - allowableDeduction
    qbiDeduction = Math.round(Math.min(tentativeQBI, taxableBeforeQBI * 0.20))
    trace.push(`QBI Deduction (Sec 199A): $${qbiDeduction}`)
  }

  // 5. Taxable Income
  const taxableIncome = Math.max(0, agi - allowableDeduction - qbiDeduction)
  trace.push(`Taxable Income: $${taxableIncome}`)

  // 6. Tentative Federal Income Tax Brackets (2025)
  let tentativeTax = 0
  let marginalRate = 0.10

  if (facts.filingStatus === 'mfj' || facts.filingStatus === 'qw') {
    if (taxableIncome <= 23850) { tentativeTax = taxableIncome * 0.10; marginalRate = 0.10 }
    else if (taxableIncome <= 96950) { tentativeTax = 2385 + (taxableIncome - 23850) * 0.12; marginalRate = 0.12 }
    else if (taxableIncome <= 206700) { tentativeTax = 11157 + (taxableIncome - 96950) * 0.22; marginalRate = 0.22 }
    else if (taxableIncome <= 394600) { tentativeTax = 35302 + (taxableIncome - 206700) * 0.24; marginalRate = 0.24 }
    else { tentativeTax = 80398 + (taxableIncome - 394600) * 0.32; marginalRate = 0.32 }
  } else if (facts.filingStatus === 'hoh') {
    if (taxableIncome <= 17000) { tentativeTax = taxableIncome * 0.10; marginalRate = 0.10 }
    else if (taxableIncome <= 64850) { tentativeTax = 1700 + (taxableIncome - 17000) * 0.12; marginalRate = 0.12 }
    else if (taxableIncome <= 103350) { tentativeTax = 7442 + (taxableIncome - 64850) * 0.22; marginalRate = 0.22 }
    else { tentativeTax = 15912 + (taxableIncome - 103350) * 0.24; marginalRate = 0.24 }
  } else {
    if (taxableIncome <= 11925) { tentativeTax = taxableIncome * 0.10; marginalRate = 0.10 }
    else if (taxableIncome <= 48475) { tentativeTax = 1192.5 + (taxableIncome - 11925) * 0.12; marginalRate = 0.12 }
    else if (taxableIncome <= 103350) { tentativeTax = 5578.5 + (taxableIncome - 48475) * 0.22; marginalRate = 0.22 }
    else if (taxableIncome <= 197300) { tentativeTax = 17651 + (taxableIncome - 103350) * 0.24; marginalRate = 0.24 }
    else { tentativeTax = 40199 + (taxableIncome - 197300) * 0.32; marginalRate = 0.32 }
  }

  tentativeTax = Math.round(tentativeTax + seTax)
  trace.push(`Tentative Income Tax + SE Tax: $${tentativeTax} (Marginal Rate: ${Math.round(marginalRate * 100)}%)`)

  // 7. Credits (Child Tax Credit & EITC)
  let childTaxCredit = 0
  if (facts.childrenUnder17Count > 0) {
    const rawCTC = facts.childrenUnder17Count * 2000
    const phaseoutThreshold = (facts.filingStatus === 'mfj') ? 400000 : 200000
    if (agi > phaseoutThreshold) {
      const excess = Math.ceil((agi - phaseoutThreshold) / 1000) * 50
      childTaxCredit = Math.max(0, rawCTC - excess)
    } else {
      childTaxCredit = rawCTC
    }
    trace.push(`Child Tax Credit (${facts.childrenUnder17Count} children): $${childTaxCredit}`)
  }

  let earnedIncomeCredit = 0
  const totalEarnedIncome = (facts.w2Wages || 0) + schCNet
  if (totalEarnedIncome > 0 && totalEarnedIncome < 60000 && facts.dependentsCount > 0) {
    if (facts.dependentsCount === 1) earnedIncomeCredit = Math.min(3990, Math.round(totalEarnedIncome * 0.34))
    else if (facts.dependentsCount === 2) earnedIncomeCredit = Math.min(6604, Math.round(totalEarnedIncome * 0.40))
    else earnedIncomeCredit = Math.min(7430, Math.round(totalEarnedIncome * 0.45))
    trace.push(`Earned Income Tax Credit (EITC): $${earnedIncomeCredit}`)
  }

  const totalCredits = childTaxCredit + earnedIncomeCredit
  const taxAfterCredits = Math.max(0, tentativeTax - totalCredits)

  // 8. Total Payments & Refund / Balance Due Calculation
  const totalPayments = (facts.w2FederalWithholding || 0) + (facts.w2StateWithholding || 0)
  const refundAmount = Math.max(0, totalPayments - taxAfterCredits)
  const balanceDue = Math.max(0, taxAfterCredits - totalPayments)

  const effectiveRate = totalGrossIncome > 0 ? Number(((taxAfterCredits / totalGrossIncome) * 100).toFixed(1)) : 0

  // 9. Complexity Level Evaluation (0..5)
  let complexity = 0
  if (schCNet > 0) complexity = 1
  if (facts.rentalNetIncome && facts.rentalNetIncome > 0) complexity = 2
  if (facts.itemizedDeductionsTotal && facts.itemizedDeductionsTotal > baseStd) complexity = 2
  if (facts.capitalGainsNet > 10000 || schCNet > 50000) complexity = 3

  trace.push(`Final Result -> Tax After Credits: $${taxAfterCredits}. Payments: $${totalPayments}. Refund: $${refundAmount}. Balance Due: $${balanceDue}`)

  return {
    taxYear: facts.taxYear || 2025,
    filingStatus: facts.filingStatus,
    grossIncome: totalGrossIncome,
    scheduleCNetProfit: schCNet,
    selfEmploymentTax: seTax,
    seTaxDeduction: seDeduction,
    adjustedGrossIncome: agi,
    standardDeduction: baseStd,
    itemizedDeduction: itemized,
    allowableDeduction,
    qbiDeduction,
    taxableIncome,
    tentativeTax,
    childTaxCredit,
    earnedIncomeCredit,
    totalCredits,
    taxAfterCredits,
    totalPayments,
    estimatedStateTax: Math.round(taxableIncome * 0.045), // Deterministic state estimate
    refundAmount,
    balanceDue,
    effectiveTaxRate: effectiveRate,
    marginalTaxRate: Math.round(marginalRate * 100),
    complexityScore: complexity,
    calculationTrace: trace
  }
}
