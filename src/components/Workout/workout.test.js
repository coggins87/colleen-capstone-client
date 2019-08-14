import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Workout from './workout'

jest.mock('uuid', () => jest.fn(() => '1'));
describe(`Workout component`, () => {
  const props = {
  
    workout: {workout_length: 1, movements:[{movement_name: 'name'},{reps: 'reps'}, {equipment: 'equip'}]}
  }



  it('renders the Workout given props', () => {
    const wrapper = shallow(<Workout {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

})