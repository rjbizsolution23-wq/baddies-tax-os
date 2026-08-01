// Baddies Tax Services™ — Tax Preparation Funnel Templates

export const taxIndividualTemplate = (q: Record<string, string | undefined>) => {
  const firmName = q.firmName || 'Baddies Tax Services™'
  const headline = q.headline || 'File Your 2025 Tax Return Accurately, Securely & Maximize Your Legal Refund'
  const cta = q.cta || 'Start Your Secure Tax Intake →'
  const phone = q.phone || '(404) 555-0199'

  return `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Individual Tax Preparation | ${firmName}</title>
<script src="https://cdn.tailwindcss.com"></script>
<link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600;700;800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
<style>body{font-family:'Inter',sans-serif;background:#0a1628;color:#e5e7eb}h1,h2,h3{font-family:'Poppins',sans-serif}</style></head>
<body class="min-h-screen">
<header class="border-b border-emerald-900/50 bg-[#0a1628]/90 sticky top-0 z-50 p-4">
  <div class="max-w-6xl mx-auto flex items-center justify-between">
    <div class="flex items-center gap-3">
      <div class="w-10 h-10 rounded-lg bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400 font-bold"><i class="fas fa-scale-balanced text-xl"></i></div>
      <span class="font-bold text-white text-xl">${firmName}</span>
    </div>
    <a href="tel:${phone}" class="text-emerald-400 font-bold text-sm"><i class="fas fa-phone mr-1"></i>${phone}</a>
  </div>
</header>
<main class="max-w-4xl mx-auto px-4 py-12 text-center">
  <div class="inline-block bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 text-xs font-semibold px-3 py-1 rounded-full mb-4"><i class="fas fa-shield-halved mr-1"></i> IRS PTIN &amp; EFIN Verified Tax Practice</div>
  <h1 class="text-3xl md:text-5xl font-extrabold text-white mb-6">${headline}</h1>
  <p class="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">Get your return prepared by verified tax professionals. 100% compliant, maximum eligible deductions, and direct deposit refund tracking.</p>
  
  <form action="/api/lead" method="POST" class="bg-[#0d1b30] border border-emerald-500/30 rounded-2xl p-6 text-left max-w-lg mx-auto shadow-2xl space-y-4">
    <input type="hidden" name="_source" value="/t/tax-individual">
    <div>
      <label class="block text-xs font-semibold text-gray-300 mb-1">Full Legal Name</label>
      <input type="text" name="name" required placeholder="First and Last Name" class="w-full bg-[#060a14] border border-gray-700 rounded-xl px-4 py-3 text-white focus:border-emerald-400">
    </div>
    <div>
      <label class="block text-xs font-semibold text-gray-300 mb-1">Email Address</label>
      <input type="email" name="email" required placeholder="you@example.com" class="w-full bg-[#060a14] border border-gray-700 rounded-xl px-4 py-3 text-white focus:border-emerald-400">
    </div>
    <div>
      <label class="block text-xs font-semibold text-gray-300 mb-1">Mobile Phone (for filing alerts)</label>
      <input type="tel" name="phone" required placeholder="(555) 000-0000" class="w-full bg-[#060a14] border border-gray-700 rounded-xl px-4 py-3 text-white focus:border-emerald-400">
    </div>
    <div>
      <label class="block text-xs font-semibold text-gray-300 mb-1">Filing Status / Tax Situation</label>
      <select name="filing_type" class="w-full bg-[#060a14] border border-gray-700 rounded-xl px-4 py-3 text-white focus:border-emerald-400">
        <option value="single">Single / Standard W-2</option>
        <option value="mfj">Married Filing Jointly</option>
        <option value="hoh">Head of Household (With Dependents)</option>
        <option value="self_employed">Self-Employed / Gig Worker</option>
        <option value="prior_years">Multiple Prior Years Unfiled</option>
      </select>
    </div>
    <div class="text-[11px] text-gray-400 leading-relaxed">
      By clicking below, you consent to receive SMS reminders and email updates regarding your tax return intake. Message &amp; data rates may apply. Privacy protected under IRC §7216.
    </div>
    <button type="submit" class="w-full bg-gradient-to-r from-emerald-500 to-emerald-700 hover:from-emerald-400 hover:to-emerald-600 text-white font-bold py-4 rounded-xl shadow-lg transition">${cta}</button>
  </form>

  <div class="mt-12 grid md:grid-cols-3 gap-6 text-left text-sm">
    <div class="bg-[#0d1b30] p-4 rounded-xl border border-emerald-900/40">
      <i class="fas fa-lock text-emerald-400 text-xl mb-2"></i>
      <h3 class="font-bold text-white mb-1">256-Bit Encrypted Intake</h3>
      <p class="text-xs text-gray-400">Upload W-2s, 1099s, and IDs securely from your phone or desktop.</p>
    </div>
    <div class="bg-[#0d1b30] p-4 rounded-xl border border-emerald-900/40">
      <i class="fas fa-user-check text-emerald-400 text-xl mb-2"></i>
      <h3 class="font-bold text-white mb-1">PTIN / EFIN Certified</h3>
      <p class="text-xs text-gray-400">Prepared by credentialed professionals with direct IRS e-filing authorization.</p>
    </div>
    <div class="bg-[#0d1b30] p-4 rounded-xl border border-emerald-900/40">
      <i class="fas fa-bolt text-emerald-400 text-xl mb-2"></i>
      <h3 class="font-bold text-white mb-1">Fast Acceptance Alerts</h3>
      <p class="text-xs text-gray-400">Receive instant SMS notifications when the IRS and state accept your return.</p>
    </div>
  </div>
</main>
<footer class="border-t border-emerald-900/50 text-center py-6 text-xs text-gray-500">
  &copy; ${new Date().getFullYear()} ${firmName}. All rights reserved. Powered by Baddies Tax OS™.
</footer>
</body></html>`
}

export const taxSelfEmployedTemplate = (q: Record<string, string | undefined>) => {
  const firmName = q.firmName || 'Baddies Tax Services™'
  return taxIndividualTemplate({ ...q, firmName, headline: 'Schedule C & Self-Employed Tax Filing — Keep More of What You Earn' })
}
