import React from 'react'
import Workout from '../Workout/workout'
import uuid from 'uuid'
import './workout-list.css'
class WorkoutList extends React.Component {

render(){
  return (
    this.props.workouts.map(workout => { 
      return (
  <Workout key={uuid()} workout={workout}/>)

    }))
}
}

export default WorkoutList