import React from 'react'
import './search-item.scss'

const renderItemImage = (imgDetails, promotionTitle) => {
  return (
    <figure className="itemFigure">
      <img loading="lazy" src={imgDetails.url} alt={imgDetails.caption} />
      <span className="promotionTitle">{promotionTitle}</span>
    </figure>
  )
}

const renderItemDetails = (propertyDetails, offerName, cancellationType) => {
  const freeCancellation =
    cancellationType === 'FREE_CANCELLATION' ? true : false
  return (
    <div className="propertyDetails">
      <div className="propertyDetailsStatics">
        <h4 className="propertyName">{propertyDetails.title}</h4>
        <p className="propertyAddress">{propertyDetails.address.join()}</p>
        <p className="propertyType">
          <a href="#">{offerName}</a>
        </p>
      </div>

      {freeCancellation && (
        <p className="freeCancellation">Free Cancellation</p>
      )}
    </div>
  )
}

const renderItemPrice = propertyOffer => {
  const propertySavings = propertyOffer.savings
    ? propertyOffer.savings.amount
    : null
  return (
    <div className="propertyPriceDetails">
      <p className="caption">
        <span>1</span> night total{' '}
        {propertyOffer.displayPrice.currency.toUpperCase()}
      </p>
      <div className="pricePerNight">{propertyOffer.displayPrice.amount}</div>
      {propertySavings && (
        <div className="savings">Save ${propertySavings}</div>
      )}
    </div>
  )
}

const SearchItem = ({ index, details }) => {
  return (
    <article className="searchItem" key={index}>
      {renderItemImage(
        details.property.previewImage,
        details.offer.promotion.title
      )}
      <div className="searchItem__information">
        {renderItemDetails(
          details.property,
          details.offer.name,
          details.offer.cancellationOption.cancellationType
        )}
        {renderItemPrice(details.offer)}
      </div>
    </article>
  )
}

export default SearchItem
