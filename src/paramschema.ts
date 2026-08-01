// Baddies Tax Services™ — Tax Funnel Parameter Schemas

export type ParamDef = { name: string; default: string }

export const FUNNEL_PARAMS: Record<string, ParamDef[]> = {
  "tax-individual": [
    { name: "firmName", default: "Baddies Tax Services™" },
    { name: "phone", default: "(404) 555-0199" },
    { name: "headline", default: "File Your 2025 Tax Return Accurately, Securely & Maximize Your Legal Refund" },
    { name: "cta", default: "Start Your Secure Tax Intake →" }
  ],
  "tax-self-employed": [
    { name: "firmName", default: "Baddies Tax Services™" },
    { name: "phone", default: "(404) 555-0199" },
    { name: "headline", default: "Schedule C & Self-Employed Tax Filing — Keep More of What You Earn" },
    { name: "cta", default: "Start Schedule C Intake →" }
  ],
  "tax-business": [
    { name: "firmName", default: "Baddies Tax Services™" },
    { name: "phone", default: "(404) 555-0199" },
    { name: "headline", default: "S-Corp, Partnership & LLC Tax Preparation — Year-Round Tax Planning for Business Owners" },
    { name: "cta", default: "Schedule Your Business Tax Review →" }
  ],
  "tax-resolution": [
    { name: "firmName", default: "Baddies Tax Services™" },
    { name: "phone", default: "(404) 555-0199" },
    { name: "headline", default: "Owe Back Taxes or Received an IRS Notice? Explore Your Real Legal Resolution Options" },
    { name: "cta", default: "Get Your Confidential Case Evaluation →" }
  ],
  "tax-irs-notice": [
    { name: "firmName", default: "Baddies Tax Services™" },
    { name: "phone", default: "(404) 555-0199" },
    { name: "headline", default: "Received an IRS Notice or CP504 Letter? Understand Your 30-Day Window to Respond" },
    { name: "cta", default: "Request IRS Notice Review →" }
  ],
  "tax-pro-training": [
    { name: "firmName", default: "Baddies Tax Services Academy™" },
    { name: "phone", default: "(404) 555-0199" },
    { name: "headline", default: "Launch Your Own Tax Preparation Agency & Get PTIN / EFIN Ready" },
    { name: "cta", default: "Explore Tax Office Training →" }
  ],
  "service-bureau-recruitment": [
    { name: "firmName", default: "Baddies Service Bureau Command™" },
    { name: "phone", default: "(404) 555-0199" },
    { name: "headline", default: "Scale Your Tax Offices with White-Label Tax Software, EFIN Partnering & Bank Products" },
    { name: "cta", default: "Apply for Service Bureau Partnership →" }
  ],
  "tax-referral-partner": [
    { name: "firmName", default: "Baddies Tax Services Partner Network™" },
    { name: "phone", default: "(404) 555-0199" },
    { name: "headline", default: "Referral Partner Network for Bookkeepers, Realtors, Attorneys & Financial Coaches" },
    { name: "cta", default: "Become a Compliant Tax Referral Partner →" }
  ],
  "tax-retention-renewal": [
    { name: "firmName", default: "Baddies Tax Services Client Portal™" },
    { name: "phone", default: "(404) 555-0199" },
    { name: "headline", default: "Welcome Back! Lock In Your Early Tax Season Spot & Update Your 2025 Filing Info" },
    { name: "cta", default: "Re-Activate Your Taxpayer Intake →" }
  ],
}

export const COMMON_PARAMS: ParamDef[] = [
  { name: 'seoTitle', default: 'Baddies Tax Services™' },
  { name: 'seoDesc', default: 'Baddies Tax OS™ Tax Agency-in-a-Box Platform' },
  { name: 'seoKeywords', default: 'tax preparation, IRS tax resolution, S-Corp filing, PTIN, EFIN' },
  { name: 'cta', default: 'Start Your Tax Intake →' },
  { name: 'theme', default: 'dark' },
  { name: 'brandColor', default: '#10b981' },
]

const ALLOWED: Record<string, Set<string>> = {}
export const allowedParams = (slug: string): Set<string> => {
  if (!ALLOWED[slug]) ALLOWED[slug] = new Set([...(FUNNEL_PARAMS[slug] || []), ...COMMON_PARAMS].map((p) => p.name))
  return ALLOWED[slug]
}
