import React, { useContext } from 'react'
import SearchContext from './SearchContext'

const searchInputRef = React.createRef()

const SearchForm = ({ searchFunction }) => {
  const { dispatch } = useContext(SearchContext)
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
