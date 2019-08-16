import React from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import "./LoginPage.css";
class LoginPage extends React.Component {
  render() {
    return (
      <section className="LoginPage">
        <h2 className="page_header">Log in</h2>
        <LoginForm />
      </section>
    );
  }
}

export default LoginPage;
