import React, { useContext } from 'react'
import SearchContext from '../SearchContainer/SearchContext'

const ResetButton = () => {
  const { dispatch } = useContext(SearchContext)
  return (
    <span
      className="resetForm"
      onClick={() =>
        dispatch({
          type: 'SET_SEARCH_RESULTS',
          searchResults: [],
          searchErrors: '',
        })
      }
    >
      Reset Form
    </span>
  )
}

export default ResetButton
