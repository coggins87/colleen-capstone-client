import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import SearchForm from './SearchForm'

jest.mock('uuid', () => jest.fn(() => '1'));

describe(`SearchForm component`, () => {
  const props = {
    testObj: {},
    history : {
    testCheck: ()=>{}
    },
  }

  it('renders a SearchForm by default', () => {
    const wrapper = shallow(<SearchForm />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders the SearchForm given props', () => {
    const wrapper = shallow(<SearchForm {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

 
})