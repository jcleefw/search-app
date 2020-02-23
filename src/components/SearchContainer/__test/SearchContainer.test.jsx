import React from 'react'
import SearchContainer, { SearchPage, EmptyList } from '..'
import SearchForm from '../SearchForm'
import ErrorPage from '../../ErrorPage'
import { mount } from 'enzyme'
import SearchContext from '../SearchContext'
import ResetButton from '../../ResetButton'

describe('SearchContainer', () => {
  it('renders form on load', () => {
    const wrapper = mount(<SearchContainer />)
    expect(wrapper.find(SearchForm)).toHaveLength(1)
  })

  describe.only('when page has searchError', () => {
    let dispatchStub = jest.fn()
    const stubContext = {
      dispatch: dispatchStub,
      store: {
        searchErrors: ['I am an Error'],
      },
    }
    it('renders ErrorPage', () => {
      const wrapper = mount(
        <SearchContext.Provider value={{ ...stubContext }}>
          <SearchPage />
        </SearchContext.Provider>
      )
      const errorPageComponent = wrapper.find(ErrorPage)
      expect(errorPageComponent).toHaveLength(1)
      expect(errorPageComponent.find(ResetButton)).toHaveLength(1)
    })
  })

  describe.only('when searchResults has is empty', () => {
    let dispatchStub = jest.fn()
    const stubContext = {
      dispatch: dispatchStub,
      store: {
        searchResults: [],
        emptyResults: true,
        searchErrors: [],
      },
    }
    it('renders ErrorPage', () => {
      const wrapper = mount(
        <SearchContext.Provider value={{ ...stubContext }}>
          <SearchPage />
        </SearchContext.Provider>
      )
      const emptyListComponent = wrapper.find(EmptyList)
      expect(emptyListComponent).toHaveLength(1)
      expect(emptyListComponent.find(ResetButton)).toHaveLength(1)
    })
  })
})
