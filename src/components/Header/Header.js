import React from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
import IdleService from '../../services/idle-service'
import ApiContext from '../../context/ApiContext';
import ('./header.css')

class Header extends React.Component {
  static defaultProps = {
    location: {},
    history: {
      push: ()=>{}
    },
    
  }
  static contextType = ApiContext

  handleLogoutClick = () => {   
   TokenService.clearAuthToken()
   TokenService.clearCallbackBeforeExpiry()
   IdleService.unRegisterIdleResets()
   this.context.handleLogoutSuccess()
  }

  renderLogoutLink() {
    return (
      <div className='Header__logged-in'>
        <Link className='link'
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
        <Link className="link"
          to='/users/login'>
          Log in
        </Link>
        <div>
        <Link className="link"
          to='/register'>
          Register
        </Link>
        </div>
      </div>
    )
  }

  renderUserPageLink() {
  
    return (
      <div className='Header__logged-in'>
        <Link className="link"
        to={`/users/${this.context.userId}`}>
          My Workouts
        </Link>
      </div>
    )
  }

  render(){
    return(
  <nav>
    <div className='header-div'>
    <h1>
    <Link className="header, link" to='/'>
      AMRApp
    </Link>
    </h1>
    <div className='Header__tagline--wide'><span>Find your next workout!</span></div>
    </div>
    <div className='page-links'>
    {TokenService.hasAuthToken() ? this.renderLogoutLink() :
    this.renderLoginLink()}
    {TokenService.hasAuthToken() ? this.renderUserPageLink() : <></>}
    <Link className="link" to='/search'>Generate A Workout</Link> 
    </div>
  </nav>
  )
  }
}

export default Header