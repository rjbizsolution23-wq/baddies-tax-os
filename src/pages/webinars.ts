import { shell } from './layout'

export const webinarsPage = () => shell('Tax Consultation & Webinar Studio', 'webinars', `
<section id="webinars-header" class="mb-8">
  <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
    <div>
      <h1 class="text-3xl font-extrabold text-white"><i class="fas fa-video text-emerald-400 mr-2"></i>Tax Consultation &amp; Webinar Studio</h1>
      <p class="text-gray-400 text-sm">Schedule Zoom consultations, taxpayer educational webinars, and tax office training sessions with automated calendar links and attendance tracking.</p>
    </div>
    <button class="grad-bg text-white text-xs font-bold px-4 py-2.5 rounded-xl"><i class="fas fa-plus mr-1"></i>Schedule Tax Session</button>
  </div>
</section>

<section id="tax-webinar-list" class="card p-6">
  <h2 class="text-lg font-bold text-white mb-4"><i class="fas fa-calendar-days text-emerald-400 mr-2"></i>Upcoming Tax Education &amp; Consultation Sessions</h2>
  <div class="space-y-4 text-xs">
    <div class="bg-[#060a14] p-4 rounded-xl border border-gray-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
      <div>
        <div class="flex items-center gap-2 mb-1">
          <span class="font-bold text-white text-sm">Tax Planning for Self-Employed &amp; Business Owners (2026 Edition)</span>
          <span class="bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded text-[10px] font-semibold">Webinar</span>
        </div>
        <p class="text-gray-400">Date: Feb 12, 2026 at 7:00 PM EST · Registrants: 142 Taxpayers · Host: Rick Jefferson, PTIN Verified</p>
      </div>
      <a href="/t/tax-self-employed" target="_blank" class="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-3 py-1.5 rounded-lg text-xs">View Registration Page</a>
    </div>
    <div class="bg-[#060a14] p-4 rounded-xl border border-gray-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
      <div>
        <div class="flex items-center gap-2 mb-1">
          <span class="font-bold text-white text-sm">IRS Notice &amp; Back Tax Evaluation Consultation</span>
          <span class="bg-amber-500/20 text-amber-400 px-2 py-0.5 rounded text-[10px] font-semibold">1-on-1 Consultation</span>
        </div>
        <p class="text-gray-400">Recurring 30-Minute Zoom Slots · Auto-generates Zoom link and calendar invite upon form submission</p>
      </div>
      <a href="/t/tax-resolution" target="_blank" class="bg-gray-800 hover:bg-gray-700 text-gray-200 font-bold px-3 py-1.5 rounded-lg text-xs">View Booking Page</a>
    </div>
  </div>
</section>
`)
