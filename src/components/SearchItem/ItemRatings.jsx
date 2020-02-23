import React from 'react'

const ICON_ENUM = {
  star: 'star',
  half_star: 'star_half',
  empty_star: 'star_border',
  self: 'lens',
  half_self: 'tonality',
  empty_self: 'panorama_fish_eye',
}

const renderIconComponent = (floorValue, ratingType) => {
  return Array.from(Array(floorValue), (_, i) => (
    <RatingIcon
      index={i}
      iconName={ICON_ENUM[ratingType]}
      ratingType={ratingType}
    />
  ))
}

const RatingIcon = ({ index, iconName, ratingType }) => {
  return (
    <i key={index} className={`material-icons ratings ${ratingType}`}>
      {iconName}
    </i>
  )
}

const Ratings = ({ rating }) => {
  const { ratingValue, ratingType } = rating
  const hasDecimalValue = Math.floor(ratingValue) % ratingValue > 0
  const floorValue = Math.floor(ratingValue)
  const emptyValue = 5 - Math.round(ratingValue)

  let fragments = []

  fragments = renderIconComponent(floorValue, ratingType)
  if (hasDecimalValue)
    fragments.push(renderIconComponent(1, `half_${ratingType}`))

  if (emptyValue)
    fragments.push(renderIconComponent(emptyValue, `empty_${ratingType}`))

  return fragments
}

export default Ratings
