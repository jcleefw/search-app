import React, { useContext, useState } from 'react'
import SearchItem from '../SearchItem'
import ResetButton from '../ResetButton'
import './search-page-styles.scss'
import SortSelect from './SortSelect'
import { sortByPrice } from '../../utils/tools'
import SearchContext from './SearchContext'

const SearchList = ({ searchQuery }) => {
  const { store } = useContext(SearchContext)
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
          <ResetButton />
        </div>
        {!isEmptyList && <SortSelect />}
      </div>

      {!isEmptyList &&
        sortSearchResult.map((item, index) => (
          <SearchItem key={index} details={item} />
        ))}
    </div>
  )
}

export default SearchList
