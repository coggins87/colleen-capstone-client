import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm'
import ApiContext from '../../context/ApiContext';
import TokenService from '../../services/token-service'

class LoginPage extends React.Component{
  static defaultProps = {
    location: {},
    history: {
      push: ()=>{}
    },
    
  }
 static contextType = ApiContext
/*  handleLoginRedirect = () => {
  const { location, history } = this.props;
  const destination = (location.state || {}).from || "/";
  history.push(destination);
   
 } */
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