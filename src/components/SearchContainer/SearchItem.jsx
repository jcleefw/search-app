import React from 'react'
import './search-page-styles.scss'

const SearchItem = ({ index, details }) => {
  return (
    <article className="searchItem" key={index}>
      <p>{details.property.title}</p>
    </article>
  )
}

export default SearchItem