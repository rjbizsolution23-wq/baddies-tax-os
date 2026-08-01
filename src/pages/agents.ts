import { shell } from './layout'

export const agentsPage = () => shell('Tax AI Agent Workforce', 'agents', `
<section id="agents-header" class="mb-8">
  <h1 class="text-3xl font-extrabold text-white mb-2"><i class="fas fa-robot text-emerald-400 mr-2"></i>Tax AI Agent Workforce &amp; Governance</h1>
  <p class="text-gray-400 text-sm">Governed AI agents assisting with taxpayer intake, missing document alerts, notice classification, copy optimization, and Circular 230 / §7216 compliance checks.</p>
</section>

<section id="agents-registry" class="grid md:grid-cols-2 gap-6 mb-12">
  <div class="card p-6">
    <div class="flex items-center gap-3 mb-3">
      <div class="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xl"><i class="fas fa-file-pen"></i></div>
      <div>
        <h3 class="font-bold text-white text-base">Tax Copy &amp; SEO Agent</h3>
        <p class="text-xs text-gray-500">Search &amp; Conversational Copy Specialist</p>
      </div>
    </div>
    <p class="text-gray-300 text-xs mb-4">Generates compliant tax headline formulas, meta descriptions, and CTA labels without making false refund guarantees or Circular 230 claims.</p>
    <div class="bg-[#060a14] p-3 rounded-lg text-xs text-gray-400 border border-gray-800">
      <span class="text-emerald-400 font-bold">Rule:</span> Must include disclaimers on all Offer in Compromise or tax debt resolution copy.
    </div>
  </div>

  <div class="card p-6">
    <div class="flex items-center gap-3 mb-3">
      <div class="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xl"><i class="fas fa-shield-halved"></i></div>
      <div>
        <h3 class="font-bold text-white text-base">Tax Compliance Guard Agent</h3>
        <p class="text-xs text-gray-500">Circular 230 &amp; §7216 Reviewer</p>
      </div>
    </div>
    <p class="text-gray-300 text-xs mb-4">Scans generated emails, SMS, and landing copy for banned phrases ("pennies on the dollar", "IRS approved", "guaranteed refund") before publishing.</p>
    <div class="bg-[#060a14] p-3 rounded-lg text-xs text-gray-400 border border-gray-800">
      <span class="text-emerald-400 font-bold">Rule:</span> Flags any copy lacking required IRC §7216 disclosure clauses.
    </div>
  </div>

  <div class="card p-6">
    <div class="flex items-center gap-3 mb-3">
      <div class="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xl"><i class="fas fa-user-check"></i></div>
      <div>
        <h3 class="font-bold text-white text-base">Taxpayer Intake Concierge</h3>
        <p class="text-xs text-gray-500">Intake Guidance &amp; Missing Document Assistant</p>
      </div>
    </div>
    <p class="text-gray-300 text-xs mb-4">Analyzes submitted intake forms, identifies missing documents (e.g. Schedule C 1099-K missing), and sends SMS reminders to taxpayers.</p>
    <div class="bg-[#060a14] p-3 rounded-lg text-xs text-gray-400 border border-gray-800">
      <span class="text-emerald-400 font-bold">Rule:</span> Never provides tax advice or final tax calculations without preparer review.
    </div>
  </div>

  <div class="card p-6">
    <div class="flex items-center gap-3 mb-3">
      <div class="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xl"><i class="fas fa-envelope-open-text"></i></div>
      <div>
        <h3 class="font-bold text-white text-base">IRS Notice Classifier Agent</h3>
        <p class="text-xs text-gray-500">Notice ID &amp; Timeline Specialist</p>
      </div>
    </div>
    <p class="text-gray-300 text-xs mb-4">Classifies uploaded IRS letters (CP2000, CP504, LT11, 6072) and calculates response deadline windows for preparers.</p>
    <div class="bg-[#060a14] p-3 rounded-lg text-xs text-gray-400 border border-gray-800">
      <span class="text-emerald-400 font-bold">Rule:</span> Escalates all levy, garnishment, or criminal notices to senior Enrolled Agent immediately.
    </div>
  </div>
</section>
`)
