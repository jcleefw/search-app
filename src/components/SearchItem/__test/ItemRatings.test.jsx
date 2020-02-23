import React from 'react'
import RatingIcon from '../RatingIcon'
import Ratings from '../ItemRatings'

import { shallow, mount } from 'enzyme'

describe('Item Ratings', () => {
  it('render Ratings Icon', () => {
    const element = shallow(
      <RatingIcon iconName={'bar_chart'} ratingType={'star'} />
    )
    expect(element.html()).toMatchInlineSnapshot(
      `"<i class=\\"material-icons ratings star\\">bar_chart</i>"`
    )
  })

  it('render Self Rating component', () => {
    const ratingsData = {
      ratingType: 'self',
      ratingValue: 2.5,
    }
    const wrapper = mount(<Ratings rating={ratingsData} />)
    const ratingIcons = wrapper.find(RatingIcon)

    expect(ratingIcons).toHaveLength(5)
    expect(ratingIcons.find('.self')).toHaveLength(2)
    expect(ratingIcons.find('.half_self')).toHaveLength(1)
    expect(ratingIcons.find('.empty_self')).toHaveLength(2)
  })

  it('render Star Rating component', () => {
    const ratingsData = {
      ratingType: 'star',
      ratingValue: 2.5,
    }
    const wrapper = mount(<Ratings rating={ratingsData} />)
    const ratingIcons = wrapper.find(RatingIcon)

    expect(ratingIcons).toHaveLength(5)
    expect(ratingIcons.find('.star')).toHaveLength(2)
    expect(ratingIcons.find('.half_star')).toHaveLength(1)
    expect(ratingIcons.find('.empty_star')).toHaveLength(2)
  })
})
