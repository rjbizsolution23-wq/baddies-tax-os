// Standalone Consumer Application Layout Shell for BADDIES TAX DIY™
// Detached from the internal Baddies Tax OS agency command dashboard.

export const diyStandaloneShell = (title: string, content: string) => `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${title}</title>
<meta name="description" content="Baddies Tax DIY™ — AI-Guided Tax Preparation, E-Filing and Live Tax Professional Escalation Platform. Prepare eligible federal and state returns with confidence.">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Baddies Tax DIY™">
<meta property="og:title" content="${title}">
<meta property="og:description" content="Prepare with confidence. Get help when it gets complicated. AI-guided DIY tax preparation with live CPA & EA professional escalation.">
<meta property="og:url" content="https://baddies-tax-os.pages.dev/diy">
<meta property="og:image" content="/static/logo.svg">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${title}">
<meta name="twitter:description" content="Prepare with confidence. Get help when it gets complicated.">
<link rel="icon" type="image/svg+xml" href="/static/favicon.svg">
<link rel="apple-touch-icon" href="/static/logo.svg">
<meta name="theme-color" content="#0a1628">
<script type="application/ld+json">{"@context":"https://schema.org","@type":"SoftwareApplication","name":"Baddies Tax DIY™","applicationCategory":"TaxPreparationApplication","operatingSystem":"Web","description":"AI-Guided DIY Tax Preparation, E-Filing and Live Tax Professional Escalation Platform.","publisher":{"@type":"Organization","name":"Baddies Tax Services LLC"}}</script>
<script src="https://cdn.tailwindcss.com"></script>
<link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600;700;800;900&family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@600;700;800&display=swap" rel="stylesheet">
<script>
tailwind.config = {
  theme: { extend: {
    fontFamily: { heading: ['Space Grotesk','Poppins','sans-serif'], body: ['Inter','sans-serif'], mono: ['Space Grotesk','monospace'] },
    colors: {
      brand: { cyan:'#10b981', pink:'#047857', gold:'#d4a72c', dark:'#0a1628', success:'#10b981', warn:'#f59e0b', danger:'#ef4444' }
    }
  }}
}
</script>
<style>
  :root {
    --baddies-navy:#0a1628; --baddies-gold:#d4a72c; --baddies-emerald:#10b981;
  }
  body { font-family:'Inter',sans-serif; background:#0a1628; color:#e5e7eb; }
  h1,h2,h3,h4 { font-family:'Space Grotesk','Poppins',sans-serif; }
  .grad-text { background:linear-gradient(135deg,#10b981,#34d399); -webkit-background-clip:text; background-clip:text; color:transparent; }
  .gold-text { background:linear-gradient(135deg,#d4a72c,#f4ce65); -webkit-background-clip:text; background-clip:text; color:transparent; }
  .card { background:#0d1b30; border:1px solid rgba(16,185,129,0.25); border-radius:1rem; }
</style>
</head>
<body class="bg-slate-950 text-gray-100 min-h-screen flex flex-col justify-between selection:bg-emerald-600 selection:text-white">

<!-- CONSUMER STANDALONE HEADER (DETACHED FROM AGENCY TAX OS) -->
<header class="sticky top-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-emerald-500/20 shadow-xl">
  <!-- Top Ticker Bar: Live Tax Return Summary -->
  <div class="bg-gradient-to-r from-slate-900 via-slate-950 to-emerald-950 px-4 py-2 text-xs border-b border-gray-800 flex items-center justify-between font-mono">
    <div class="flex items-center gap-4">
      <span class="text-gray-400">TAX YEAR: <strong class="text-white">2025/2026</strong></span>
      <span class="text-gray-400">AGI: <strong class="text-emerald-400">$65,000</strong></span>
      <span class="text-gray-400 hidden sm:inline">FEDERAL REFUND: <strong class="text-amber-400">$3,450</strong></span>
      <span class="text-gray-400 hidden md:inline">STATE REFUND: <strong class="text-emerald-400">$480</strong></span>
    </div>
    <div class="flex items-center gap-3">
      <span class="bg-emerald-500/20 text-emerald-400 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase border border-emerald-500/30">
        <i class="fas fa-check-circle mr-1"></i> Deterministic Engine Active
      </span>
      <button onclick="toggleAiAssistant()" class="bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 text-[10px] px-2.5 py-0.5 rounded-full font-bold uppercase transition-all flex items-center gap-1 border border-amber-500/40">
        <i class="fas fa-robot"></i> Baddie Tax Guide™
      </button>
    </div>
  </div>

  <!-- Main Standalone Application Header -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
    <!-- Brand Logo -->
    <a href="/diy" class="flex items-center gap-3 group">
      <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 to-emerald-500 flex items-center justify-center text-slate-950 font-black text-lg shadow-lg shadow-amber-500/20">
        <i class="fas fa-calculator"></i>
      </div>
      <div>
        <span class="font-heading font-black text-white text-base tracking-tight block leading-none">BADDIES TAX <span class="gold-text">DIY™</span></span>
        <span class="text-[9px] font-mono text-emerald-400 font-bold uppercase tracking-widest">Consumer Preparation &amp; E-File</span>
      </div>
    </a>

    <!-- Consumer Filing Path Navigation -->
    <nav class="hidden md:flex items-center gap-6 text-xs font-bold text-gray-300">
      <a href="/diy" class="hover:text-emerald-400 transition-colors">Tax Interview</a>
      <a href="/diy/documents" class="hover:text-emerald-400 transition-colors">Document Import</a>
      <a href="/diy/diagnostics" class="hover:text-emerald-400 transition-colors">Error Check</a>
      <a href="/diy/escalate" class="text-amber-400 hover:text-amber-300 transition-colors flex items-center gap-1">
        <i class="fas fa-user-tie text-[10px]"></i> Pro Review
      </a>
      <a href="/diy/status" class="hover:text-emerald-400 transition-colors">E-File Tracker</a>
    </nav>

    <!-- CTAs -->
    <div class="flex items-center gap-3">
      <a href="/tax-agency-in-a-box" class="hidden sm:inline-flex bg-slate-900 hover:bg-slate-800 text-gray-400 hover:text-gray-200 font-medium px-3.5 py-2 rounded-xl text-xs border border-gray-800">
        Tax Agency Platform →
      </a>
      <a href="/diy/efile" class="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-xs px-4 py-2 rounded-xl shadow-lg shadow-emerald-500/20 transition-all">
        E-File Return ($49)
      </a>
    </div>
  </div>
</header>

<!-- MAIN CONSUMER DIY APPLICATION VIEW -->
<main class="flex-1">
  ${content}
</main>

<!-- CONSUMER FOOTER (DETACHED FROM AGENCY TAX OS) -->
<footer class="bg-slate-950 border-t border-gray-800 py-12 text-xs text-gray-400">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
      <div>
        <div class="flex items-center gap-2 mb-3">
          <div class="w-7 h-7 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 font-bold text-xs">
            <i class="fas fa-calculator"></i>
          </div>
          <span class="font-heading font-black text-white text-sm">BADDIES TAX DIY™</span>
        </div>
        <p class="text-gray-400 text-xs leading-relaxed">
          AI-Guided DIY Tax Preparation, E-Filing, and Live Professional Escalation. Prepare with confidence. Get help when it gets complicated.
        </p>
      </div>

      <div>
        <h4 class="font-bold text-white text-xs uppercase tracking-wider mb-3">Consumer Filing Paths</h4>
        <ul class="space-y-2 text-xs">
          <li><a href="/diy" class="hover:text-emerald-400">1. DIY Standard Filing ($49)</a></li>
          <li><a href="/diy" class="hover:text-emerald-400">2. DIY Plus AI Assist ($99)</a></li>
          <li><a href="/diy/escalate" class="hover:text-amber-400 text-amber-400 font-bold">3. Baddies Tax Pro Review™ ($199)</a></li>
          <li><a href="/diy/escalate" class="hover:text-emerald-400">4. Full-Service Pro Prep™ ($349)</a></li>
        </ul>
      </div>

      <div>
        <h4 class="font-bold text-white text-xs uppercase tracking-wider mb-3">Supported Forms</h4>
        <ul class="space-y-2 text-xs">
          <li>Form 1040 / 1040-SR &amp; Schedules 1-3</li>
          <li>Schedule A, B, C, D, E &amp; Schedule SE</li>
          <li>Child Tax Credit, EITC &amp; QBI Sec 199A</li>
          <li>State Returns (GA, FL, TX, CA, NY)</li>
        </ul>
      </div>

      <div>
        <h4 class="font-bold text-white text-xs uppercase tracking-wider mb-3">Consumer Rights &amp; Privacy</h4>
        <ul class="space-y-2 text-xs">
          <li><a href="/privacy" class="hover:text-emerald-400">IRC §7216 Consent Standard</a></li>
          <li><a href="/security" class="hover:text-emerald-400">GLBA 256-Bit WISP Encryption</a></li>
          <li><a href="/terms" class="hover:text-emerald-400">IRS Circular 230 Notice</a></li>
          <li><a href="/terms" class="hover:text-emerald-400">Form 8879 E-Sign Disclosure</a></li>
        </ul>
      </div>
    </div>

    <div class="border-t border-gray-800/80 pt-6 text-[11px] text-gray-500 space-y-2">
      <p>
        <strong>AI Assistant Boundary Notice:</strong> Baddie Tax Guide™ is an AI assistant designed to clarify software questions, organize uploaded documents, and explain tax terminology. Baddie Tax Guide™ is not a licensed CPA, Enrolled Agent, or attorney and does not calculate final tax liability independently of the deterministic rules engine.
      </p>
      <p>
        <strong>IRC §7216 &amp; Privacy Safeguards:</strong> Taxpayer return information is protected under IRC §7216 and GLBA Safeguards rules. Your return data is strictly encrypted and never shared for marketing without affirmative consent.
      </p>
      <div class="flex flex-col sm:flex-row items-center justify-between pt-4 border-t border-gray-900 gap-4">
        <span>&copy; ${new Date().getFullYear()} Baddies Tax Services LLC. Baddies Tax DIY™ is a registered trademark.</span>
        <div class="flex items-center gap-4">
          <a href="/privacy" class="hover:text-gray-400">Privacy Policy</a>
          <a href="/terms" class="hover:text-gray-400">Terms of Service</a>
          <a href="/security" class="hover:text-gray-400">Security Safeguards</a>
        </div>
      </div>
    </div>
  </div>
</footer>

</body>
</html>
`
