// Login.js
import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email.trim() !== '' && password.trim() !== '') {
      // Perform login logic using email and password
      // Redirect to Home page on successful login
      history.push('/home');
    }
  };

  const handleRegister = () => {
    history.push('/registration');
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      Please <button onClick={handleRegister}>Register</button> if you don't have an account.
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-field"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input-field"
        />
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
}

export default Login;
