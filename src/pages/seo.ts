import { shell, copyBlock } from './layout'

export const seoPage = () => shell('Tax SEO & AEO Studio', 'seo', `
<section id="seo-header" class="mb-8">
  <h1 class="text-3xl font-extrabold text-white mb-2"><i class="fas fa-magnifying-glass-chart text-emerald-400 mr-2"></i>Tax SEO &amp; Answer Engine Studio (AEO)</h1>
  <p class="text-gray-400 text-sm">Optimize your tax practice for local search (Google Maps), AI Overviews (Google SGE), and answer engines (ChatGPT, Perplexity, Claude) with structured JSON-LD schema.</p>
</section>

<section id="tax-seo-schema" class="grid md:grid-cols-2 gap-6 mb-12">
  <div class="card p-6">
    <h3 class="font-bold text-white text-base mb-2"><i class="fas fa-code text-emerald-400 mr-2"></i>Local Accounting / Tax Practice JSON-LD</h3>
    <p class="text-gray-400 text-xs mb-3">Embed on your homepage and landing funnels to rank in local map packs for "tax preparation near me" or "tax resolution firm in [city]".</p>
    ${copyBlock('schema-local-tax', 'AccountingService JSON-LD', `{
  "@context": "https://schema.org",
  "@type": "AccountingService",
  "name": "Baddies Tax Services™",
  "image": "https://baddiestax.com/static/logo.svg",
  "telephone": "(404) 555-0199",
  "email": "support@baddiestax.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "100 Tax Command Way, Suite 500",
    "addressLocality": "Atlanta",
    "addressRegion": "GA",
    "postalCode": "30303",
    "addressCountry": "US"
  },
  "areaServed": ["Atlanta", "Georgia", "United States"],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Tax Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Individual Tax Preparation" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Schedule C Self-Employed Tax Filing" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "IRS Tax Resolution Case Evaluation" } }
    ]
  }
}`)}
  </div>

  <div class="card p-6">
    <h3 class="font-bold text-white text-base mb-2"><i class="fas fa-comments text-emerald-400 mr-2"></i>Tax FAQ Schema for Answer Engines (AEO)</h3>
    <p class="text-gray-400 text-xs mb-3">Formats tax questions and answers for Perplexity, SearchGPT, and Google AI Overviews to cite your tax practice as an authoritative source.</p>
    ${copyBlock('schema-faq-tax', 'FAQPage JSON-LD', `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What documents do I need to file my self-employed tax return?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Self-employed taxpayers need Form 1099-NEC, 1099-K, business expense receipts, vehicle mileage logs, and prior-year tax returns to file Schedule C."
      }
    },
    {
      "@type": "Question",
      "name": "Who qualifies for an IRS Offer in Compromise?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Taxpayers qualify for an Offer in Compromise if paying their full tax debt would create financial hardship based on IRS financial analysis of income, assets, and expenses."
      }
    }
  ]
}`)}
  </div>
</section>
`)
