import React from 'react'
import SearchList from './SearchList'
import { mount } from 'enzyme'
import data from '../../../server/data.json'

describe('SearchList', () => {
  it('renders the SearchList with summary', () => {
    const wrapper = mount(
      <SearchList searchResults={data.results} searchQuery="Some location" />)

    expect(wrapper.find('.searchSummary').text()).toEqual('5 hotels in Some location')

    expect(wrapper.find('.searchItem')).toHaveLength(5)
  })
})