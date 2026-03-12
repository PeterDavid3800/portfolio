import React from 'react';

const Header = () => {
  return (
    <header id="header">
      <div className="container">
        <nav>
          <img src={process.env.PUBLIC_URL +"/images/logo.png"} className="logo" alt="Logo" />
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        <div className="header-text">
          <p>BBIT Graduate</p>
          <h1>
            Hi, I'm <span>Peter David Aringo</span><br /> from Kenya
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;