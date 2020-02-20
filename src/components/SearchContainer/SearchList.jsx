import React, { useContext, useState } from 'react'
import SearchItem from '../SearchItem'
import ResetButton from '../ResetButton'
import './search-page-styles.scss'
import SortSelect from './SortSelect'
import { sortByPrice } from '../../utils/tools'

const SearchList = ({ searchContext, searchQuery }) => {
  const { store } = useContext(searchContext)
  const isEmptyList = store.searchResults.length > 0 ? false : true
  const sortSearchResult = [...store.searchResults].sort(
    sortByPrice(store.sortOrder)
  )

  return (
    <div className="searchList" data-testid="searchList">
      <div className="searchInfo">
        <div className="searchSummary">
          <span className="resultsLength">{store.searchResults.length}</span>{' '}
          hotels in
          <span className="searchQuery"> {searchQuery}</span>
          <ResetButton searchContext={searchContext} />
        </div>
        {!isEmptyList && <SortSelect searchContext={searchContext} />}
      </div>

      {!isEmptyList &&
        sortSearchResult.map((item, index) => (
          <SearchItem key={index} details={item} />
        ))}
    </div>
  )
}

export default SearchList
