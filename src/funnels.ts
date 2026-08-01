// Baddies Tax Services™ — Single Source of Truth for Tax Funnel Slugs

export const FUNNEL_SLUGS = [
  'tax-individual',
  'tax-self-employed',
  'tax-business',
  'tax-resolution',
  'tax-irs-notice',
  'tax-pro-training',
  'service-bureau-recruitment',
  'tax-referral-partner',
  'tax-retention-renewal',
  'tax-concierge',
  'tax-itin',
  'tax-expat',
  'tax-amended',
  'tax-extension',
  'tax-virtual'
] as const

export type FunnelSlug = typeof FUNNEL_SLUGS[number]
export const isFunnelSlug = (s: string): s is FunnelSlug => (FUNNEL_SLUGS as readonly string[]).includes(s)

// Brand sites / Flagship tax offices — blueprint-authored copy is canonical
export const BRAND_SITE_SLUGS = new Set<string>([
  'tax-individual',
  'tax-business',
  'tax-resolution',
  'service-bureau-recruitment',
])
