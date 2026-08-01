// Baddies Tax Services™ — Centralized Design System Tokens
// Baddies Tax OS™ Branding Protocol

export const BADDIES_TAX_TOKENS = {
  brandName: 'Baddies Tax Services™',
  appTitle: 'Baddies Tax OS™',
  tagline: 'The Complete Tax Agency-in-a-Box Operating System',
  slogan: 'Turn tax-season demand into organized, compliant, year-round revenue.',
  
  colors: {
    // Primary Brand Palette
    gold: '#D4A72C',
    goldLight: '#F4CE65',
    goldDark: '#9A781C',
    emerald: '#10B981',
    emeraldDark: '#047857',
    emeraldLight: '#34D399',
    
    // Neutrals
    navyDeep: '#050B16',
    navyDark: '#0A1628',
    cardBg: '#0D1B30',
    cardBorder: 'rgba(30, 58, 138, 0.45)',
    cardHoverBorder: '#10B981',
    
    // Status
    success: '#10B981',
    warning: '#F59E0B',
    danger: '#EF4444',
    info: '#3B82F6',
    
    // Text
    textPrimary: '#FFFFFF',
    textSecondary: '#E5E7EB',
    textMuted: '#9CA3AF',
    textDark: '#0F172A',
  },
  
  typography: {
    headingFont: "'Space Grotesk', 'Poppins', sans-serif",
    bodyFont: "'Inter', sans-serif",
    monoFont: "'Space Grotesk', monospace",
  },
  
  legal: {
    copyrightHolder: 'Baddies Tax Services LLC',
    poweredBy: 'Powered by Baddies Tax OS™',
    address: '100 Tax Command Way, Suite 500, Atlanta, GA 30303',
    disclaimer: 'Baddies Tax OS™ provides tax business workflow, intake, compliance, and decision-support technology. System tools do not replace professional judgment. Licensed Enrolled Agents, CPAs, Attorneys, and EROs remain responsible for return accuracy, credential maintenance, and compliance with IRS Circular 230, IRC §7216, GLBA, TCPA, and state advertising rules.'
  }
} as const;

export type BaddiesTaxTokens = typeof BADDIES_TAX_TOKENS;
