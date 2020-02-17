import React from 'react'
import SearchList from './SearchList'
import { mount } from 'enzyme'
import data from '../../../server/data.json'

describe('SearchList', () => {
  it('renders the SearchList has something', () => {
    const wrapper = mount(
      <SearchList searchResults={data.results} searchQuery="Some location" />
    )

    expect(wrapper.find('.searchSummary').text()).toEqual(
      '5 hotels in Some locationReset Form'
    )

    expect(wrapper.find('.searchItem')).toHaveLength(5)
  })

  it('renders when searchlist has nothing', () => {
    let emptyData = { results: [] }
    const wrapper = mount(
      <SearchList searchResults={emptyData.results} searchQuery="Some location" />
    )

    expect(wrapper.find('.searchSummary').text()).toEqual(
      '0 hotels in Some locationReset Form'
    )

    expect(wrapper.find('.searchItem')).toHaveLength(0)
  })
})
