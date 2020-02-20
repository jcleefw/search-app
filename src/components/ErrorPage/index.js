import React, { useContext } from 'react'
import ResetButton from '../ResetButton'

const ErrorPage = ({ searchContext }) => {
  const { store } = useContext(searchContext)
  return (
    <div>
      <h2>Opps there's an Error</h2>
      <p>{store.searchErrors}</p>

      <ResetButton searchContext={searchContext} />
    </div>
  )
}

export default ErrorPage
