import React from 'react'
import { Link } from 'react-router-dom'

class Header extends React.Component {
  handleLogoutClick = () => {
    console.log('logout')
   // TokenService.clearAuthToken()
   // TokenService.clearCallbackBeforeExpiry()
   // IdleService.unRegisterIdleResets()
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
  render(){
    
    return(
  <nav>
    <h1>
    <Link to='/'>
      AMRApp
    </Link>
    </h1>
    <span className='Header__tagline--wide'>Find your next workout!</span>
    {this.renderLoginLink()}
    {this.renderLogoutLink()}
  </nav>
  )
  }
}

export default Header