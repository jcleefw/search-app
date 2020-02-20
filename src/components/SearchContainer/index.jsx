import React, { useReducer, useContext } from 'react'
import { fetchData } from '../../utils/api'
import SearchList from './SearchList'
import SearchForm from './SearchForm'
import ErrorPage from '../ErrorPage'
import ResetButton from '../ResetButton'
import initialState from '../../store/initialState'
import reducer from '../../store/reducer'

import './search-page-styles.scss'

const SearchContext = React.createContext(null)

const EmptyList = ({ searchContext }) => {
  return (
    <div>
      I am Empty
      <ResetButton searchContext={SearchContext} />
    </div>
  )
}

const searchFunction = (query, dispatch) => {
  if (query.toLowerCase() !== 'sydney')
    return dispatch({ type: 'SET_SEARCH_RESULTS', emptyResults: true })
  else return fetchData('/search_results', dispatch, 'SET_SEARCH_RESULTS')
}

const SearchPage = ({ searchContext }) => {
  const { store } = useContext(searchContext)

  if (store.searchErrors.length > 0) {
    return <ErrorPage searchContext={SearchContext} />
  } else if (store.emptyResults) {
    return <EmptyList />
  } else if (!store.emptyResults && store.searchResults.length > 0) {
    return <SearchList searchContext={SearchContext} searchQuery="sydney" />
  } else {
    return (
      <SearchForm
        searchContext={SearchContext}
        searchFunction={searchFunction}
      />
    )
  }
}

const SearchContainer = () => {
  const [store, dispatch] = useReducer(reducer, initialState)

  return (
    <SearchContext.Provider value={{ store, dispatch }}>
      <SearchPage searchContext={SearchContext} />
    </SearchContext.Provider>
  )
}

export default SearchContainer
