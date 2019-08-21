import React from "react";
import TokenService from "../services/token-service";
import WorkoutService from "../services/workout-search-service";
const ApiContext = React.createContext({
  error: null,
  isLoggedIn: false,
  userId: null,
  setError: () => {},
  clearError: () => {},
  handleLoginSuccess: () => {}
});

export default ApiContext;

export class ApiProvider extends React.Component {
  state = {
    error: null,
    isLoggedIn: false,
    userId: null
  };
  setError = error => {
    console.error(error);
    this.setState({ error });
  };
  clearError = () => {
    this.setState({ error: null });
  };

  onDelete = () => {
    const user_id = this.props.reqs.params.userId;
    WorkoutService.deleteWorkout(user_id);
    this.setState({ workouts: WorkoutService.getUserWorkouts(user_id) });
  };

  nullError = () => {
    this.setState( {error: 'Invalid user, close this window to log out and try again'})
  }

  handleLoginSuccess = () => {
    const read = TokenService.readJwtToken();
    const user_Id = read.user_id;
    this.setState({
      userId: user_Id,
      isLoggedIn: true
    });
  };

  handleLogoutSuccess = () => {
    this.setState({
      userId: null,
      isLoggedIn: false
    });
  };

  isUserLoggedIn = () => {
    if (TokenService.hasAuthToken()) {
      const read = TokenService.readJwtToken();
      const user_Id = read.user_id;
      this.setState({
        userId: user_Id
      });
    }
  };
  render() {
    const value = {
      isUserLoggedIn: this.isUserLoggedIn,
      nullError: this.nullError,
      error: this.state.error,
      isLoggedIn: this.state.isLoggedIn,
      setError: this.setError,
      clearError: this.clearError,
      userId: this.state.userId,
      handleLoginSuccess: this.handleLoginSuccess,
      handleLogoutSuccess: this.handleLogoutSuccess,
      handleDeleteWorkout: this.onDelete
    };
    return (
      <ApiContext.Provider value={value}>
        {this.props.children}
      </ApiContext.Provider>
    );
  }
}
