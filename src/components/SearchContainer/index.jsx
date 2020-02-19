import React, { useReducer, useContext } from 'react'
import { fetchData } from '../../utils/api'
// import SearchList from './SearchList'
import SearchForm from './SearchForm'
// import ErrorPage from '../ErrorPage'
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
          searchErrors: '',
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
  else return fetchData('/search_results', dispatch, 'SET_SEARCH_RESULTS')
}

const ErrorPage = ({ searchContext }) => {
  const { store } = useContext(SearchContext)
  return (
    <div>
      <h2>Opps there's an Error</h2>
      <p>{store.searchErrors}</p>
    </div>
  )
}

const SearchPage = ({ searchContext }) => {
  const { store } = useContext(searchContext)

  if (store.searchErrors.length > 0) {
    return <ErrorPage searchContext={SearchContext} />
  } else if (!store.emptyResults && store.searchResults.length > 0) {
    return <SearchList />
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
      {/* {store.emptyResults && <EmptyList />}
      {!store.emptyResults && store.searchResults.length > 0 && <SearchList />}
      {(store.emptyResults || store.searchResults.length > 0) && (
        <ResetButton />
      )}
      {!store.emptyResults && store.searchResults.length === 0 && (
        <SearchForm
          searchContext={SearchContext}
          searchFunction={searchFunction}
        />
      )} */}
    </SearchContext.Provider>
  )
}

export default SearchContainer
