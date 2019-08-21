import React from "react";
import "./landing-page.css";
import ApiContext from "../../context/ApiContext";
import TokenService from "../../services/token-service";
import IdleService from "../../services/idle-service";

export default class LandingPage extends React.Component {
  state = {
    error: this.context.error
  };
  static contextType = ApiContext;

  handleClear = () => {
    this.setState({
      error: null
    });
    
      TokenService.clearAuthToken();
      TokenService.clearCallbackBeforeExpiry();
      IdleService.unRegisterIdleResets();
      this.context.handleLogoutSuccess();
    

  };
  render() {
    const error = this.state.error;
    return (
      <div className="Landing_page">
        <div className="heading_page">
          <h2 className="landing_title">
            Create randomly generated AMRAP workouts
          </h2>
          <h4 className="subheader">
            From a database of movements curated by a licensed physical
            therapist
          </h4>
        </div>
        <ul className="app_desc">
          <div role="alert">
            {error && (
              <p className="red">
                {error}{" "}
                <button className="error_button" onClick={this.handleClear}>
                  X
                </button>
              </p>
            )}
          </div>

          <li>Click 'Generate A Workout' to search for a new AMRAP workout</li>
          <li>Create an account or log in to save workouts for later!</li>
        </ul>
        <div className="definition">
          <p className="def_word">AMRAP[amrap]:</p>
          <p>
            {" "}
            noun
            <br />
            1. An abbreviation that means 'as many reps as possible'
            <br />
            2. To complete a circuit of exercises as many times as possible
            within a specific period of time
          </p>
        </div>
      </div>
    );
  }
}
