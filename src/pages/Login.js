import React, { Component } from 'react';
import LoginForm from '../components/LoginForm';

import '../styles/components/pages/Login.css';

class Login extends Component {
  render() {
    return (
      <div className="loginContainer">
        <LoginForm />
      </div>
    );
  }
}

export default Login;
