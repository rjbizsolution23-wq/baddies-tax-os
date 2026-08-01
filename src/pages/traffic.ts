import { shell } from './layout'

export const trafficPage = () => shell('Tax Acquisition Campaign Command', 'traffic', `
<section id="traffic-header" class="mb-8">
  <h1 class="text-3xl font-extrabold text-white mb-2"><i class="fas fa-bullhorn text-emerald-400 mr-2"></i>Tax Client Acquisition Command</h1>
  <p class="text-gray-400 text-sm">Launch targeted organic &amp; paid tax acquisition campaigns for early season filing, self-employed tax prep, IRS notice resolution, and referral partners.</p>
</section>

<section id="tax-campaigns" class="grid md:grid-cols-3 gap-6 mb-12">
  <div class="card p-6">
    <div class="flex items-center justify-between mb-3">
      <span class="bg-emerald-500/20 text-emerald-400 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">Seasonal Campaign</span>
      <span class="text-xs text-gray-500 font-mono">2026 Filing</span>
    </div>
    <h3 class="font-bold text-white text-base mb-2">Early Tax Season Filing Rush</h3>
    <p class="text-gray-400 text-xs mb-4">Captures W-2 and EITC filers seeking early refund processing and fast direct deposit.</p>
    <a href="/t/tax-individual" target="_blank" class="block text-center bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2 rounded-xl text-xs">Launch Campaign →</a>
  </div>

  <div class="card p-6">
    <div class="flex items-center justify-between mb-3">
      <span class="bg-blue-500/20 text-blue-400 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">Year-Round Campaign</span>
      <span class="text-xs text-gray-500 font-mono">1099 / Schedule C</span>
    </div>
    <h3 class="font-bold text-white text-base mb-2">Self-Employed Tax Savings</h3>
    <p class="text-gray-400 text-xs mb-4">Targeted at gig workers, creators, contractors, and small business owners needing expense deduction reviews.</p>
    <a href="/t/tax-self-employed" target="_blank" class="block text-center bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 rounded-xl text-xs">Launch Campaign →</a>
  </div>

  <div class="card p-6">
    <div class="flex items-center justify-between mb-3">
      <span class="bg-amber-500/20 text-amber-400 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">High-Ticket Resolution</span>
      <span class="text-xs text-gray-500 font-mono">IRS Notice</span>
    </div>
    <h3 class="font-bold text-white text-base mb-2">Back Taxes &amp; IRS Notice Relief</h3>
    <p class="text-gray-400 text-xs mb-4">Education-based campaign for taxpayers owing $10k+ in back taxes or facing IRS collection notices.</p>
    <a href="/t/tax-resolution" target="_blank" class="block text-center bg-amber-600 hover:bg-amber-500 text-white font-bold py-2 rounded-xl text-xs">Launch Campaign →</a>
  </div>
</section>
`)
