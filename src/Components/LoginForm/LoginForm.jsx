import React, { Component } from 'react';
import './LoginForm.css';
import avatar from '../../resources/avatar.png';
import check from '../../resources/login_checkmark.svg';
import exclamation from '../../resources/login_error.png';

class LoginForm extends Component {
  state = {
    login: '',
    password: '',
    loginValid: false,
    passwordValid: false
  };

  validateFieldOnBlur = e => {
    const { name, value } = e.target;
    let {login, password, loginValid, passwordValid} = this.state;

    switch (name) {
      case 'login':
        login = value;
        loginValid = /^[A-Za-z]{3,25}$/.test(value);
        break;
      case 'password':
        password = value;
        passwordValid = value.length > 8;
        break;
      default:
        break;
    }
    this.setState({login, password, loginValid, passwordValid});
  };

  onSubmit = e => {
    const { login, loginValid, passwordValid } = this.state;

    e.preventDefault();
   //console.log(this.props);
    if (loginValid && passwordValid)
      this.props.onLogin(login);
  };

  render() {
    const { loginValid, passwordValid, login, password} = this.state;
    return (
        <div className="wrapper">
          <div className="blur" />
          <div className="App">
            <section className="padding">
              <div className="container">
                <img width="65" src={avatar} className="App-Logo" alt="logo" />
                <form onSubmit={this.onSubmit} className="login-form">
                  <div className="login-form_input-wrap">
                    {loginValid && <img src={check} alt="check" className="login-form__input-check" />}
                    {!loginValid && login.length > 0 && <img src={exclamation} alt="error" className="login-form__input-error" />}
                    <input
                      type="text"
                      name="login"
                      className="login-form__input"
                      placeholder="Логин"
                      onBlur={this.validateFieldOnBlur}
                      required
                    />
                  </div>
                  <div className="login-form_input-wrap">
                    {passwordValid && <img src={check} alt="check" className="login-form__input-check" />}
                    {!passwordValid && password.length > 0 && <img src={exclamation} alt="error"  className="login-form__input-error" />}
                    <input
                      type="password"
                      name="password"
                      className="login-form__input"
                      placeholder="Пароль"
                      onBlur={this.validateFieldOnBlur}
                      required
                    />
                  </div>
                  <input type="submit" value="ВОЙТИ" className="login-form__submit"/>
                </form>
              </div>
              <a className="registration" href="#">
              Регистрация
            </a>
          </section>
        </div>
      </div>
    );
  }
}

export default LoginForm;
