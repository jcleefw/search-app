import React, { useContext } from 'react'

const searchInputRef = React.createRef()

const SearchForm = ({ searchContext, searchFunction }) => {
  const { dispatch } = useContext(searchContext)
  return (
    <div className="container searchContainer">
      <div className="formField">
        <form id="searchForm">
          <input ref={searchInputRef} type="text" id="searchInput" />
        </form>
        <button
          className="button"
          onClick={() => {
            const query = searchInputRef.current.value
            return searchFunction(query, dispatch)
          }}
        >
          Search
        </button>
      </div>
    </div>
  )
}

export default SearchForm
