import React from 'react';
import { Route, Link } from 'react-router-dom'

class App extends React.Component {
static contextType = ApiContext;

render(){
  <header className="App_Header">
    <Header />
  </header>
  <Route path='/' component={ExerciseSearch}/> //to be....public??
  <Route path='/login' component={LoginPage} /> //to be public
  <Route path='/register' component={RegisterPage} /> //to be public
  <Route path='/user/:userId' component={UserMainPage} /> //to be private 

}
}

export default App;
