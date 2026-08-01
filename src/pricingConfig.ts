// Administrative Pricing Configuration System for Baddies Tax OS™
export interface PricingPlan {
  id: string
  name: string
  badge?: string
  bestFor: string
  monthlyPrice: number
  annualPriceMonthlyEquivalent: number
  annualTotal: number
  setupFee: number
  ctaText: string
  ctaSubtext: string
  features: string[]
  limits: {
    brands: string
    offices: string
    users: string
    contacts: string
  }
}

export interface AddOn {
  id: string
  name: string
  priceDisplay: string
  description: string
  includedItems: string[]
}

export const DEFAULT_PRICING_PLANS: PricingPlan[] = [
  {
    id: 'launch',
    name: 'Baddies Launch',
    bestFor: 'New tax businesses and independent preparers building their first complete operating system.',
    monthlyPrice: 197,
    annualPriceMonthlyEquivalent: 164,
    annualTotal: 1970,
    setupFee: 497,
    ctaText: 'Launch My Tax Business',
    ctaSubtext: 'Start with the complete foundation.',
    limits: {
      brands: '1 Tax Brand',
      offices: '1 Office Location',
      users: '2 Internal Users',
      contacts: 'Up to 1,000 Active Contacts',
    },
    features: [
      'Taxpayer CRM',
      '10 Published Tax Funnels',
      'Tax Funnel Template Library',
      'Branded Client Intake Forms',
      'Basic Client Portal',
      'Appointment Scheduling & Zoom Sync',
      'Automated Email Sequences',
      'SMS Workflow Access',
      'Standard Preparation Pipeline',
      'Basic Tax Resolution Pipeline',
      'PTIN Reminder Tracking',
      'Basic Tax AI Agents',
      'Taxpayer Education Library',
      'Basic Performance Analytics',
      'Guided Platform Onboarding',
    ],
  },
  {
    id: 'growth',
    name: 'Baddies Growth',
    badge: 'MOST POPULAR',
    bestFor: 'Established tax professionals and growing firms needing automation, team workflows, and year-round growth.',
    monthlyPrice: 497,
    annualPriceMonthlyEquivalent: 414,
    annualTotal: 4970,
    setupFee: 1500,
    ctaText: 'Scale My Tax Firm',
    ctaSubtext: 'Build a tax business that runs beyond tax season.',
    limits: {
      brands: 'Up to 3 Tax Brands',
      offices: 'Up to 3 Office Locations',
      users: '10 Internal Users',
      contacts: 'Up to 10,000 Active Contacts',
    },
    features: [
      'Everything in Baddies Launch, plus:',
      'Unlimited Published Tax Funnels (Fair Use)',
      'Advanced Taxpayer CRM & Custom Fields',
      'Advanced Branded Client Portal & Domain',
      'Complete Tax Prep & Resolution Workflows',
      'Tax Advisory & Business Return Workflows',
      'Advanced Email & SMS Automation',
      'Zoom Webinar Workflows & Event Studio',
      'Returning-Client & Referral Campaigns',
      'Tax Education Academy & Staff Training',
      'Expanded Tax AI Workforce Library',
      'Team Assignments & Preparer Quality Review',
      'PTIN and EFIN Readiness Tracking',
      'Compliance Review Workflows',
      'Revenue & Practice Analytics Dashboard',
      'Priority Support & Quarterly Strategy Review',
    ],
  },
  {
    id: 'agency_pro',
    name: 'Baddies Agency Pro',
    bestFor: 'Multi-office tax firms, high-volume operations, tax educators, and multi-service agency owners.',
    monthlyPrice: 997,
    annualPriceMonthlyEquivalent: 830,
    annualTotal: 9970,
    setupFee: 3500,
    ctaText: 'Build My Tax Agency',
    ctaSubtext: 'Centralize every office, workflow, and growth channel.',
    limits: {
      brands: 'Up to 10 Tax Brands',
      offices: 'Up to 10 Office Locations',
      users: '30 Internal Users',
      contacts: 'Up to 50,000 Active Contacts',
    },
    features: [
      'Everything in Baddies Growth, plus:',
      'Multi-Office Executive Dashboards',
      'Office-Level Permissions & Lead Routing',
      'Advanced Preparer Workload Distribution',
      'Custom Workflow & SOP Builder',
      'Advanced Compliance Command & Audit Logs',
      'Marketing Approval Workflows',
      'Full Webinar Studio & Branded Reports',
      'Expanded AI Agent Chaining & Automation',
      'API & Webhook Integration Layer',
      'Dedicated Implementation Manager',
      'Monthly Strategic Operations Review',
      'Priority Escalation Technical Support',
    ],
  },
  {
    id: 'service_bureau',
    name: 'Baddies Service Bureau',
    bestFor: 'Service bureaus, software resellers, franchise-style tax networks, and multi-office partner networks.',
    monthlyPrice: 2497,
    annualPriceMonthlyEquivalent: 2080,
    annualTotal: 24970,
    setupFee: 7500,
    ctaText: 'Schedule Service Bureau Strategy Call',
    ctaSubtext: 'Pricing customized around your office network.',
    limits: {
      brands: 'Unlimited / Contract Based',
      offices: 'Unlimited / Contract Based',
      users: 'Unlimited / Contract Based',
      contacts: 'Unlimited / Contract Based',
    },
    features: [
      'Everything in Agency Pro, plus:',
      'Service Bureau Command Center',
      'Multi-Tenant Office Management & White-Labeling',
      'Office Recruitment Funnels & ERO Onboarding',
      'Preparer Onboarding & Software Provisioning',
      'Office Compliance & Credential Monitoring',
      'Test-Return Workflow & Launch Checklists',
      'Office Health Scores & Support Ticket System',
      'Revenue-Share & Commission Override Tracking',
      'Partner Performance Analytics & Role Hierarchy',
      'Dedicated Account Leadership & Custom SLA Options',
    ],
  },
]

export const OPTIONAL_ADD_ONS: AddOn[] = [
  {
    id: 'baddies_website',
    name: 'Baddies Tax Custom Website',
    priceDisplay: '$1,500 – $5,000 one time',
    description: 'Custom-designed, high-converting tax agency website integrated directly into Baddies Tax OS.',
    includedItems: ['Branded Tax Website', 'Core Service Pages', 'Appointment Sync', 'Client Portal Embed', 'SEO Setup'],
  },
  {
    id: 'dfy_funnel_pack',
    name: 'Done-For-You Funnel Pack',
    priceDisplay: '$1,000 – $3,500 one time',
    description: 'Custom conversion strategy, copywriting, intake forms, email/SMS sequences, and CRM pipeline mapping.',
    includedItems: ['Custom Conversion Strategy', 'Professional Copywriting', 'Form & CRM Wiring', 'Automated Email/SMS Sequences'],
  },
  {
    id: 'campaign_management',
    name: 'Tax Campaign Management',
    priceDisplay: 'Starting at $1,500 / mo',
    description: 'Monthly campaign planning, funnel optimization, email/SMS blasts, and conversion performance reporting.',
    includedItems: ['Monthly Campaign Execution', 'Copy & Creative Assets', 'A/B Testing', 'Performance Analytics'],
  },
  {
    id: 'custom_ai_agent',
    name: 'Custom Tax AI Agent',
    priceDisplay: '$1,500 setup + $197/mo',
    description: 'Tailored AI Agent built on your specific firm SOPs, knowledge base, and client communication tone.',
    includedItems: ['Custom Agent Instructions', 'Knowledge Base Ingestion', 'Workflow Triggering', 'Guardrail Testing'],
  },
  {
    id: 'compliance_configuration',
    name: 'Compliance System Setup',
    priceDisplay: 'Starting at $2,500 one time',
    description: 'Operational setup for IRC §7216 consent forms, GLBA WISP checklists, PTIN/EFIN tracking, and audit logging.',
    includedItems: ['IRC §7216 Form Integration', 'WISP Checklist Setup', 'Credential Alert System', 'Audit Log Configuration'],
  },
  {
    id: 'premium_onboarding',
    name: 'Premium Concierge Onboarding',
    priceDisplay: '$2,500 – $10,000 one time',
    description: 'Dedicated white-glove setup, data migration, staff training, domain setup, and live launch support.',
    includedItems: ['Dedicated Setup Engineer', 'Data Migration Support', 'Team Live Training', 'Launch Day Monitoring'],
  },
]
