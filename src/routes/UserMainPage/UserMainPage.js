import React from 'react'
import WorkoutList from '../../components/WorkoutList/workout-list'

class UserMainPage extends React.Component{
  state = {
    workouts: []
  }
  render(){
    return(
      <>
      <h2>My Saved Workouts</h2>
      <p>Search for a workout, if you like what you find, save it here for later!</p>
      <WorkoutList />

      </>
    )
  }
}

export default UserMainPage