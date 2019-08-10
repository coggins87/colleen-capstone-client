import React from 'react'
import AuthApiService from '../../services/auth-api-service.js'

class LoginForm extends React.Component{
  static defaultProps = {
    onLoginSuccess: ()=>{}
  }

  state = {error: null}

  handleSubmitJwtAuth = e => {
    e.preventDefault()
    this.setState({error: null})
    const {user_name, password} = e.target

    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value
    })
    .then(res=> {
      user_name.value=""
      password.value=""
      this.props.onLoginSuccess()
    })
    .catch(res=> {
      this.setState({error: res.error})
    })
    console.log('logged in')
  }
  render(){
    const {error}= this.state
    return (
      <form onSubmit={this.handleSubmitJwtAuth}>
        <div>{error &&<p>{error}</p>}</div>
      <label htmlFor='Login_user_name'>User Name:</label>
      <input required type='text' name='user_name' id='Login_user_name'></input>
      <label htmlFor='Login_password'>Password:</label>
      <input required type='password' name='password' id='Login_password'></input>
      <button type='submit'>Log In</button>
      </form>

    )
  }
}

export default LoginForm