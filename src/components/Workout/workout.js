import React from "react";
import uuid from "uuid";
import "./workout.css";

export default class Workout extends React.Component {
  
  
  render() {
    return ( <div className="workout">
      <ul>
        <h3 className="saved_workout_head">
          In {this.props.workout.workout_length} minutes:
        </h3>
        {this.props.workout.movements.map(movement => {
          return (
            <li className="saved_workout_item" key={uuid()}>
              {movement.reps} {movement.movement_name}{" "}
              {movement.equipment ? `with ${movement.equipment}` : ""}
            </li>
          );
        })}
      </ul>
      <button className="delete_button" onClick={()=>this.props.handleDelete(this.props.userId, this.props.workout.workout_id)}>Delete Workout</button>
      </div>
    );
  }
}
