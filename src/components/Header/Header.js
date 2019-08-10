import React from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
import IdleService from '../../services/idle-service'
import ApiContext from '../../context/ApiContext';

class Header extends React.Component {

  state = {
    workouts: []
  };
  static defaultProps = {
    match: { params: {} }
  };

  static contextType = ApiContext

  handleLogoutClick = () => {
   TokenService.clearAuthToken()
   TokenService.clearCallbackBeforeExpiry()
   IdleService.unRegisterIdleResets()
    this.context.isLoggedIn = false
   this.forceUpdate()
  }

  renderLogoutLink() {
    return (
      <div className='Header__logged-in'>
        <Link
          onClick={this.handleLogoutClick}
          to='/'>
          Logout
        </Link>
      </div>
    )
  }

  renderLoginLink() {
    return (
      <div className='Header__not-logged-in'>
        <Link
          to='/login'>
          Log in
        </Link>
        <Link
          to='/register'>
          Register
        </Link>
      </div>
    )
  }

  renderUserPageLink() {
    return (
      <div className='Header__logged-in'>
        <Link
        to='/users/:userId'>
          My Workouts
        </Link>
      </div>
    )
  }

  render(){
    return(
  <nav>
    <h1>
    <Link to='/'>
      AMRApp
    </Link>
    </h1>
    <span className='Header__tagline--wide'>Find your next workout!</span>
    
    {TokenService.hasAuthToken()|| this.context.isLoggedIn ? this.renderLogoutLink() :
    this.renderLoginLink()}
    {TokenService.hasAuthToken() || this.context.isLoggedIn ? this.renderUserPageLink() : <></>}
    <Link to='/search'>Generate A Workout</Link> 
    
  </nav>
  )
  }
}

export default Header