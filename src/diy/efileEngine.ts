// Baddies Tax DIY™ — E-File & Form 8879 Authorization Engine
// Validates MeF XML business rules, captures Form 8879 signatures, and queues e-file transmissions.

export interface EFileSubmissionPackage {
  returnCode: string
  taxYear: number
  taxpayerName: string
  ssnMasked: string
  mefXmlHash: string
  signatureMethod: 'form_8879_pin' | 'biometric_esign'
  ipAddress: string
  signedAt: string
  federalStatus: 'queued' | 'transmitted' | 'accepted' | 'rejected'
  stateStatus: 'queued' | 'transmitted' | 'accepted' | 'rejected'
}

export function generateMeFXmlHash(returnCode: string, taxData: any): string {
  const payload = `${returnCode}:${taxData.agi}:${taxData.taxableIncome}:${taxData.totalPayments}:${Date.now()}`
  let hash = 0
  for (let i = 0; i < payload.length; i++) {
    const char = payload.charCodeAt(i)
    hash = (hash << 5) - hash + char
    hash |= 0
  }
  return 'MEF-' + Math.abs(hash).toString(16).toUpperCase() + '-2025'
}

export function validateMeFBusinessRules(taxData: any): { valid: boolean; errors: string[] } {
  const errors: string[] = []

  if (!taxData.filingStatus) errors.push('ERR-MEF-001: Filing status is required.')
  if (taxData.grossIncome < 0) errors.push('ERR-MEF-002: Total gross income cannot be negative.')
  if (taxData.totalPayments < 0) errors.push('ERR-MEF-003: Tax withholding or payments cannot be negative.')
  if (taxData.scheduleCNetProfit > 0 && taxData.selfEmploymentTax === 0) errors.push('ERR-MEF-004: Self-employment tax calculation required for Schedule C net profit.')

  return {
    valid: errors.length === 0,
    errors
  }
}
