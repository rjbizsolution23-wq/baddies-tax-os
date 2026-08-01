// Shared app shell — Baddies Tax OS™
// Baddies Tax Services™ — The Complete Tax Agency-in-a-Box Operating System
import { BADDIES_TAX_TOKENS } from '../theme/baddies-tax-tokens'

export const shell = (title: string, active: string, content: string, extraHead = '') => `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${title} | Baddies Tax OS™</title>
<meta name="description" content="Baddies Tax OS™ connects tax lead generation, taxpayer intake, secure document upload, client portals, tax resolution case management, PTIN/EFIN credential tracking, Circular 230 compliance, and multi-office service bureau operations.">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Baddies Tax Services™">
<meta property="og:title" content="${title} | Baddies Tax OS™">
<meta property="og:description" content="Baddies Tax Services™ — The Complete Tax Agency-in-a-Box Operating System: intake, CRM, document vault, tax resolution, compliance guard, and revenue analytics in one platform.">
<meta property="og:url" content="https://baddiestaxos.com">
<meta property="og:image" content="/static/logo.svg">
<meta name="twitter:card" content="summary">
<meta name="twitter:title" content="${title} | Baddies Tax OS™">
<meta name="twitter:description" content="Turn tax-season demand into organized, compliant, year-round revenue.">
<link rel="icon" type="image/svg+xml" href="/static/favicon.svg">
<link rel="apple-touch-icon" href="/static/logo.svg">
<meta name="theme-color" content="#0a1628">
<script type="application/ld+json">{"@context":"https://schema.org","@type":"SoftwareApplication","name":"Baddies Tax OS™","applicationCategory":"BusinessApplication","operatingSystem":"Web","description":"Baddies Tax Services™ Complete Tax Agency-in-a-Box Platform — intake, secure document center, taxpayer CRM, Circular 230 compliance, tax resolution, PTIN/EFIN tracking, and service bureau command.","publisher":{"@type":"Organization","name":"Baddies Tax Services LLC","address":{"@type":"PostalAddress","streetAddress":"100 Tax Command Way","addressLocality":"Atlanta","addressRegion":"GA","postalCode":"30303","addressCountry":"US"}},"slogan":"Turn tax-season demand into organized, compliant, year-round revenue."}</script>
<script src="https://cdn.tailwindcss.com"></script>
<link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600;700;800&family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;600&display=swap" rel="stylesheet">
<script>
tailwind.config = {
  theme: { extend: {
    fontFamily: { heading: ['Space Grotesk','Poppins','sans-serif'], body: ['Inter','sans-serif'], mono: ['Space Grotesk','monospace'] },
    colors: {
      brand: { cyan:'#10b981', pink:'#047857', gold:'#d4a72c', dark:'#0a1628', success:'#10b981', warn:'#f59e0b', danger:'#ef4444' },
      mk: { navy:'#0a1628', deep:'#050b16', gold:'#d4a72c', goldLight:'#f4ce65', blue:'#10b981', cyan:'#34d399', indigo:'#047857', soft:'#f8fafc', muted:'#d1fae5', success:'#10b981', warning:'#f59e0b', danger:'#ef4444', text:'#0f172a', mutedText:'#64748b' }
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
  .gold-bg { background:linear-gradient(135deg,#d4a72c 0%,#f4ce65 100%); }
  .card { background:#0d1b30; border:1px solid rgba(16,185,129,0.25); border-radius:1rem; transition:transform .3s cubic-bezier(.22,1,.36,1),border-color .25s ease,box-shadow .3s ease; }
  .card:hover { border-color:#10b981; transform:translateY(-3px); box-shadow:0 18px 45px -16px rgba(16,185,129,.25); }
  .glass-dark { background:rgba(6,12,26,.65); backdrop-filter:blur(18px) saturate(150%); -webkit-backdrop-filter:blur(18px) saturate(150%); border:1px solid rgba(16,185,129,.2); }
  a,button { transition:transform .25s cubic-bezier(.22,1,.36,1),background-color .2s ease,color .2s ease,border-color .2s ease,opacity .2s ease; }
  a:focus-visible,button:focus-visible,input:focus-visible,select:focus-visible,textarea:focus-visible { outline:2px solid #10b981; outline-offset:2px; border-radius:8px; }
  input:focus,select:focus,textarea:focus { border-color:#10b981 !important; box-shadow:0 0 0 3px rgba(16,185,129,.18); outline:none; }
  ::selection { background:#047857; color:#fff; }
  .mo-reveal { opacity:0; transform:translateY(22px); transition:opacity .7s cubic-bezier(.16,1,.3,1),transform .7s cubic-bezier(.16,1,.3,1); transition-delay:var(--mo-delay,0ms); }
  .mo-reveal.mo-in { opacity:1; transform:none; }
  @media (prefers-reduced-motion:reduce) { .mo-reveal { opacity:1; transform:none; transition:none; } .card,.card:hover,a,button { transition:none; transform:none; } }
  .copy-block { position:relative; }
  .copy-btn { position:absolute; top:.5rem; right:.5rem; }
  pre { white-space:pre-wrap; word-break:break-word; }
  ::-webkit-scrollbar { width:8px; height:8px; }
  ::-webkit-scrollbar-thumb { background:#047857; border-radius:4px; }
</style>
${extraHead}
</head>
<body class="min-h-screen">
<div id="announce-bar" class="gold-bg text-[#0a1628] text-center text-xs font-semibold px-4 py-1.5">
  <i class="fas fa-shield-halved mr-1"></i> BADDIES TAX SERVICES™ — The Complete Tax Agency-in-a-Box Operating System. Circular 230 &amp; §7216 Compliant.
</div>
<header id="main-nav" class="sticky top-0 z-50 bg-[#0a1628]/90 backdrop-blur border-b border-emerald-900/50">
  <nav class="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between flex-wrap gap-2">
    <a href="/" class="flex items-center gap-2.5">
      <div class="w-9 h-9 rounded-lg bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400 font-bold">
        <i class="fas fa-scale-balanced text-lg"></i>
      </div>
      <span class="font-heading font-bold text-white text-lg leading-tight">BADDIES <span class="grad-text">TAX</span><span class="gold-text">OS™</span></span>
    </a>
    <div class="flex items-center gap-1 text-sm flex-wrap">
      ${[
        ['/', 'Tax Command', 'dashboard'],
        ['/diy', 'Tax DIY Filing', 'tax'],
        ['/tax-agency-in-a-box', 'Agency-in-a-Box', 'builder'],
        ['/tax', 'Tax Prep Hub', 'tax'],
        ['/resolution', 'Tax Resolution', 'resolution'],
        ['/builder', 'Tax Funnel Studio', 'builder'],
        ['/leads', 'Taxpayer CRM', 'leads'],
        ['/clients', 'Client Portal & Ops', 'clients'],
        ['/credentials', 'PTIN / EFIN Center', 'credentials'],
        ['/bureau', 'Service Bureau', 'bureau'],
        ['/emails', 'Tax Email Vault', 'emails'],
        ['/compliance', 'Compliance Guard', 'compliance'],
        ['/seo', 'Tax SEO / AEO', 'seo'],
        ['/webinars', 'Tax Consultation', 'webinars'],
        ['/agents', 'Tax AI Workforce', 'agents'],
        ['/mailer', 'Mail Command', 'mailer'],
        ['/analytics', 'Revenue Intelligence', 'analytics'],
        ['/traffic', 'Tax Acquisition', 'traffic'],
        ['/integrations', 'Integrations', 'integrations'],
        ['/brand', 'Brand Center', 'brand'],
        ['/docs', 'Documentation', 'docs'],
      ].map(([href, label, key]) =>
        `<a href="${href}" class="px-3 py-1.5 rounded-lg ${active === key ? 'grad-bg text-white font-semibold' : 'text-gray-300 hover:text-white hover:bg-gray-800'}">${label}</a>`
      ).join('')}
    </div>
  </nav>
</header>
<main class="max-w-7xl mx-auto px-4 py-8">
${content}
</main>
<footer class="border-t border-emerald-900/50 mt-16">
  <div class="max-w-7xl mx-auto px-4 py-10 text-sm text-gray-400">
    <div class="flex flex-wrap items-start justify-between gap-8 mb-8">
      <div class="max-w-sm">
        <div class="flex items-center gap-3 mb-3">
          <div class="w-10 h-10 rounded-lg bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400 font-bold">
            <i class="fas fa-scale-balanced text-xl"></i>
          </div>
          <div>
            <p class="font-heading font-bold text-white text-base leading-tight">BADDIES TAX <span class="gold-text">OS™</span></p>
            <p class="text-[10px] text-emerald-400 font-semibold">The Complete Tax Agency-in-a-Box Operating System</p>
          </div>
        </div>
        <p class="text-xs text-gray-500 mb-3">Turn tax-season demand into organized, compliant, year-round revenue. One connected system for client acquisition, secure intake, document management, tax resolution, and service bureau scale.</p>
        <p class="text-xs">Baddies Tax Services LLC · 100 Tax Command Way, Suite 500, Atlanta, GA 30303</p>
      </div>
      <div>
        <p class="font-semibold text-white text-xs uppercase tracking-wide mb-3">Tax Operating Modules</p>
        <ul class="space-y-1.5 text-xs">
          <li><a href="/tax" class="hover:text-emerald-400 text-gray-400"><i class="fas fa-file-invoice-dollar mr-2 text-emerald-500"></i>Tax Preparation Operations</a></li>
          <li><a href="/resolution" class="hover:text-emerald-400 text-gray-400"><i class="fas fa-scale-balanced mr-2 text-emerald-500"></i>Tax Resolution Case Center</a></li>
          <li><a href="/builder" class="hover:text-emerald-400 text-gray-400"><i class="fas fa-filter mr-2 text-emerald-500"></i>Tax Funnel Studio</a></li>
          <li><a href="/leads" class="hover:text-emerald-400 text-gray-400"><i class="fas fa-users-gear mr-2 text-emerald-500"></i>Taxpayer CRM</a></li>
          <li><a href="/clients" class="hover:text-emerald-400 text-gray-400"><i class="fas fa-address-card mr-2 text-emerald-500"></i>Taxpayer Portal &amp; Intake</a></li>
          <li><a href="/credentials" class="hover:text-emerald-400 text-gray-400"><i class="fas fa-id-card mr-2 text-emerald-500"></i>PTIN / EFIN Credential Center</a></li>
          <li><a href="/bureau" class="hover:text-emerald-400 text-gray-400"><i class="fas fa-building-user mr-2 text-emerald-500"></i>Service Bureau Command</a></li>
          <li><a href="/compliance" class="hover:text-emerald-400 text-gray-400"><i class="fas fa-shield-halved mr-2 text-emerald-500"></i>Circular 230 / §7216 Guard</a></li>
          <li><a href="/seo" class="hover:text-emerald-400 text-gray-400"><i class="fas fa-magnifying-glass-chart mr-2 text-emerald-500"></i>Tax SEO &amp; AEO Studio</a></li>
          <li><a href="/agents" class="hover:text-emerald-400 text-gray-400"><i class="fas fa-robot mr-2 text-emerald-500"></i>Tax AI Agent Workforce</a></li>
          <li><a href="/analytics" class="hover:text-emerald-400 text-gray-400"><i class="fas fa-chart-line mr-2 text-emerald-500"></i>Tax Revenue Intelligence</a></li>
        </ul>
      </div>
      <div>
        <p class="font-semibold text-white text-xs uppercase tracking-wide mb-3">Compliance &amp; Support</p>
        <ul class="space-y-1.5 text-xs">
          <li class="text-gray-400"><i class="fas fa-check-double mr-2 text-mk-gold"></i>IRS Circular 230 Compliant</li>
          <li class="text-gray-400"><i class="fas fa-user-lock mr-2 text-mk-gold"></i>IRC §7216 Consent Protected</li>
          <li class="text-gray-400"><i class="fas fa-vault mr-2 text-mk-gold"></i>GLBA Safeguards Encryption</li>
          <li><a href="mailto:support@baddiestax.com" class="hover:text-emerald-400 text-gray-400"><i class="fas fa-envelope mr-2 text-emerald-500"></i>support@baddiestax.com</a></li>
          <li><a href="/docs" class="hover:text-emerald-400 text-gray-400"><i class="fas fa-book-bookmark mr-2 text-emerald-500"></i>Tax Office SOPs &amp; Guides</a></li>
        </ul>
      </div>
      <p class="text-xs max-w-xs text-gray-500">${BADDIES_TAX_TOKENS.legal.disclaimer}</p>
    </div>
    <div class="border-t border-emerald-900/40 pt-5 flex flex-wrap justify-between gap-3 text-xs text-gray-500">
      <p>© ${new Date().getFullYear()} Baddies Tax Services LLC. All rights reserved. · Baddies Tax OS™</p>
      <p>Taxpayer Privacy Policy · Terms of Service · §7216 Disclosure · Accessibility</p>
    </div>
  </div>
</footer>
<script src="/static/app.js"></script>
<script>
(() => {
  const els = []
  document.querySelectorAll('main section, main .card').forEach((el, i) => {
    el.classList.add('mo-reveal'); el.style.setProperty('--mo-delay', Math.min((i % 8) * 55, 380) + 'ms'); els.push(el)
  })
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('mo-in'); io.unobserve(e.target) } }), { threshold: .08, rootMargin: '0px 0px -6% 0px' })
    els.forEach(el => io.observe(el))
    requestAnimationFrame(() => els.forEach(el => { if (el.getBoundingClientRect().top < innerHeight) el.classList.add('mo-in') }))
  } else els.forEach(el => el.classList.add('mo-in'))
})()
</script>
</body>
</html>`

export const copyBlock = (id: string, label: string, text: string) => `
<article class="copy-block card p-4 mb-4" id="${id}">
  <div class="flex items-center justify-between mb-2">
    <h4 class="font-semibold text-white text-sm"><i class="fas fa-file-lines text-emerald-400 mr-2"></i>${label}</h4>
    <button class="copy-btn-inline bg-gray-800 hover:bg-emerald-500 hover:text-white text-gray-300 text-xs px-3 py-1.5 rounded-lg" data-copy-target="${id}-text"><i class="far fa-copy mr-1"></i>Copy</button>
  </div>
  <pre id="${id}-text" class="text-xs text-gray-300 bg-[#060a14] rounded-lg p-3 max-h-72 overflow-y-auto">${text.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')}</pre>
</article>`
