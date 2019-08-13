import React from "react";
import TokenService from "../services/token-service";

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
      userId : null,
      isLoggedIn: false
    })
  }

  isUserLoggedIn =()=>{
    if(TokenService.hasAuthToken()){
      const read = TokenService.readJwtToken();
      const user_Id = read.user_id;
      this.setState({
        userId: user_Id
      });
    }
  }
  render() {
    const value = {
      isUserLoggedIn: this.isUserLoggedIn,
      error: this.state.error,
      isLoggedIn: this.state.isLoggedIn,
      setError: this.setError,
      clearError: this.clearError,
      userId: this.state.userId,
      handleLoginSuccess: this.handleLoginSuccess,
      handleLogoutSuccess: this.handleLogoutSuccess,
    };
    return (
      <ApiContext.Provider value={value}>
        {this.props.children}
      </ApiContext.Provider>
    );
  }
}
