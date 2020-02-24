import React from 'react'
import SearchList from '../SearchList'
import { mount } from 'enzyme'
import data from '../../../../server/data.json'
import SearchContext from '../SearchContext'

describe('SearchList', () => {
  let dispatchStub = jest.fn()
  const stubContext = {
    dispatch: dispatchStub,
    store: {},
  }

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders the SearchList has something', () => {
    let stubStore = { searchResults: data.results }

    const wrapper = mount(
      <SearchContext.Provider value={{ ...stubContext, store: stubStore }}>
        <SearchList searchQuery="Some location" />
      </SearchContext.Provider>
    )

    expect(wrapper.find('.searchSummary').text()).toEqual(
      '5 hotels in Some locationReset Form'
    )

    expect(wrapper.find('.searchItem')).toHaveLength(5)
  })

  it('renders when searchlist has nothing', () => {
    let emptyData = { searchResults: [] }

    const wrapper = mount(
      <SearchContext.Provider value={{ ...stubContext, store: emptyData }}>
        <SearchList searchQuery="Some location" />
      </SearchContext.Provider>
    )

    expect(wrapper.find('.searchSummary').text()).toEqual(
      '0 hotels in Some locationReset Form'
    )

    expect(wrapper.find('.searchItem')).toHaveLength(0)
  })
})
