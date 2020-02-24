import React from 'react'
import { shallow } from 'enzyme'
import Header from '..'

describe('Header', () => {
  it('renders the Header', () => {
    const wrapper = shallow(<Header />)
    expect(wrapper.find('.header')).toHaveLength(1)
    expect(wrapper.find('.headerLogo')).toHaveLength(1)
  })
})
