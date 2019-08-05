import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm'

class LoginPage extends React.Component{

  handleLogin = e => {
    e.preventDefault()
    console.log('login')
  }
  render(){
    return(
      <LoginForm />
    )
  }
}

export default LoginPage;