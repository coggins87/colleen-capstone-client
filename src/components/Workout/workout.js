import React from "react";
import uuid from "uuid";
import Movement from '../Movement/Movement'
import "./workout.css";

export default class Workout extends React.Component {

  
  render() {
    return (
      <div className="workout">
          <h3 className="saved_workout_head">
            In {this.props.workout.workout_length} minutes:
          </h3>
          <ul>
          {this.props.workout.movements.map((movement, index) => {
            return (
              <Movement movement={movement} index={index} />
            
            );
          })}
        </ul>
        <button
          className="delete_button"
          onClick={() =>
            this.props.handleDelete(
              this.props.userId,
              this.props.workout.workout_id
            )
          }
        >
          Delete Workout
        </button>
      </div>
    );
  }
}
