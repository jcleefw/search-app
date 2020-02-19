import React, { useReducer, useContext } from 'react'
import { fetchData } from '../../utils/api'
// import SearchList from './SearchList'
import SearchForm from './SearchForm'
import ErrorPage from '../ErrorPage'
import initialState from '../../store/initialState'
import reducer from '../../store/reducer'

import './search-page-styles.scss'

const SearchContext = React.createContext(null)

const SearchList = () => {
  const { store } = useContext(SearchContext)
  return <React.Fragment>{store.searchResults.length}</React.Fragment>
}

const ResetButton = () => {
  const { dispatch } = useContext(SearchContext)
  return (
    <span
      className="resetForm"
      onClick={() =>
        dispatch({
          type: 'SET_SEARCH_RESULTS',
          searchResults: [],
        })
      }
    >
      Reset Form
    </span>
  )
}

const EmptyList = () => {
  return <div>I am Empty</div>
}

const searchFunction = (query, dispatch) => {
  if (query.toLowerCase() !== 'sydney')
    return dispatch({ type: 'SET_SEARCH_RESULTS', emptyResults: true })
  // return null
  else return fetchData('/search_results', dispatch, 'SET_SEARCH_RESULTS')
}

const SearchContainer = () => {
  const [store, dispatch] = useReducer(reducer, initialState)

  return (
    <SearchContext.Provider value={{ store, dispatch }}>
      {store.emptyResults && <EmptyList />}
      {!store.emptyResults && store.searchResults.length > 0 && <SearchList />}
      {(store.emptyResults || store.searchResults.length > 0) && (
        <ResetButton />
      )}
      {!store.emptyResults && store.searchResults.length === 0 && (
        <SearchForm
          searchContext={SearchContext}
          searchFunction={searchFunction}
        />
      )}
    </SearchContext.Provider>
  )
}

export default SearchContainer
