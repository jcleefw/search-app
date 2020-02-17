import React from 'react'
import './search-item.scss'

const renderItemPrice = propertyOffer => {
  return (
    <div className="pricePerNight">{propertyOffer.displayPrice.amount}</div>
  )
}

const renderItemImage = (imgDetails, promotionTitle) => {
  return (
    <figure className="itemFigure">
      <img src={imgDetails.url} alt={imgDetails.caption} />
      <span>{promotionTitle}</span>
    </figure>
  )
}

const SearchItem = ({ index, details }) => {
  return (
    <article className="searchItem" key={index}>
      {renderItemImage(
        details.property.previewImage,
        details.offer.promotion.title
      )}
      <p>{details.property.title}</p>
      {renderItemPrice(details.offer)}
    </article>
  )
}

export default SearchItem
