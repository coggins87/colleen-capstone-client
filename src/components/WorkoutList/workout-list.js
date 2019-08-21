import React from "react";
import Workout from "../Workout/workout";
import uuid from "uuid";
class WorkoutList extends React.Component {

  render() {
    return (
      <>
        <h3 className="subheader">Complete as many reps as possible:</h3>

        {this.props.workouts.map(workout => {
          return <Workout key={uuid()} workout={workout} workouts={this.props.workouts} userId={this.props.userId} handleDelete={this.props.handleDeleteWorkout} onDeleteWorkout={this.props.onDeleteWorkout}/>;
        })}
      </>
    );
  }
}

export default WorkoutList;
