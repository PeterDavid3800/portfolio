import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h2>Peter Aringo</h2>
      </div>
      <ul>
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;