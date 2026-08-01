import { shell } from './layout'

export const integrationsPage = () => shell('Tax Integration Hub', 'integrations', `
<section id="integrations-header" class="mb-8">
  <h1 class="text-3xl font-extrabold text-white mb-2"><i class="fas fa-plug text-emerald-400 mr-2"></i>Tax Integration Hub</h1>
  <p class="text-gray-400 text-sm">Connect tax software adapters, payment processors (Stripe), transaction email (Resend), SMS gateways (Twilio), Zoom consultation API, and GoHighLevel CRM.</p>
</section>

<section id="integrations-grid" class="grid md:grid-cols-3 gap-6 mb-12">
  <div class="card p-6">
    <div class="flex items-center justify-between mb-3">
      <i class="fab fa-stripe text-3xl text-emerald-400"></i>
      <span class="bg-emerald-500/20 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded">Connected</span>
    </div>
    <h3 class="font-bold text-white text-sm mb-1">Stripe Payment Gateway</h3>
    <p class="text-gray-400 text-xs mb-3">Collect tax preparation deposits, resolution investigation retainers, and advisory subscriptions.</p>
  </div>

  <div class="card p-6">
    <div class="flex items-center justify-between mb-3">
      <i class="fas fa-envelope text-3xl text-emerald-400"></i>
      <span class="bg-emerald-500/20 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded">Connected</span>
    </div>
    <h3 class="font-bold text-white text-sm mb-1">Resend Email Delivery</h3>
    <p class="text-gray-400 text-xs mb-3">Transactional emails for intake links, Form 8879 e-signatures, and filing acceptance alerts.</p>
  </div>

  <div class="card p-6">
    <div class="flex items-center justify-between mb-3">
      <i class="fas fa-video text-3xl text-emerald-400"></i>
      <span class="bg-emerald-500/20 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded">Connected</span>
    </div>
    <h3 class="font-bold text-white text-sm mb-1">Zoom Consultation API</h3>
    <p class="text-gray-400 text-xs mb-3">Automated Zoom meeting links for 1-on-1 IRS notice evaluations and taxpayer webinars.</p>
  </div>
</section>
`)
