import React from 'react'

class RegisterForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault()
    console.log('submitted registration')
  }
  render(){
    
    return(
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='Registration_user_name'>User Name:</label>
        <input type='text' name='user_name' id='Registration_user_name'></input>
        <label htmlFor='Registration_password'>Password:</label>
        <input type='text' name='password' id='Registration_password'></input>
        <button>Register</button>
      </form>
    )
  }
}

export default RegisterForm