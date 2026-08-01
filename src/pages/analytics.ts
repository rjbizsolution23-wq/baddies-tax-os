import { shell } from './layout'

export const analyticsPage = () => shell('Tax Revenue Intelligence', 'analytics', `
<section id="analytics-header" class="mb-8">
  <h1 class="text-3xl font-extrabold text-white mb-2"><i class="fas fa-chart-line text-emerald-400 mr-2"></i>Tax Practice Revenue Intelligence</h1>
  <p class="text-gray-400 text-sm">Real-time performance analytics: taxpayer intake conversion, return volume, average fee per return, resolution case value, and service bureau revenue.</p>
</section>

<section id="tax-kpi-grid" class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 text-xs font-semibold text-center">
  <div class="card p-4 border-emerald-500/30">
    <p class="text-gray-400 uppercase text-[10px] mb-1">Total Preparation Revenue</p>
    <p class="text-2xl font-bold text-emerald-400">$348,500</p>
  </div>
  <div class="card p-4 border-emerald-500/30">
    <p class="text-gray-400 uppercase text-[10px] mb-1">Avg Fee Per Return</p>
    <p class="text-2xl font-bold text-white">$425 / Return</p>
  </div>
  <div class="card p-4 border-emerald-500/30">
    <p class="text-gray-400 uppercase text-[10px] mb-1">Tax Resolution Pipeline Value</p>
    <p class="text-2xl font-bold text-amber-400">$182,000</p>
  </div>
  <div class="card p-4 border-emerald-500/30">
    <p class="text-gray-400 uppercase text-[10px] mb-1">Service Bureau Licensing</p>
    <p class="text-2xl font-bold text-emerald-400">$64,000</p>
  </div>
</section>

<section id="conversion-funnel-breakdown" class="card p-6">
  <h2 class="text-lg font-bold text-white mb-4"><i class="fas fa-filter text-emerald-400 mr-2"></i>Tax Funnel Conversion Metrics</h2>
  <div class="space-y-4 text-xs">
    <div class="bg-[#060a14] p-4 rounded-xl border border-gray-800 flex items-center justify-between">
      <div>
        <p class="font-bold text-white text-sm">Individual 1040 Preparation Funnel</p>
        <p class="text-gray-400">3,420 Views · 840 Intakes Submitted (24.5% Conversion) · 820 Returns Transmitted</p>
      </div>
      <span class="text-emerald-400 font-bold text-sm">$287,000 Revenue</span>
    </div>
    <div class="bg-[#060a14] p-4 rounded-xl border border-gray-800 flex items-center justify-between">
      <div>
        <p class="font-bold text-white text-sm">Schedule C Self-Employed Funnel</p>
        <p class="text-gray-400">1,280 Views · 210 Intakes Submitted (16.4% Conversion) · 198 Returns Transmitted</p>
      </div>
      <span class="text-emerald-400 font-bold text-sm">$61,500 Revenue</span>
    </div>
    <div class="bg-[#060a14] p-4 rounded-xl border border-gray-800 flex items-center justify-between">
      <div>
        <p class="font-bold text-white text-sm">IRS Notice &amp; Back Tax Resolution Funnel</p>
        <p class="text-gray-400">920 Views · 84 Case Evaluations (9.1% Conversion) · 42 Cases Retained</p>
      </div>
      <span class="text-amber-400 font-bold text-sm">$147,000 Case Value</span>
    </div>
  </div>
</section>
`)
