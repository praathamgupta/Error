import React from 'react';
import './Header.css';
import logo from '../assets/logo.svg';
import microsoftIcon from '../assets/microsoft-icon.svg';

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-section">
        <img src={logo} alt="Impilos Logo" />
        <h1>Impilos</h1>
      </div>
      <div className="welcome-section">
        <h2>Welcome back</h2>
        <p>It’s great to see you!
        Sign in to your account below.</p>
        <button
  className="signin-button"
  style={{
    backgroundColor: 'white',
    color: '#0078D4', 
    padding: '10px 15px', 
    borderRadius: '5px', 
    cursor: 'pointer', 
  }}
>
  <img src={microsoftIcon} alt="Microsoft Icon" />
</button>

      </div>
    </div>
  );
};

export default Header;
