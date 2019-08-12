import React from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
import IdleService from '../../services/idle-service'
import ApiContext from '../../context/ApiContext';

class Header extends React.Component {
  static defaultProps = {
    location: {},
    history: {
      push: ()=>{}
    },
    
  }
  static contextType = ApiContext

  handleLogoutClick = () => {
//    this.context.isLoggedIn = false
   
   TokenService.clearAuthToken()
   TokenService.clearCallbackBeforeExpiry()
   IdleService.unRegisterIdleResets()
   this.context.handleLogoutSuccess()
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
          to='/users/login'>
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
        to={`/users/${this.context.userId}`}>
          My Workouts
        </Link>
      </div>
    )
  }
/* 
  componentWillMount(){
    
    if(TokenService.hasAuthToken()){
      //this.context.isLoggedIn = true
      this.setState({
        isLoggedIn : this.context.isLoggedIn
      })
    } else {
      this.setState({
        isLoggedIn: false
      })
    }
    console.log('HAS TOKEN', this.context.isLoggedIn)

  }
 */
  render(){
    console.log(this.context.userId)
console.log(this.props)
    //console.log("ON RENDER IS LOGGED IN", this.context.isLoggedIn)
    return(
  <nav>
    <h1>
    <Link to='/'>
      AMRApp
    </Link>
    </h1>
    <span className='Header__tagline--wide'>Find your next workout!</span>
    
    {TokenService.hasAuthToken() /* || this.context.isLoggedIn  */? this.renderLogoutLink() :
    this.renderLoginLink()}
    {TokenService.hasAuthToken()/*  || this.context.isLoggedIn */ ? this.renderUserPageLink() : <></>}
    <Link to='/search'>Generate A Workout</Link> 
    
  </nav>
  )
  }
}

export default Header