import React, { useContext } from 'react'

const ErrorPage = ({ searchContext }) => {
  const { store } = useContext(searchContext)
  return (
    <div>
      <h2>Opps there's an Error</h2>
      <p>{store.searchErrors}</p>
    </div>
  )
}

export default ErrorPage
