import { shell } from './layout'

export const leadsPage = () => shell('Taxpayer CRM & Intake Pipeline', 'leads', `
<section id="leads-header" class="mb-8">
  <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
    <div>
      <h1 class="text-3xl font-extrabold text-white"><i class="fas fa-users-gear text-emerald-400 mr-2"></i>Taxpayer CRM &amp; Lead Command</h1>
      <p class="text-gray-400 text-sm">Every taxpayer contact, intake response, document status, and filing pipeline stage in one place.</p>
    </div>
    <div class="flex items-center gap-2">
      <a href="/api/leads/export" class="bg-gray-800 hover:bg-gray-700 text-gray-200 text-xs font-semibold px-4 py-2 rounded-xl border border-gray-700"><i class="fas fa-download mr-1"></i>Export CSV</a>
      <a href="/clients" class="grad-bg text-white text-xs font-bold px-4 py-2 rounded-xl"><i class="fas fa-plus mr-1"></i>New Taxpayer Intake</a>
    </div>
  </div>
</section>

<section id="tax-pipeline-stages" class="grid grid-cols-2 md:grid-cols-6 gap-3 mb-8 text-xs font-semibold text-center">
  <div class="card p-3 border-emerald-500/30">
    <p class="text-gray-400 uppercase text-[10px] mb-1">New Tax Lead</p>
    <p class="text-2xl font-bold text-white">24</p>
  </div>
  <div class="card p-3 border-emerald-500/30">
    <p class="text-gray-400 uppercase text-[10px] mb-1">Intake Sent</p>
    <p class="text-2xl font-bold text-emerald-400">18</p>
  </div>
  <div class="card p-3 border-emerald-500/30">
    <p class="text-gray-400 uppercase text-[10px] mb-1">Docs Uploaded</p>
    <p class="text-2xl font-bold text-amber-400">12</p>
  </div>
  <div class="card p-3 border-emerald-500/30">
    <p class="text-gray-400 uppercase text-[10px] mb-1">In Preparation</p>
    <p class="text-2xl font-bold text-blue-400">15</p>
  </div>
  <div class="card p-3 border-emerald-500/30">
    <p class="text-gray-400 uppercase text-[10px] mb-1">Pending E-Sign</p>
    <p class="text-2xl font-bold text-purple-400">8</p>
  </div>
  <div class="card p-3 border-emerald-500/30">
    <p class="text-gray-400 uppercase text-[10px] mb-1">Accepted / Filed</p>
    <p class="text-2xl font-bold text-emerald-400">142</p>
  </div>
</section>

<section id="taxpayers-list" class="card p-6">
  <h2 class="text-lg font-bold text-white mb-4"><i class="fas fa-list text-emerald-400 mr-2"></i>Recent Taxpayer Contacts</h2>
  <div class="overflow-x-auto text-xs">
    <table class="w-full text-left border-collapse">
      <thead>
        <tr class="border-b border-gray-800 text-gray-400 uppercase text-[10px]">
          <th class="py-3 px-2">Taxpayer Name</th>
          <th class="py-3 px-2">Filing Type</th>
          <th class="py-3 px-2">Contact</th>
          <th class="py-3 px-2">Intake Status</th>
          <th class="py-3 px-2">Document Status</th>
          <th class="py-3 px-2">Assigned Preparer</th>
          <th class="py-3 px-2 text-right">Actions</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-800/60 text-gray-300">
        <tr>
          <td class="py-3 px-2 font-bold text-white">Marcus Vance</td>
          <td class="py-3 px-2">Schedule C / Self-Employed</td>
          <td class="py-3 px-2">marcus@example.com<br><span class="text-gray-500">(404) 555-0182</span></td>
          <td class="py-3 px-2"><span class="bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded font-semibold">Completed</span></td>
          <td class="py-3 px-2"><span class="bg-amber-500/20 text-amber-400 px-2 py-0.5 rounded font-semibold">W-2 &amp; 1099 Uploaded</span></td>
          <td class="py-3 px-2">Rick Jefferson (PTIN Verified)</td>
          <td class="py-3 px-2 text-right"><a href="/clients" class="text-emerald-400 hover:underline font-bold">View Profile →</a></td>
        </tr>
        <tr>
          <td class="py-3 px-2 font-bold text-white">Elena Rodriguez</td>
          <td class="py-3 px-2">S-Corporation (1120-S)</td>
          <td class="py-3 px-2">elena@example.com<br><span class="text-gray-500">(305) 555-0144</span></td>
          <td class="py-3 px-2"><span class="bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded font-semibold">In Review</span></td>
          <td class="py-3 px-2"><span class="bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded font-semibold">K-1 &amp; P&amp;L Complete</span></td>
          <td class="py-3 px-2">Elena Rodriguez, EA</td>
          <td class="py-3 px-2 text-right"><a href="/clients" class="text-emerald-400 hover:underline font-bold">View Profile →</a></td>
        </tr>
        <tr>
          <td class="py-3 px-2 font-bold text-white">David Thompson</td>
          <td class="py-3 px-2">IRS Resolution / Back Taxes</td>
          <td class="py-3 px-2">david@example.com<br><span class="text-gray-500">(404) 555-0199</span></td>
          <td class="py-3 px-2"><span class="bg-amber-500/20 text-amber-400 px-2 py-0.5 rounded font-semibold">Form 2848 Pending</span></td>
          <td class="py-3 px-2"><span class="bg-red-500/20 text-red-400 px-2 py-0.5 rounded font-semibold">IRS Notice Needed</span></td>
          <td class="py-3 px-2">Rick Jefferson (PTIN Verified)</td>
          <td class="py-3 px-2 text-right"><a href="/resolution" class="text-amber-400 hover:underline font-bold">View Case →</a></td>
        </tr>
      </tbody>
    </table>
  </div>
</section>
`)
