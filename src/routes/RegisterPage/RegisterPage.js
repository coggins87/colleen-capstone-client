import React from 'react'
import RegisterForm from '../../components/RegisterForm/RegisterForm'

class RegisterPage extends React.Component {
 static defaultProps = {
   history: {
     push:()=>{}
   },
 }
 handleRegistrationSuccess = user => {
   const { history } =this.props
   history.push('/login')
 }
  render(){
    return(
      <section>
        <h2>Register</h2>
     <RegisterForm 
     onRegistrationSuccess={this.handleRegistrationSuccess}
     />
     </section>
    )
  }
}

export default RegisterPage