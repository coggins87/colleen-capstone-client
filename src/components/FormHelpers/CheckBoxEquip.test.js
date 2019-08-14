import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import CheckBoxEquip from './CheckBoxEquip'

describe('CheckBoxEquip component', () => {
  const props = {
    className: 'test-class-name',
    testCheck: ()=>{},
    'data-other': 'test-other-prop'
  }

  it('renders a CheckBoxEquip by default', () => {
    const wrapper = shallow( <CheckBoxEquip />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders the CheckBoxEquip given props', () => {
    const wrapper = shallow( <CheckBoxEquip {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})