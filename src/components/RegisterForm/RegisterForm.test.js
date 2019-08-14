import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import RegisterForm from './RegisterForm'
import {ApiProvider} from '../../context/ApiContext'

describe(`RegisterForm component`, () => {
  const props = {
    testObj: {},
    history : {
    testCheck: ()=>{}
    },
  }

  it('renders a RegisterForm by default', () => {
    const wrapper = shallow(<RegisterForm />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders the RegisterForm given props', () => {
    const wrapper = shallow(<RegisterForm {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders the RegisterForm given context', () => {
    const wrapper = shallow(<ApiProvider><RegisterForm /></ApiProvider>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})