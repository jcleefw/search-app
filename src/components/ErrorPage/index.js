import React, { useContext } from 'react'
import ResetButton from '../ResetButton'
import SearchContext from '../SearchContainer/SearchContext'

const ErrorPage = () => {
  const { store } = useContext(SearchContext)
  return (
    <div>
      <h2>Opps there's an Error</h2>
      <p>{store.searchErrors}</p>

      <ResetButton />
    </div>
  )
}

export default ErrorPage
