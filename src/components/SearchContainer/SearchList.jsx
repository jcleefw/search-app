import React, { useState, useEffect } from 'react'
import SearchItem from '../SearchItem'
import './search-page-styles.scss'
import { sortByPrice } from '../../utils/tools'

const SortSelect = ({ setSortOrder }) => {
  return (
    <form id="sortBy">
      <select className="sortSelect"
        onChange={e => setSortOrder(e.target.value)}
        defaultValue="high-to-low"
      >
        <option value="desc">Price high-low</option>
        <option value="asc">Price low-high</option>
      </select>
    </form>
  )
}

const SearchList = ({ searchResults, searchQuery }) => {
  const isEmptyList = searchResults.length > 0 ? false : true
  const [sortOrder, setSortOrder] = useState('desc')
  const [sortSearchResult, setSortSearchResults] = useState(
    searchResults.sort(sortByPrice(sortOrder))
  )

  useEffect(() => {
    setSortSearchResults(searchResults.sort(sortByPrice(sortOrder)))
  }, [sortOrder])

  return (
    <div className="searchList" data-testid="searchList">

      <div className="searchInfo">
        <div className="searchSummary">
          <span className="resultsLength">{searchResults.length}</span> hotels in
          <span className="searchQuery"> {searchQuery}</span>
        </div>

        {!isEmptyList && <SortSelect setSortOrder={setSortOrder} />}
      </div>


      {!isEmptyList &&
        sortSearchResult.map((item, index) => (
          <SearchItem key={index} details={item} />
        ))}
    </div>
  )
}

export default SearchList
