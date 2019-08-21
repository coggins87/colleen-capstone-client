import React from "react";
import WorkoutList from "../../components/WorkoutList/workout-list";
import WorkoutSearchService from "../../services/workout-search-service";
import ApiContext from "../../context/ApiContext";
import "./UserMainPage.css";
class UserMainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      workouts: [],
      error: null
    };
    props = {
      match: { params: {} }
    };
    this.onDeleteWorkout = this.onDeleteWorkout.bind(this);
  }

  static contextType = ApiContext;

  onDeleteWorkout(userId) {
    WorkoutSearchService.getUserWorkouts(userId).then(res => {
      this.setState({ workouts: res });
    });
  }

  handleDeleteWorkout(userId, workoutId) {
    const workoutToDelete = { workout_id: workoutId };

    WorkoutSearchService.deleteWorkout(userId, workoutToDelete);
    this.onDeleteWorkout(userId);
  }

  componentDidMount() {
    const userId = this.props.match.params.userId;
    if (userId === 'null'){
      this.context.nullError()
      this.props.history.push('/');
    } else {
    WorkoutSearchService.getUserWorkouts(userId)
      .then(res => {
        this.setState({
          error: null,
          workouts: res
        });
      })
      .catch(res => {
        if (res.message) {
          this.setState({ error: "Something went wrong! Try again later." });
        } else {
          this.setState({
            error:
              "Sorry, could not find that user, please log out and try again"
          });
        }
        // this.props.history.push('/')
      })
    };
  }
  render() {
    const error = this.state.error;
    return (
      <div className="user_main">
        <h2 className="user_header">My Saved Workouts</h2>
        <div role="alert">{error && <p className="red">{error}</p>}</div>
        <div className="user_content">
          {this.state.workouts.length === 0 ? (
            <p>
              Search for a workout, if you like what you find, save it here for
              later!
            </p>
          ) : (
            <WorkoutList
              userId={this.props.match.params.userId}
              workouts={this.state.workouts}
              onDeleteWorkout={this.onDeleteWorkout}
              handleDeleteWorkout={this.handleDeleteWorkout}
            />
          )}
        </div>
      </div>
    );
  }
}

export default UserMainPage;
