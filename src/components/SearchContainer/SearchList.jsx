import React, { useState, useEffect } from 'react'
import SearchItem from '../SearchItem'
import './search-page-styles.scss'

const SortSelect = ({ setSortOrder }) => {
  return <form id="sortBy">
    <select
      onChange={e => setSortOrder(e.target.value)}
      defaultValue="high-to-low"
    >
      <option value="desc">Price high-low</option>
      <option value="asc">Price low-high</option>
    </select>
  </form>
}

const SearchList = ({ searchResults, searchQuery }) => {
  const isEmptyList = searchResults.length > 0 ? false : true
  const [sortOrder, setSortOrder] = useState('desc')

  useEffect(() => {
    console.log(sortOrder)
  }, [sortOrder])

  return (
    <div className="searchList" data-testid="searchList">
      <div className="searchSummary">
        <span className="resultsLength">{searchResults.length}</span> hotels in
        <span className="searchQuery"> {searchQuery}</span>
      </div>

      {!isEmptyList && (
        <SortSelect setSortOrder={setSortOrder} />
      )}

      {!isEmptyList &&
        searchResults.map((item, index) => (
          <SearchItem key={index} details={item} />
        ))}
    </div>
  )
}

export default SearchList
