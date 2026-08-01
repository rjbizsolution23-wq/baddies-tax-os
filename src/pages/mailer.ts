import { shell } from './layout'

export const mailerPage = () => shell('Tax Mail Command & Dispatch', 'mailer', `
<section id="mailer-header" class="mb-8">
  <h1 class="text-3xl font-extrabold text-white mb-2"><i class="fas fa-paper-plane text-emerald-400 mr-2"></i>Tax Mail Command &amp; Dispatch</h1>
  <p class="text-gray-400 text-sm">Send tax-season reminders, document upload requests, and seasonal updates directly to taxpayers with IRC §7216 consent controls.</p>
</section>

<section id="mailer-form" class="card p-6 max-w-2xl mx-auto text-xs space-y-4">
  <h2 class="text-base font-bold text-white mb-2"><i class="fas fa-paper-plane text-emerald-400 mr-2"></i>Compose Taxpayer Broadcast</h2>
  <div>
    <label class="block font-semibold text-gray-300 mb-1">Target Segment</label>
    <select class="w-full bg-[#060a14] border border-gray-700 rounded-lg p-2.5 text-white">
      <option value="all">All Active Taxpayers (With §7216 Consent)</option>
      <option value="prep">2025 Tax Prep Pending Intake</option>
      <option value="docs">Taxpayers Missing Documents (W-2 / 1099)</option>
      <option value="resolution">IRS Notice &amp; Back Tax Clients</option>
      <option value="bureau">Service Bureau Office Owners</option>
    </select>
  </div>
  <div>
    <label class="block font-semibold text-gray-300 mb-1">Email Subject Line</label>
    <input type="text" value="Important Update Regarding Your 2025 Tax Filing Intake" class="w-full bg-[#060a14] border border-gray-700 rounded-lg p-2.5 text-white">
  </div>
  <div>
    <label class="block font-semibold text-gray-300 mb-1">Email Body Content</label>
    <textarea rows="6" class="w-full bg-[#060a14] border border-gray-700 rounded-lg p-2.5 text-white">Hi {{first_name}},

This is a friendly reminder from Baddies Tax Services™ regarding your 2025 tax return preparation. 

Please log into your secure taxpayer portal to upload your remaining W-2s, 1099s, and Schedule C records so our credentialed preparers can finalize your return.

Log In To Secure Portal: {{portal_link}}

Thank you,
Baddies Tax Services™ Team
support@baddiestax.com</textarea>
  </div>
  <button class="w-full grad-bg text-white font-bold py-3 rounded-xl hover:opacity-90">Dispatch Campaign →</button>
</section>
`)
