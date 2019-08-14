import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import CheckBoxBody from './CheckBoxBody'

describe(`CheckBoxBody component`, () => {
  const props = {
    className: 'test-class-name',
    testCheck: ()=>{},
    'data-other': 'test-other-prop'
  }

  it('renders a CheckBoxBody by default', () => {
    const wrapper = shallow(<CheckBoxBody />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders the CheckBoxBody given props', () => {
    const wrapper = shallow(<CheckBoxBody {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})