import React, { useReducer, useContext } from 'react'
import { fetchData } from '../../utils/api'
import SearchList from './SearchList'
import SearchForm from './SearchForm'
import ErrorPage from '../ErrorPage'
import ResetButton from '../ResetButton'
import initialState from '../../store/initialState'
import reducer from '../../store/reducer'
import SearchContext from './SearchContext'

import './search-page-styles.scss'

const EmptyList = () => {
  return (
    <div>
      I am Empty
      <ResetButton />
    </div>
  )
}

const searchFunction = (query, dispatch) => {
  if (query.toLowerCase() !== 'sydney')
    return dispatch({ type: 'SET_SEARCH_RESULTS', emptyResults: true })
  else return fetchData('/search_results', dispatch, 'SET_SEARCH_RESULTS')
}

const SearchPage = () => {
  const { store } = useContext(SearchContext)

  if (store.searchErrors.length > 0) {
    return <ErrorPage />
  } else if (store.emptyResults) {
    return <EmptyList />
  } else if (!store.emptyResults && store.searchResults.length > 0) {
    return <SearchList searchQuery="sydney" />
  } else {
    return <SearchForm searchFunction={searchFunction} />
  }
}

const SearchContainer = () => {
  const [store, dispatch] = useReducer(reducer, initialState)

  return (
    <SearchContext.Provider value={{ store, dispatch }}>
      <SearchPage />
    </SearchContext.Provider>
  )
}

export default SearchContainer
