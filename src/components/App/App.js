import React from "react";
import { Route, Switch } from "react-router-dom";
import ExerciseSearch from "../../routes/ExerciseSearch/ExerciseSearch";
import LoginPage from "../../routes/LoginPage/LoginPage";
import UserMainPage from "../../routes/UserMainPage/UserMainPage";
import RegisterPage from "../../routes/RegisterPage/RegisterPage";
import Header from "../Header/Header";
import LandingPage from "../../routes/LandingPage/LandingPage";
import PrivateRoute from "../../utils/PrivateRoute";
import PublicOnlyRoute from "../../utils/PublicOnlyRoute";
import NotFoundPage from "../../routes/NotFoundPage/NotFoundPage";
import IdleService from "../../services/idle-service";
import TokenService from "../../services/token-service";
import AuthApiService from "../../services/auth-api-service";
import ApiContext from "../../context/ApiContext";
import Footer from "../Footer/footer";
import "./app.css";
class App extends React.Component {
  static contextType = ApiContext;
  state = {
    hasError: false,
    userId: this.context.userId
  };

  static getDerivedStateFromError(error) {
    console.error(error);
    return { hasError: true };
  }

  componentDidMount() {
    IdleService.setIdleCallback(this.logoutFromIdle);
    if (TokenService.hasAuthToken()) {
      IdleService.registerIdleTimerResets();
      TokenService.queueCallbackBeforeExpiry(() => {
        AuthApiService.postRefreshToken();
      });
    }
  }
  componentWillUnmount() {
    IdleService.unRegisterIdleResets();
    TokenService.clearCallbackBeforeExpiry();
  }

  logoutFromIdle = () => {
    TokenService.clearAuthToken();
    TokenService.clearCallbackBeforeExpiry();
    IdleService.unRegisterIdleResets();
    this.forceUpdate();
  };

  render() {
    return (
      <div className="App">
        <header className="App_Header">
          <Header />
        </header>
        <main className="App_main">
          {this.state.hasError && (
            <p className="red">There was an error! Oh no!</p>
          )}

          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/search" component={ExerciseSearch} />
            <PublicOnlyRoute path="/users/login" component={LoginPage} />
            <PublicOnlyRoute path="/register" component={RegisterPage} />
            <PrivateRoute path="/users/:userId" component={UserMainPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}
export default App;
