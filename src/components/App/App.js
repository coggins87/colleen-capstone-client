import React from 'react';
import { Route } from 'react-router-dom'
import ExerciseSearch from '../../routes/ExerciseSearch/ExerciseSearch'
import LoginPage from '../../routes/LoginPage/LoginPage'
import UserMainPage from '../../routes/UserMainPage/UserMainPage'
import RegisterPage from '../../routes/RegisterPage/RegisterPage'
import Header from '../Header/Header'
import LandingPage from '../../routes/LandingPage/LandingPage'
import ApiContext from '../../context/ApiContext'

class App extends React.Component {
static contextType = ApiContext;

render(){
  return(
  <>
  <header className="App_Header">
    <Header />
  </header>
  <Route path='/' component={LandingPage} />
  <Route path='/search' component={ExerciseSearch}/> 
  <Route path='/login' component={LoginPage} /> 
  <Route path='/register' component={RegisterPage} /> 
  <Route path='/user/:userId' component={UserMainPage} /> 
</>
  )
}
}
export default App;
