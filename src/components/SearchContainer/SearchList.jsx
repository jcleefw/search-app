import React from 'react'
import './search-page-styles.scss'

const SearchList = ({ searchResults, searchQuery }) => {
  const isEmptyList = searchResults.length > 0 ? false : true
  console.log(searchResults)
  return (
    <div className="searchList" data-testid="searchList">
      <div>
        {searchResults.length} hotels in {searchQuery}
      </div>

      {!isEmptyList && searchResults.map((item, index) =>
        <div>{item.property.title}</div>
      )}
    </div>
  )
}

export default SearchList
