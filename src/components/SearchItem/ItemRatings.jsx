import React from 'react'
import RatingIcon from './RatingIcon'
import { uid } from 'react-uid'

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
      key={uid(i)}
      iconName={ICON_ENUM[ratingType]}
      ratingType={ratingType}
    />
  ))
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
