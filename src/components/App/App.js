import React from 'react';
import { Route, Switch } from 'react-router-dom'
import ExerciseSearch from '../../routes/ExerciseSearch/ExerciseSearch'
import LoginPage from '../../routes/LoginPage/LoginPage'
import UserMainPage from '../../routes/UserMainPage/UserMainPage'
import RegisterPage from '../../routes/RegisterPage/RegisterPage'
import Header from '../Header/Header'
import LandingPage from '../../routes/LandingPage/LandingPage'
import PrivateRoute from '../../utils/PrivateRoute'
import PublicOnlyRoute from '../../utils/PublicOnlyRoute'
import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage';
import IdleService from '../../services/idle-service'
import TokenService from '../../services/token-service'
import AuthApiService from '../../services/auth-api-service'


class App extends React.Component {
  
state = { hasError: false}


static getDerivedStateFromError(error) {
  console.error(error)
  return { hasError: true }
}

componentDidMount (){
 
  /* set the function(callback)to call when a user goes idle
  we'll set this to logout a user when they're idle */
  IdleService.setIdleCallback(this.logoutFromIdle)
  //if a user is logged in
  if(TokenService.hasAuthToken()){
    /*tell the idle service to register event listeners
    the event listeners are fired when a user does something, if
    the user doesn't trigger one of these event listeners,
    the idleCallback(logout) will be invoked */
    IdleService.registerIdleTimerResets()
    /*Tell the token service to read the JWT, looking at the expiry
    and queue a timeout just before the token expires */
    TokenService.queueCallbackBeforeExpiry(()=>{
      AuthApiService.postRefreshToken()
    })
  }
  
}
componentWillUnmount(){
  /* when the app unmounts, stop the event listeners that auto
  logout (clear the token from storage)*/
  IdleService.unRegisterIdleResets()
  //and remove refresh endpoint request
  TokenService.clearCallbackBeforeExpiry()
}

logoutFromIdle = ()=>{
  //remove token from localStorage
  TokenService.clearAuthToken()
  //remove any queued calls to the refresh endpoint
  TokenService.clearCallbackBeforeExpiry()
  //remove timeouts that auto logout when idle
  IdleService.unRegisterIdleResets()
  /*React won't know the token has been removed from local storage
  so we need to tell React to re-render */
  this.forceUpdate()
}

render(){
  return(
  <div className="App">
  <header className="App_Header">
    <Header />
  </header>
  <main className="App_main">
  {this.state.hasError && <p className='red'>There was an error! Oh no!</p>}

    <Switch>
  <Route exact path='/' component={LandingPage} />
  <Route path='/search' component={ExerciseSearch}/> 
  <PublicOnlyRoute path='/login' component={LoginPage} /> 
  <PublicOnlyRoute path='/register' component={RegisterPage} /> 
  <PrivateRoute path='/users/:userId' component={UserMainPage} /> 
  <Route component={NotFoundPage}/>
  </Switch>
  
  </main>
</div>
  )
}
}
export default App;
