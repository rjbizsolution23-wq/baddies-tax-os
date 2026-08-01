import { shell } from './layout'

export const dashboardPage = () => shell('Tax Growth Command Center', 'dashboard', `
<section id="hero-section" class="text-center py-10">
  <p class="inline-block bg-emerald-500/20 border border-emerald-400/30 text-emerald-400 text-xs font-mono px-3 py-1 rounded-full mb-4"><i class="fas fa-shield-halved mr-1"></i>BADDIES TAX OS™ v8.0 — TAX AGENCY-IN-A-BOX · CIRCULAR 230 &amp; §7216 COMPLIANT · D1 CRM · WORKERS AI</p>
  <h1 class="text-4xl md:text-5xl font-extrabold text-white mb-4">Turn Tax-Season Demand Into <span class="grad-text">Year-Round Revenue</span></h1>
  <p class="text-gray-300 max-w-2xl mx-auto text-lg">Baddies Tax OS™ integrates taxpayer acquisition funnels, secure intake, document vaults, IRS resolution case workflows, PTIN/EFIN credential monitoring, and service bureau office management in one complete platform.</p>
  <div class="flex items-center justify-center gap-3 mt-6 flex-wrap">
    <a href="/builder" class="grad-bg text-white font-bold px-6 py-3 rounded-xl hover:opacity-90"><i class="fas fa-bolt mr-2"></i>Launch My Tax Agency System</a>
    <a href="#platform-suite" class="text-gray-300 border border-emerald-500/40 font-semibold px-6 py-3 rounded-xl hover:bg-gray-800">Explore Tax Modules</a>
  </div>
  <p class="text-xs text-gray-500 mt-4">Built for Tax Preparers, EROs, Enrolled Agents, CPAs, Tax Resolution Firms, and Service Bureaus.</p>
</section>

<section id="platform-suite" class="mb-12">
  <h2 class="text-2xl font-bold text-white mb-2 text-center">One Tax Operating System. <span class="gold-text">Every Taxpayer Connected.</span></h2>
  <p class="text-gray-500 text-sm text-center max-w-2xl mx-auto mb-6">From initial intake to return transmission, IRS notices, and year-round advisory — automate operations with full compliance guardrails.</p>
  <div class="grid grid-cols-2 md:grid-cols-5 gap-3 text-center text-xs">
    ${[
      ['fa-filter', 'Tax Funnel Studio', '/builder'],
      ['fa-users-gear', 'Taxpayer CRM', '/leads'],
      ['fa-address-card', 'Client Portal & Ops', '/clients'],
      ['fa-scale-balanced', 'Tax Resolution Center', '/resolution'],
      ['fa-id-card', 'PTIN / EFIN Credentials', '/credentials'],
      ['fa-building-user', 'Service Bureau Command', '/bureau'],
      ['fa-shield-halved', 'Compliance Guard', '/compliance'],
      ['fa-envelope', 'Tax Email Vault', '/emails'],
      ['fa-magnifying-glass-chart', 'Tax SEO / AEO', '/seo'],
      ['fa-chart-line', 'Revenue Intelligence', '/analytics'],
    ].map(([icon, label, href]) => `
    <a href="${href}" class="card p-4 block group">
      <i class="fas ${icon} text-emerald-400 text-lg mb-2 block group-hover:text-mk-gold"></i>
      <span class="text-gray-300 font-semibold">${label}</span>
    </a>`).join('')}
  </div>
</section>

<section id="tax-operating-centers" class="grid md:grid-cols-3 gap-6 mb-12">
  <a href="/tax" class="card p-6 block group">
    <div class="grad-bg w-12 h-12 rounded-xl flex items-center justify-center text-white text-xl mb-4"><i class="fas fa-file-invoice-dollar"></i></div>
    <h2 class="text-xl font-bold text-white mb-2 group-hover:text-emerald-400">Tax Preparation Hub</h2>
    <p class="text-gray-300 text-sm mb-1">Streamlined 1040, Schedule C &amp; Business Filing</p>
    <p class="text-gray-500 text-xs mb-4">Secure digital intake, document checklists (W-2, 1099, 1098), client e-signatures, refund status tracking, and direct e-file transmission status.</p>
    <ul class="text-xs text-gray-400 space-y-1">
      <li><i class="fas fa-check text-emerald-400 mr-1"></i>Individual &amp; Self-Employed Intakes</li>
      <li><i class="fas fa-check text-emerald-400 mr-1"></i>S-Corp &amp; Business Tax Workflows</li>
      <li><i class="fas fa-check text-emerald-400 mr-1"></i>Encrypted Client Document Vault</li>
    </ul>
  </a>
  <a href="/resolution" class="card p-6 block group">
    <div class="bg-amber-600 w-12 h-12 rounded-xl flex items-center justify-center text-white text-xl mb-4"><i class="fas fa-scale-balanced"></i></div>
    <h2 class="text-xl font-bold text-white mb-2 group-hover:text-emerald-400">Tax Resolution Case Center</h2>
    <p class="text-gray-300 text-sm mb-1">IRS Notices, Back Taxes &amp; Form 2848 Power of Attorney</p>
    <p class="text-gray-500 text-xs mb-4">Compliance-first case evaluation for Installment Agreements, Offer in Compromise (OIC), Currently Not Collectible, and Penalty Abatement.</p>
    <ul class="text-xs text-gray-400 space-y-1">
      <li><i class="fas fa-check text-emerald-400 mr-1"></i>IRS Notice &amp; Transcript Review</li>
      <li><i class="fas fa-check text-emerald-400 mr-1"></i>Form 433-A/F Financial Analysis</li>
      <li><i class="fas fa-check text-emerald-400 mr-1"></i>Circular 230 Disclaimed Copy</li>
    </ul>
  </a>
  <a href="/bureau" class="card p-6 block group">
    <div class="bg-emerald-700 w-12 h-12 rounded-xl flex items-center justify-center text-white text-xl mb-4"><i class="fas fa-building-user"></i></div>
    <h2 class="text-xl font-bold text-white mb-2 group-hover:text-emerald-400">Service Bureau Command</h2>
    <p class="text-gray-300 text-sm mb-1">Multi-Office, ERO &amp; Preparer Network Management</p>
    <p class="text-gray-500 text-xs mb-4">Scale your tax agency. Provision software seats, verify EFINs/PTINs, track branch return volume, manage commissions, and monitor rejection rates.</p>
    <ul class="text-xs text-gray-400 space-y-1">
      <li><i class="fas fa-check text-emerald-400 mr-1"></i>Office Onboarding &amp; Software Provisioning</li>
      <li><i class="fas fa-check text-emerald-400 mr-1"></i>Credential &amp; Safeguards Monitoring</li>
      <li><i class="fas fa-check text-emerald-400 mr-1"></i>Branch Revenue &amp; Rejection Dashboard</li>
    </ul>
  </a>
</section>
`)
