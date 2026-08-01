import { shell } from './layout'

export const emailsPage = () => shell('Tax Email Campaign Vault', 'emails', `
<section id="emails-header" class="mb-8">
  <h1 class="text-3xl font-extrabold text-white mb-2"><i class="fas fa-envelope text-emerald-400 mr-2"></i>Tax Email Campaign Vault</h1>
  <p class="text-gray-400 text-sm">Automated email sequences for tax preparation intake, IRS notice evaluations, missing document follow-ups, Form 8879 signature requests, and year-round tax planning.</p>
</section>

<section id="tax-email-sequences" class="grid md:grid-cols-2 gap-6 mb-12">
  <div class="card p-6">
    <div class="flex items-center justify-between mb-3">
      <h3 class="font-bold text-white text-base"><i class="fas fa-file-invoice-dollar text-emerald-400 mr-2"></i>Tax Prep Intake Sequence (7 Touches)</h3>
      <span class="bg-emerald-500/20 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded">Active</span>
    </div>
    <p class="text-gray-400 text-xs mb-4">Triggers when a taxpayer submits the initial web form. Guides them through document upload, W-2/1099 checklist, and appointment scheduling.</p>
    <div class="space-y-2 text-xs border-t border-gray-800 pt-3">
      <p class="text-gray-300 font-semibold">Touch 1: Welcome to Baddies Tax Services™ + Secure Upload Link</p>
      <p class="text-gray-300 font-semibold">Touch 2: What Documents Do You Need to File Your 2025 Return?</p>
      <p class="text-gray-300 font-semibold">Touch 3: Missing Document Alert &amp; Intake Checklist Reminder</p>
      <p class="text-gray-300 font-semibold">Touch 4: Your Return is Ready for Review &amp; Signature (Form 8879)</p>
    </div>
  </div>

  <div class="card p-6">
    <div class="flex items-center justify-between mb-3">
      <h3 class="font-bold text-white text-base"><i class="fas fa-scale-balanced text-amber-400 mr-2"></i>IRS Notice &amp; Back Tax Nurture (6 Touches)</h3>
      <span class="bg-amber-500/20 text-amber-400 text-[10px] font-bold px-2 py-0.5 rounded">Active</span>
    </div>
    <p class="text-gray-400 text-xs mb-4">Triggers when a taxpayer requests an IRS notice evaluation. Educates on IRS Fresh Start programs, installment plans, OIC eligibility, and Form 2848 authorization.</p>
    <div class="space-y-2 text-xs border-t border-gray-800 pt-3">
      <p class="text-gray-300 font-semibold">Touch 1: Received an IRS Letter? Here is What to Do First</p>
      <p class="text-gray-300 font-semibold">Touch 2: Understanding Your IRS Options: Installment Plans vs OIC</p>
      <p class="text-gray-300 font-semibold">Touch 3: Form 2848 Power of Attorney — Why It Protects You</p>
      <p class="text-gray-300 font-semibold">Touch 4: Next Steps for Your Confidential Transcript Analysis</p>
    </div>
  </div>
</section>
`)
