// Baddies Tax Services™ — Tax Resolution & IRS Notice Case Evaluation Templates

export const taxResolutionTemplate = (q: Record<string, string | undefined>) => {
  const firmName = q.firmName || 'Baddies Tax Services™'
  const headline = q.headline || 'Owe Back Taxes or Received an IRS Notice? Explore Your Real Legal Resolution Options'
  const cta = q.cta || 'Get Your Confidential Case Evaluation →'
  const phone = q.phone || '(404) 555-0199'

  return `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>IRS Tax Resolution &amp; Notice Review | ${firmName}</title>
<script src="https://cdn.tailwindcss.com"></script>
<link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600;700;800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
<style>body{font-family:'Inter',sans-serif;background:#0a1628;color:#e5e7eb}h1,h2,h3{font-family:'Poppins',sans-serif}</style></head>
<body class="min-h-screen">
<header class="border-b border-amber-900/50 bg-[#0a1628]/90 sticky top-0 z-50 p-4">
  <div class="max-w-6xl mx-auto flex items-center justify-between">
    <div class="flex items-center gap-3">
      <div class="w-10 h-10 rounded-lg bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-400 font-bold"><i class="fas fa-scale-balanced text-xl"></i></div>
      <span class="font-bold text-white text-xl">${firmName}</span>
    </div>
    <a href="tel:${phone}" class="text-amber-400 font-bold text-sm"><i class="fas fa-phone mr-1"></i>${phone}</a>
  </div>
</header>
<main class="max-w-4xl mx-auto px-4 py-12 text-center">
  <div class="inline-block bg-amber-500/20 border border-amber-400/40 text-amber-400 text-xs font-semibold px-3 py-1 rounded-full mb-4"><i class="fas fa-shield-halved mr-1"></i> Circular 230 Compliant Case Evaluation</div>
  <h1 class="text-3xl md:text-5xl font-extrabold text-white mb-6">${headline}</h1>
  <p class="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">Learn how Installment Agreements, Offer in Compromise, Currently Not Collectible status, and Penalty Abatement actually work under IRS regulations.</p>
  
  <form action="/api/lead" method="POST" class="bg-[#0d1b30] border border-amber-500/30 rounded-2xl p-6 text-left max-w-lg mx-auto shadow-2xl space-y-4">
    <input type="hidden" name="_source" value="/t/tax-resolution">
    <div>
      <label class="block text-xs font-semibold text-gray-300 mb-1">Full Name</label>
      <input type="text" name="name" required placeholder="First and Last Name" class="w-full bg-[#060a14] border border-gray-700 rounded-xl px-4 py-3 text-white focus:border-amber-400">
    </div>
    <div>
      <label class="block text-xs font-semibold text-gray-300 mb-1">Email Address</label>
      <input type="email" name="email" required placeholder="you@example.com" class="w-full bg-[#060a14] border border-gray-700 rounded-xl px-4 py-3 text-white focus:border-amber-400">
    </div>
    <div>
      <label class="block text-xs font-semibold text-gray-300 mb-1">Phone Number</label>
      <input type="tel" name="phone" required placeholder="(555) 000-0000" class="w-full bg-[#060a14] border border-gray-700 rounded-xl px-4 py-3 text-white focus:border-amber-400">
    </div>
    <div>
      <label class="block text-xs font-semibold text-gray-300 mb-1">Estimated Tax Balance Owed</label>
      <select name="tax_debt_range" class="w-full bg-[#060a14] border border-gray-700 rounded-xl px-4 py-3 text-white focus:border-amber-400">
        <option value="under_10k">Under $10,000</option>
        <option value="10k_25k">$10,000 – $25,000</option>
        <option value="25k_50k">$25,000 – $50,000</option>
        <option value="50k_100k">$50,000 – $100,000</option>
        <option value="over_100k">Over $100,000+</option>
      </select>
    </div>
    <div class="text-[11px] text-gray-400 leading-relaxed bg-[#060a14] p-3 rounded-lg border border-gray-800">
      <strong>Important Disclaimer:</strong> An Offer in Compromise (OIC) or debt reduction depends on individual financial analysis. The IRS accepts applications based on ability to pay, income, assets, and expenses. We do not guarantee debt wipeout or specific settlement amounts without a complete IRS transcript review.
    </div>
    <button type="submit" class="w-full bg-gradient-to-r from-amber-500 to-amber-700 hover:from-amber-400 hover:to-amber-600 text-white font-bold py-4 rounded-xl shadow-lg transition">${cta}</button>
  </form>
</main>
<footer class="border-t border-amber-900/50 text-center py-6 text-xs text-gray-500">
  &copy; ${new Date().getFullYear()} ${firmName}. All rights reserved. Powered by Baddies Tax OS™.
</footer>
</body></html>`
}

export const taxIrsNoticeTemplate = (q: Record<string, string | undefined>) => {
  return taxResolutionTemplate({ ...q, headline: 'Received an IRS Notice or CP504 Letter? Understand Your 30-Day Window to Respond' })
}
