import React, { useContext } from 'react'
import SearchContext from './SearchContext'

const SortSelect = () => {
  const { dispatch, store } = useContext(SearchContext)
  return (
    <form id="sortBy">
      <select
        className="sortSelect"
        onChange={e => {
          return dispatch({ type: 'SET_SORT_ORDER', sortOrder: e.target.value })
        }
        }
        defaultValue={store.sortOrder}
      >
        <option value="desc">Price high-low</option>
        <option value="asc">Price low-high</option>
      </select>
    </form>
  )
}

export default SortSelect
