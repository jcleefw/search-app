import React from 'react'

const ErrorPage = ({ errors }) => {
  return (
    <div>
      <h2>Opps there's an Error</h2>
      <p>{errors.err}</p>
    </div>
  )
}

export default ErrorPage
