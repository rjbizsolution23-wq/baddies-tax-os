import { taxResolutionTemplate } from '../templates/taxResolution'

export const creditPage = () => {
  return taxResolutionTemplate({ firmName: 'Baddies Tax Services™' })
}
