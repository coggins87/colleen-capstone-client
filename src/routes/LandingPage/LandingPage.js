import React from "react";
import "./landing-page.css";
import ApiContext from "../../context/ApiContext";
import TokenService from "../../services/token-service";
import IdleService from "../../services/idle-service";
import track from '../../media/startingline.jpg';
import {Link} from 'react-router-dom'
import 'animate.css'

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
          <h2 className="landing_title animated fadeIn">
            Create randomly generated AMRAP workouts
          </h2>
          <h4 className="subheader animated fadeIn delay-3s">
            From a database of movements curated by a licensed physical
            therapist
          </h4>
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

          <li className="animated fadeIn delay-4s">Click 'Generate A Workout' to search for a new AMRAP workout</li>
          <li className="animated fadeIn delay-5s"><Link to='/register'>Create an account</Link> or <Link to='/login'>log in</Link> to save workouts for later!</li>
        </ul>
        
      </div>
      <img id="landing-img" src={track} alt="women in workout clothes in a starting position"/>
     
        </div>
    );
  }
}
