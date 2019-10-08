import React from "react";
import TokenService from "../../services/token-service";
import "./results.css";
import uuid from "uuid";
class Result extends React.Component {
  renderSaveButton = () => {
    return (
      <button className="form_button" onClick={this.props.saveWorkout}>
        Save Workout
      </button>
    );
  };
  render() {
    return (
      <div className="results">
        <ul className="results_list">
          <h3>In {this.props.time ? this.props.time : ""} minutes complete:</h3>
          {this.props.result.length > 0
            ? this.props.result.map(movement => {
                return (
                  <li key={uuid()}>
                    {movement.reps} {movement.movement_name}{" "}
                    {movement.equipment ? `with ${movement.equipment}` : ""}
                    <video className="video" autoPlay loop><source src={movement.video} type="video/mp4"/></video>
                  </li>
                );
              })
            : ""}
        </ul>
        {TokenService.hasAuthToken() ? this.renderSaveButton() : ""}
      </div>
    );
  }
}

export default Result;
