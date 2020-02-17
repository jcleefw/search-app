import React, { useEffect, useState } from 'react'

const renderError = hasErrors => {
  return (
    <div>
      <h2>Opps there's an Error</h2>
    </div>
  )
}

const renderResults = searchResults => {
  return <div>{searchResults.length}</div>
}

const renderSearchPage = (searchResults, hasErrors) => {
  if (hasErrors === {}) {
    return renderError(hasErrors)
  } else {
    return renderResults(searchResults)
  }
}

const SearchPage = () => {
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
  console.log(hasErrors)

  return renderSearchPage(searchResults, hasErrors)
}

export default SearchPage
