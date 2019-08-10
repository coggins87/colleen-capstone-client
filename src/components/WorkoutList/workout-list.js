import React from 'react'
import Workout from '../Workout/workout'

class WorkoutList extends React.Component {

render(){
  return (
    this.props.workouts.map(workout => { 
      return (
  <Workout workout={workout}/>)

    }))
}
}

export default WorkoutList