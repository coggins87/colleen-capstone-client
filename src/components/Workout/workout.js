import React from "react";

export default class Workout extends React.Component {
  render() {
    return (
      <ul>
        <h3>In {this.props.workout.workout_length} minutes complete:</h3>
        {this.props.workout.movements.map(movement => {
          return (
            <li key={movement.id}>
              {movement.reps} {movement.movement_name}{" "}
              {movement.equipment ? `with ${movement.equipment}` : ""}
            </li>
          );
        })}
      </ul>
    );
  }
}
