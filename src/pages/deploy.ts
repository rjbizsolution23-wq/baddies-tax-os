import { shell } from './layout'

export const deployPage = () => shell('Cloudflare Tax Office Deploy', 'deploy', `
<section id="deploy-header" class="mb-8">
  <h1 class="text-3xl font-extrabold text-white mb-2"><i class="fas fa-cloud text-emerald-400 mr-2"></i>Cloudflare Tax Office Deployment</h1>
  <p class="text-gray-400 text-sm">Deploy custom white-label tax intake funnels directly to your branch office Workers Pages with zero server setup.</p>
</section>

<section id="deploy-form" class="card p-6 max-w-xl mx-auto text-xs space-y-4">
  <h2 class="text-base font-bold text-white mb-2"><i class="fas fa-rocket text-emerald-400 mr-2"></i>Deploy Branch Office Worker</h2>
  <div>
    <label class="block font-semibold text-gray-300 mb-1">Target Tax Office Branch</label>
    <select class="w-full bg-[#060a14] border border-gray-700 rounded-lg p-2.5 text-white">
      <option value="atlanta">BTX-ATL-01 (Atlanta HQ)</option>
      <option value="miami">BTX-MIA-02 (Miami Office)</option>
    </select>
  </div>
  <div>
    <label class="block font-semibold text-gray-300 mb-1">Subdomain Name</label>
    <input type="text" value="atlanta.baddiestaxos.com" class="w-full bg-[#060a14] border border-gray-700 rounded-lg p-2.5 text-white">
  </div>
  <button class="w-full grad-bg text-white font-bold py-3 rounded-xl">Deploy Branch Worker to Cloudflare →</button>
</section>
`)
