import React from 'react'

const ICON_ENUM = {
  star: 'star',
  half_star: 'star_half',
  self: 'lens',
  half_self: 'tonality'
}

const renderIconComponent = (floorValue, ratingType) => {
  return Array.from(Array(floorValue), (_, i) => 
    <RatingIcon index={i} iconName={ICON_ENUM[ratingType]} />
  )
}

const RatingIcon = ({index, iconName}) => {
  return <i key={index} class="material-icons">{iconName}</i>
}

const Ratings = ({rating}) => {
  const {ratingValue, ratingType} = rating
  const hasDecimalValue = (Math.floor(ratingValue) % ratingValue) > 0  
  const floorValue = Math.floor(ratingValue)

  let fragments = renderIconComponent(floorValue, ratingType)
  if(hasDecimalValue)
    fragments.push(<RatingIcon iconName={ICON_ENUM[`half_${ratingType}`]} />)

  return fragments
}

export default Ratings
