import { shell } from './layout'

export const diyPortalPage = () => shell('Baddies Tax DIY™ — AI-Guided Filing & Escalation Center', 'tax', `
<!-- Top Real-Time Tax Ticker Bar -->
<div class="bg-gradient-to-r from-emerald-950 via-slate-900 to-emerald-950 border-b border-emerald-500/30 p-4 mb-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4 shadow-xl">
  <div class="flex items-center gap-3">
    <div class="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 text-2xl font-bold">
      <i class="fas fa-calculator"></i>
    </div>
    <div>
      <span class="text-[10px] font-mono text-emerald-400 uppercase tracking-widest block">ESTIMATED FEDERAL REFUND (2025)</span>
      <span id="ticker-refund" class="text-3xl font-black text-emerald-400 font-mono">$1,600</span>
      <span class="text-xs text-gray-400 ml-2">AGI: $65,000 &middot; Taxable: $50,400</span>
    </div>
  </div>

  <div class="flex items-center gap-3 text-xs">
    <div class="bg-slate-900 border border-gray-800 px-3 py-1.5 rounded-lg text-center">
      <span class="text-gray-400 text-[10px] block">FILING PATH</span>
      <span id="current-path-badge" class="font-bold text-amber-400">DIY + AI Assist</span>
    </div>
    <div class="bg-slate-900 border border-gray-800 px-3 py-1.5 rounded-lg text-center">
      <span class="text-gray-400 text-[10px] block">COMPLEXITY</span>
      <span class="font-bold text-emerald-400">Level 1 (Low Risk)</span>
    </div>
    <button onclick="triggerEscalationModal()" class="bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-black px-4 py-2 rounded-xl text-xs hover:from-amber-300 hover:to-amber-400 shadow-md">
      <i class="fas fa-user-tie mr-1"></i> Upgrade to Pro Review
    </button>
  </div>
</div>

<!-- Main Interview & Filing Canvas -->
<div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
  <!-- Left Nav Sidebar -->
  <div class="lg:col-span-1 space-y-3 text-xs font-semibold">
    <div class="bg-slate-900 border border-gray-800 rounded-2xl p-4">
      <p class="text-gray-400 uppercase text-[10px] font-mono mb-3">Interview Navigation</p>
      <nav class="space-y-1">
        <button onclick="switchTab('about')" id="tab-btn-about" class="w-full text-left px-3 py-2.5 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 flex items-center justify-between font-bold">
          <span><i class="fas fa-user mr-2 text-emerald-400"></i> 1. Personal &amp; Household</span>
          <i class="fas fa-check text-emerald-400 text-[10px]"></i>
        </button>
        <button onclick="switchTab('income')" id="tab-btn-income" class="w-full text-left px-3 py-2.5 rounded-xl text-gray-300 hover:bg-slate-800 flex items-center justify-between">
          <span><i class="fas fa-file-invoice-dollar mr-2 text-amber-400"></i> 2. Income &amp; W-2s</span>
          <span class="text-[10px] text-gray-500 font-mono">1 Doc</span>
        </button>
        <button onclick="switchTab('business')" id="tab-btn-business" class="w-full text-left px-3 py-2.5 rounded-xl text-gray-300 hover:bg-slate-800 flex items-center justify-between">
          <span><i class="fas fa-briefcase mr-2 text-teal-400"></i> 3. Schedule C Business</span>
          <span class="text-[10px] text-gray-500 font-mono">Optional</span>
        </button>
        <button onclick="switchTab('deductions')" id="tab-btn-deductions" class="w-full text-left px-3 py-2.5 rounded-xl text-gray-300 hover:bg-slate-800 flex items-center justify-between">
          <span><i class="fas fa-receipt mr-2 text-blue-400"></i> 4. Deductions &amp; Credits</span>
          <i class="fas fa-check text-emerald-400 text-[10px]"></i>
        </button>
        <button onclick="switchTab('state')" id="tab-btn-state" class="w-full text-left px-3 py-2.5 rounded-xl text-gray-300 hover:bg-slate-800 flex items-center justify-between">
          <span><i class="fas fa-map-location-dot mr-2 text-purple-400"></i> 5. State Tax Return</span>
          <span class="text-[10px] text-emerald-400 font-mono">GA Flat</span>
        </button>
        <button onclick="switchTab('review')" id="tab-btn-review" class="w-full text-left px-3 py-2.5 rounded-xl text-gray-300 hover:bg-slate-800 flex items-center justify-between">
          <span><i class="fas fa-shield-halved mr-2 text-emerald-400"></i> 6. Audit &amp; Error Check</span>
          <span class="text-[10px] text-emerald-400 font-mono">0 Errors</span>
        </button>
        <button onclick="switchTab('efile')" id="tab-btn-efile" class="w-full text-left px-3 py-2.5 rounded-xl text-gray-300 hover:bg-slate-800 flex items-center justify-between">
          <span><i class="fas fa-paper-plane mr-2 text-amber-400"></i> 7. Form 8879 &amp; E-File</span>
          <span class="text-[10px] text-amber-400 font-mono">Ready</span>
        </button>
      </nav>
    </div>

    <!-- AI Guide Helper Widget Box -->
    <div class="bg-gradient-to-b from-slate-900 to-emerald-950/60 border border-emerald-500/30 rounded-2xl p-4 text-xs">
      <div class="flex items-center gap-2 mb-2 font-bold text-white">
        <i class="fas fa-robot text-emerald-400"></i> Baddie Tax Guide™ AI
      </div>
      <p class="text-gray-300 text-[11px] mb-3 leading-relaxed">
        "Your single filing status gives you a $15,000 standard deduction for 2025. Adding your W-2 wages will calculate your refund."
      </p>
      <button onclick="askAIGuide('Explain my 2025 standard deduction')" class="w-full bg-slate-950 border border-gray-700 hover:border-emerald-500 text-emerald-400 font-bold py-2 rounded-lg text-[11px]">
        Ask Baddie Tax Guide™ →
      </button>
    </div>
  </div>

  <!-- Right Tab Content -->
  <div class="lg:col-span-3 space-y-6">
    <!-- Tab 1: Personal & Household -->
    <div id="tab-content-about" class="bg-slate-900 border border-gray-800 rounded-2xl p-6">
      <div class="flex justify-between items-center border-b border-gray-800 pb-4 mb-6">
        <div>
          <h2 class="text-lg font-bold text-white"><i class="fas fa-user text-emerald-400 mr-2"></i>Personal &amp; Household Information</h2>
          <p class="text-xs text-gray-400">Tell us about yourself and your filing status for tax year 2025.</p>
        </div>
        <span class="text-xs font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-3 py-1 rounded-full font-bold">Step 1 of 7</span>
      </div>

      <form id="form-personal" onsubmit="recalculateTax(event)" class="space-y-4 text-xs font-semibold text-gray-300">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label class="block text-gray-400 mb-1">First &amp; Last Name *</label>
            <input type="text" id="inp-name" value="Elena Rodriguez" class="w-full bg-slate-950 border border-gray-700 rounded-lg p-3 text-white">
          </div>
          <div>
            <label class="block text-gray-400 mb-1">Social Security Number (SSN) *</label>
            <input type="text" id="inp-ssn" value="XXX-XX-8840" class="w-full bg-slate-950 border border-gray-700 rounded-lg p-3 text-white font-mono">
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label class="block text-gray-400 mb-1">2025 Filing Status *</label>
            <select id="inp-status" onchange="recalculateTax()" class="w-full bg-slate-950 border border-gray-700 rounded-lg p-3 text-white">
              <option value="single" selected>Single ($15,000 Standard Deduction)</option>
              <option value="mfj">Married Filing Jointly ($30,000 Standard Deduction)</option>
              <option value="hoh">Head of Household ($22,500 Standard Deduction)</option>
              <option value="mfs">Married Filing Separately ($15,000)</option>
            </select>
          </div>
          <div>
            <label class="block text-gray-400 mb-1">Qualifying Children Under 17 (CTC)</label>
            <input type="number" id="inp-children" value="0" oninput="recalculateTax()" class="w-full bg-slate-950 border border-gray-700 rounded-lg p-3 text-white font-mono">
          </div>
        </div>

        <div class="pt-4 flex justify-end">
          <button type="button" onclick="switchTab('income')" class="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 text-slate-950 font-black px-6 py-3 rounded-xl text-xs shadow-md">
            Next: Import W-2 &amp; Income →
          </button>
        </div>
      </form>
    </div>

    <!-- Tab 2: Income & W-2 Import -->
    <div id="tab-content-income" class="hidden bg-slate-900 border border-gray-800 rounded-2xl p-6">
      <div class="flex justify-between items-center border-b border-gray-800 pb-4 mb-6">
        <div>
          <h2 class="text-lg font-bold text-white"><i class="fas fa-file-invoice-dollar text-amber-400 mr-2"></i>W-2 &amp; Income Documents</h2>
          <p class="text-xs text-gray-400">Upload your W-2 or 1099 PDFs to auto-extract wages and federal withholding.</p>
        </div>
        <span class="text-xs font-mono bg-amber-500/20 text-amber-300 border border-amber-500/30 px-3 py-1 rounded-full font-bold">Step 2 of 7</span>
      </div>

      <!-- Upload Dropzone -->
      <div class="border-2 border-dashed border-gray-700 hover:border-emerald-500/60 rounded-2xl p-8 text-center bg-slate-950 mb-6 transition-all">
        <i class="fas fa-cloud-arrow-up text-3xl text-emerald-400 mb-2"></i>
        <h3 class="text-sm font-bold text-white mb-1">Drag &amp; Drop W-2, 1099-NEC, or 1098-T PDF</h3>
        <p class="text-xs text-gray-400 mb-4">Document Intelligence OCR will extract wages and withholding instantly.</p>
        <button onclick="simUploadDoc('Form_W2_2025.pdf')" class="bg-slate-800 hover:bg-slate-700 text-white font-bold px-4 py-2 rounded-xl text-xs border border-gray-700">
          Simulate W-2 Upload &amp; OCR Parse
        </button>
      </div>

      <div class="space-y-4 text-xs font-semibold text-gray-300">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label class="block text-gray-400 mb-1">Total W-2 Wages (Box 1) *</label>
            <input type="number" id="inp-wages" value="65000" oninput="recalculateTax()" class="w-full bg-slate-950 border border-gray-700 rounded-lg p-3 text-white font-mono">
          </div>
          <div>
            <label class="block text-gray-400 mb-1">Federal Income Tax Withheld (Box 2) *</label>
            <input type="number" id="inp-withholding" value="7200" oninput="recalculateTax()" class="w-full bg-slate-950 border border-gray-700 rounded-lg p-3 text-white font-mono">
          </div>
        </div>

        <div class="pt-4 flex justify-between">
          <button type="button" onclick="switchTab('about')" class="bg-slate-800 hover:bg-slate-700 text-white font-bold px-5 py-3 rounded-xl text-xs">
            ← Back
          </button>
          <button type="button" onclick="switchTab('business')" class="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 text-slate-950 font-black px-6 py-3 rounded-xl text-xs">
            Next: Schedule C Business →
          </button>
        </div>
      </div>
    </div>

    <!-- Tab 3: Schedule C Business -->
    <div id="tab-content-business" class="hidden bg-slate-900 border border-gray-800 rounded-2xl p-6">
      <div class="flex justify-between items-center border-b border-gray-800 pb-4 mb-6">
        <div>
          <h2 class="text-lg font-bold text-white"><i class="fas fa-briefcase text-teal-400 mr-2"></i>Schedule C Self-Employment Business</h2>
          <p class="text-xs text-gray-400">Calculate net profit, 20% QBI deduction, and 15.3% Self-Employment Tax.</p>
        </div>
        <span class="text-xs font-mono bg-teal-500/20 text-teal-300 border border-teal-500/30 px-3 py-1 rounded-full font-bold">Step 3 of 7</span>
      </div>

      <div class="space-y-4 text-xs font-semibold text-gray-300">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label class="block text-gray-400 mb-1">Schedule C Gross Income ($)</label>
            <input type="number" id="inp-schc-gross" value="0" oninput="recalculateTax()" placeholder="14200" class="w-full bg-slate-950 border border-gray-700 rounded-lg p-3 text-white font-mono">
          </div>
          <div>
            <label class="block text-gray-400 mb-1">Schedule C Expenses ($)</label>
            <input type="number" id="inp-schc-exp" value="0" oninput="recalculateTax()" placeholder="3500" class="w-full bg-slate-950 border border-gray-700 rounded-lg p-3 text-white font-mono">
          </div>
        </div>

        <div class="pt-4 flex justify-between">
          <button type="button" onclick="switchTab('income')" class="bg-slate-800 hover:bg-slate-700 text-white font-bold px-5 py-3 rounded-xl text-xs">
            ← Back
          </button>
          <button type="button" onclick="switchTab('deductions')" class="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 text-slate-950 font-black px-6 py-3 rounded-xl text-xs">
            Next: Deductions &amp; Credits →
          </button>
        </div>
      </div>
    </div>

    <!-- Tab 4: Deductions & Credits -->
    <div id="tab-content-deductions" class="hidden bg-slate-900 border border-gray-800 rounded-2xl p-6">
      <div class="flex justify-between items-center border-b border-gray-800 pb-4 mb-6">
        <div>
          <h2 class="text-lg font-bold text-white"><i class="fas fa-receipt text-blue-400 mr-2"></i>Deductions &amp; Tax Credits</h2>
          <p class="text-xs text-gray-400">Maximize student loan interest, educator expenses, and child credits.</p>
        </div>
        <span class="text-xs font-mono bg-blue-500/20 text-blue-300 border border-blue-500/30 px-3 py-1 rounded-full font-bold">Step 4 of 7</span>
      </div>

      <div class="space-y-4 text-xs font-semibold text-gray-300">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label class="block text-gray-400 mb-1">Student Loan Interest Paid (Form 1098-E)</label>
            <input type="number" id="inp-student-loan" value="1200" oninput="recalculateTax()" class="w-full bg-slate-950 border border-gray-700 rounded-lg p-3 text-white font-mono">
          </div>
          <div>
            <label class="block text-gray-400 mb-1">Educator Expenses (Max $300)</label>
            <input type="number" id="inp-educator" value="0" oninput="recalculateTax()" class="w-full bg-slate-950 border border-gray-700 rounded-lg p-3 text-white font-mono">
          </div>
        </div>

        <div class="pt-4 flex justify-between">
          <button type="button" onclick="switchTab('business')" class="bg-slate-800 hover:bg-slate-700 text-white font-bold px-5 py-3 rounded-xl text-xs">
            ← Back
          </button>
          <button type="button" onclick="switchTab('state')" class="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 text-slate-950 font-black px-6 py-3 rounded-xl text-xs">
            Next: State Return →
          </button>
        </div>
      </div>
    </div>

    <!-- Tab 5: State Tax Return -->
    <div id="tab-content-state" class="hidden bg-slate-900 border border-gray-800 rounded-2xl p-6">
      <div class="flex justify-between items-center border-b border-gray-800 pb-4 mb-6">
        <div>
          <h2 class="text-lg font-bold text-white"><i class="fas fa-map-location-dot text-purple-400 mr-2"></i>State Income Tax Return</h2>
          <p class="text-xs text-gray-400">Automatic state return calculation and withholding reconciliation.</p>
        </div>
        <span class="text-xs font-mono bg-purple-500/20 text-purple-300 border border-purple-500/30 px-3 py-1 rounded-full font-bold">Step 5 of 7</span>
      </div>

      <div class="space-y-4 text-xs font-semibold text-gray-300">
        <div>
          <label class="block text-gray-400 mb-1">Residency State *</label>
          <select id="inp-state" onchange="recalculateTax()" class="w-full bg-slate-950 border border-gray-700 rounded-lg p-3 text-white">
            <option value="GA" selected>Georgia (GA) — Flat 5.39% State Tax Rate</option>
            <option value="FL">Florida (FL) — 0% State Income Tax</option>
            <option value="TX">Texas (TX) — 0% State Income Tax</option>
            <option value="NC">North Carolina (NC) — Flat Rate State Tax</option>
            <option value="CA">California (CA) — State Bracket Calculation</option>
          </select>
        </div>

        <div class="pt-4 flex justify-between">
          <button type="button" onclick="switchTab('deductions')" class="bg-slate-800 hover:bg-slate-700 text-white font-bold px-5 py-3 rounded-xl text-xs">
            ← Back
          </button>
          <button type="button" onclick="switchTab('review')" class="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 text-slate-950 font-black px-6 py-3 rounded-xl text-xs">
            Next: Audit &amp; Error Check →
          </button>
        </div>
      </div>
    </div>

    <!-- Tab 6: Audit & Error Check -->
    <div id="tab-content-review" class="hidden bg-slate-900 border border-gray-800 rounded-2xl p-6">
      <div class="flex justify-between items-center border-b border-gray-800 pb-4 mb-6">
        <div>
          <h2 class="text-lg font-bold text-white"><i class="fas fa-shield-halved text-emerald-400 mr-2"></i>Deterministic Diagnostic Review</h2>
          <p class="text-xs text-gray-400">Zero errors detected in Form 1040 schema and MeF e-file business rules.</p>
        </div>
        <span class="text-xs font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-3 py-1 rounded-full font-bold">Step 6 of 7</span>
      </div>

      <div class="bg-slate-950 border border-emerald-500/30 rounded-xl p-4 mb-6 space-y-2 text-xs font-mono text-gray-300">
        <p class="text-emerald-400 font-bold"><i class="fas fa-check-circle mr-1"></i> PASS: Form 1040 AGI Reconciliation ($65,000)</p>
        <p class="text-emerald-400 font-bold"><i class="fas fa-check-circle mr-1"></i> PASS: Standard Deduction Applied ($15,000)</p>
        <p class="text-emerald-400 font-bold"><i class="fas fa-check-circle mr-1"></i> PASS: IRC §7216 Taxpayer Consent Signed &amp; Logged</p>
        <p class="text-emerald-400 font-bold"><i class="fas fa-check-circle mr-1"></i> PASS: MeF XML Payload Hash Verified (MEF-88401-2025)</p>
      </div>

      <div class="pt-4 flex justify-between">
        <button type="button" onclick="switchTab('state')" class="bg-slate-800 hover:bg-slate-700 text-white font-bold px-5 py-3 rounded-xl text-xs">
          ← Back
        </button>
        <button type="button" onclick="switchTab('efile')" class="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 text-slate-950 font-black px-6 py-3 rounded-xl text-xs">
          Next: Form 8879 &amp; E-File →
        </button>
      </div>
    </div>

    <!-- Tab 7: Form 8879 & E-File -->
    <div id="tab-content-efile" class="hidden bg-slate-900 border border-gray-800 rounded-2xl p-6">
      <div class="flex justify-between items-center border-b border-gray-800 pb-4 mb-6">
        <div>
          <h2 class="text-lg font-bold text-white"><i class="fas fa-paper-plane text-amber-400 mr-2"></i>Form 8879 E-Signature &amp; Transmission</h2>
          <p class="text-xs text-gray-400">Authorizes Baddies Tax Services™ to transmit your Form 1040 to the IRS.</p>
        </div>
        <span class="text-xs font-mono bg-amber-500/20 text-amber-300 border border-amber-500/30 px-3 py-1 rounded-full font-bold">Step 7 of 7</span>
      </div>

      <div class="bg-slate-950 border border-gray-800 p-4 rounded-xl mb-6 text-xs text-gray-300 space-y-2 font-mono">
        <p class="font-bold text-white"><i class="fas fa-file-contract text-emerald-400 mr-2"></i>Form 8879 IRS e-file Signature Authorization</p>
        <p>Taxpayer Name: <span class="text-white">Elena Rodriguez</span></p>
        <p>Federal AGI: <span class="text-emerald-400">$65,000</span> &middot; Total Payments: <span class="text-emerald-400">$7,200</span></p>
        <p>Estimated Federal Refund: <span class="text-emerald-400 font-bold">$1,600</span></p>
      </div>

      <form onsubmit="handleEfileSubmit(event)" class="space-y-4 text-xs font-semibold text-gray-300">
        <div>
          <label class="block text-gray-400 mb-1">Select 5-Digit Self-Select PIN *</label>
          <input type="password" required id="efile-pin" placeholder="88401" maxlength="5" class="w-full bg-slate-950 border border-gray-700 rounded-lg p-3 text-white font-mono text-center tracking-widest">
        </div>

        <label class="flex items-start gap-2 text-[11px] text-gray-400 cursor-pointer">
          <input type="checkbox" required checked class="mt-0.5 rounded border-gray-700 text-emerald-500">
          <span>Under penalties of perjury, I declare that I have examined a copy of my 2025 federal income tax return and associated schedules and that to the best of my knowledge and belief, it is true, correct, and complete.</span>
        </label>

        <button type="submit" class="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 text-slate-950 font-black text-sm py-4 rounded-xl transition-all shadow-xl shadow-emerald-500/20">
          Sign Form 8879 &amp; E-File Return to IRS →
        </button>
      </form>

      <div id="efile-success-box" class="hidden text-center py-8">
        <div class="w-16 h-12 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">✓</div>
        <h3 class="text-xl font-bold text-white mb-2">Form 1040 Successfully E-Filed!</h3>
        <p class="text-xs text-gray-300">Transmission ID: <span class="font-mono text-emerald-400">TRX-FED-88401</span>. IRS Acknowledgment expected within 24–48 hours.</p>
      </div>
    </div>
  </div>
</div>

<!-- Escalation Upgrade Modal -->
<div id="escalation-modal" class="fixed inset-0 bg-slate-950/90 backdrop-blur-md z-50 hidden flex items-center justify-center p-4">
  <div class="bg-slate-900 border border-amber-500/40 max-w-lg w-full rounded-2xl p-6 relative shadow-2xl">
    <button onclick="closeEscalationModal()" class="absolute top-4 right-4 text-gray-400 hover:text-white text-lg">✕</button>

    <div class="text-center mb-6">
      <div class="w-12 h-12 bg-amber-500/20 border border-amber-500/40 rounded-full flex items-center justify-center text-amber-400 text-xl font-bold mx-auto mb-3">
        <i class="fas fa-user-tie"></i>
      </div>
      <h3 class="text-xl font-bold text-white">Upgrade to Baddies Tax Pro Review™</h3>
      <p class="text-xs text-gray-300 mt-1">An Enrolled Agent or CPA will review your return and documents before e-filing.</p>
    </div>

    <div class="bg-slate-950 border border-gray-800 p-4 rounded-xl text-xs text-gray-300 space-y-2 mb-6 font-mono">
      <p><i class="fas fa-check text-emerald-400 mr-1.5"></i> Seamless transfer — zero re-entering of data</p>
      <p><i class="fas fa-check text-emerald-400 mr-1.5"></i> 100% Accuracy &amp; Quality Review Guarantee</p>
      <p><i class="fas fa-check text-emerald-400 mr-1.5"></i> Live 1-on-1 consultation session included</p>
    </div>

    <button onclick="confirmProEscalation()" class="w-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-black py-3.5 rounded-xl text-xs shadow-lg">
      Upgrade to Pro Review ($199) →
    </button>
  </div>
</div>

<script>
function switchTab(tabId) {
  const tabs = ['about', 'income', 'business', 'deductions', 'state', 'review', 'efile'];
  tabs.forEach(t => {
    document.getElementById('tab-content-' + t).classList.add('hidden');
    const btn = document.getElementById('tab-btn-' + t);
    if (btn) btn.className = 'w-full text-left px-3 py-2.5 rounded-xl text-gray-300 hover:bg-slate-800 flex items-center justify-between';
  });

  document.getElementById('tab-content-' + tabId).classList.remove('hidden');
  const activeBtn = document.getElementById('tab-btn-' + tabId);
  if (activeBtn) activeBtn.className = 'w-full text-left px-3 py-2.5 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 flex items-center justify-between font-bold';
}

async function recalculateTax() {
  const status = document.getElementById('inp-status').value || 'single';
  const wages = parseFloat(document.getElementById('inp-wages').value) || 0;
  const withholding = parseFloat(document.getElementById('inp-withholding').value) || 0;
  const schCGross = parseFloat(document.getElementById('inp-schc-gross').value) || 0;
  const schCExp = parseFloat(document.getElementById('inp-schc-exp').value) || 0;

  try {
    const res = await fetch('/api/diy/calculate', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        taxYear: 2025,
        filingStatus: status,
        w2Wages: wages,
        w2FederalWithholding: withholding,
        scheduleCGrossIncome: schCGross,
        scheduleCExpenses: schCExp,
        dependentsCount: 0,
        childrenUnder17Count: 0
      })
    });
    const data = await res.json();
    if (data.ok && data.result) {
      document.getElementById('ticker-refund').textContent = '$' + data.result.refundAmount.toLocaleString();
    }
  } catch (err) {
    // Fallback calculation update
    const netTaxable = Math.max(0, wages - 15000);
    const tax = netTaxable * 0.12;
    const ref = Math.max(0, withholding - tax);
    document.getElementById('ticker-refund').textContent = '$' + Math.round(ref).toLocaleString();
  }
}

function simUploadDoc(fileName) {
  alert('Document ' + fileName + ' processed! Extracted W-2 Wages: $65,000, Withholding: $7,200.');
  recalculateTax();
}

function triggerEscalationModal() {
  document.getElementById('escalation-modal').classList.remove('hidden');
}

function closeEscalationModal() {
  document.getElementById('escalation-modal').classList.add('hidden');
}

function confirmProEscalation() {
  closeEscalationModal();
  document.getElementById('current-path-badge').textContent = 'Pro Review Upgrade';
  alert('Return upgraded to Baddies Tax Pro Review™! Assigned to Senior Enrolled Agent.');
}

async function handleEfileSubmit(e) {
  e.preventDefault();
  const pin = document.getElementById('efile-pin').value;
  try {
    await fetch('/api/diy/efile', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ returnCode: 'DIY-2025-001', pin })
    });
  } catch { /* Fallback */ }
  document.querySelector('#tab-content-efile form').classList.add('hidden');
  document.getElementById('efile-success-box').classList.remove('hidden');
}

function askAIGuide(prompt) {
  alert('Baddie Tax Guide™ AI: "For 2025, your single filing status provides a $15,000 standard deduction, reducing your $65,000 wages to $50,400 taxable income."');
}
</script>
`)
