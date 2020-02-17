import React, { useState, useRef } from 'react'
import { fetchData } from '../../utils/api'
import SearchList from './SearchList'
import SearchForm from './SearchForm'
import ErrorPage from '../ErrorPage'

import './search-page-styles.scss'

const renderSearchPage = props => {
  let {
    searchResults,
    hasErrors,
    setSearchResults,
    setErrors,
    searchInputEl,
  } = props

  if (hasErrors.err) {
    return <ErrorPage errors={hasErrors.err} />
  } else if (searchResults && searchResults.results) {
    return (
      <SearchList
        searchResults={searchResults.results}
        searchQuery={searchInputEl.current.value}
        setSearchResults={setSearchResults}
      />
    )
  } else
    return (
      <SearchForm
        setSearchResults={setSearchResults}
        setErrors={setErrors}
        searchInputEl={searchInputEl}
        searchFunction={searchFunction}
      />
    )
}

const searchFunction = (query, setSearchResults, setErrors) => {
  if (query.toLowerCase() !== 'sydney') {
    setSearchResults({ results: [] })
  } else {
    fetchData('/search_results', setSearchResults, setErrors)
  }
}

const SearchContainer = () => {
  const [searchResults, setSearchResults] = useState({})
  const [hasErrors, setErrors] = useState({})
  const searchInputEl = useRef()

  return (
    <div className="container searchContainer">
      {renderSearchPage({
        searchResults,
        hasErrors,
        setSearchResults,
        setErrors,
        searchInputEl,
      })}
    </div>
  )
}

export default SearchContainer
