import { diyStandaloneShell } from './diyStandaloneLayout'

// 1. Full Guided Tax Interview Page (/diy/interview)
export const diyInterviewPage = () => diyStandaloneShell('Tax Interview | Baddies Tax DIY™', `
<div class="py-12 bg-slate-950 min-h-screen">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Header Progress -->
    <div class="mb-8 bg-slate-900 border border-emerald-500/30 p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4">
      <div>
        <span class="text-xs font-mono text-emerald-400 font-bold uppercase tracking-widest block mb-1">Step 1 of 7 &middot; Guided Tax Interview</span>
        <h1 class="text-2xl font-black text-white">Personal &amp; Household Information</h1>
      </div>
      <div class="w-full md:w-64 bg-slate-950 h-3 rounded-full overflow-hidden border border-gray-800">
        <div class="bg-gradient-to-r from-emerald-500 to-teal-400 h-full w-[14%] rounded-full"></div>
      </div>
    </div>

    <!-- Interview Form Cards -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div class="lg:col-span-2 space-y-6">
        <!-- Card 1: Taxpayer Info -->
        <div class="bg-slate-900 border border-gray-800 p-6 rounded-2xl space-y-4">
          <h2 class="text-lg font-bold text-white flex items-center gap-2">
            <i class="fas fa-user text-emerald-400"></i> Primary Taxpayer Details
          </h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-semibold text-gray-300">
            <div>
              <label class="block text-gray-400 mb-1">First Name *</label>
              <input type="text" value="Elena" class="w-full bg-slate-950 border border-gray-700 rounded-lg p-3 text-white">
            </div>
            <div>
              <label class="block text-gray-400 mb-1">Last Name *</label>
              <input type="text" value="Rodriguez" class="w-full bg-slate-950 border border-gray-700 rounded-lg p-3 text-white">
            </div>
            <div>
              <label class="block text-gray-400 mb-1">Social Security Number (SSN) *</label>
              <input type="text" value="XXX-XX-4819" class="w-full bg-slate-950 border border-gray-700 rounded-lg p-3 text-white">
            </div>
            <div>
              <label class="block text-gray-400 mb-1">Date of Birth *</label>
              <input type="date" value="1988-06-14" class="w-full bg-slate-950 border border-gray-700 rounded-lg p-3 text-white">
            </div>
          </div>
        </div>

        <!-- Card 2: Filing Status -->
        <div class="bg-slate-900 border border-gray-800 p-6 rounded-2xl space-y-4">
          <h2 class="text-lg font-bold text-white flex items-center gap-2">
            <i class="fas fa-ring text-amber-400"></i> Filing Status Selection
          </h2>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-bold">
            <label class="p-4 rounded-xl bg-slate-950 border border-emerald-500 text-emerald-400 flex items-center gap-3 cursor-pointer">
              <input type="radio" name="status" checked class="accent-emerald-500"> Single
            </label>
            <label class="p-4 rounded-xl bg-slate-950 border border-gray-800 text-gray-400 hover:text-white flex items-center gap-3 cursor-pointer">
              <input type="radio" name="status" class="accent-emerald-500"> Married Filing Jointly
            </label>
            <label class="p-4 rounded-xl bg-slate-950 border border-gray-800 text-gray-400 hover:text-white flex items-center gap-3 cursor-pointer">
              <input type="radio" name="status" class="accent-emerald-500"> Head of Household
            </label>
          </div>
        </div>

        <!-- Navigation Buttons -->
        <div class="flex items-center justify-between pt-4">
          <a href="/diy" class="bg-slate-900 hover:bg-slate-800 text-gray-400 px-6 py-3 rounded-xl text-xs font-bold border border-gray-800">
            ← Back to Overview
          </a>
          <a href="/diy/documents" class="bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-black px-8 py-3 rounded-xl text-xs shadow-lg shadow-emerald-500/20">
            Continue to Document Import →
          </a>
        </div>
      </div>

      <!-- Sidebar: Baddie Tax Guide AI -->
      <div class="space-y-6">
        <div class="bg-slate-900 border border-amber-500/30 p-6 rounded-2xl space-y-3">
          <div class="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase">
            <i class="fas fa-robot text-base"></i> Baddie Tax Guide™
          </div>
          <p class="text-xs text-gray-300 leading-relaxed">
            "Filing status determines your standard deduction amount. As a Single filer for 2025, your standard deduction is <strong>$15,000</strong>."
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
`)

// 2. Full Document Import Page (/diy/documents)
export const diyDocumentsPage = () => diyStandaloneShell('Document Import & Intelligence | Baddies Tax DIY™', `
<div class="py-12 bg-slate-950 min-h-screen">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="mb-8 bg-slate-900 border border-emerald-500/30 p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4">
      <div>
        <span class="text-xs font-mono text-emerald-400 font-bold uppercase tracking-widest block mb-1">Step 2 of 7 &middot; Document Intelligence</span>
        <h1 class="text-2xl font-black text-white">Import W-2s, 1099s &amp; Tax Documents</h1>
      </div>
      <div class="w-full md:w-64 bg-slate-950 h-3 rounded-full overflow-hidden border border-gray-800">
        <div class="bg-gradient-to-r from-emerald-500 to-teal-400 h-full w-[28%] rounded-full"></div>
      </div>
    </div>

    <!-- Upload & Extracted Fields Matrix -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
      <!-- Upload Dropzone -->
      <div class="bg-slate-900 border-2 border-dashed border-emerald-500/40 p-8 rounded-2xl text-center space-y-4 flex flex-col items-center justify-center">
        <div class="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 text-3xl">
          <i class="fas fa-file-arrow-up"></i>
        </div>
        <div>
          <h3 class="text-base font-bold text-white mb-1">Drag &amp; Drop W-2, 1099, or 1098 PDFs</h3>
          <p class="text-xs text-gray-400">OCR intelligence automatically extracts wages, withholding, and EINs.</p>
        </div>
        <button onclick="alert('Document Form_W2_2025.pdf uploaded and parsed successfully!')" class="bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-black text-xs px-6 py-3 rounded-xl shadow-lg">
          Select Document File
        </button>
      </div>

      <!-- Parsed Confirmation Matrix -->
      <div class="bg-slate-900 border border-gray-800 p-6 rounded-2xl space-y-4">
        <div class="flex items-center justify-between border-b border-gray-800 pb-3">
          <span class="font-bold text-white text-sm">Extracted W-2 Fields</span>
          <span class="bg-emerald-500/20 text-emerald-400 text-[10px] px-2 py-0.5 rounded font-mono uppercase font-bold">100% Confirmed</span>
        </div>
        <div class="space-y-3 text-xs">
          <div class="flex justify-between bg-slate-950 p-3 rounded-lg border border-gray-800">
            <span class="text-gray-400">Employer EIN:</span>
            <span class="text-white font-mono font-bold">58-1920491 (Acme Tech LLC)</span>
          </div>
          <div class="flex justify-between bg-slate-950 p-3 rounded-lg border border-gray-800">
            <span class="text-gray-400">Box 1 Wages:</span>
            <span class="text-emerald-400 font-mono font-bold">$65,000.00</span>
          </div>
          <div class="flex justify-between bg-slate-950 p-3 rounded-lg border border-gray-800">
            <span class="text-gray-400">Box 2 Federal Withholding:</span>
            <span class="text-amber-400 font-mono font-bold">$7,200.00</span>
          </div>
          <div class="flex justify-between bg-slate-950 p-3 rounded-lg border border-gray-800">
            <span class="text-gray-400">Box 17 State Withholding (GA):</span>
            <span class="text-emerald-400 font-mono font-bold">$1,850.00</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Navigation -->
    <div class="flex items-center justify-between pt-4">
      <a href="/diy/interview" class="bg-slate-900 hover:bg-slate-800 text-gray-400 px-6 py-3 rounded-xl text-xs font-bold border border-gray-800">
        ← Back to Interview
      </a>
      <a href="/diy/diagnostics" class="bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-black px-8 py-3 rounded-xl text-xs shadow-lg shadow-emerald-500/20">
        Run Error Check &amp; Diagnostics →
      </a>
    </div>
  </div>
</div>
`)

// 3. Full Error Check & Diagnostics Page (/diy/diagnostics)
export const diyDiagnosticsPage = () => diyStandaloneShell('Diagnostics & Complexity Check | Baddies Tax DIY™', `
<div class="py-12 bg-slate-950 min-h-screen">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="mb-8 bg-slate-900 border border-emerald-500/30 p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4">
      <div>
        <span class="text-xs font-mono text-emerald-400 font-bold uppercase tracking-widest block mb-1">Step 6 of 7 &middot; Error &amp; Risk Review</span>
        <h1 class="text-2xl font-black text-white">IRS MeF Diagnostics &amp; Risk Audit</h1>
      </div>
      <div class="w-full md:w-64 bg-slate-950 h-3 rounded-full overflow-hidden border border-gray-800">
        <div class="bg-gradient-to-r from-emerald-500 to-teal-400 h-full w-[85%] rounded-full"></div>
      </div>
    </div>

    <!-- Diagnostic Cards -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div class="bg-slate-900 border border-emerald-500/40 p-6 rounded-2xl text-center space-y-2">
        <i class="fas fa-check-circle text-emerald-400 text-3xl mb-2 block"></i>
        <h3 class="text-lg font-bold text-white">0 MeF Schema Errors</h3>
        <p class="text-xs text-gray-400">Your return matches all IRS electronic filing business rules.</p>
      </div>

      <div class="bg-slate-900 border border-gray-800 p-6 rounded-2xl text-center space-y-2">
        <i class="fas fa-gauge text-amber-400 text-3xl mb-2 block"></i>
        <h3 class="text-lg font-bold text-white">Complexity: Level 1</h3>
        <p class="text-xs text-gray-400">Supported low-complexity return suitable for direct DIY filing.</p>
      </div>

      <div class="bg-slate-900 border border-gray-800 p-6 rounded-2xl text-center space-y-2">
        <i class="fas fa-shield-halved text-emerald-400 text-3xl mb-2 block"></i>
        <h3 class="text-lg font-bold text-white">Audit Risk: Very Low</h3>
        <p class="text-xs text-gray-400">No high-risk credit mismatches or unverified deductions detected.</p>
      </div>
    </div>

    <!-- Navigation -->
    <div class="flex items-center justify-between pt-4">
      <a href="/diy/documents" class="bg-slate-900 hover:bg-slate-800 text-gray-400 px-6 py-3 rounded-xl text-xs font-bold border border-gray-800">
        ← Back to Documents
      </a>
      <a href="/diy/efile" class="bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-black px-8 py-3 rounded-xl text-xs shadow-lg shadow-emerald-500/20">
        Proceed to E-File Signature →
      </a>
    </div>
  </div>
</div>
`)

// 4. Full Pro Escalation Page (/diy/escalate)
export const diyEscalatePage = () => diyStandaloneShell('Pro Review & Escalation | Baddies Tax DIY™', `
<div class="py-12 bg-slate-950 min-h-screen">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center max-w-3xl mx-auto mb-12">
      <div class="inline-flex items-center gap-2 bg-amber-950 border border-amber-500/40 px-4 py-1.5 rounded-full text-amber-400 text-xs font-bold uppercase mb-4">
        <i class="fas fa-user-tie"></i> Live Tax Professional Handoff
      </div>
      <h1 class="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
        Upgrade to Baddies Tax Pro Review™
      </h1>
      <p class="text-sm text-gray-300 leading-relaxed">
        Get peace of mind. A licensed CPA or Enrolled Agent (EA) reviews your return, verifies deductions, answers your questions, and signs off before e-filing — without re-entering any data.
      </p>
    </div>

    <!-- Assigned Pro Card -->
    <div class="bg-slate-900 border border-amber-500/30 p-8 rounded-2xl max-w-2xl mx-auto mb-10 shadow-2xl">
      <div class="flex items-center gap-4 mb-6">
        <div class="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-black text-2xl">
          <i class="fas fa-user-check"></i>
        </div>
        <div>
          <h3 class="text-lg font-bold text-white">Marcus Vance, CPA, EA</h3>
          <span class="text-xs text-amber-400 font-mono font-bold block">PTIN Active &middot; 14 Years Tax Practice Experience</span>
          <span class="text-[11px] text-gray-400">Specializes in Individual, Schedule C, and Multi-State Returns</span>
        </div>
      </div>

      <div class="space-y-3 border-t border-gray-800 pt-4 text-xs text-gray-300 mb-6">
        <div class="flex items-center gap-2">
          <i class="fas fa-check text-emerald-400"></i> Line-by-line verification of your Form 1040 and Schedules
        </div>
        <div class="flex items-center gap-2">
          <i class="fas fa-check text-emerald-400"></i> Circular 230 credit due-diligence review
        </div>
        <div class="flex items-center gap-2">
          <i class="fas fa-check text-emerald-400"></i> Professional signature &amp; audit representation guarantee
        </div>
      </div>

      <button onclick="alert('Baddies Tax Pro Review requested! Marcus Vance, CPA will review your tax file within 24 hours.')" class="w-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black py-4 rounded-xl text-sm shadow-xl shadow-amber-500/20">
        Upgrade to Pro Review ($199) →
      </button>
    </div>
  </div>
</div>
`)

// 5. Full Form 8879 E-File Signature Page (/diy/efile)
export const diyEfilePage = () => diyStandaloneShell('Form 8879 E-File Signature | Baddies Tax DIY™', `
<div class="py-12 bg-slate-950 min-h-screen">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="mb-8 bg-slate-900 border border-emerald-500/30 p-6 rounded-2xl text-center">
      <span class="text-xs font-mono text-emerald-400 font-bold uppercase tracking-widest block mb-1">Final Step 7 &middot; IRS Form 8879 Authorization</span>
      <h1 class="text-2xl font-black text-white">Sign &amp; Transmit Your 2025 Tax Return</h1>
    </div>

    <!-- Form 1040 Summary Review -->
    <div class="bg-slate-900 border border-gray-800 p-6 rounded-2xl mb-8 space-y-3 text-xs">
      <h3 class="text-sm font-bold text-white border-b border-gray-800 pb-2">Form 1040 Federal Tax Summary</h3>
      <div class="flex justify-between py-1 border-b border-gray-800/60">
        <span class="text-gray-400">Line 1: Wages &amp; Salaries</span>
        <span class="text-white font-mono font-bold">$65,000</span>
      </div>
      <div class="flex justify-between py-1 border-b border-gray-800/60">
        <span class="text-gray-400">Line 11: Adjusted Gross Income (AGI)</span>
        <span class="text-white font-mono font-bold">$65,000</span>
      </div>
      <div class="flex justify-between py-1 border-b border-gray-800/60">
        <span class="text-gray-400">Line 12: Standard Deduction (Single)</span>
        <span class="text-white font-mono font-bold">-$15,000</span>
      </div>
      <div class="flex justify-between py-1 border-b border-gray-800/60">
        <span class="text-gray-400">Line 15: Taxable Income</span>
        <span class="text-white font-mono font-bold">$50,400</span>
      </div>
      <div class="flex justify-between py-1 border-b border-gray-800/60">
        <span class="text-gray-400">Line 25: Federal Income Tax Withheld</span>
        <span class="text-emerald-400 font-mono font-bold">$7,200</span>
      </div>
      <div class="flex justify-between py-2 text-sm font-bold bg-emerald-950/40 p-3 rounded-xl border border-emerald-500/30">
        <span class="text-emerald-400">Line 34: Estimated Refund Amount</span>
        <span class="text-emerald-400 font-mono font-black text-lg">$3,450</span>
      </div>
    </div>

    <!-- Form 8879 Self-Select PIN Entry -->
    <div class="bg-slate-900 border border-emerald-500/30 p-6 rounded-2xl mb-8 space-y-4">
      <h3 class="text-sm font-bold text-white flex items-center gap-2">
        <i class="fas fa-file-signature text-emerald-400"></i> IRS Form 8879 Electronic Signature
      </h3>
      <div class="space-y-3 text-xs font-semibold text-gray-300">
        <div>
          <label class="block text-gray-400 mb-1">Enter 5-Digit Self-Select PIN *</label>
          <input type="password" maxlength="5" value="92810" class="w-full bg-slate-950 border border-gray-700 rounded-lg p-3 text-white font-mono tracking-widest text-center text-lg">
        </div>
        <p class="text-[11px] text-gray-400 leading-relaxed">
          Under penalties of perjury, I declare that I have examined a copy of my 2025 federal and state individual income tax returns and accompanying schedules and statements, and to the best of my knowledge and belief, it is true, correct, and complete.
        </p>
      </div>

      <button onclick="alert('Form 8879 signed and return queued for IRS MeF transmission!')" class="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-black text-sm py-4 rounded-xl shadow-xl shadow-emerald-500/20">
        Authorize &amp; E-File Return ($49) →
      </button>
    </div>
  </div>
</div>
`)

// 6. Full E-File Acceptance Tracker Page (/diy/status)
export const diyStatusPage = () => diyStandaloneShell('E-File Acceptance Tracker | Baddies Tax DIY™', `
<div class="py-12 bg-slate-950 min-h-screen">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="mb-8 bg-slate-900 border border-emerald-500/30 p-6 rounded-2xl text-center">
      <span class="text-xs font-mono text-emerald-400 font-bold uppercase tracking-widest block mb-1">Transmission ID: TRX-2025-92810</span>
      <h1 class="text-2xl font-black text-white">E-File Transmission &amp; Acceptance Center</h1>
    </div>

    <!-- Status Timeline -->
    <div class="bg-slate-900 border border-gray-800 p-8 rounded-2xl mb-8 space-y-6">
      <div class="flex items-center gap-4">
        <div class="w-10 h-10 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center font-bold text-lg">
          <i class="fas fa-check"></i>
        </div>
        <div>
          <h4 class="font-bold text-white text-sm">Return Authorized &amp; Signed</h4>
          <span class="text-xs text-gray-400">Form 8879 e-signature recorded on August 1, 2026.</span>
        </div>
      </div>

      <div class="flex items-center gap-4">
        <div class="w-10 h-10 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center font-bold text-lg">
          <i class="fas fa-paper-plane"></i>
        </div>
        <div>
          <h4 class="font-bold text-white text-sm">Transmitted to IRS MeF Gateway</h4>
          <span class="text-xs text-gray-400">MeF XML payload hash verified with 0 business rule errors.</span>
        </div>
      </div>

      <div class="flex items-center gap-4">
        <div class="w-10 h-10 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center font-bold text-lg">
          <i class="fas fa-circle-check"></i>
        </div>
        <div>
          <h4 class="font-bold text-emerald-400 text-sm">Federal Return Accepted</h4>
          <span class="text-xs text-gray-400">IRS Acknowledgment Code: <strong>ACCEPTED_2025_001</strong></span>
        </div>
      </div>
    </div>

    <!-- Download Completed PDF -->
    <div class="bg-slate-900 border border-gray-800 p-6 rounded-2xl text-center space-y-4">
      <h3 class="font-bold text-white text-sm">Completed Tax Return &amp; Filing Records</h3>
      <div class="flex flex-wrap items-center justify-center gap-4">
        <button onclick="alert('Downloading Form 1040 Tax Return PDF...')" class="bg-slate-950 hover:bg-slate-800 text-white font-bold px-6 py-3 rounded-xl text-xs border border-gray-700">
          <i class="fas fa-file-pdf text-red-400 mr-2"></i> Download Form 1040 PDF
        </button>
        <button onclick="alert('Downloading Form 8879 E-Signature Record...')" class="bg-slate-950 hover:bg-slate-800 text-white font-bold px-6 py-3 rounded-xl text-xs border border-gray-700">
          <i class="fas fa-certificate text-emerald-400 mr-2"></i> Download Form 8879 Certificate
        </button>
      </div>
    </div>
  </div>
</div>
`)
