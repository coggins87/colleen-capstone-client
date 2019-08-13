import React from "react";
import uuid from 'uuid';
import './workout.css';

export default class Workout extends React.Component {
  render() {
    return (
      <ul>
        <h3 className="saved_workout_head">In {this.props.workout.workout_length} minutes complete:</h3>
        {this.props.workout.movements.map(movement => {
          return (
            <li className="saved_workout_item" key={uuid()}>
              {movement.reps} {movement.movement_name}{" "}
              {movement.equipment ? `with ${movement.equipment}` : ""}
            </li>
          );
        })}
      </ul>
    );
  }
}
