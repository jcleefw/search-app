import React from 'react'
import { mount } from 'enzyme'
import SortSelect from '../SortSelect'
import SearchContext from '../SearchContext'

describe('SortSelect', () => {
  let dispatchStub = jest.fn()
  let stubContext = {
    dispatch: dispatchStub,
    store: {
      sortOrder: 'my order',
    },
  }

  let wrapper

  beforeAll(() => {
    wrapper = mount(
      <SearchContext.Provider value={stubContext}>
        <SortSelect />
      </SearchContext.Provider>
    )
  })

  it('render Default Sort Select Dropdown', () => {
    expect(wrapper.find('select').props().defaultValue).toBe('my order')
  })

  it('change store state if selection change', () => {
    wrapper
      .find('select')
      .at(0)
      .simulate('change', { target: { value: 'asc' } })
    expect(dispatchStub).toHaveBeenCalledWith({
      type: 'SET_SORT_ORDER',
      sortOrder: 'asc',
    })
    wrapper
      .find('select')
      .at(0)
      .simulate('change', { target: { value: 'desc' } })
    expect(dispatchStub).toHaveBeenCalledWith({
      type: 'SET_SORT_ORDER',
      sortOrder: 'desc',
    })
  })
})
