import React, { useState } from 'react'
import { fetchData } from '../../utils/api'
import SearchList from './SearchList'
import ErrorPage from '../ErrorPage'
import './search-page-styles.scss'

const SearchForm = ({ setSearchResults, setErrors }) => (
  <div className="formField">
    <form id="searchForm">
      <input id="searchInput" />
    </form>
    <button
      className="button"
      onClick={() => {
        const query = document.getElementById('searchInput').value
        return searchFunction(query, setSearchResults, setErrors)
      }}
    >
      Search
    </button>
  </div>
)

const renderSearchPage = props => {
  let { searchResults, hasErrors, setSearchResults, setErrors } = props
  if (hasErrors.err) {
    return <ErrorPage errors={hasErrors.err} />
  } else if (searchResults && searchResults.results) {
    return (
      <SearchList
        searchResults={searchResults.results}
        searchQuery="Sydney"
        setSearchResults={setSearchResults}
      />
    )
  } else
    return (
      <SearchForm setSearchResults={setSearchResults} setErrors={setErrors} />
    )
}

const searchFunction = (query, setSearchResults, setErrors) => {
  if (query !== 'sydney') {
    setSearchResults({ results: [] })
  } else {
    fetchData('/search_results', setSearchResults, setErrors)
  }
}

const SearchContainer = () => {
  const [searchResults, setSearchResults] = useState({})
  const [hasErrors, setErrors] = useState({})

  return (
    <div className="container searchContainer">
      {renderSearchPage({
        searchResults,
        hasErrors,
        setSearchResults,
        setErrors,
      })}
    </div>
  )
}

export default SearchContainer
