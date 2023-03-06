import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const handleHamburger = () => {
    document.querySelector(".hamburger").classList.toggle("active");
    document.querySelector(".nav-menu").classList.toggle("active");
  };

  const handleClose = () => {
    document.querySelector(".hamburger").classList.remove("active");
    document.querySelector(".nav-menu").classList.remove("active");
  };

  return (
    <div className="navbar-main">
      <header>
        <nav className="navbar">
          <p className="nav-branding">
            <Link to="/">You Can Test !</Link>
          </p>

          <ul className="nav-menu">
            <li className="nav-item" onClick={handleClose}>
              <Link to="/login">Login</Link>
            </li>
            <li className="nav-item" onClick={handleClose}>
              <Link to="/register">Register</Link>
            </li>
          </ul>
          <div className="hamburger" onClick={handleHamburger}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
