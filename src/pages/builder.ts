import { shell } from './layout'

export const builderPage = () => shell('Tax Funnel Studio', 'builder', `
<section id="builder-header" class="mb-8 text-center">
  <h1 class="text-3xl md:text-4xl font-extrabold text-white mb-2"><i class="fas fa-filter text-emerald-400 mr-2"></i>Tax Funnel Studio</h1>
  <p class="text-gray-300 max-w-2xl mx-auto">Select a tax-specific playbook, configure firm credentials (PTIN/EFIN), customize intake questions, set disclaimers, and publish live in seconds.</p>
</section>

<section id="funnel-wizard" class="grid md:grid-cols-3 gap-6 mb-12">
  <div class="card p-6 md:col-span-1">
    <h2 class="text-lg font-bold text-white mb-4"><i class="fas fa-sliders text-emerald-400 mr-2"></i>Funnel Configuration</h2>
    <form class="space-y-4 text-xs">
      <div>
        <label class="block font-semibold text-gray-300 mb-1">Select Tax Funnel Playbook</label>
        <select id="select-funnel" class="w-full bg-[#060a14] border border-gray-700 rounded-lg p-2.5 text-white">
          <option value="tax-individual">Individual 1040 Preparation</option>
          <option value="tax-self-employed">Self-Employed / Schedule C Filing</option>
          <option value="tax-business">Business Tax &amp; S-Corp Advisory</option>
          <option value="tax-resolution">IRS Tax Resolution Evaluation</option>
          <option value="tax-irs-notice">IRS Notice / Audit Review</option>
          <option value="tax-pro-training">Tax Pro Training &amp; PTIN Readiness</option>
          <option value="service-bureau-recruitment">Service Bureau Recruitment</option>
          <option value="tax-referral-partner">Referral Partner Network</option>
          <option value="tax-retention-renewal">Client Retention &amp; Renewal</option>
        </select>
      </div>
      <div>
        <label class="block font-semibold text-gray-300 mb-1">Tax Practice / Firm Name</label>
        <input type="text" id="input-firm" value="Baddies Tax Services™" class="w-full bg-[#060a14] border border-gray-700 rounded-lg p-2.5 text-white">
      </div>
      <div>
        <label class="block font-semibold text-gray-300 mb-1">Primary Phone Number</label>
        <input type="text" id="input-phone" value="(404) 555-0199" class="w-full bg-[#060a14] border border-gray-700 rounded-lg p-2.5 text-white">
      </div>
      <div>
        <label class="block font-semibold text-gray-300 mb-1">Primary CTA Button Label</label>
        <input type="text" id="input-cta" value="Start Your Secure Tax Intake →" class="w-full bg-[#060a14] border border-gray-700 rounded-lg p-2.5 text-white">
      </div>
      <div>
        <label class="block font-semibold text-gray-300 mb-1">Compliance Disclaimers</label>
        <div class="space-y-1 text-gray-400">
          <label class="flex items-center gap-2"><input type="checkbox" checked disabled> Circular 230 Notice</label>
          <label class="flex items-center gap-2"><input type="checkbox" checked disabled> IRC §7216 Consent</label>
          <label class="flex items-center gap-2"><input type="checkbox" checked disabled> TCPA Opt-In</label>
        </div>
      </div>
    </form>
  </div>

  <div class="card p-6 md:col-span-2">
    <div class="flex items-center justify-between mb-4">
      <h2 class="text-lg font-bold text-white"><i class="fas fa-desktop text-emerald-400 mr-2"></i>Live Funnel Preview</h2>
      <a id="preview-link" href="/t/tax-individual" target="_blank" class="text-xs bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-3 py-1.5 rounded-lg"><i class="fas fa-arrow-up-right-from-square mr-1"></i>Open Full Page</a>
    </div>
    <div class="border border-gray-800 rounded-xl overflow-hidden bg-[#060a14] h-[450px] relative flex items-center justify-center text-center p-8">
      <iframe id="preview-frame" src="/t/tax-individual" class="w-full h-full border-0"></iframe>
    </div>
  </div>
</section>
`)
