import React from "react";
import AuthApiService from "../../services/auth-api-service.js";
import ApiContext from "../../context/ApiContext.js";
import "./login-form.css";

class LoginForm extends React.Component {
  static defaultProps = {
    onLoginRedirect: () => {}
  };

  state = { error: null };

  static contextType = ApiContext;

  handleSubmitJwtAuth = e => {
    e.preventDefault();
    this.setState({ error: null });
    const { user_name, password } = e.target;

    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value
    })
      .then(res => {
        user_name.value = "";
        password.value = "";
        this.context.handleLoginSuccess();
      })
      .catch(res => {
        if (res.message) {
          this.setState({ error: "Something went wrong! Try again later." });
        } else {
          this.setState({ error: res.error });
        }
      });
  };
  render() {
    const { error } = this.state;
    return (
      <form className="_form" onSubmit={this.handleSubmitJwtAuth}>
        <div className="error">{error && <p className="red">{error}</p>}</div>
        <label htmlFor="Login_user_name">User Name:</label>
        <input
          className="form_input"
          required
          type="text"
          placeholder="Required"
          name="user_name"
          id="Login_user_name"
        />
        <label htmlFor="Login_password">Password:</label>
        <input
          className="form_input"
          required
          type="password"
          name="password"
          id="Login_password"
          placeholder="Required"
        />
        <button id="login_button" className="form_button" type="submit">
          Log In
        </button>
      </form>
    );
  }
}

export default LoginForm;
