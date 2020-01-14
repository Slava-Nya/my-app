import React, { Component } from 'react';
import LoginForm from '../LoginForm';
import './App.css';
import Office from '../Office';

class App extends Component {
  state = {
    isLoggedIn: false,
    login: "",
  };

  setLogedStates = login => {
    this.setState({isLoggedIn: true, login: login});
  }

  setUnlogedStates = () => {
    this.setState({isLoggedIn: false, login: ""});
  }

  render() {
    const {isLoggedIn, login} = this.state;

    const module = isLoggedIn ? <Office user={login} onLogout={this.setUnlogedStates}/> : <LoginForm onLogin={this.setLogedStates}/>;
    return (
      <div >
       {module}
      </div>
    );
  }
}

export default App;
