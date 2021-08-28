import React from 'react'
import logo from './logo.svg';
import './Header.css';

function Header() {
    return (
        <div className="header-container">
        <header className="header">
          <img src={logo} className="header-logo" alt="logo" />
        </header>
        </div>
  );
}

export default Header;