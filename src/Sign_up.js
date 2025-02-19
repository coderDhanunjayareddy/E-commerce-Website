import React, { useState } from 'react';
import './Sign_up.css';
import amazon_logo from "./assets/amazon_logo_dark.png";

function Sign_up() {
  const [userid, setUserid] = useState('');
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate input fields
    if (!userid.trim() || !user.trim() || !password.trim()) {
      setError('Please enter User ID, User, and Password');
      return;
    }

    // Clear previous errors
    setError('');

    try {
      const response = await fetch('http://localhost:3000/Sign_up', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userid, user, password }),
      });

      if (response.ok) {
        alert('User registered successfully');
      } else {
        alert('Error registering user');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="signup-page">
      <a href="/">
        <img className="logo_1" src={amazon_logo} alt="Amazon logo" />
      </a>
      <div className="login-container">
        <h2 className="login-title">Sign up</h2>
        <form id="signup-form" onSubmit={handleSubmit}>
          <h6 className="input-label" style={{ marginTop: 20 }}>Your name</h6>
          <input
            type="text"
            id="userid"
            value={userid}
            onChange={(e) => setUserid(e.target.value)}
            required
          />
          <h6 className="input-label" style={{ marginTop: 20 }}>Mobile number or email</h6>
          <input
            type="email"
            id="user"
            placeholder="Enter your email"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            required
          />
          <h6 className="input-label" style={{ marginTop: 20 }}>Password</h6>
          <input
            type="password"
            id="password"
            placeholder="At least 6 characters"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Continue</button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
        <p className="login-condition">
          By continuing, you agree to Amazon's <a href="#" target="_blank" rel="noopener noreferrer">Conditions of Use</a>
          and{" "}
          <span>Privacy Notice.</span>
        </p>
        <p className="login-help">
          ▸<span>Need help</span>
        </p>
        <hr />
        <h6>Buying for work?</h6>
        <p className="login-business">
          <span>Shop on Amazon Business</span>
        </p>
      </div>
      <div className="login-section-text">
        <hr />
        <p>Have an account?</p>
        <hr />
      </div>
      <a href="#">
        <button className="login-signup-btn">Login with Amazon account</button>
      </a>
      <footer>
        <div className="footer-links">
          <a href="#"> Conditions of Use </a>
          <a href="#"> Privacy Notice </a>
          <a href="#"> Help </a>
        </div>
        <p className="footer-copyright">
          © 1996-2024, Amazon.com, Inc. or its affiliates
        </p>
      </footer>
    </div>
  );
}

export default Sign_up;
