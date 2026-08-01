import { shell } from './layout'

export const GROUPS: any[] = []
export const FLEET_BRANDS: any[] = []

export const fleetPage = () => shell('Service Bureau & Multi-Office Command', 'bureau', `
<section id="bureau-header" class="mb-8">
  <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
    <div>
      <h1 class="text-3xl font-extrabold text-white"><i class="fas fa-building-user text-emerald-400 mr-2"></i>Service Bureau &amp; Multi-Office Command</h1>
      <p class="text-gray-400 text-sm">Provision tax software seats, manage ERO agreements, track branch return volume, monitor rejection rates, and distribute bank products.</p>
    </div>
    <a href="/t/service-bureau-recruitment" target="_blank" class="grad-bg text-white text-xs font-bold px-4 py-2.5 rounded-xl"><i class="fas fa-plus mr-1"></i>Onboard New Tax Office</a>
  </div>
</section>

<section id="bureau-metrics" class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 text-xs font-semibold text-center">
  <div class="card p-4 border-emerald-500/30">
    <p class="text-gray-400 uppercase text-[10px] mb-1">Active Offices</p>
    <p class="text-2xl font-bold text-emerald-400">8 Offices</p>
  </div>
  <div class="card p-4 border-emerald-500/30">
    <p class="text-gray-400 uppercase text-[10px] mb-1">Software Seats Provisioned</p>
    <p class="text-2xl font-bold text-white">28 Seats</p>
  </div>
  <div class="card p-4 border-emerald-500/30">
    <p class="text-gray-400 uppercase text-[10px] mb-1">Total Returns Transmitted</p>
    <p class="text-2xl font-bold text-emerald-400">1,480 Returns</p>
  </div>
  <div class="card p-4 border-emerald-500/30">
    <p class="text-gray-400 uppercase text-[10px] mb-1">IRS Rejection Rate</p>
    <p class="text-2xl font-bold text-emerald-400">1.2% (Healthy)</p>
  </div>
</section>

<section id="offices-list" class="card p-6">
  <h2 class="text-lg font-bold text-white mb-4"><i class="fas fa-network-wired text-emerald-400 mr-2"></i>Service Bureau Branches &amp; ERO Partners</h2>
  <div class="overflow-x-auto text-xs">
    <table class="w-full text-left border-collapse">
      <thead>
        <tr class="border-b border-gray-800 text-gray-400 uppercase text-[10px]">
          <th class="py-3 px-2">Office Code &amp; Name</th>
          <th class="py-3 px-2">Owner / ERO</th>
          <th class="py-3 px-2">EFIN Status</th>
          <th class="py-3 px-2">Software Seats</th>
          <th class="py-3 px-2">Returns Filed</th>
          <th class="py-3 px-2">Rejection Rate</th>
          <th class="py-3 px-2 text-right">Actions</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-800/60 text-gray-300">
        <tr>
          <td class="py-3 px-2 font-bold text-white">BTX-ATL-01 (Atlanta HQ)</td>
          <td class="py-3 px-2">Rick Jefferson<br><span class="text-gray-500">rick@baddiestax.com</span></td>
          <td class="py-3 px-2"><span class="bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded font-semibold">Active EFIN</span></td>
          <td class="py-3 px-2">10 Active Seats</td>
          <td class="py-3 px-2 font-bold text-white">820 Returns</td>
          <td class="py-3 px-2 text-emerald-400 font-bold">0.8%</td>
          <td class="py-3 px-2 text-right"><button class="bg-gray-800 hover:bg-gray-700 text-gray-200 px-3 py-1 rounded">Manage Branch</button></td>
        </tr>
        <tr>
          <td class="py-3 px-2 font-bold text-white">BTX-MIA-02 (Miami Office)</td>
          <td class="py-3 px-2">Elena Rodriguez, EA<br><span class="text-gray-500">elena@baddiestax.com</span></td>
          <td class="py-3 px-2"><span class="bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded font-semibold">Active EFIN</span></td>
          <td class="py-3 px-2">5 Active Seats</td>
          <td class="py-3 px-2 font-bold text-white">410 Returns</td>
          <td class="py-3 px-2 text-emerald-400 font-bold">1.1%</td>
          <td class="py-3 px-2 text-right"><button class="bg-gray-800 hover:bg-gray-700 text-gray-200 px-3 py-1 rounded">Manage Branch</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</section>
`)
