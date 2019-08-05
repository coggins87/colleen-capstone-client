import React from 'react'

class LoginForm extends React.Component{
  handleSubmit = e => {
    e.PreventDefault()
    console.log('logged in')
  }
  render(){
    return (
      <form onSubmit={this.handleSubmit}>
      <label htmlFor='Login_user_name'>User Name:</label>
      <input type='text' name='user_name' id='Login_user_name'></input>
      <label htmlFor='Login_password'>Password:</label>
      <input type='text' name='password' id='Login_password'></input>
      <button>Log In</button>
      </form>

    )
  }
}

export default LoginForm