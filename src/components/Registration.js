import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';

function Registration() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleRegistration = (e) => {
    e.preventDefault();
    if (email.trim() !== '' && password.trim() !== '') {
      // Perform registration logic using email and password
      // Redirect to Login page after successful registration
      history.push('/');
    }
  };

  return (
    <div className="registration-container">
      <h2>Registration</h2>
      <form onSubmit={handleRegistration}>
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
        <button type="submit" className="register-button">Register</button>
      </form>
      <p className="login-link">
        Already have an account? <Link to="/">Login</Link>
      </p>
    </div>
  );
}

export default Registration;
