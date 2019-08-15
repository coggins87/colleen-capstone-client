import React from 'react'
import RegisterForm from '../../components/RegisterForm/RegisterForm'
import './RegisterPage.css'

class RegisterPage extends React.Component {
 static defaultProps = {
   history: {
     push:()=>{}
   },
 }
 handleRegistrationSuccess = user => {
   const { history } =this.props
   history.push('/users/login')
 }
  render(){
    return(
      <section className="RegisterPage">
        <h2 className="page_header">Register</h2>
     <RegisterForm 
     onRegistrationSuccess={this.handleRegistrationSuccess}
     />
     </section>
    )
  }
}

export default RegisterPage