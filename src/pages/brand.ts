import { shell } from './layout'

export const brandPage = () => shell('White-Label Brand Center', 'brand', `
<section id="brand-header" class="mb-8">
  <h1 class="text-3xl font-extrabold text-white mb-2"><i class="fas fa-palette text-emerald-400 mr-2"></i>White-Label Tax Agency Brand Center</h1>
  <p class="text-gray-400 text-sm">Configure primary master brand (Baddies Tax Services™) or tenant brand overrides for service bureau branch offices, logo uploads, color schemes, and domain routing.</p>
</section>

<section id="brand-config" class="card p-6 max-w-2xl mx-auto space-y-4 text-xs">
  <h2 class="text-base font-bold text-white mb-2"><i class="fas fa-[#10b981] mr-2"></i>Primary Brand Settings</h2>
  <div>
    <label class="block font-semibold text-gray-300 mb-1">Primary Brand Identity</label>
    <input type="text" value="Baddies Tax Services™" class="w-full bg-[#060a14] border border-gray-700 rounded-lg p-2.5 text-white">
  </div>
  <div>
    <label class="block font-semibold text-gray-300 mb-1">Platform Application Title</label>
    <input type="text" value="Baddies Tax OS™" class="w-full bg-[#060a14] border border-gray-700 rounded-lg p-2.5 text-white">
  </div>
  <div>
    <label class="block font-semibold text-gray-300 mb-1">Primary Support Email</label>
    <input type="email" value="support@baddiestax.com" class="w-full bg-[#060a14] border border-gray-700 rounded-lg p-2.5 text-white">
  </div>
  <div>
    <label class="block font-semibold text-gray-300 mb-1">Custom Domain Routing</label>
    <input type="text" value="baddiestaxos.com" class="w-full bg-[#060a14] border border-gray-700 rounded-lg p-2.5 text-white">
  </div>
  <button class="w-full grad-bg text-white font-bold py-3 rounded-xl">Save Brand Settings →</button>
</section>
`)
