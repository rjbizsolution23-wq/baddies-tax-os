import { fleetPage } from './fleet'

export const ecosystemPage = () => fleetPage()

export const ecosystemBrandPage = (slug: string) => fleetPage()

export const ECOSYSTEM_BRANDS = [
  { slug: 'tax-hq', name: 'Baddies Tax Services HQ' },
  { slug: 'miami-bureau', name: 'Baddies Tax Services Miami' }
]
