import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import LandingPage from './LandingPage'

describe(`LandingPage component`, () => {


  it('renders the LandingPage component by default', () => {
    const wrapper = shallow(<LandingPage />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

})