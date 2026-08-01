import { shell } from './layout'

export const docsPage = () => shell('Baddies Tax OS Documentation & SOPs', 'docs', `
<section id="docs-header" class="mb-8">
  <h1 class="text-3xl font-extrabold text-white mb-2"><i class="fas fa-book-bookmark text-emerald-400 mr-2"></i>Baddies Tax OS™ Platform Documentation &amp; SOP Vault</h1>
  <p class="text-gray-400 text-sm">Standard Operating Procedures, compliance checklists, intake guidelines, Circular 230 rules, and service bureau setup guides.</p>
</section>

<section id="sops-grid" class="grid md:grid-cols-2 gap-6 mb-12">
  <div class="card p-6">
    <h3 class="font-bold text-white text-base mb-2"><i class="fas fa-file-shield text-emerald-400 mr-2"></i>Tax Practice SOP 01: Taxpayer Intake &amp; §7216</h3>
    <p class="text-gray-400 text-xs mb-3">Step-by-step procedure for verifying taxpayer identity, obtaining mandatory §7216 consent before data collection, and securing Form W-2 / 1099 uploads in the digital vault.</p>
    <a href="/compliance" class="text-emerald-400 hover:underline text-xs font-bold">Read Full SOP →</a>
  </div>

  <div class="card p-6">
    <h3 class="font-bold text-white text-base mb-2"><i class="fas fa-scale-balanced text-emerald-400 mr-2"></i>Tax Practice SOP 02: Tax Resolution Case Intake</h3>
    <p class="text-gray-400 text-xs mb-3">SOP for receiving IRS notices (CP2000, CP504, LT11), executing Form 2848 Power of Attorney, pulling IRS transcripts, and conducting Form 433-A/F financial analysis.</p>
    <a href="/resolution" class="text-emerald-400 hover:underline text-xs font-bold">Read Full SOP →</a>
  </div>

  <div class="card p-6">
    <h3 class="font-bold text-white text-base mb-2"><i class="fas fa-building-user text-emerald-400 mr-2"></i>Tax Practice SOP 03: Service Bureau Branch Onboarding</h3>
    <p class="text-gray-400 text-xs mb-3">Onboarding guide for new branch tax offices: PTIN/EFIN credential verification, software seat provisioning, bank product setup, and rejection rate monitoring.</p>
    <a href="/bureau" class="text-emerald-400 hover:underline text-xs font-bold">Read Full SOP →</a>
  </div>

  <div class="card p-6">
    <h3 class="font-bold text-white text-base mb-2"><i class="fas fa-lock text-emerald-400 mr-2"></i>Tax Practice SOP 04: GLBA WISP Data Safeguards</h3>
    <p class="text-gray-400 text-xs mb-3">Gramm-Leach-Bliley Act Written Information Security Plan: password management, 256-bit encryption standards, MFA enforcement, and annual security access audits.</p>
    <a href="/credentials" class="text-emerald-400 hover:underline text-xs font-bold">Read Full SOP →</a>
  </div>
</section>
`)
