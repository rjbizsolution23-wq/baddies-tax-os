import { shell, copyBlock } from './layout'

export const taxPage = () => shell('Tax Prep Operations Center', 'tax', `
<section id="tax-hero" class="mb-10">
  <h1 class="text-3xl md:text-4xl font-extrabold text-white mb-3"><i class="fas fa-file-invoice-dollar text-emerald-400 mr-2"></i>Tax Preparation Operations Center</h1>
  <p class="text-gray-300 max-w-3xl">Comprehensive tax return workflows for individual filers, self-employed contractors, S-Corporations, partnerships, and high-net-worth clients. Encoded with Circular 230, IRC §7216, GLBA Safeguards, TCPA, and state tax advertising rules.</p>
</section>

<section id="tax-templates" class="grid md:grid-cols-2 gap-4 mb-12">
  <a href="/t/tax-individual" target="_blank" class="card p-6 block group">
    <h2 class="font-bold text-white mb-1 group-hover:text-emerald-400"><i class="fas fa-window-maximize text-emerald-400 mr-2"></i>Individual Tax Preparation Funnel <i class="fas fa-arrow-up-right-from-square text-xs text-gray-500"></i></h2>
    <p class="text-gray-400 text-sm">Full 1040 client acquisition funnel with encrypted document intake checklist, PTIN/EFIN authority badges, TCPA consent mechanisms, and direct SMS filing updates. Customize in <a href="/builder" class="text-emerald-400 underline">Tax Funnel Studio</a>.</p>
  </a>
  <div class="card p-6">
    <h2 class="font-bold text-white mb-3"><i class="fas fa-sitemap text-emerald-400 mr-2"></i>Core Tax Preparation Categories</h2>
    <ul class="text-sm text-gray-300 space-y-2">
      <li><span class="text-white font-semibold">1. Individual 1040 Filing</span> — Standard, Itemized, Earned Income Credit, Child Tax Credit</li>
      <li><span class="text-white font-semibold">2. Self-Employed / Schedule C</span> — Gig workers, creators, contractors, rideshare drivers</li>
      <li><span class="text-white font-semibold">3. Business Returns (1120-S, 1065)</span> — S-Corps, LLCs, Partnerships, Reasonable Comp</li>
      <li><span class="text-white font-semibold">4. Premium Concierge &amp; Expat</span> — High-net-worth, multi-state, ITIN assistance, foreign income</li>
      <li><span class="text-white font-semibold">5. Drop-Off &amp; Virtual Preparation</span> — Remote document upload, e-signatures, direct deposit</li>
    </ul>
  </div>
</section>

<section id="compliant-copy" class="mb-12">
  <h2 class="text-2xl font-bold text-white mb-4"><i class="fas fa-check-double text-emerald-400 mr-2"></i>Compliance-Aware Copy Formulas</h2>
  <div class="grid md:grid-cols-2 gap-4">
  ${copyBlock('tax-headlines', 'Compliant Headline Formulas', `PAIN-BASED:
"Need Your 2025 Taxes Prepared Accurately & On Time? Here's What to Do."
"Behind on Filing Your Returns? Get Caught Up Without the Stress."

OUTCOME-BASED (Disclaimed):
"Maximized Eligible Deductions for [City] Business Owners" [Results vary based on taxpayer records.]
"Accurate, Certified Preparation for Self-Employed & W-2 Filers"

AUTHORITY-BASED:
"Work Directly With an IRS PTIN & EFIN Credentialed Tax Professional"
"Baddies Tax Services™: Certified Preparation & Secure Digital Intake"`)}
  ${copyBlock('tax-ctas', 'Approved Calls to Action', `✅ APPROVED CTAs:
"Start Your Secure Tax Intake →"
"Schedule Your 15-Minute Tax Review →"
"Upload Your Tax Documents Securely →"
"Request Your Business Tax Consultation →"

❌ PROHIBITED CTAs (Never Use):
"Guaranteed Maximum Refund!"
"Get Your Tax Check Today!"
"IRS Certified Tax Professional" (This exact title does not exist)`)}
  </div>
</section>

<section id="pre-launch-checklist" class="card p-6">
  <h2 class="text-xl font-bold text-white mb-4"><i class="fas fa-clipboard-check text-emerald-400 mr-2"></i>Tax Office Pre-Launch Compliance Checklist</h2>
  <ul class="grid md:grid-cols-2 gap-2 text-sm text-gray-300">
    ${[
      'PTIN active and renewed for the current filing year',
      'EFIN active and verified in IRS e-file portal',
      'IRC §7216 consent forms active before sharing data with third parties',
      'Written Information Security Plan (WISP) documented for GLBA Safeguards Rule',
      'TCPA express written consent checkboxes active on all web forms',
      'All marketing disclaimers reviewed against Circular 230 guidelines',
      'Secure 256-bit SSL/TLS active for all document upload links',
      'Record retention system active to store filings and client authorizations for 3+ years',
    ].map(i => `<li><i class="fas fa-square-check text-emerald-400 mr-2"></i>${i}</li>`).join('')}
  </ul>
</section>
`)
