import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">FootyFrenzy</div>
      <ul className={`navbar-links ${isMenuOpen ? "open" : ""}`}>
        <li>LIVE SCORES</li>
        <li>NEWS</li>
        <li>TRANSFERS</li>
        <li>PREMIER LEAGUE</li>
        <li>LA LIGA</li>
        <li>CULTURE</li>
        <li>BETTING</li>
      </ul>
      <div className="navbar-login">
        <span>Log in</span>
        <i className="login-icon"></i>
      </div>
      <div
        className="navbar-menu-icon"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;

