import React from 'react'
import AuthApiService from '../../services/auth-api-service'

class RegisterForm extends React.Component {
  static defaultProps = {
    onRegistrationSuccess: () => {}
  }
  state = { error: null}
  handleSubmit = e => {
    e.preventDefault()
    const { user_name, password } = e.target

    this.setState({error: null})
    AuthApiService.postUser({
      user_name: user_name.value,
      password: password.value
    })
    .then(user => {
      user_name.value = ''
      password.value = ''
      this.props.onRegistrationSuccess()
    })
    .catch(res => {
      this.setState({error: res.error})
    })
  }
  render(){
    const {error}=this.state
    return(
      <form onSubmit={this.handleSubmit}>
         <div role='alert'>
          {error && <p>{error}</p>}
        </div>
        <label htmlFor='Registration_user_name'>User Name:</label>
        <input required type='text' name='user_name' id='Registration_user_name'></input>
        <label htmlFor='Registration_password'>Password:</label>
        <input required type='text' name='password' id='Registration_password'></input>
        <button>Register</button>
      </form>
    )
  }
}

export default RegisterForm