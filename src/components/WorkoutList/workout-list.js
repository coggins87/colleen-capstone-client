import React from 'react'
import Workout from '../Workout/workout'

class WorkoutList extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      workouts: [
        {id: 1,
        time: 20,
        movements:[{name:'burpees', reps:'10'},{name:'run', reps: '1 mile'}, {name:'overhead squats', reps: '15'}]
        },
      ]
    }
  }

  componentDidMount(){
    console.log('get workouts')

  }
 
render(){
  return (
    this.state.workouts.map(workout => { 
      return (
  <Workout prop={workout}/>)

    }))
}
}

export default WorkoutList