import React from 'react'

const SearchForm = props => {
  const { setSearchResults, setErrors, searchInputEl, searchFunction } = props
  return (
    <div className="formField">
      <form id="searchForm">
        <input ref={searchInputEl} id="searchInput" />
      </form>
      <button
        className="button"
        onClick={() => {
          const query = searchInputEl.current.value
          return searchFunction(query, setSearchResults, setErrors)
        }}
      >
        Search
      </button>
    </div>
  )
}

export default SearchForm
