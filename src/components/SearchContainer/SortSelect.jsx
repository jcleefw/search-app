import React, { useContext } from 'react'
import SearchContext from './SearchContext'

const SortSelect = () => {
  const { dispatch } = useContext(SearchContext)
  return (
    <form id="sortBy">
      <select
        className="sortSelect"
        onChange={e =>
          dispatch({ type: 'SET_SORT_ORDER', sortOrder: e.target.value })
        }
        defaultValue="high-to-low"
      >
        <option value="desc">Price high-low</option>
        <option value="asc">Price low-high</option>
      </select>
    </form>
  )
}

export default SortSelect
