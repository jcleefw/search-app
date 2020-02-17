import React from 'react'
import SearchItem from './SearchItem'
import './search-page-styles.scss'

const SearchList = ({ searchResults, searchQuery }) => {
  const isEmptyList = searchResults.length > 0 ? false : true

  return (
    <div className="searchList" data-testid="searchList">
      <div>
        {searchResults.length} hotels in {searchQuery}
      </div>

      {!isEmptyList &&
        searchResults.map((item, index) =>
          <SearchItem key={index} details={item} />
        )}
    </div>
  )
}

export default SearchList
