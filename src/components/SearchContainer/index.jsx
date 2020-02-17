import React, { useEffect, useState } from 'react'
import ErrorPage from '../ErrorPage'

const renderResults = searchResults => {
  return <div>{searchResults.length}</div>
}

const renderSearchPage = (searchResults, hasErrors) => {
  if (hasErrors.err) {
    return <ErrorPage errors={hasErrors.err} />
  } else {
    return renderResults(searchResults)
  }
}

const SearchContainer = () => {
  const [searchResults, setSearchResults] = useState({})
  const [hasErrors, setErrors] = useState({})

  async function fetchData() {
    const res = await fetch('http://localhost:5000/search_results')

    res
      .json()
      .then(res => setSearchResults(res.results))
      .catch(err => setErrors({ err: 'I have an error' }))
  }

  useEffect(() => {
    fetchData()
  }, [])

  return renderSearchPage(searchResults, hasErrors)
}

export default SearchContainer
