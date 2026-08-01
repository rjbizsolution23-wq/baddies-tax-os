import { shell } from './layout'

export const clientsPage = () => shell('Baddies Client Tax Portal & Operations', 'clients', `
<section id="portal-header" class="mb-8">
  <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
    <div>
      <h1 class="text-3xl font-extrabold text-white"><i class="fas fa-address-card text-emerald-400 mr-2"></i>Baddies Tax Client Portal &amp; Operations</h1>
      <p class="text-gray-400 text-sm">Secure taxpayer document hub, intake status tracking, Form 2848 authorization, e-signatures, and payment management.</p>
    </div>
    <a href="/t/tax-individual" target="_blank" class="grad-bg text-white text-xs font-bold px-4 py-2.5 rounded-xl"><i class="fas fa-arrow-up-right-from-square mr-1"></i>Open Taxpayer Intake Link</a>
  </div>
</section>

<section id="client-features" class="grid md:grid-cols-3 gap-6 mb-12">
  <div class="card p-6">
    <div class="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xl mb-3"><i class="fas fa-vault"></i></div>
    <h3 class="font-bold text-white text-base mb-2">Secure Document Vault</h3>
    <p class="text-gray-400 text-xs leading-relaxed">Taxpayers upload W-2s, 1099-NEC, 1099-MISC, K-1s, Schedule C expense receipts, and government IDs with 256-bit encryption.</p>
  </div>
  <div class="card p-6">
    <div class="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xl mb-3"><i class="fas fa-signature"></i></div>
    <h3 class="font-bold text-white text-base mb-2">E-Signatures &amp; Form 8879</h3>
    <p class="text-gray-400 text-xs leading-relaxed">Taxpayers review their completed 1040/1120-S summary, sign IRS Form 8879 e-file authorization, and pay preparation fees securely.</p>
  </div>
  <div class="card p-6">
    <div class="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xl mb-3"><i class="fas fa-signal"></i></div>
    <h3 class="font-bold text-white text-base mb-2">Live Filing Status Tracker</h3>
    <p class="text-gray-400 text-xs leading-relaxed">Taxpayers see real-time updates: Intake Submitted → In Preparation → Quality Review → Transmitted → IRS Accepted.</p>
  </div>
</section>

<section id="active-taxpayer-cases" class="card p-6">
  <h2 class="text-lg font-bold text-white mb-4"><i class="fas fa-folder-open text-emerald-400 mr-2"></i>Active Taxpayer Portals</h2>
  <div class="space-y-4 text-xs">
    <div class="bg-[#060a14] p-4 rounded-xl border border-gray-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
      <div>
        <div class="flex items-center gap-2 mb-1">
          <span class="font-bold text-white text-sm">Marcus Vance</span>
          <span class="bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded text-[10px] font-semibold">2025 Schedule C Return</span>
        </div>
        <p class="text-gray-400">Intake Progress: 100% · Documents: 4 Received · Form 8879: E-Signed</p>
      </div>
      <div class="flex items-center gap-2">
        <span class="bg-emerald-500/20 text-emerald-400 px-3 py-1.5 rounded-lg font-bold"><i class="fas fa-check-circle mr-1"></i>IRS Accepted</span>
        <button class="bg-gray-800 hover:bg-gray-700 text-gray-200 px-3 py-1.5 rounded-lg">View Taxpayer Copy PDF</button>
      </div>
    </div>
    <div class="bg-[#060a14] p-4 rounded-xl border border-gray-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
      <div>
        <div class="flex items-center gap-2 mb-1">
          <span class="font-bold text-white text-sm">Elena Rodriguez</span>
          <span class="bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded text-[10px] font-semibold">2025 S-Corp Return (1120-S)</span>
        </div>
        <p class="text-gray-400">Intake Progress: 85% · Documents: P&amp;L Needed · Form 8879: Pending Signature</p>
      </div>
      <div class="flex items-center gap-2">
        <span class="bg-amber-500/20 text-amber-400 px-3 py-1.5 rounded-lg font-bold"><i class="fas fa-clock mr-1"></i>In Quality Review</span>
        <button class="bg-emerald-600 hover:bg-emerald-500 text-white px-3 py-1.5 rounded-lg font-bold">Request Signature</button>
      </div>
    </div>
  </div>
</section>
`)
