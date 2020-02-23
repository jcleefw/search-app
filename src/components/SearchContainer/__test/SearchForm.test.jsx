import React from 'react'
import { mount } from 'enzyme'
import SearchForm from '../SearchForm'
import SearchContext from '../SearchContext'

describe('SearchForm', () => {
  const stubDispatch = jest.fn()
  const stubSearchFunction = jest.fn()
  const stubStore = {}

  const stubContext = {
    dispatch: stubDispatch,
    store: stubStore,
  }

  const wrapper = mount(
    <SearchContext.Provider value={stubContext}>
      <SearchForm searchFunction={stubSearchFunction} />
    </SearchContext.Provider>
  )

  it('renders a form', () => {
    expect(wrapper.find('#searchForm')).toHaveLength(1)
  })

  it('submit form will call search function', () => {
    const input = wrapper.find('#searchInput')
    input.getDOMNode().value = 'abc'

    wrapper.find('.button').simulate('click')
    expect(stubSearchFunction).toHaveBeenCalledWith('abc', stubContext.dispatch)
  })
})
