import React, { useContext } from 'react'

const ResetButton = ({ searchContext }) => {
  const { dispatch } = useContext(searchContext)
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
