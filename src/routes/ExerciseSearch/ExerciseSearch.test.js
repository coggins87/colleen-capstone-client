import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import ExerciseSearch from './ExerciseSearch'

describe(`ExerciseSearch component`, () => {


  it('renders the ExerciseSearch component by default', () => {
    const wrapper = shallow(<ExerciseSearch />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

})