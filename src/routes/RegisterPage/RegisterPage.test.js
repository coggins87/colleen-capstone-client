import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import RegisterPage from './RegisterPage'

describe(`RegisterPage component`, () => {
const props = {
  history: {
    push:()=>{}
  },
}

  it('renders the RegisterPage component by default', () => {
    const wrapper = shallow(<RegisterPage />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
  it('renders the RegisterPage component given props', () => {
    const wrapper = shallow(<RegisterPage {...props}/>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })


})