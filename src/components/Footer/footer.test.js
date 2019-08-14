import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Footer from './footer'

describe ('Footer', ()=>{
  it('renders a footer by default', ()=>{
    const wrapper = shallow(<Footer />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})