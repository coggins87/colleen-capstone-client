import React from "react";
import WorkoutList from "../../components/WorkoutList/workout-list";
import WorkoutSearchService from "../../services/workout-search-service";
import "./UserMainPage.css";
class UserMainPage extends React.Component {
  state = {
    workouts: [],
    error: null
  };
  static defaultProps = {
    match: { params: {} }
  };

  componentDidMount() {
    const userId = this.props.match.params.userId;

    WorkoutSearchService.getUserWorkouts(userId)
      .then(res => {
        this.setState({
          workouts: res
        });
      })
      .catch(res => {
        if (res.message) {
          this.setState({ error: "Something went wrong! Try again later." });
        } else {
          this.setState({ error: res.error });
        }
      });
  }
  render() {
    const error = this.state.error;
    return (
      <div className="user_main">
        <h2>My Saved Workouts</h2>
        <div role="alert">{error && <p className="red">{error}</p>}</div>
        <div className="user_content">
          {this.state.workouts.length === 0 ? (
            <p>
              Search for a workout, if you like what you find, save it here for
              later!
            </p>
          ) : (
            <WorkoutList workouts={this.state.workouts} />
          )}
        </div>
      </div>
    );
  }
}

export default UserMainPage;
