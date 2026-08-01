import { shell } from './layout'

export const verifyPage = () => shell('Tax Office Safeguards & Verification', 'verify', `
<section id="verify-header" class="mb-8 text-center">
  <h1 class="text-3xl font-extrabold text-white mb-2"><i class="fas fa-check-double text-emerald-400 mr-2"></i>Tax Practice Launch Verification &amp; Audit</h1>
  <p class="text-gray-300 max-w-2xl mx-auto">Verify that PTINs, EFINs, WISP security plans, §7216 consent forms, and Circular 230 disclaimers are active before publishing marketing campaigns.</p>
</section>

<section id="verification-checklist" class="card p-6 max-w-4xl mx-auto space-y-4 text-xs">
  <div class="bg-[#060a14] p-4 rounded-xl border border-gray-800 flex items-center justify-between">
    <div>
      <p class="font-bold text-white text-sm">IRS PTIN Active Verification</p>
      <p class="text-gray-400">All assigned preparers have current PTIN numbers on file with IRS Directory.</p>
    </div>
    <span class="bg-emerald-500/20 text-emerald-400 font-bold px-3 py-1 rounded-lg"><i class="fas fa-check-circle mr-1"></i>Verified</span>
  </div>
  <div class="bg-[#060a14] p-4 rounded-xl border border-gray-800 flex items-center justify-between">
    <div>
      <p class="font-bold text-white text-sm">IRS EFIN Active Verification</p>
      <p class="text-gray-400">Master office holds active E-File Provider authorization summary.</p>
    </div>
    <span class="bg-emerald-500/20 text-emerald-400 font-bold px-3 py-1 rounded-lg"><i class="fas fa-check-circle mr-1"></i>Verified</span>
  </div>
  <div class="bg-[#060a14] p-4 rounded-xl border border-gray-800 flex items-center justify-between">
    <div>
      <p class="font-bold text-white text-sm">GLBA Safeguards WISP Plan</p>
      <p class="text-gray-400">Written Information Security Plan documented &amp; 256-bit encryption verified.</p>
    </div>
    <span class="bg-emerald-500/20 text-emerald-400 font-bold px-3 py-1 rounded-lg"><i class="fas fa-check-circle mr-1"></i>Verified</span>
  </div>
  <div class="bg-[#060a14] p-4 rounded-xl border border-gray-800 flex items-center justify-between">
    <div>
      <p class="font-bold text-white text-sm">IRC §7216 Data Disclosure Consent</p>
      <p class="text-gray-400">Client intake forms enforce mandatory consent prior to data processing.</p>
    </div>
    <span class="bg-emerald-500/20 text-emerald-400 font-bold px-3 py-1 rounded-lg"><i class="fas fa-check-circle mr-1"></i>Verified</span>
  </div>
</section>
`)
