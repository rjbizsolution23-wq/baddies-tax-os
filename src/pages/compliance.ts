import { shell, copyBlock } from './layout'

export const compliancePage = () => shell('Tax Compliance Command', 'compliance', `
<section id="compliance-header" class="mb-8">
  <h1 class="text-3xl md:text-4xl font-extrabold text-white mb-3"><i class="fas fa-shield-halved text-emerald-400 mr-2"></i>Tax Compliance Command Center</h1>
  <p class="text-gray-300 max-w-3xl">Regulatory compliance engines protecting tax practices against IRS Circular 230 violations, IRC §7216 data disclosure penalties, GLBA Safeguards Rule data breaches, TCPA SMS claims, and FTC deceptive marketing rules.</p>
</section>

<section id="regulatory-frameworks" class="grid md:grid-cols-2 gap-6 mb-12">
  <div class="card p-6">
    <div class="flex items-center gap-3 mb-3">
      <div class="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold"><i class="fas fa-scale-unbalanced-flip text-xl"></i></div>
      <div>
        <h2 class="font-bold text-white text-base">IRS Circular 230 (§10.30)</h2>
        <p class="text-xs text-gray-500">Practitioner Conduct &amp; Advertising Standards</p>
      </div>
    </div>
    <p class="text-gray-300 text-xs leading-relaxed mb-3">Prohibits false, deceptive, or misleading advertising by tax practitioners. Bars guaranteed refunds, fake IRS affiliations, and unverified claim statements. All advertising records must be retained for at least 36 months.</p>
    <div class="bg-[#060a14] p-3 rounded-lg text-[11px] text-emerald-400 font-mono"><i class="fas fa-check-circle mr-1"></i> Automated Circular 230 Claims Scanner Active</div>
  </div>

  <div class="card p-6">
    <div class="flex items-center gap-3 mb-3">
      <div class="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold"><i class="fas fa-user-shield text-xl"></i></div>
      <div>
        <h2 class="font-bold text-white text-base">IRC §7216 &amp; Reg. §301.7216</h2>
        <p class="text-xs text-gray-500">Tax Return Information Use &amp; Disclosure</p>
      </div>
    </div>
    <p class="text-gray-300 text-xs leading-relaxed mb-3">Makes it a federal misdemeanor for tax return preparers to disclose or use client tax information for marketing or non-tax purposes without explicit, signed §7216 consent specifying exact data and purpose.</p>
    <div class="bg-[#060a14] p-3 rounded-lg text-[11px] text-emerald-400 font-mono"><i class="fas fa-check-circle mr-1"></i> §7216 Consent Form Verification Active</div>
  </div>

  <div class="card p-6">
    <div class="flex items-center gap-3 mb-3">
      <div class="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold"><i class="fas fa-vault text-xl"></i></div>
      <div>
        <h2 class="font-bold text-white text-base">GLBA Safeguards Rule &amp; WISP</h2>
        <p class="text-xs text-gray-500">Gramm-Leach-Bliley Act Financial Security</p>
      </div>
    </div>
    <p class="text-gray-300 text-xs leading-relaxed mb-3">Mandates a Written Information Security Plan (WISP), 256-bit encryption for stored and transmitted taxpayer data, multi-factor authentication (MFA), and annual access audits.</p>
    <div class="bg-[#060a14] p-3 rounded-lg text-[11px] text-emerald-400 font-mono"><i class="fas fa-check-circle mr-1"></i> WISP Documented &amp; Encryption Active</div>
  </div>

  <div class="card p-6">
    <div class="flex items-center gap-3 mb-3">
      <div class="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold"><i class="fas fa-comment-slash text-xl"></i></div>
      <div>
        <h2 class="font-bold text-white text-base">TCPA &amp; CAN-SPAM Rules</h2>
        <p class="text-xs text-gray-500">SMS &amp; Email Marketing Consent Controls</p>
      </div>
    </div>
    <p class="text-gray-300 text-xs leading-relaxed mb-3">Requires prior express written consent for SMS intake reminders, quiet-hours enforcement, honor of STOP/UNSUBSCRIBE keywords, and suppression list maintenance.</p>
    <div class="bg-[#060a14] p-3 rounded-lg text-[11px] text-emerald-400 font-mono"><i class="fas fa-check-circle mr-1"></i> Opt-Out &amp; Quiet Hours Enforcement Active</div>
  </div>
</section>

<section id="disclaimer-library" class="mb-12">
  <h2 class="text-2xl font-bold text-white mb-4"><i class="fas fa-file-contract text-emerald-400 mr-2"></i>Mandatory Tax Disclaimer Library</h2>
  <div class="grid md:grid-cols-2 gap-4">
  ${copyBlock('oic-disclaimer', 'Offer in Compromise (OIC) Mandatory Disclaimer', `An Offer in Compromise (OIC) is an IRS program allowing qualifying taxpayers to settle tax debt for less than the full amount owed. Acceptance is determined solely by the IRS based on gross income, necessary living expenses, asset equity, and overall ability to pay. Historical IRS acceptance rates range between 33%–42%. Baddies Tax Services™ does not guarantee OIC qualification or specific settlement amounts without first conducting a full IRS transcript and financial analysis.`)}
  ${copyBlock('general-tax-disclaimer', 'General Tax Practice & Outcome Disclaimer', `Tax preparation fees and client results depend on the complexity of return schedules, completeness of taxpayer documentation, and applicable federal and state tax codes. Past client outcomes do not guarantee future results. Baddies Tax Services™ is a private tax preparation and representation firm and is not affiliated with or endorsed by the Internal Revenue Service or any government agency.`)}
  </div>
</section>
`)
