import { sortByPrice } from './tools'

describe('tools', () => {
  const property3 = {
    offer: {
      displayPrice: { amount: 329, currency: 'AUD' },
    },
  }

  const property2 = {
    offer: {
      displayPrice: { amount: 200, currency: 'AUD' },
    },
  }

  const property1 = {
    offer: {
      displayPrice: { amount: 100, currency: 'AUD' },
    },
  }
  const data = [property2, property1, property3]

  it('sort by desc', () => {
    const sortedData = data.sort(sortByPrice('desc'))
    expect(sortedData).toEqual([property3, property2, property1])
  })

  it('sort by ascending', () => {
    const sortedData = data.sort(sortByPrice('asc'))
    expect(sortedData).toEqual([property1, property2, property3])
  })
})
