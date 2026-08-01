// Baddies Tax DIY™ — Document Intelligence & OCR Field Extractor
// Parses tax forms (W-2, 1099-NEC, 1099-MISC, 1098-T) and extracts facts for user confirmation.

export interface ParsedDocumentResult {
  docType: 'w2' | '1099_nec' | '1099_misc' | '1098_t' | 'ssa_1099'
  fileName: string
  confidenceScore: number
  extractedFields: Record<string, { label: string; value: string | number; lowConfidence?: boolean }>
  confirmationRequired: boolean
}

export function parseTaxDocumentMock(fileName: string, fileContentText?: string): ParsedDocumentResult {
  const nameLower = fileName.toLowerCase()

  if (nameLower.includes('w2') || nameLower.includes('w-2')) {
    return {
      docType: 'w2',
      fileName,
      confidenceScore: 0.98,
      extractedFields: {
        ein: { label: 'Employer EIN (Box b)', value: '12-3456789' },
        employerName: { label: 'Employer Name (Box c)', value: 'Acme Technology Corp' },
        wages: { label: 'Wages, tips, other comp (Box 1)', value: 68500 },
        federalWithholding: { label: 'Federal income tax withheld (Box 2)', value: 7420 },
        ssWages: { label: 'Social Security wages (Box 3)', value: 68500 },
        ssWithholding: { label: 'Social Security tax withheld (Box 4)', value: 4247 },
        medicareWages: { label: 'Medicare wages (Box 5)', value: 68500 },
        medicareWithholding: { label: 'Medicare tax withheld (Box 6)', value: 993 },
      },
      confirmationRequired: false
    }
  }

  if (nameLower.includes('1099nec') || nameLower.includes('1099-nec') || nameLower.includes('1099')) {
    return {
      docType: '1099_nec',
      fileName,
      confidenceScore: 0.92,
      extractedFields: {
        payerTin: { label: 'Payer TIN', value: '98-7654321' },
        payerName: { label: 'Payer Name', value: 'Baddies Digital Agency LLC' },
        nonemployeeCompensation: { label: 'Nonemployee compensation (Box 1)', value: 14200 },
        federalWithholding: { label: 'Federal income tax withheld (Box 4)', value: 0 },
      },
      confirmationRequired: true // Low-confidence flag requires explicit user verification
    }
  }

  // Default fallback for general W-2 or document
  return {
    docType: 'w2',
    fileName,
    confidenceScore: 0.95,
    extractedFields: {
      ein: { label: 'Employer EIN', value: '11-2233445' },
      employerName: { label: 'Employer Name', value: 'Enterprise Solutions LLC' },
      wages: { label: 'Wages & Compensation (Box 1)', value: 54000 },
      federalWithholding: { label: 'Federal Withholding (Box 2)', value: 5800 },
    },
    confirmationRequired: false
  }
}
