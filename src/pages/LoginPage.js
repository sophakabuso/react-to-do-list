import React from 'react';
import LoginForm from '../components/LoginForm';
import { Link, useHistory } from 'react-router-dom';

function LoginPage() {
  return (
    <div>
      <div>
      <h2>Login</h2>
      <LoginForm />
      </div>
      <div>
        <h3>
        <Link to="/register">Register</Link>
        </h3>
      </div>


    </div>
  );
}

export default LoginPage;
