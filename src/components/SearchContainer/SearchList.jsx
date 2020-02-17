import React from 'react'
import './search-page-styles.scss'

const SearchList = ({ searchResults, searchQuery }) => {
  return (
    <div className="searchList" data-testid="searchList">
      <div>
        {searchResults.length} hotels in {searchQuery}
      </div>
    </div>
  )
}

export default SearchList
