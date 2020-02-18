import React from 'react'
import SearchItem from '.'
import { mount } from 'enzyme'
import data from '../../../server/data.json'

describe('SearchItem', () => {
  it('renders the SearchItem with summary', () => {
    const item = data.results[0]
    const wrapper = mount(<SearchItem details={item} />)

    expect(wrapper.find('.propertyName').text()).toEqual(item.property.title)
    expect(wrapper.find('.propertyAddress').text()).toEqual(
      item.property.address.join()
    )
    expect(wrapper.find('.caption').text()).toEqual('1 night total AUD')
    expect(wrapper.find('.pricePerNight').text()).toEqual(
      item.offer.displayPrice.amount.toString()
    )
    expect(wrapper.find('.savings').text()).toEqual(
      `Save $${item.offer.savings.amount}`
    )
    expect(wrapper.find('.freeCancellation')).toHaveLength(0)
  })

  it('renders the SearchItem with summary', () => {
    const item = data.results[1]
    const wrapper = mount(<SearchItem details={item} />)

    expect(wrapper.find('.propertyName').text()).toEqual(item.property.title)
    expect(wrapper.find('.propertyAddress').text()).toEqual(
      item.property.address.join()
    )
    expect(wrapper.find('.caption').text()).toEqual('1 night total AUD')
    expect(wrapper.find('.pricePerNight').text()).toEqual(
      item.offer.displayPrice.amount.toString()
    )
    expect(wrapper.find('.savings').text()).toEqual(
      `Save $${item.offer.savings.amount}`
    )
    expect(wrapper.find('.freeCancellation')).toHaveLength(1)
  })
})
