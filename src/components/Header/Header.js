import React from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
import IdleService from '../../services/idle-service'

class Header extends React.Component {
  handleLogoutClick = () => {
   TokenService.clearAuthToken()
   TokenService.clearCallbackBeforeExpiry()
   IdleService.unRegisterIdleResets()
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
        to='/user/:userId'>
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
    
    {TokenService.hasAuthToken() ? this.renderLogoutLink() :
    this.renderLoginLink()}
    {TokenService.hasAuthToken() ? this.renderUserPageLink() : <></>}
    {!TokenService.hasAuthToken() ? <Link to='/search'>Generate A Workout</Link> :
  <Link to='/search/:userId'>Generate A Workout</Link>}
    
  </nav>
  )
  }
}

export default Header