import { shell } from './layout'

export const passportPage = () => shell('PTIN / EFIN Credential Center', 'credentials', `
<section id="passport-header" class="mb-8">
  <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
    <div>
      <h1 class="text-3xl font-extrabold text-white"><i class="fas fa-id-card text-emerald-400 mr-2"></i>PTIN / EFIN Credential Command Center</h1>
      <p class="text-gray-400 text-sm">Centralized tracking for IRS Preparer Tax Identification Numbers (PTIN), Electronic Filing Identification Numbers (EFIN), Enrolled Agent (EA) credentials, CPAs, and State Registrations.</p>
    </div>
    <a href="/verify" class="grad-bg text-white text-xs font-bold px-4 py-2.5 rounded-xl"><i class="fas fa-user-check mr-1"></i>Verify Credential Status</a>
  </div>
</section>

<section id="credential-metrics" class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 text-xs font-semibold text-center">
  <div class="card p-4 border-emerald-500/30">
    <p class="text-gray-400 uppercase text-[10px] mb-1">Active PTINs</p>
    <p class="text-2xl font-bold text-emerald-400">12 Active</p>
  </div>
  <div class="card p-4 border-emerald-500/30">
    <p class="text-gray-400 uppercase text-[10px] mb-1">Office EFINs</p>
    <p class="text-2xl font-bold text-emerald-400">4 Active</p>
  </div>
  <div class="card p-4 border-emerald-500/30">
    <p class="text-gray-400 uppercase text-[10px] mb-1">Credentialed EAs/CPAs</p>
    <p class="text-2xl font-bold text-amber-400">6 Active</p>
  </div>
  <div class="card p-4 border-emerald-500/30">
    <p class="text-gray-400 uppercase text-[10px] mb-1">Upcoming Renewals</p>
    <p class="text-2xl font-bold text-emerald-400">0 Expiring</p>
  </div>
</section>

<section id="credentials-table" class="card p-6">
  <h2 class="text-lg font-bold text-white mb-4"><i class="fas fa-shield-halved text-emerald-400 mr-2"></i>Active Professional Credentials</h2>
  <div class="overflow-x-auto text-xs">
    <table class="w-full text-left border-collapse">
      <thead>
        <tr class="border-b border-gray-800 text-gray-400 uppercase text-[10px]">
          <th class="py-3 px-2">Professional Name</th>
          <th class="py-3 px-2">Credential Type</th>
          <th class="py-3 px-2">Identifier (Masked)</th>
          <th class="py-3 px-2">Jurisdiction</th>
          <th class="py-3 px-2">Expiration Date</th>
          <th class="py-3 px-2">Status</th>
          <th class="py-3 px-2 text-right">Verification</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-800/60 text-gray-300">
        <tr>
          <td class="py-3 px-2 font-bold text-white">Rick Jefferson</td>
          <td class="py-3 px-2">PTIN (Preparer)</td>
          <td class="py-3 px-2 font-mono">PXXXX8921</td>
          <td class="py-3 px-2">Federal (IRS)</td>
          <td class="py-3 px-2">Dec 31, 2026</td>
          <td class="py-3 px-2"><span class="bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded font-semibold">Active</span></td>
          <td class="py-3 px-2 text-right text-emerald-400 font-bold"><i class="fas fa-check-circle mr-1"></i>Verified</td>
        </tr>
        <tr>
          <td class="py-3 px-2 font-bold text-white">Baddies Tax Services HQ</td>
          <td class="py-3 px-2">EFIN (E-File Authority)</td>
          <td class="py-3 px-2 font-mono">XX-XXX891</td>
          <td class="py-3 px-2">Federal (IRS)</td>
          <td class="py-3 px-2">Dec 31, 2027</td>
          <td class="py-3 px-2"><span class="bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded font-semibold">Active</span></td>
          <td class="py-3 px-2 text-right text-emerald-400 font-bold"><i class="fas fa-check-circle mr-1"></i>Verified</td>
        </tr>
        <tr>
          <td class="py-3 px-2 font-bold text-white">Elena Rodriguez</td>
          <td class="py-3 px-2">Enrolled Agent (EA)</td>
          <td class="py-3 px-2 font-mono">EA-00129481</td>
          <td class="py-3 px-2">Federal (IRS Dept of Treasury)</td>
          <td class="py-3 px-2">May 14, 2028</td>
          <td class="py-3 px-2"><span class="bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded font-semibold">Active</span></td>
          <td class="py-3 px-2 text-right text-emerald-400 font-bold"><i class="fas fa-check-circle mr-1"></i>Verified</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>
`)
