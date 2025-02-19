import React from 'react'
import './login.css';
import amazon_logo from "./assets/amazon_logo_dark.png";


function login() {
  return (
    <div className="login-page">
  <a href="/">
  <a href="/">
  <img className="logo_1" src={amazon_logo} alt="Amazon logo" />
  </a>
  </a>
  <div className="login-container">
    <h2 className="login-title">Sign in</h2>
    <h6 className="input-lable">Email or mobile phone number</h6>
    <input type="text" />
    <button>Continue</button>
    <p className="login-condition">
      By continuing, you agree to Amazon's <span>Conditions of Use</span> and{" "}
      <span>Privacy Notice.</span>
    </p>
    <p className="login-help">
      ▸<span>Need help</span>
    </p>
    <hr />
    <h4>Buying for work?</h4>
    <p className="login-business">
      <span>Shop on Amazon Business</span>
    </p>
  </div>
  <div className="login-section-text">
    <hr />
    <p>New to Amazon?</p>
    <hr />
  </div>
  <a href="/Sign_up">
    <button className="login-signup-btn">Create your Amazon account</button>
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
  )
}

export default login
