// Standalone Sales Funnel Layout Shell for Baddies Tax OS™
// Renders high-converting standalone pages completely detached from internal Tax OS dashboard links.

export const standaloneShell = (title: string, content: string) => `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${title}</title>
<meta name="description" content="Baddies Tax OS™ — The Complete Tax Agency-in-a-Box Operating System: tax funnels, taxpayer CRM, secure intake, document center, tax resolution, Circular 230 compliance, and multi-office service bureau operations in one platform.">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Baddies Tax Services™">
<meta property="og:title" content="${title}">
<meta property="og:description" content="Build the Tax Business. Automate the Operation. Own the Growth. Complete Tax Agency-in-a-Box platform for modern tax professionals.">
<meta property="og:url" content="https://baddies-tax-os.pages.dev">
<meta property="og:image" content="/static/logo.svg">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${title}">
<meta name="twitter:description" content="Build the Tax Business. Automate the Operation. Own the Growth.">
<link rel="icon" type="image/svg+xml" href="/static/favicon.svg">
<link rel="apple-touch-icon" href="/static/logo.svg">
<meta name="theme-color" content="#0a1628">
<script type="application/ld+json">{"@context":"https://schema.org","@type":"SoftwareApplication","name":"Baddies Tax OS™","applicationCategory":"BusinessApplication","operatingSystem":"Web","description":"Baddies Tax Services™ Complete Tax Agency-in-a-Box Platform — intake, secure document center, taxpayer CRM, Circular 230 compliance, tax resolution, PTIN/EFIN tracking, and service bureau command.","publisher":{"@type":"Organization","name":"Baddies Tax Services LLC","address":{"@type":"PostalAddress","streetAddress":"100 Tax Command Way","addressLocality":"Atlanta","addressRegion":"GA","postalCode":"30303","addressCountry":"US"}},"slogan":"Turn tax-season demand into organized, compliant, year-round revenue."}</script>
<script src="https://cdn.tailwindcss.com"></script>
<link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600;700;800;900&family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@600;700;800&display=swap" rel="stylesheet">
<script>
tailwind.config = {
  theme: { extend: {
    fontFamily: { heading: ['Space Grotesk','Poppins','sans-serif'], body: ['Inter','sans-serif'], mono: ['Space Grotesk','monospace'] },
    colors: {
      brand: { cyan:'#10b981', pink:'#047857', gold:'#d4a72c', dark:'#0a1628', success:'#10b981', warn:'#f59e0b', danger:'#ef4444' },
      mk: { navy:'#0a1628', deep:'#050b16', gold:'#d4a72c', goldLight:'#f4ce65', blue:'#10b981', cyan:'#34d399', indigo:'#047857', soft:'#f8fafc' }
    }
  }}
}
</script>
<style>
  :root {
    --baddies-navy:#0a1628; --baddies-deep-navy:#050b16;
    --baddies-gold:#d4a72c; --baddies-gold-light:#f4ce65;
    --baddies-emerald:#10b981; --baddies-emerald-light:#34d399;
  }
  body { font-family:'Inter',sans-serif; background:#0a1628; color:#e5e7eb; }
  h1,h2,h3,h4 { font-family:'Space Grotesk','Poppins',sans-serif; }
  .grad-text { background:linear-gradient(135deg,#10b981,#34d399); -webkit-background-clip:text; background-clip:text; color:transparent; }
  .gold-text { background:linear-gradient(135deg,#d4a72c,#f4ce65); -webkit-background-clip:text; background-clip:text; color:transparent; }
  .grad-bg { background:linear-gradient(135deg,#0a1628 0%,#047857 48%,#10b981 100%); }
  .card { background:#0d1b30; border:1px solid rgba(16,185,129,0.25); border-radius:1rem; transition:all .3s ease; }
  .card:hover { border-color:#10b981; transform:translateY(-2px); }
</style>
</head>
<body class="bg-slate-950 text-gray-100 min-h-screen flex flex-col justify-between selection:bg-emerald-600 selection:text-white">

<!-- STANDALONE SALES FUNNEL NAVIGATION HEADER (DETACHED FROM APP) -->
<header class="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-emerald-500/20">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
    <!-- Brand Logo -->
    <a href="/tax-agency-in-a-box" class="flex items-center gap-3 group">
      <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center text-slate-950 font-black text-xl shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-all">
        <i class="fas fa-scale-balanced"></i>
      </div>
      <div>
        <span class="font-heading font-black text-white text-lg tracking-tight block leading-none">BADDIES TAX <span class="gold-text">OS™</span></span>
        <span class="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-widest">Tax Agency-in-a-Box</span>
      </div>
    </a>

    <!-- Standalone Nav Links (All Active Standalone Marketing Pages) -->
    <nav class="hidden md:flex items-center gap-6 text-xs font-bold text-gray-300">
      <a href="/features/funnel-studio" class="hover:text-emerald-400 transition-colors">Funnel Studio</a>
      <a href="/features/taxpayer-crm" class="hover:text-emerald-400 transition-colors">Taxpayer CRM</a>
      <a href="/features/client-portal" class="hover:text-emerald-400 transition-colors">Client Portal</a>
      <a href="/features/compliance" class="hover:text-emerald-400 transition-colors">Compliance</a>
      <a href="/pricing" class="hover:text-emerald-400 transition-colors">Pricing</a>
      <a href="/diy" class="text-amber-400 hover:text-amber-300 transition-colors flex items-center gap-1 font-extrabold"><i class="fas fa-calculator text-[10px]"></i> DIY Consumer Portal</a>
    </nav>

    <!-- CTAs -->
    <div class="flex items-center gap-3">
      <a href="/demo" class="hidden sm:inline-flex bg-slate-900 hover:bg-slate-800 text-gray-300 font-semibold px-4 py-2.5 rounded-xl text-xs border border-gray-800 hover:border-gray-700">
        <i class="fas fa-calendar-alt text-emerald-400 mr-1.5"></i> Book Demo
      </a>
      <a href="/tax-agency-in-a-box#pricing" class="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-xs px-5 py-2.5 rounded-xl shadow-lg shadow-emerald-500/20 transition-all transform hover:-translate-y-0.5">
        Build My Tax Agency
      </a>
    </div>
  </div>
</header>

<!-- MAIN FUNNEL CONTENT -->
<main class="flex-1">
  ${content}
</main>

<!-- STANDALONE SALES FUNNEL FOOTER (DETACHED FROM APP) -->
<footer class="bg-slate-950 border-t border-gray-800 py-16 text-xs text-gray-400">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
      <!-- Col 1: Brand Info -->
      <div class="space-y-3">
        <div class="flex items-center gap-2">
          <div class="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-bold text-sm">
            <i class="fas fa-scale-balanced"></i>
          </div>
          <span class="font-heading font-black text-white text-base">BADDIES TAX OS™</span>
        </div>
        <p class="text-gray-400 text-xs leading-relaxed">
          The Complete Tax Agency-in-a-Box Operating System. Launch, automate, and scale your tax business from one unified platform.
        </p>
        <p class="text-[11px] text-gray-500">
          Baddies Tax Services LLC &middot; 100 Tax Command Way, Suite 500, Atlanta, GA 30303
        </p>
      </div>

      <!-- Col 2: Platform Links -->
      <div>
        <h4 class="font-bold text-white text-xs uppercase tracking-wider mb-3">Platform Features</h4>
        <ul class="space-y-2 text-xs">
          <li><a href="/features/funnel-studio" class="hover:text-emerald-400">Tax Funnel Studio™</a></li>
          <li><a href="/features/taxpayer-crm" class="hover:text-emerald-400">Taxpayer CRM™</a></li>
          <li><a href="/features/client-portal" class="hover:text-emerald-400">Client Intake &amp; Portal™</a></li>
          <li><a href="/features/workflows" class="hover:text-emerald-400">Tax Workflow Operations™</a></li>
          <li><a href="/features/automation" class="hover:text-emerald-400">Email, SMS &amp; Zoom Automation™</a></li>
          <li><a href="/features/compliance" class="hover:text-emerald-400">Compliance Command™</a></li>
          <li><a href="/features/ai-agents" class="hover:text-emerald-400">Tax AI Agent Workforce™</a></li>
          <li><a href="/features/academy" class="hover:text-emerald-400">Baddies Tax Academy™</a></li>
          <li><a href="/features/analytics" class="hover:text-emerald-400">Practice Intelligence™</a></li>
        </ul>
      </div>

      <!-- Col 3: Consumer & Pro Services -->
      <div>
        <h4 class="font-bold text-white text-xs uppercase tracking-wider mb-3">Consumer &amp; Pro Portals</h4>
        <ul class="space-y-2 text-xs">
          <li><a href="/diy" class="hover:text-amber-400 text-amber-400 font-bold">Baddies Tax DIY™ Filing Portal</a></li>
          <li><a href="/pricing" class="hover:text-emerald-400">Baddies Launch Plan ($197/mo)</a></li>
          <li><a href="/pricing" class="hover:text-emerald-400">Baddies Growth Plan ($497/mo)</a></li>
          <li><a href="/pricing" class="hover:text-emerald-400">Baddies Agency Pro ($997/mo)</a></li>
          <li><a href="/pricing" class="hover:text-emerald-400">Service Bureau Network</a></li>
          <li><a href="/demo" class="hover:text-emerald-400">Schedule Live 1-on-1 Demo</a></li>
        </ul>
      </div>

      <!-- Col 4: Legal & Compliance -->
      <div>
        <h4 class="font-bold text-white text-xs uppercase tracking-wider mb-3">Legal &amp; Security</h4>
        <ul class="space-y-2 text-xs">
          <li><a href="/privacy" class="hover:text-emerald-400">Privacy Policy &amp; IRC §7216</a></li>
          <li><a href="/terms" class="hover:text-emerald-400">Terms of Service &amp; Operational Policy</a></li>
          <li><a href="/security" class="hover:text-emerald-400">GLBA WISP Security Safeguards</a></li>
          <li><a href="/features/compliance" class="hover:text-emerald-400">IRS Circular 230 Disclosure</a></li>
          <li><a href="/features/compliance" class="hover:text-emerald-400">PTIN &amp; EFIN Credentials</a></li>
        </ul>
      </div>
    </div>

    <!-- Bottom Disclaimers & Copyright -->
    <div class="border-t border-gray-800/80 pt-8 text-[11px] text-gray-500 space-y-2">
      <p>
        <strong>IRS Circular 230 Disclaimer:</strong> Baddies Tax OS™ is a technology operating system that provides workflow, intake, CRM, and automation tools. Baddies Tax OS™ is not a CPA firm or law firm and does not provide legal or certified tax advice directly.
      </p>
      <p>
        <strong>Section 7216 &amp; Consumer Privacy:</strong> Taxpayer return information is protected under IRC §7216 and GLBA Safeguards rules. All client data is encrypted in transit and at rest using 256-bit encryption.
      </p>
      <div class="flex flex-col sm:flex-row items-center justify-between pt-4 border-t border-gray-900 gap-4">
        <span>&copy; ${new Date().getFullYear()} Baddies Tax Services LLC. All rights reserved. Powered by Baddies Tax OS™.</span>
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
