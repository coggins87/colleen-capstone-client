import React from 'react'
import AuthApiService from '../../services/auth-api-service'

class RegisterForm extends React.Component {
  static defaultProps = {
    onRegistrationSuccess: () => {}
  }
  state = { error: null}
  handleSubmit = e => {
    e.preventDefault()
    const { user_name, password, email } = e.target

    this.setState({error: null})
    AuthApiService.postUser({
      user_name: user_name.value,
      password: password.value,
      email: email.value
    })
    .then(user => {
      user_name.value = ''
      password.value = ''
      email.value=''
      this.props.onRegistrationSuccess()
    })
    .catch(res => {
      this.setState({error: res.error})
    })
  }
  render(){
    const {error}=this.state
    return(
      <form className='_form'onSubmit={this.handleSubmit}>
         <div role='alert'>
          {error && <p>{error}</p>}
        </div>
        <label htmlFor='Registration_user_name'>User Name:</label>
        <input className="form_input" placeholder="Required" required type='text' name='user_name' id='Registration_user_name'></input>
        <label htmlFor='Registration_password'>Password:</label>
        <input className="form_input" placeholder="Required" required type='password' name='password' id='Registration_password'></input>
        <label htmlFor='Registration_email'>Email:</label>
        <input className="form_input" placeholder="Required" required type='email' name='email' id='Registration_email'></input>
        <button className="form_button">Register</button>
      </form>
    )
  }
}

export default RegisterForm