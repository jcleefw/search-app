import React from 'react'

const RatingIcon = ({ iconName, ratingType }) => {
  return <i className={`material-icons ratings ${ratingType}`}>{iconName}</i>
}

export default RatingIcon
