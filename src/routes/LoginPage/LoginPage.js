import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm'
import ApiContext from '../../context/ApiContext';

class LoginPage extends React.Component{
  static defaultProps = {
    location: {},
    history: {
      push: ()=>{}
    },
    
  }
 static contextType = ApiContext

  render(){
    return(
      <section className="LoginPage">
        <h2>Login</h2>
      <LoginForm onLoginSuccess={this.handleLoginSuccess} />
      </section>
    )
  }
}

export default LoginPage;