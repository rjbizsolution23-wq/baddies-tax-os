import { shell } from './layout'
import { DEFAULT_PRICING_PLANS, OPTIONAL_ADD_ONS } from '../pricingConfig'

export const taxAgencyInABoxPage = () => shell('Tax Agency-in-a-Box | Baddies Tax OS™', 'builder', `
<!-- 1. Announcement Bar -->
<div class="bg-gradient-to-r from-emerald-900 via-emerald-700 to-amber-600 text-white text-xs font-semibold py-2.5 px-4 text-center border-b border-emerald-500/30 flex items-center justify-center gap-2">
  <span class="bg-amber-400 text-slate-950 text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full">New Platform</span>
  <span><strong>Tax Professionals:</strong> Stop piecing together disconnected tools. Build your entire tax agency inside one operating system.</span>
  <a href="#pricing" class="underline hover:text-amber-200 ml-2 font-bold">See Baddies Tax OS™ →</a>
</div>

<!-- 2. Hero Section -->
<section id="hero" class="relative pt-12 pb-20 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-b border-gray-800">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div class="text-center max-w-4xl mx-auto">
      <div class="inline-flex items-center gap-2 bg-emerald-950/80 border border-emerald-500/40 px-4 py-1.5 rounded-full text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6 shadow-lg shadow-emerald-950/50">
        <i class="fas fa-box-open"></i> THE TAX AGENCY-IN-A-BOX PLATFORM
      </div>
      
      <h1 class="text-4xl sm:text-6xl font-black text-white tracking-tight leading-none mb-6">
        Build the Tax Business.<br>
        <span class="bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300 bg-clip-text text-transparent">Automate the Operation.</span><br>
        Own the Growth.
      </h1>

      <p class="text-lg sm:text-xl text-gray-300 font-normal leading-relaxed mb-8 max-w-3xl mx-auto">
        Baddies Tax OS™ gives tax professionals everything needed to attract clients, manage leads, collect documents, automate follow-up, coordinate tax workflows, educate taxpayers, monitor credentials, and scale a modern tax agency from one powerful platform.
      </p>

      <p class="text-sm text-gray-400 mb-8 italic">
        No more disconnected funnels, spreadsheets, inboxes, intake tools, reminder apps, training portals, and client-management systems. One brand. One command center. One complete tax-business operating system.
      </p>

      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
        <a href="#checkout-section" onclick="openAssessmentModal()" class="w-full sm:w-auto bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-black text-base px-8 py-4 rounded-xl shadow-xl shadow-emerald-500/25 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2">
          <i class="fas fa-rocket text-lg"></i> Build My Tax Agency
        </a>
        <a href="#demo-section" class="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-white font-bold text-base px-8 py-4 rounded-xl border border-gray-700 hover:border-gray-600 transition-all flex items-center justify-center gap-2">
          <i class="fas fa-calendar-alt text-emerald-400"></i> Book a Live Platform Demo
        </a>
      </div>

      <p class="text-xs text-gray-500">
        <i class="fas fa-shield-alt text-emerald-500/80 mr-1"></i> No credit card required for a guided demo. Implementation and white-label options available.
      </p>
    </div>

    <!-- Hero Visual Mockup -->
    <div class="mt-14 relative max-w-5xl mx-auto rounded-2xl p-2 bg-gradient-to-b from-emerald-500/30 via-gray-800/40 to-slate-900/80 border border-emerald-500/40 shadow-2xl shadow-emerald-950/60">
      <div class="bg-slate-950 rounded-xl overflow-hidden p-6">
        <!-- Mockup Header -->
        <div class="flex items-center justify-between border-b border-gray-800 pb-4 mb-6">
          <div class="flex items-center gap-3">
            <span class="w-3 h-3 rounded-full bg-red-500"></span>
            <span class="w-3 h-3 rounded-full bg-yellow-500"></span>
            <span class="w-3 h-3 rounded-full bg-green-500"></span>
            <span class="text-xs font-mono text-gray-400 ml-2"><i class="fas fa-lock text-emerald-400 mr-1"></i> https://app.baddiestaxos.com/agency-command</span>
          </div>
          <div class="flex items-center gap-2 text-xs">
            <span class="bg-emerald-500/20 text-emerald-400 font-mono px-2 py-1 rounded border border-emerald-500/30"><i class="fas fa-circle text-[8px] text-emerald-400 mr-1 animate-pulse"></i> LIVE DEMO MODE</span>
          </div>
        </div>

        <!-- Dashboard Grid Mockup -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div class="bg-slate-900 border border-gray-800 p-4 rounded-xl">
            <span class="text-[10px] font-mono text-gray-400 uppercase tracking-wider block mb-1">New Tax Leads Today</span>
            <span class="text-2xl font-black text-emerald-400">42 Leads</span>
            <span class="text-[10px] text-emerald-500/80 block mt-1"><i class="fas fa-arrow-up mr-0.5"></i> +18% vs last week</span>
          </div>
          <div class="bg-slate-900 border border-gray-800 p-4 rounded-xl">
            <span class="text-[10px] font-mono text-gray-400 uppercase tracking-wider block mb-1">Appointments Booked</span>
            <span class="text-2xl font-black text-amber-400">19 Booked</span>
            <span class="text-[10px] text-gray-400 block mt-1">94% Show Rate</span>
          </div>
          <div class="bg-slate-900 border border-gray-800 p-4 rounded-xl">
            <span class="text-[10px] font-mono text-gray-400 uppercase tracking-wider block mb-1">Intake Completed</span>
            <span class="text-2xl font-black text-teal-300">31 Profiles</span>
            <span class="text-[10px] text-teal-400 block mt-1">W-2 & 1099 Uploaded</span>
          </div>
          <div class="bg-slate-900 border border-gray-800 p-4 rounded-xl">
            <span class="text-[10px] font-mono text-gray-400 uppercase tracking-wider block mb-1">Returns Prepared</span>
            <span class="text-2xl font-black text-white">$142,800 Fee Rev</span>
            <span class="text-[10px] text-emerald-400 block mt-1">Avg $450 / return</span>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
          <div class="bg-slate-900/90 border border-emerald-500/20 p-4 rounded-xl">
            <div class="flex justify-between items-center mb-2 font-sans font-bold text-white">
              <span><i class="fas fa-tasks text-emerald-400 mr-1.5"></i> Return Workflows</span>
              <span class="text-[10px] text-gray-400">148 Active</span>
            </div>
            <div class="space-y-2 text-[11px] text-gray-300">
              <div class="flex justify-between items-center bg-slate-950 p-2 rounded">
                <span>Individual Tax (Sch C)</span>
                <span class="bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded text-[10px]">Review Ready</span>
              </div>
              <div class="flex justify-between items-center bg-slate-950 p-2 rounded">
                <span>S-Corp Advisory</span>
                <span class="bg-amber-500/20 text-amber-300 px-1.5 py-0.5 rounded text-[10px]">Doc Request Sent</span>
              </div>
              <div class="flex justify-between items-center bg-slate-950 p-2 rounded">
                <span>IRS Tax Resolution</span>
                <span class="bg-blue-500/20 text-blue-300 px-1.5 py-0.5 rounded text-[10px]">Transcript Pulled</span>
              </div>
            </div>
          </div>

          <div class="bg-slate-900/90 border border-emerald-500/20 p-4 rounded-xl">
            <div class="flex justify-between items-center mb-2 font-sans font-bold text-white">
              <span><i class="fas fa-shield-halved text-amber-400 mr-1.5"></i> Compliance Command</span>
              <span class="text-[10px] text-emerald-400">100% Compliant</span>
            </div>
            <div class="space-y-2 text-[11px] text-gray-300">
              <div class="flex justify-between items-center bg-slate-950 p-2 rounded">
                <span>IRC §7216 Consent</span>
                <span class="text-emerald-400">Active Signed</span>
              </div>
              <div class="flex justify-between items-center bg-slate-950 p-2 rounded">
                <span>PTIN Renewal Alert</span>
                <span class="text-emerald-400">Verified (2026)</span>
              </div>
              <div class="flex justify-between items-center bg-slate-950 p-2 rounded">
                <span>GLBA WISP Encryption</span>
                <span class="text-emerald-400">256-Bit Active</span>
              </div>
            </div>
          </div>

          <div class="bg-slate-900/90 border border-emerald-500/20 p-4 rounded-xl">
            <div class="flex justify-between items-center mb-2 font-sans font-bold text-white">
              <span><i class="fas fa-robot text-teal-400 mr-1.5"></i> Tax AI Workforce</span>
              <span class="text-[10px] text-teal-400">14 Agents Active</span>
            </div>
            <div class="space-y-2 text-[11px] text-gray-300">
              <div class="flex justify-between items-center bg-slate-950 p-2 rounded">
                <span>Intake Concierge</span>
                <span class="text-gray-400">Collected 12 Docs</span>
              </div>
              <div class="flex justify-between items-center bg-slate-950 p-2 rounded">
                <span>Missing Doc Agent</span>
                <span class="text-gray-400">Auto-SMS Sent</span>
              </div>
              <div class="flex justify-between items-center bg-slate-950 p-2 rounded">
                <span>Review Guard Agent</span>
                <span class="text-gray-400">0 Errors Detected</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- 3. Trust and Positioning Strip -->
<section id="trust-strip" class="py-10 bg-slate-950 border-b border-gray-800 text-center">
  <div class="max-w-7xl mx-auto px-4">
    <p class="text-xs font-mono text-amber-400 uppercase tracking-widest mb-6">Built for the people building the next generation of tax firms</p>
    <div class="flex flex-wrap items-center justify-center gap-3 md:gap-6 text-xs font-bold text-gray-300">
      <span class="bg-slate-900 border border-gray-800 px-4 py-2 rounded-lg"><i class="fas fa-user-tie text-emerald-400 mr-1.5"></i> Independent Tax Preparers</span>
      <span class="bg-slate-900 border border-gray-800 px-4 py-2 rounded-lg"><i class="fas fa-stamp text-amber-400 mr-1.5"></i> EROs</span>
      <span class="bg-slate-900 border border-gray-800 px-4 py-2 rounded-lg"><i class="fas fa-certificate text-teal-400 mr-1.5"></i> Enrolled Agents</span>
      <span class="bg-slate-900 border border-gray-800 px-4 py-2 rounded-lg"><i class="fas fa-calculator text-blue-400 mr-1.5"></i> CPAs</span>
      <span class="bg-slate-900 border border-gray-800 px-4 py-2 rounded-lg"><i class="fas fa-gavel text-red-400 mr-1.5"></i> Tax Resolution Firms</span>
      <span class="bg-slate-900 border border-gray-800 px-4 py-2 rounded-lg"><i class="fas fa-building text-purple-400 mr-1.5"></i> Multi-Office Tax Businesses</span>
      <span class="bg-slate-900 border border-gray-800 px-4 py-2 rounded-lg"><i class="fas fa-laptop text-emerald-400 mr-1.5"></i> Virtual Tax Firms</span>
      <span class="bg-slate-900 border border-gray-800 px-4 py-2 rounded-lg"><i class="fas fa-network-wired text-amber-400 mr-1.5"></i> Service Bureaus</span>
    </div>
  </div>
</section>

<!-- 4. Problem Section -->
<section id="problem" class="py-20 bg-slate-900/80 border-b border-gray-800">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center max-w-3xl mx-auto mb-16">
      <h2 class="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
        Your tax business should not depend on seven disconnected systems.
      </h2>
      <p class="text-base text-gray-300">
        Most tax professionals are forced to combine a website builder, funnel software, CRM, appointment scheduler, email tool, SMS platform, client portal, document uploader, project manager, payment processor, training system, compliance tracker, and reporting dashboard.
      </p>
    </div>

    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-12 text-xs font-semibold text-gray-300">
      <div class="bg-red-950/30 border border-red-500/20 p-4 rounded-xl text-center">
        <i class="fas fa-exclamation-triangle text-red-400 text-xl mb-2 block"></i> Lost Leads
      </div>
      <div class="bg-red-950/30 border border-red-500/20 p-4 rounded-xl text-center">
        <i class="fas fa-hourglass-half text-red-400 text-xl mb-2 block"></i> Slow Follow-Up
      </div>
      <div class="bg-red-950/30 border border-red-500/20 p-4 rounded-xl text-center">
        <i class="fas fa-file-excel text-red-400 text-xl mb-2 block"></i> Missing Documents
      </div>
      <div class="bg-red-950/30 border border-red-500/20 p-4 rounded-xl text-center">
        <i class="fas fa-calendar-times text-red-400 text-xl mb-2 block"></i> Missed Appointments
      </div>
      <div class="bg-red-950/30 border border-red-500/20 p-4 rounded-xl text-center">
        <i class="fas fa-comments text-red-400 text-xl mb-2 block"></i> Repeated Questions
      </div>
      <div class="bg-red-950/30 border border-red-500/20 p-4 rounded-xl text-center">
        <i class="fas fa-cubes text-red-400 text-xl mb-2 block"></i> Disorganized Workflows
      </div>
      <div class="bg-red-950/30 border border-red-500/20 p-4 rounded-xl text-center">
        <i class="fas fa-bullhorn text-red-400 text-xl mb-2 block"></i> Inconsistent Marketing
      </div>
      <div class="bg-red-950/30 border border-red-500/20 p-4 rounded-xl text-center">
        <i class="fas fa-user-slash text-red-400 text-xl mb-2 block"></i> Unclear Accountability
      </div>
      <div class="bg-red-950/30 border border-red-500/20 p-4 rounded-xl text-center">
        <i class="fas fa-eye-slash text-red-400 text-xl mb-2 block"></i> Poor Client Visibility
      </div>
      <div class="bg-red-950/30 border border-red-500/20 p-4 rounded-xl text-center">
        <i class="fas fa-shield-virus text-red-400 text-xl mb-2 block"></i> Compliance Risk
      </div>
      <div class="bg-red-950/30 border border-red-500/20 p-4 rounded-xl text-center col-span-2">
        <i class="fas fa-receipt text-red-400 text-xl mb-2 block"></i> $1,200+/mo Disconnected Software Bills
      </div>
    </div>

    <div class="bg-gradient-to-r from-emerald-950 via-slate-900 to-emerald-950 border border-emerald-500/40 p-8 rounded-2xl text-center max-w-3xl mx-auto">
      <h3 class="text-xl font-bold text-white mb-2">Baddies Tax OS™ brings the complete client-acquisition and tax-office workflow into one connected environment.</h3>
      <a href="#pricing" class="inline-block bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-extrabold px-8 py-3.5 rounded-xl mt-4 shadow-lg shadow-emerald-500/20">
        Replace the Patchwork →
      </a>
    </div>
  </div>
</section>

<!-- 5. Transformation Section -->
<section id="transformation" class="py-20 bg-slate-950 border-b border-gray-800">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center max-w-3xl mx-auto mb-16">
      <span class="text-xs font-mono text-emerald-400 uppercase tracking-widest">OPERATIONAL EVOLUTION</span>
      <h2 class="text-3xl sm:text-4xl font-black text-white tracking-tight mt-2">
        From tax preparer to tax agency owner.
      </h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- BEFORE -->
      <div class="bg-slate-900/80 border border-red-500/30 rounded-2xl p-8 relative">
        <div class="absolute -top-3 left-6 bg-red-500/20 text-red-400 border border-red-500/40 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
          Before Baddies Tax OS™
        </div>
        <ul class="mt-4 space-y-4 text-sm text-gray-300">
          <li class="flex items-start gap-3"><i class="fas fa-times text-red-400 mt-1"></i> Leads scattered across forms, social DMs, and paper notes</li>
          <li class="flex items-start gap-3"><i class="fas fa-times text-red-400 mt-1"></i> Manual appointment reminders resulting in high no-show rates</li>
          <li class="flex items-start gap-3"><i class="fas fa-times text-red-400 mt-1"></i> Clients constantly calling and texting asking for return status updates</li>
          <li class="flex items-start gap-3"><i class="fas fa-times text-red-400 mt-1"></i> W-2s and 1099 documents buried in personal email threads</li>
          <li class="flex items-start gap-3"><i class="fas fa-times text-red-400 mt-1"></i> No standardized preparation or review workflow for team members</li>
          <li class="flex items-start gap-3"><i class="fas fa-times text-red-400 mt-1"></i> Inconsistent follow-up leading to lost repeat business</li>
          <li class="flex items-start gap-3"><i class="fas fa-times text-red-400 mt-1"></i> Revenue spikes only during Jan–April, dry during offseason</li>
          <li class="flex items-start gap-3"><i class="fas fa-times text-red-400 mt-1"></i> Marketing funnels rebuilt from scratch every tax season</li>
          <li class="flex items-start gap-3"><i class="fas fa-times text-red-400 mt-1"></i> Staff working from memory without clear accountability</li>
          <li class="flex items-start gap-3"><i class="fas fa-times text-red-400 mt-1"></i> Zero real-time visibility across branch office locations</li>
        </ul>
      </div>

      <!-- AFTER -->
      <div class="bg-gradient-to-b from-emerald-950/40 to-slate-900 border border-emerald-500/40 rounded-2xl p-8 relative shadow-xl shadow-emerald-950/30">
        <div class="absolute -top-3 left-6 bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
          After Baddies Tax OS™
        </div>
        <ul class="mt-4 space-y-4 text-sm text-gray-200">
          <li class="flex items-start gap-3"><i class="fas fa-check text-emerald-400 mt-1"></i> Every lead enters a centralized tax-specific CRM automatically</li>
          <li class="flex items-start gap-3"><i class="fas fa-check text-emerald-400 mt-1"></i> Automated email and SMS follow-up runs 24/7 without manual effort</li>
          <li class="flex items-start gap-3"><i class="fas fa-check text-emerald-400 mt-1"></i> Taxpayers upload W-2s, 1099s, and ID docs securely to their portal</li>
          <li class="flex items-start gap-3"><i class="fas fa-check text-emerald-400 mt-1"></i> Clients track filing progress through a branded client portal</li>
          <li class="flex items-start gap-3"><i class="fas fa-check text-emerald-400 mt-1"></i> Every service follows a repeatable, quality-checked workflow</li>
          <li class="flex items-start gap-3"><i class="fas fa-check text-emerald-400 mt-1"></i> Staff receive clear task assignments and completion tracking</li>
          <li class="flex items-start gap-3"><i class="fas fa-check text-emerald-400 mt-1"></i> Tax planning and advisory campaigns run year-round for steady cashflow</li>
          <li class="flex items-start gap-3"><i class="fas fa-check text-emerald-400 mt-1"></i> High-converting funnels launch in seconds from tested tax templates</li>
          <li class="flex items-start gap-3"><i class="fas fa-check text-emerald-400 mt-1"></i> Credentials (PTIN/EFIN) and filing deadlines remain visible</li>
          <li class="flex items-start gap-3"><i class="fas fa-check text-emerald-400 mt-1"></i> Firm owners monitor all revenue and staff from one command center</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- 6. Platform Features Detailed Grid -->
<section id="features" class="py-20 bg-slate-900 border-b border-gray-800">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center max-w-3xl mx-auto mb-16">
      <span class="text-xs font-mono text-emerald-400 uppercase tracking-widest">PLATFORM OVERVIEW</span>
      <h2 class="text-3xl sm:text-5xl font-black text-white tracking-tight mt-2 mb-4">
        Everything your tax agency needs to grow and operate.
      </h2>
      <p class="text-base text-gray-300">
        Baddies Tax OS™ connects marketing, sales, fulfillment, compliance, financial intelligence, education, and client experience into one tax-focused operating system.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Feature 1: Tax Funnel Studio -->
      <div class="bg-slate-950 border border-gray-800 hover:border-emerald-500/40 p-8 rounded-2xl transition-all">
        <div class="w-12 h-12 bg-emerald-500/20 border border-emerald-500/40 rounded-xl flex items-center justify-center text-emerald-400 text-xl font-bold mb-6">
          <i class="fas fa-filter"></i>
        </div>
        <h3 class="text-xl font-bold text-white mb-3">Tax Funnel Studio</h3>
        <p class="text-sm text-gray-400 mb-4 leading-relaxed">
          Launch tax funnels without building from scratch. Choose from a complete library of tax-industry funnels designed for different services, taxpayer types, business stages, and campaign goals.
        </p>
        <ul class="text-xs text-gray-300 space-y-2 mb-6">
          <li><i class="fas fa-check text-emerald-400 mr-1.5"></i> Individual & Self-Employed Tax Funnels</li>
          <li><i class="fas fa-check text-emerald-400 mr-1.5"></i> IRS Notice & Tax Resolution Funnels</li>
          <li><i class="fas fa-check text-emerald-400 mr-1.5"></i> Tax Preparer & Service Bureau Recruitment</li>
          <li><i class="fas fa-check text-emerald-400 mr-1.5"></i> Zoom Webinars & Consultation Booking</li>
        </ul>
        <a href="/builder" class="text-xs font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1">Explore Tax Funnel Library →</a>
      </div>

      <!-- Feature 2: Taxpayer CRM -->
      <div class="bg-slate-950 border border-gray-800 hover:border-emerald-500/40 p-8 rounded-2xl transition-all">
        <div class="w-12 h-12 bg-amber-500/20 border border-amber-500/40 rounded-xl flex items-center justify-center text-amber-400 text-xl font-bold mb-6">
          <i class="fas fa-users-gear"></i>
        </div>
        <h3 class="text-xl font-bold text-white mb-3">Taxpayer CRM</h3>
        <p class="text-sm text-gray-400 mb-4 leading-relaxed">
          Turn every inquiry into an organized tax-client journey. Track leads, appointments, intake, documents, services, payments, return status, resolution cases, and history from one profile.
        </p>
        <ul class="text-xs text-gray-300 space-y-2 mb-6">
          <li><i class="fas fa-check text-amber-400 mr-1.5"></i> Taxpayer 360 Client Profiles</li>
          <li><i class="fas fa-check text-amber-400 mr-1.5"></i> Pipeline Stages for Prep & Resolution</li>
          <li><i class="fas fa-check text-amber-400 mr-1.5"></i> Lead Source & Service Interest Tags</li>
          <li><i class="fas fa-check text-amber-400 mr-1.5"></i> Returning-Client Retention History</li>
        </ul>
        <a href="/leads" class="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1">See the Taxpayer CRM →</a>
      </div>

      <!-- Feature 3: Client Intake & Portal -->
      <div class="bg-slate-950 border border-gray-800 hover:border-emerald-500/40 p-8 rounded-2xl transition-all">
        <div class="w-12 h-12 bg-teal-500/20 border border-teal-500/40 rounded-xl flex items-center justify-center text-teal-400 text-xl font-bold mb-6">
          <i class="fas fa-user-shield"></i>
        </div>
        <h3 class="text-xl font-bold text-white mb-3">Client Intake & Portal</h3>
        <p class="text-sm text-gray-400 mb-4 leading-relaxed">
          Give every client a professional, secure experience. Create a fully branded portal where taxpayers complete intake, upload W-2s/1099s, respond to questions, pay invoices, and track return status.
        </p>
        <ul class="text-xs text-gray-300 space-y-2 mb-6">
          <li><i class="fas fa-check text-teal-400 mr-1.5"></i> Secure 256-Bit Encrypted Uploads</li>
          <li><i class="fas fa-check text-teal-400 mr-1.5"></i> Custom Branded Client Portal Domain</li>
          <li><i class="fas fa-check text-teal-400 mr-1.5"></i> Return Progress Tracking Bar</li>
          <li><i class="fas fa-check text-teal-400 mr-1.5"></i> Integrated Invoice Payment Requests</li>
        </ul>
        <a href="/clients" class="text-xs font-bold text-teal-400 hover:text-teal-300 flex items-center gap-1">Preview Client Experience →</a>
      </div>

      <!-- Feature 4: Tax Workflow Operations -->
      <div class="bg-slate-950 border border-gray-800 hover:border-emerald-500/40 p-8 rounded-2xl transition-all">
        <div class="w-12 h-12 bg-blue-500/20 border border-blue-500/40 rounded-xl flex items-center justify-center text-blue-400 text-xl font-bold mb-6">
          <i class="fas fa-diagram-project"></i>
        </div>
        <h3 class="text-xl font-bold text-white mb-3">Tax Workflow Operations</h3>
        <p class="text-sm text-gray-400 mb-4 leading-relaxed">
          Standardize your tax operation from lead to completed service. Replace memory-based operations with defined workflows for preparation, review, signatures, payment, and resolution engagements.
        </p>
        <ul class="text-xs text-gray-300 space-y-2 mb-6">
          <li><i class="fas fa-check text-blue-400 mr-1.5"></i> Tax Prep Pipeline: Consultation → Filing</li>
          <li><i class="fas fa-check text-blue-400 mr-1.5"></i> Tax Resolution: Transcripts → Strategy</li>
          <li><i class="fas fa-check text-blue-400 mr-1.5"></i> Tax Advisory: Data → Quarterly Review</li>
          <li><i class="fas fa-check text-blue-400 mr-1.5"></i> Preparer Workload Distribution</li>
        </ul>
        <a href="/tax" class="text-xs font-bold text-blue-400 hover:text-blue-300 flex items-center gap-1">See Tax Workflows →</a>
      </div>

      <!-- Feature 5: Email, SMS & Zoom Automation -->
      <div class="bg-slate-950 border border-gray-800 hover:border-emerald-500/40 p-8 rounded-2xl transition-all">
        <div class="w-12 h-12 bg-purple-500/20 border border-purple-500/40 rounded-xl flex items-center justify-center text-purple-400 text-xl font-bold mb-6">
          <i class="fas fa-paper-plane"></i>
        </div>
        <h3 class="text-xl font-bold text-white mb-3">Email, SMS & Zoom</h3>
        <p class="text-sm text-gray-400 mb-4 leading-relaxed">
          Follow up with every client—without doing everything manually. Automate appointment confirmations, missing-document reminders, status alerts, Zoom consultations, and tax-deadline prompts.
        </p>
        <ul class="text-xs text-gray-300 space-y-2 mb-6">
          <li><i class="fas fa-check text-purple-400 mr-1.5"></i> Automated Missing-Document SMS</li>
          <li><i class="fas fa-check text-purple-400 mr-1.5"></i> Consultation Booking & Zoom Links</li>
          <li><i class="fas fa-check text-purple-400 mr-1.5"></i> Returning-Client Retention Blasts</li>
          <li><i class="fas fa-check text-purple-400 mr-1.5"></i> Tax Season Countdown Sequences</li>
        </ul>
        <a href="/mailer" class="text-xs font-bold text-purple-400 hover:text-purple-300 flex items-center gap-1">Automate Client Follow-Up →</a>
      </div>

      <!-- Feature 6: Compliance & Credential Command -->
      <div class="bg-slate-950 border border-gray-800 hover:border-emerald-500/40 p-8 rounded-2xl transition-all">
        <div class="w-12 h-12 bg-emerald-500/20 border border-emerald-500/40 rounded-xl flex items-center justify-center text-emerald-400 text-xl font-bold mb-6">
          <i class="fas fa-gavel"></i>
        </div>
        <h3 class="text-xl font-bold text-white mb-3">Compliance Command</h3>
        <p class="text-sm text-gray-400 mb-4 leading-relaxed">
          Make compliance visible before it becomes a problem. Monitor marketing reviews, consent records, security events, PTIN/EFIN renewal deadlines, staff credentials, and platform audit logs.
        </p>
        <ul class="text-xs text-gray-300 space-y-2 mb-6">
          <li><i class="fas fa-check text-emerald-400 mr-1.5"></i> IRC §7216 Consent Tracking</li>
          <li><i class="fas fa-check text-emerald-400 mr-1.5"></i> PTIN & EFIN Readiness Reminders</li>
          <li><i class="fas fa-check text-emerald-400 mr-1.5"></i> GLBA WISP Security Checklists</li>
          <li><i class="fas fa-check text-emerald-400 mr-1.5"></i> Immutable Audit Logs</li>
        </ul>
        <a href="/compliance" class="text-xs font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1">View Compliance Command →</a>
      </div>

      <!-- Feature 7: Tax AI Agent Workforce -->
      <div class="bg-slate-950 border border-gray-800 hover:border-emerald-500/40 p-8 rounded-2xl transition-all">
        <div class="w-12 h-12 bg-teal-500/20 border border-teal-500/40 rounded-xl flex items-center justify-center text-teal-400 text-xl font-bold mb-6">
          <i class="fas fa-robot"></i>
        </div>
        <h3 class="text-xl font-bold text-white mb-3">Tax AI Agent Workforce</h3>
        <p class="text-sm text-gray-400 mb-4 leading-relaxed">
          Deploy specialized AI agents across your tax business. Use governed AI agents to support marketing copy, lead qualification, intake assistance, missing document nudges, and workflow coordination.
        </p>
        <ul class="text-xs text-gray-300 space-y-2 mb-6">
          <li><i class="fas fa-check text-teal-400 mr-1.5"></i> Tax Funnel Copywriter Agent</li>
          <li><i class="fas fa-check text-teal-400 mr-1.5"></i> Intake & Document Concierge Agent</li>
          <li><i class="fas fa-check text-teal-400 mr-1.5"></i> Circular 230 Compliance Reviewer</li>
          <li><i class="fas fa-check text-teal-400 mr-1.5"></i> EFIN Readiness Guard Agent</li>
        </ul>
        <a href="/agents" class="text-xs font-bold text-teal-400 hover:text-teal-300 flex items-center gap-1">Meet Tax AI Agents →</a>
      </div>

      <!-- Feature 8: Tax Education Academy -->
      <div class="bg-slate-950 border border-gray-800 hover:border-emerald-500/40 p-8 rounded-2xl transition-all">
        <div class="w-12 h-12 bg-amber-500/20 border border-amber-500/40 rounded-xl flex items-center justify-center text-amber-400 text-xl font-bold mb-6">
          <i class="fas fa-graduation-cap"></i>
        </div>
        <h3 class="text-xl font-bold text-white mb-3">Tax Education Academy</h3>
        <p class="text-sm text-gray-400 mb-4 leading-relaxed">
          Educate your clients. Train your team. Build authority. Create branded taxpayer education, tax-business training, webinars, checklists, courses, lead magnets, and SOPs.
        </p>
        <ul class="text-xs text-gray-300 space-y-2 mb-6">
          <li><i class="fas fa-check text-amber-400 mr-1.5"></i> Taxpayer Recordkeeping Checklists</li>
          <li><i class="fas fa-check text-amber-400 mr-1.5"></i> Self-Employed Deduction Guides</li>
          <li><i class="fas fa-check text-amber-400 mr-1.5"></i> Tax Preparer Onboarding SOPs</li>
          <li><i class="fas fa-check text-amber-400 mr-1.5"></i> Live Webinar Studio & Training</li>
        </ul>
        <a href="/docs" class="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1">Explore Baddies Academy →</a>
      </div>

      <!-- Feature 9: Revenue Intelligence & Analytics -->
      <div class="bg-slate-950 border border-gray-800 hover:border-emerald-500/40 p-8 rounded-2xl transition-all">
        <div class="w-12 h-12 bg-emerald-500/20 border border-emerald-500/40 rounded-xl flex items-center justify-center text-emerald-400 text-xl font-bold mb-6">
          <i class="fas fa-chart-line"></i>
        </div>
        <h3 class="text-xl font-bold text-white mb-3">Practice Intelligence</h3>
        <p class="text-sm text-gray-400 mb-4 leading-relaxed">
          Know exactly where your tax-business growth is coming from. Track leads, consultation bookings, show rates, conversion rates, intake turnaround, revenue by service, and office volume.
        </p>
        <ul class="text-xs text-gray-300 space-y-2 mb-6">
          <li><i class="fas fa-check text-emerald-400 mr-1.5"></i> Conversion & Traffic Attribution</li>
          <li><i class="fas fa-check text-emerald-400 mr-1.5"></i> Return Preparation Turnaround Metrics</li>
          <li><i class="fas fa-check text-emerald-400 mr-1.5"></i> Revenue Breakdown by Office & Preparer</li>
          <li><i class="fas fa-check text-emerald-400 mr-1.5"></i> Client Retention & Referral Tracking</li>
        </ul>
        <a href="/analytics" class="text-xs font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1">See Command Analytics →</a>
      </div>
    </div>
  </div>
</section>

<!-- 7. Built for Your Stage Section -->
<section id="stages" class="py-20 bg-slate-950 border-b border-gray-800">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center max-w-3xl mx-auto mb-16">
      <span class="text-xs font-mono text-amber-400 uppercase tracking-widest">TAILORED SOLUTIONS</span>
      <h2 class="text-3xl sm:text-4xl font-black text-white tracking-tight mt-2">
        Built for your exact tax-business stage.
      </h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div class="bg-slate-900 border border-gray-800 p-6 rounded-2xl">
        <span class="text-amber-400 font-mono text-xs font-bold block mb-2">STAGE 1</span>
        <h3 class="text-lg font-bold text-white mb-2">New Tax Business</h3>
        <p class="text-xs text-gray-400 leading-relaxed">
          Launch your brand, funnels, CRM, intake, client portal, and client-acquisition system from day one without technical overhead.
        </p>
      </div>

      <div class="bg-slate-900 border border-gray-800 p-6 rounded-2xl">
        <span class="text-emerald-400 font-mono text-xs font-bold block mb-2">STAGE 2</span>
        <h3 class="text-lg font-bold text-white mb-2">Independent Tax Pro</h3>
        <p class="text-xs text-gray-400 leading-relaxed">
          Automate follow-up, organize client documents, eliminate repetitive questions, and launch year-round advisory offers.
        </p>
      </div>

      <div class="bg-slate-900 border border-gray-800 p-6 rounded-2xl">
        <span class="text-teal-400 font-mono text-xs font-bold block mb-2">STAGE 3</span>
        <h3 class="text-lg font-bold text-white mb-2">Growing Tax Firm</h3>
        <p class="text-xs text-gray-400 leading-relaxed">
          Manage staff, workload assignments, preparation workflows, quality review, multiple tax services, and firm performance.
        </p>
      </div>

      <div class="bg-slate-900 border border-gray-800 p-6 rounded-2xl">
        <span class="text-purple-400 font-mono text-xs font-bold block mb-2">STAGE 4</span>
        <h3 class="text-lg font-bold text-white mb-2">Service Bureau</h3>
        <p class="text-xs text-gray-400 leading-relaxed">
          Recruit partner offices, onboard EROs, train preparers, monitor compliance, provision tax software seats, and manage overrides.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- 8. Interactive ROI Calculator -->
<section id="roi-calculator" class="py-20 bg-gradient-to-b from-slate-900 to-slate-950 border-b border-gray-800">
  <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center max-w-3xl mx-auto mb-12">
      <span class="text-xs font-mono text-emerald-400 uppercase tracking-widest">CONSOLIDATION &amp; ROI</span>
      <h2 class="text-3xl sm:text-4xl font-black text-white tracking-tight mt-2 mb-3">
        Calculate Your Tax OS Operating Savings
      </h2>
      <p class="text-sm text-gray-400">
        See how much money, time, and revenue you recover when you replace seven fragmented tools with Baddies Tax OS™.
      </p>
    </div>

    <div class="bg-slate-950 border border-emerald-500/30 p-8 rounded-2xl shadow-2xl">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Inputs -->
        <div class="space-y-4 text-xs font-semibold text-gray-300">
          <div>
            <label class="block mb-1 text-gray-400">Current Monthly Disconnected Tool Cost ($)</label>
            <input type="number" id="calc-current-cost" value="850" oninput="calculateROI()" class="w-full bg-slate-900 border border-gray-700 rounded-lg p-3 text-white focus:border-emerald-500 focus:outline-none font-mono">
          </div>
          <div>
            <label class="block mb-1 text-gray-400">Estimated Annual Tax Clients / Leads</label>
            <input type="number" id="calc-leads" value="250" oninput="calculateROI()" class="w-full bg-slate-900 border border-gray-700 rounded-lg p-3 text-white focus:border-emerald-500 focus:outline-none font-mono">
          </div>
          <div>
            <label class="block mb-1 text-gray-400">Average Preparation Fee Per Client ($)</label>
            <input type="number" id="calc-avg-fee" value="450" oninput="calculateROI()" class="w-full bg-slate-900 border border-gray-700 rounded-lg p-3 text-white focus:border-emerald-500 focus:outline-none font-mono">
          </div>
          <div>
            <label class="block mb-1 text-gray-400">Staff Weekly Hours Spent Following Up Manually</label>
            <input type="number" id="calc-hours" value="15" oninput="calculateROI()" class="w-full bg-slate-900 border border-gray-700 rounded-lg p-3 text-white focus:border-emerald-500 focus:outline-none font-mono">
          </div>
        </div>

        <!-- Output Cards -->
        <div class="bg-slate-900/90 border border-emerald-500/20 p-6 rounded-xl flex flex-col justify-between">
          <div>
            <span class="text-xs font-mono text-emerald-400 uppercase tracking-widest block mb-4">ESTIMATED ANNUAL IMPACT</span>
            
            <div class="space-y-4 mb-6">
              <div class="flex justify-between items-center border-b border-gray-800 pb-2">
                <span class="text-xs text-gray-400">Software Cost Saved:</span>
                <span id="res-software-savings" class="text-lg font-black text-emerald-400 font-mono">$7,836 / yr</span>
              </div>
              <div class="flex justify-between items-center border-b border-gray-800 pb-2">
                <span class="text-xs text-gray-400">Staff Time Recovered:</span>
                <span id="res-time-saved" class="text-lg font-black text-amber-400 font-mono">600 Hours / yr</span>
              </div>
              <div class="flex justify-between items-center border-b border-gray-800 pb-2">
                <span class="text-xs text-gray-400">Recovered Lead Revenue (Est +15%):</span>
                <span id="res-revenue-impact" class="text-lg font-black text-teal-300 font-mono">$16,875 / yr</span>
              </div>
            </div>
          </div>

          <div class="bg-emerald-950/60 border border-emerald-500/40 p-4 rounded-xl text-center">
            <span class="text-xs text-gray-300 block mb-1">Total Estimated Annual Value:</span>
            <span id="res-total-value" class="text-3xl font-black text-emerald-400 font-mono">$24,711</span>
            <span class="text-[10px] text-gray-400 block mt-1">Based on Baddies Growth plan comparison.</span>
          </div>
        </div>
      </div>
      <p class="text-[10px] text-gray-500 mt-4 text-center">
        * Estimates based on user-entered assumptions. Not a guarantee of revenue or savings. Individual results vary based on execution and business volume.
      </p>
    </div>
  </div>
</section>

<!-- 9. Pricing Section with Toggle -->
<section id="pricing" class="py-20 bg-slate-950 border-b border-gray-800">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center max-w-3xl mx-auto mb-12">
      <span class="text-xs font-mono text-emerald-400 uppercase tracking-widest">TRANSPARENT PRICING</span>
      <h2 class="text-3xl sm:text-5xl font-black text-white tracking-tight mt-2 mb-4">
        Choose the system built for your tax-business stage.
      </h2>
      <p class="text-base text-gray-300 mb-8">
        Start with the tools you need today and expand as your tax agency grows.
      </p>

      <!-- Billing Toggle -->
      <div class="inline-flex items-center bg-slate-900 border border-gray-800 p-1.5 rounded-full text-xs font-bold">
        <button id="btn-monthly" onclick="setBillingCycle('monthly')" class="px-5 py-2 rounded-full text-white bg-emerald-600 transition-all">Monthly Billing</button>
        <button id="btn-annual" onclick="setBillingCycle('annual')" class="px-5 py-2 rounded-full text-gray-400 hover:text-white transition-all flex items-center gap-1.5">
          Annual Billing <span class="bg-amber-400 text-slate-950 text-[10px] px-2 py-0.5 rounded-full font-black uppercase">2 Months Free</span>
        </button>
      </div>
    </div>

    <!-- Pricing Cards Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
      ${DEFAULT_PRICING_PLANS.map(plan => `
        <div class="bg-slate-900 border ${plan.badge ? 'border-amber-400/60 shadow-xl shadow-amber-500/10' : 'border-gray-800'} rounded-2xl p-6 flex flex-col justify-between relative hover:border-emerald-500/50 transition-all">
          ${plan.badge ? `<div class="absolute -top-3 right-6 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 text-[10px] font-black uppercase px-3 py-1 rounded-full tracking-wider shadow-md">${plan.badge}</div>` : ''}
          
          <div>
            <h3 class="text-xl font-bold text-white mb-2">${plan.name}</h3>
            <p class="text-xs text-gray-400 mb-6 min-h-[36px]">${plan.bestFor}</p>

            <div class="mb-6">
              <div class="flex items-baseline gap-1">
                <span class="text-4xl font-black text-white font-mono plan-price" data-monthly="$${plan.monthlyPrice}" data-annual="$${plan.annualPriceMonthlyEquivalent}">$${plan.monthlyPrice}</span>
                <span class="text-xs text-gray-400">/ mo</span>
              </div>
              <p class="text-[11px] text-emerald-400 font-mono mt-1 plan-sub" data-monthly="Billed monthly &middot; +$${plan.setupFee} setup" data-annual="Billed $${plan.annualTotal}/yr &middot; Save 17%">Billed monthly &middot; +$${plan.setupFee} setup</p>
            </div>

            <!-- Limits Summary -->
            <div class="bg-slate-950/80 border border-gray-800 rounded-xl p-3 mb-6 space-y-1 text-[11px] text-gray-300 font-mono">
              <p><i class="fas fa-building text-emerald-400 mr-1.5"></i> ${plan.limits.brands}</p>
              <p><i class="fas fa-location-dot text-amber-400 mr-1.5"></i> ${plan.limits.offices}</p>
              <p><i class="fas fa-users text-teal-400 mr-1.5"></i> ${plan.limits.users}</p>
              <p><i class="fas fa-address-book text-blue-400 mr-1.5"></i> ${plan.limits.contacts}</p>
            </div>

            <!-- Included Features List -->
            <div class="space-y-2.5 text-xs text-gray-300 mb-8">
              ${plan.features.map(f => `
                <div class="flex items-start gap-2">
                  <i class="fas fa-check text-emerald-400 text-xs mt-0.5"></i>
                  <span class="${f.startsWith('Everything in') ? 'font-bold text-amber-300' : ''}">${f}</span>
                </div>
              `).join('')}
            </div>
          </div>

          <div>
            <button onclick="selectPlanCheckout('${plan.id}')" class="w-full ${plan.badge ? 'bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950' : 'bg-slate-800 hover:bg-slate-700 text-white border border-gray-700'} font-black text-xs py-3.5 rounded-xl transition-all shadow-md">
              ${plan.ctaText}
            </button>
            <p class="text-[10px] text-gray-500 text-center mt-2">${plan.ctaSubtext}</p>
          </div>
        </div>
      `).join('')}
    </div>

    <!-- Enterprise Plan Banner -->
    <div class="bg-gradient-to-r from-slate-900 via-emerald-950 to-slate-900 border border-emerald-500/40 p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
      <div>
        <span class="bg-purple-500/20 text-purple-300 border border-purple-500/30 text-[10px] font-mono uppercase px-2.5 py-1 rounded-full font-bold mb-2 inline-block">Enterprise &amp; Franchise Networks</span>
        <h3 class="text-2xl font-black text-white">Baddies Enterprise Tax Network</h3>
        <p class="text-xs text-gray-300 max-w-2xl mt-1">
          Custom dedicated infrastructure, SSO, custom compliance controls, data warehouse exports, SLA commitments, and dedicated engineering team for national networks.
        </p>
      </div>
      <a href="#demo-section" class="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white font-bold text-xs px-6 py-3.5 rounded-xl whitespace-nowrap shadow-lg">
        Request Enterprise Consultation →
      </a>
    </div>

    <!-- 10. Optional Add-Ons -->
    <div class="mb-16">
      <h3 class="text-xl font-bold text-white text-center mb-8"><i class="fas fa-puzzle-piece text-amber-400 mr-2"></i>Optional Implementation Add-Ons</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        ${OPTIONAL_ADD_ONS.map(addon => `
          <div class="bg-slate-900 border border-gray-800 p-6 rounded-xl hover:border-gray-700">
            <div class="flex justify-between items-start mb-2">
              <h4 class="text-sm font-bold text-white">${addon.name}</h4>
              <span class="text-[11px] font-mono text-emerald-400 font-bold bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded">${addon.priceDisplay}</span>
            </div>
            <p class="text-xs text-gray-400 mb-4">${addon.description}</p>
            <ul class="text-[11px] text-gray-300 space-y-1 font-mono">
              ${addon.includedItems.map(i => `<li>&bull; ${i}</li>`).join('')}
            </ul>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- 11. Founding Partner Offer -->
    <div class="bg-gradient-to-r from-amber-950/50 via-slate-900 to-amber-950/50 border border-amber-500/40 p-8 rounded-2xl text-center max-w-3xl mx-auto">
      <span class="bg-amber-400 text-slate-950 text-[10px] font-black uppercase px-3 py-1 rounded-full tracking-wider inline-block mb-3">Founding Partner Program</span>
      <h3 class="text-2xl font-black text-white mb-2">Become a Baddies Tax OS™ Founding Partner</h3>
      <p class="text-xs text-gray-300 max-w-xl mx-auto mb-6">
        Qualified early adopters receive reduced implementation setup fees, locked subscription rates, direct product advisory access, and Founding Partner status.
      </p>
      <button onclick="openAssessmentModal()" class="bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-xs px-8 py-3.5 rounded-xl shadow-lg">
        Apply for Founding Partner Access →
      </button>
      <p class="text-[10px] text-gray-500 mt-3"><i class="fas fa-lock text-amber-500/80 mr-1"></i> Subject to qualified application and onboarding capacity.</p>
    </div>
  </div>
</section>

<!-- 12. How It Works Section -->
<section id="how-it-works" class="py-20 bg-slate-900 border-b border-gray-800">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center max-w-3xl mx-auto mb-16">
      <span class="text-xs font-mono text-emerald-400 uppercase tracking-widest">CLEAR ONBOARDING PATH</span>
      <h2 class="text-3xl sm:text-4xl font-black text-white tracking-tight mt-2">
        Five simple steps to launch your tax OS.
      </h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-5 gap-6">
      <div class="bg-slate-950 border border-gray-800 p-6 rounded-2xl relative">
        <span class="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 font-mono text-sm font-bold flex items-center justify-center mb-4 border border-emerald-500/40">1</span>
        <h3 class="text-sm font-bold text-white mb-2">Select Model</h3>
        <p class="text-xs text-gray-400">Choose preparer, firm, multi-office agency, or service bureau.</p>
      </div>

      <div class="bg-slate-950 border border-gray-800 p-6 rounded-2xl relative">
        <span class="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 font-mono text-sm font-bold flex items-center justify-center mb-4 border border-emerald-500/40">2</span>
        <h3 class="text-sm font-bold text-white mb-2">Configure Brand</h3>
        <p class="text-xs text-gray-400">Add your logo, custom domain, office details, and communications.</p>
      </div>

      <div class="bg-slate-950 border border-gray-800 p-6 rounded-2xl relative">
        <span class="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 font-mono text-sm font-bold flex items-center justify-center mb-4 border border-emerald-500/40">3</span>
        <h3 class="text-sm font-bold text-white mb-2">Activate Funnels</h3>
        <p class="text-xs text-gray-400">Pick tax funnels and connect intake forms, Zoom, and email/SMS sequences.</p>
      </div>

      <div class="bg-slate-950 border border-gray-800 p-6 rounded-2xl relative">
        <span class="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 font-mono text-sm font-bold flex items-center justify-center mb-4 border border-emerald-500/40">4</span>
        <h3 class="text-sm font-bold text-white mb-2">Launch Portal</h3>
        <p class="text-xs text-gray-400">Activate taxpayer client intake, document upload, and payment links.</p>
      </div>

      <div class="bg-slate-950 border border-gray-800 p-6 rounded-2xl relative">
        <span class="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 font-mono text-sm font-bold flex items-center justify-center mb-4 border border-emerald-500/40">5</span>
        <h3 class="text-sm font-bold text-white mb-2">Automate &amp; Scale</h3>
        <p class="text-xs text-gray-400">Deploy AI agents, credential alerts, analytics, and office workflows.</p>
      </div>
    </div>
  </div>
</section>

<!-- 13. Interactive Demo Booking Section -->
<section id="demo-section" class="py-20 bg-slate-950 border-b border-gray-800">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12">
      <span class="text-xs font-mono text-emerald-400 uppercase tracking-widest">EXPERIENCE THE PLATFORM</span>
      <h2 class="text-3xl sm:text-4xl font-black text-white tracking-tight mt-2 mb-3">
        Book a Live 1-on-1 Platform Demo
      </h2>
      <p class="text-sm text-gray-300">
        See how one tax lead turns into a fully managed, compliant client inside Baddies Tax OS™.
      </p>
    </div>

    <div class="bg-slate-900 border border-emerald-500/30 p-8 rounded-2xl shadow-xl">
      <form id="demo-form" onsubmit="handleDemoSubmit(event)" class="space-y-4 text-xs font-semibold text-gray-300">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label class="block mb-1 text-gray-400">First Name *</label>
            <input type="text" required name="firstName" placeholder="Elena" class="w-full bg-slate-950 border border-gray-700 rounded-lg p-3 text-white focus:border-emerald-500 focus:outline-none">
          </div>
          <div>
            <label class="block mb-1 text-gray-400">Last Name *</label>
            <input type="text" required name="lastName" placeholder="Rodriguez" class="w-full bg-slate-950 border border-gray-700 rounded-lg p-3 text-white focus:border-emerald-500 focus:outline-none">
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label class="block mb-1 text-gray-400">Business / Firm Name *</label>
            <input type="text" required name="firmName" placeholder="Rodriguez Tax Advisory LLC" class="w-full bg-slate-950 border border-gray-700 rounded-lg p-3 text-white focus:border-emerald-500 focus:outline-none">
          </div>
          <div>
            <label class="block mb-1 text-gray-400">Work Email *</label>
            <input type="email" required name="email" placeholder="elena@rodrigueztax.com" class="w-full bg-slate-950 border border-gray-700 rounded-lg p-3 text-white focus:border-emerald-500 focus:outline-none">
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label class="block mb-1 text-gray-400">Mobile Phone (for SMS confirmation) *</label>
            <input type="tel" required name="phone" placeholder="(305) 555-0199" class="w-full bg-slate-950 border border-gray-700 rounded-lg p-3 text-white focus:border-emerald-500 focus:outline-none">
          </div>
          <div>
            <label class="block mb-1 text-gray-400">Current Business Stage *</label>
            <select name="stage" class="w-full bg-slate-950 border border-gray-700 rounded-lg p-3 text-white focus:border-emerald-500 focus:outline-none">
              <option value="launching">New Tax Business (Launching)</option>
              <option value="independent">Independent Tax Preparer (1-200 clients)</option>
              <option value="firm">Growing Tax Firm (200-1,000+ clients)</option>
              <option value="bureau">Service Bureau / Multi-Office Network</option>
            </select>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label class="block mb-1 text-gray-400">Number of Preparers / Staff</label>
            <select name="staffCount" class="w-full bg-slate-950 border border-gray-700 rounded-lg p-3 text-white focus:border-emerald-500 focus:outline-none">
              <option value="1">Solo Preparer (1)</option>
              <option value="2-5">2 - 5 Preparers</option>
              <option value="6-15">6 - 15 Preparers</option>
              <option value="16+">16+ Preparers / Network</option>
            </select>
          </div>
          <div>
            <label class="block mb-1 text-gray-400">Primary Goal for Demo</label>
            <select name="goal" class="w-full bg-slate-950 border border-gray-700 rounded-lg p-3 text-white focus:border-emerald-500 focus:outline-none">
              <option value="acquisition">Attract More Tax Clients (Funnels)</option>
              <option value="intake">Automate Client Intake & Documents</option>
              <option value="workflows">Organize Preparer Workflows & Team</option>
              <option value="yearround">Build Year-Round Tax Advisory Income</option>
              <option value="bureau">Launch a Tax Service Bureau</option>
            </select>
          </div>
        </div>

        <div class="pt-2">
          <label class="flex items-start gap-2 text-[11px] text-gray-400 cursor-pointer">
            <input type="checkbox" required name="consent" checked class="mt-0.5 rounded border-gray-700 text-emerald-500 focus:ring-0">
            <span>By submitting, I consent to receive transactional SMS appointment confirmations and platform updates from Baddies Tax OS™. Reply STOP anytime.</span>
          </label>
        </div>

        <button type="submit" class="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-sm py-4 rounded-xl transition-all shadow-lg shadow-emerald-500/20">
          Book My Live Platform Demo →
        </button>
      </form>
      <div id="demo-success" class="hidden text-center py-8">
        <div class="w-16 h-12 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">✓</div>
        <h3 class="text-xl font-bold text-white mb-2">Demo Request Received!</h3>
        <p class="text-xs text-gray-300">A Baddies Tax OS specialist will contact you shortly to confirm your scheduled 1-on-1 walkthrough.</p>
      </div>
    </div>
  </div>
</section>

<!-- 14. Comprehensive FAQ Section -->
<section id="faq" class="py-20 bg-slate-900 border-b border-gray-800">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12">
      <span class="text-xs font-mono text-emerald-400 uppercase tracking-widest">FREQUENTLY ASKED QUESTIONS</span>
      <h2 class="text-3xl font-black text-white tracking-tight mt-2">
        Got questions? We've got answers.
      </h2>
    </div>

    <div class="space-y-4">
      <div class="bg-slate-950 border border-gray-800 rounded-xl p-5">
        <h3 class="text-sm font-bold text-white mb-2"><i class="fas fa-circle-question text-emerald-400 mr-2"></i>Is Baddies Tax OS tax-preparation software?</h3>
        <p class="text-xs text-gray-400 leading-relaxed">
          Baddies Tax OS is designed primarily as a tax-business operating, marketing, client-management, workflow, education, and automation platform. Tax-return preparation and e-filing capabilities depend on approved integrations with professional tax software.
        </p>
      </div>

      <div class="bg-slate-950 border border-gray-800 rounded-xl p-5">
        <h3 class="text-sm font-bold text-white mb-2"><i class="fas fa-circle-question text-emerald-400 mr-2"></i>Can I use my own professional tax preparation software?</h3>
        <p class="text-xs text-gray-400 leading-relaxed">
          Yes. The platform supports configurable workflow links, document exports, and status stages for popular professional tax software providers.
        </p>
      </div>

      <div class="bg-slate-950 border border-gray-800 rounded-xl p-5">
        <h3 class="text-sm font-bold text-white mb-2"><i class="fas fa-circle-question text-emerald-400 mr-2"></i>Can I use my own tax agency branding?</h3>
        <p class="text-xs text-gray-400 leading-relaxed">
          Yes. Eligible plans allow firms to configure logos, colors, custom domains, email branding, portal branding, forms, and client-facing terminology.
        </p>
      </div>

      <div class="bg-slate-950 border border-gray-800 rounded-xl p-5">
        <h3 class="text-sm font-bold text-white mb-2"><i class="fas fa-circle-question text-emerald-400 mr-2"></i>Does it include a client portal for document uploads?</h3>
        <p class="text-xs text-gray-400 leading-relaxed">
          Yes. Clients can complete intake, upload W-2/1099 documents securely, communicate via secure messages, view invoices, join appointments, and track approved return status.
        </p>
      </div>

      <div class="bg-slate-950 border border-gray-800 rounded-xl p-5">
        <h3 class="text-sm font-bold text-white mb-2"><i class="fas fa-circle-question text-emerald-400 mr-2"></i>Can it track PTIN and EFIN deadlines?</h3>
        <p class="text-xs text-gray-400 leading-relaxed">
          Yes. The system calculates renewal windows, stores credential records, issues automated reminders, and supports internal office verification workflows.
        </p>
      </div>

      <div class="bg-slate-950 border border-gray-800 rounded-xl p-5">
        <h3 class="text-sm font-bold text-white mb-2"><i class="fas fa-circle-question text-emerald-400 mr-2"></i>Can I manage multiple branch office locations?</h3>
        <p class="text-xs text-gray-400 leading-relaxed">
          Yes. Agency Pro and Service Bureau plans support multiple offices, users, staff assignments, executive dashboards, and role-based permissions.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- 15. Final CTA Section -->
<section class="py-20 bg-gradient-to-b from-slate-950 via-emerald-950/40 to-slate-950 text-center border-b border-gray-800">
  <div class="max-w-4xl mx-auto px-4">
    <h2 class="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
      Your tax business deserves more than another disconnected tool.
    </h2>
    <p class="text-base text-gray-300 mb-8 max-w-2xl mx-auto">
      Build a tax agency that attracts clients, communicates consistently, delivers a professional experience, organizes operations, develops its team, and creates year-round growth from one connected system.
    </p>
    <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
      <button onclick="openAssessmentModal()" class="w-full sm:w-auto bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-base px-8 py-4 rounded-xl shadow-xl shadow-emerald-500/25">
        Build My Tax Agency
      </button>
      <a href="#demo-section" class="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-white font-bold text-base px-8 py-4 rounded-xl border border-gray-700">
        Book a Live Demo
      </a>
    </div>
    <p class="text-xs text-gray-500 mt-8">
      Baddies Tax OS™ supports your operation. Your firm remains responsible for tax preparation, professional decisions, licensing, taxpayer data, advertising, and regulatory compliance.
    </p>
  </div>
</section>

<!-- Assessment & Checkout Modal -->
<div id="assessment-modal" class="fixed inset-0 bg-slate-950/90 backdrop-blur-md z-50 hidden flex items-center justify-center p-4">
  <div class="bg-slate-900 border border-emerald-500/40 max-w-xl w-full rounded-2xl p-6 sm:p-8 relative shadow-2xl overflow-y-auto max-h-[90vh]">
    <button onclick="closeAssessmentModal()" class="absolute top-4 right-4 text-gray-400 hover:text-white text-lg">✕</button>

    <div id="modal-step-1">
      <span class="text-[10px] font-mono text-emerald-400 uppercase tracking-widest block mb-1">STEP 1 OF 2 — BUSINESS ASSESSMENT</span>
      <h3 class="text-xl font-bold text-white mb-2">Tax Business Readiness Assessment</h3>
      <p class="text-xs text-gray-400 mb-6">Select your primary goal so we can configure your workspace recommendation.</p>

      <div class="space-y-3 mb-6 text-xs">
        <label class="block p-3 rounded-xl bg-slate-950 border border-gray-800 hover:border-emerald-500/50 cursor-pointer">
          <input type="radio" name="optGoal" value="launch" checked class="mr-2 text-emerald-500">
          <strong class="text-white">Launch New Tax Agency</strong> — Need branding, funnels, CRM, and intake setup
        </label>
        <label class="block p-3 rounded-xl bg-slate-950 border border-gray-800 hover:border-emerald-500/50 cursor-pointer">
          <input type="radio" name="optGoal" value="growth" class="mr-2 text-emerald-500">
          <strong class="text-white">Scale Existing Practice</strong> — Need automated follow-up & document collection
        </label>
        <label class="block p-3 rounded-xl bg-slate-950 border border-gray-800 hover:border-emerald-500/50 cursor-pointer">
          <input type="radio" name="optGoal" value="agency_pro" class="mr-2 text-emerald-500">
          <strong class="text-white">Manage Multi-Office Agency</strong> — Need team workflows & office permissions
        </label>
        <label class="block p-3 rounded-xl bg-slate-950 border border-gray-800 hover:border-emerald-500/50 cursor-pointer">
          <input type="radio" name="optGoal" value="service_bureau" class="mr-2 text-emerald-500">
          <strong class="text-white">Run Service Bureau</strong> — Need ERO recruitment & white-label provisioning
        </label>
      </div>

      <button onclick="nextAssessmentStep()" class="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs py-3.5 rounded-xl transition-all">
        Continue to Workspace Checkout →
      </button>
    </div>

    <div id="modal-step-2" class="hidden">
      <span class="text-[10px] font-mono text-emerald-400 uppercase tracking-widest block mb-1">STEP 2 OF 2 — CHECKOUT &amp; PROVISIONING</span>
      <h3 class="text-xl font-bold text-white mb-2">Activate Your Baddies Tax OS Workspace</h3>
      
      <form onsubmit="handleCheckoutSubmit(event)" class="space-y-3 text-xs">
        <div>
          <label class="block text-gray-400 mb-1">Firm / Agency Name *</label>
          <input type="text" required id="chk-firm" placeholder="Baddies Tax Office #1" class="w-full bg-slate-950 border border-gray-700 rounded-lg p-2.5 text-white">
        </div>
        <div>
          <label class="block text-gray-400 mb-1">Owner Name *</label>
          <input type="text" required id="chk-name" placeholder="Rick Jefferson" class="w-full bg-slate-950 border border-gray-700 rounded-lg p-2.5 text-white">
        </div>
        <div>
          <label class="block text-gray-400 mb-1">Email *</label>
          <input type="email" required id="chk-email" placeholder="rick@baddiestax.com" class="w-full bg-slate-950 border border-gray-700 rounded-lg p-2.5 text-white">
        </div>
        
        <div class="bg-slate-950 p-3 rounded-xl border border-gray-800 my-2">
          <p class="text-[11px] font-mono text-emerald-400 font-bold mb-1">Selected Plan: <span id="selected-plan-label">Baddies Launch ($197/mo)</span></p>
          <p class="text-[10px] text-gray-400">Includes workspace provisioning, tax funnel library, taxpayer CRM, and client portal.</p>
        </div>

        <div class="space-y-1 text-[10px] text-gray-400">
          <label class="flex items-start gap-2">
            <input type="checkbox" required checked class="mt-0.5 rounded border-gray-700 text-emerald-500">
            <span>I agree to the Subscription Terms, Usage Billing, and Tax Professional Responsibility Statement.</span>
          </label>
        </div>

        <button type="submit" class="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-xs py-3.5 rounded-xl transition-all shadow-lg">
          Complete Provisioning &amp; Start Workspace →
        </button>
      </form>
    </div>
  </div>
</div>

<script>
let currentCycle = 'monthly';
let selectedPlanId = 'launch';

function setBillingCycle(cycle) {
  currentCycle = cycle;
  const btnM = document.getElementById('btn-monthly');
  const btnA = document.getElementById('btn-annual');
  
  if (cycle === 'annual') {
    btnA.className = 'px-5 py-2 rounded-full text-white bg-emerald-600 transition-all flex items-center gap-1.5';
    btnM.className = 'px-5 py-2 rounded-full text-gray-400 hover:text-white transition-all';
  } else {
    btnM.className = 'px-5 py-2 rounded-full text-white bg-emerald-600 transition-all';
    btnA.className = 'px-5 py-2 rounded-full text-gray-400 hover:text-white transition-all flex items-center gap-1.5';
  }

  document.querySelectorAll('.plan-price').forEach(el => {
    el.textContent = el.getAttribute('data-' + cycle);
  });
  document.querySelectorAll('.plan-sub').forEach(el => {
    el.textContent = el.getAttribute('data-' + cycle);
  });
}

function calculateROI() {
  const currentCost = parseFloat(document.getElementById('calc-current-cost').value) || 0;
  const leads = parseFloat(document.getElementById('calc-leads').value) || 0;
  const avgFee = parseFloat(document.getElementById('calc-avg-fee').value) || 0;
  const hours = parseFloat(document.getElementById('calc-hours').value) || 0;

  const annualCurrentSoftware = currentCost * 12;
  const osCost = 497 * 12; // Growth plan
  const softwareSaved = Math.max(0, annualCurrentSoftware - osCost);
  const totalHoursSaved = hours * 40; // 40 working weeks
  const recoveredRevenue = Math.round(leads * 0.15 * avgFee);
  const totalValue = softwareSaved + (totalHoursSaved * 25) + recoveredRevenue;

  document.getElementById('res-software-savings').textContent = '$' + softwareSaved.toLocaleString() + ' / yr';
  document.getElementById('res-time-saved').textContent = totalHoursSaved.toLocaleString() + ' Hours / yr';
  document.getElementById('res-revenue-impact').textContent = '$' + recoveredRevenue.toLocaleString() + ' / yr';
  document.getElementById('res-total-value').textContent = '$' + totalValue.toLocaleString();
}

function openAssessmentModal() {
  document.getElementById('assessment-modal').classList.remove('hidden');
}

function closeAssessmentModal() {
  document.getElementById('assessment-modal').classList.add('hidden');
}

function nextAssessmentStep() {
  const selectedGoal = document.querySelector('input[name="optGoal"]:checked').value;
  selectedPlanId = selectedGoal;
  const planNames = {
    launch: 'Baddies Launch ($197/mo)',
    growth: 'Baddies Growth ($497/mo)',
    agency_pro: 'Baddies Agency Pro ($997/mo)',
    service_bureau: 'Baddies Service Bureau ($2,497/mo)'
  };
  document.getElementById('selected-plan-label').textContent = planNames[selectedGoal] || 'Baddies Launch ($197/mo)';
  document.getElementById('modal-step-1').classList.add('hidden');
  document.getElementById('modal-step-2').classList.remove('hidden');
}

function selectPlanCheckout(planId) {
  selectedPlanId = planId;
  openAssessmentModal();
  document.querySelector('input[name="optGoal"][value="' + planId + '"]').checked = true;
  nextAssessmentStep();
}

async function handleDemoSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const data = new FormData(form);
  try {
    await fetch('/api/demo', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(Object.fromEntries(data.entries()))
    });
    form.classList.add('hidden');
    document.getElementById('demo-success').classList.remove('hidden');
  } catch (err) {
    alert('Demo request submitted successfully!');
  }
}

async function handleCheckoutSubmit(e) {
  e.preventDefault();
  const firm = document.getElementById('chk-firm').value;
  const name = document.getElementById('chk-name').value;
  const email = document.getElementById('chk-email').value;

  try {
    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ plan: selectedPlanId, firm, name, email, cycle: currentCycle })
    });
    const result = await res.json();
    window.location.href = result.redirect || '/thank-you?headline=Workspace+Provisioned!&msg=Your+Baddies+Tax+OS+workspace+is+being+configured.';
  } catch (err) {
    window.location.href = '/thank-you?headline=Workspace+Provisioned!&msg=Your+Baddies+Tax+OS+workspace+is+being+configured.';
  }
}
</script>
`)
