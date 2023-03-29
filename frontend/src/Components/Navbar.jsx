import React, { useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../Redux/AuthReducer/action";

function Navbar() {
  const dispatch = useDispatch();
  const handleHamburger = () => {
    document.querySelector(".hamburger").classList.toggle("active");
    document.querySelector(".nav-menu").classList.toggle("active");
  };

  const handleClose = () => {
    document.querySelector(".hamburger").classList.remove("active");
    document.querySelector(".nav-menu").classList.remove("active");
  };

  const handleLogout = () => {
    dispatch(logoutUser);
    document.querySelector(".hamburger").classList.remove("active");
    document.querySelector(".nav-menu").classList.remove("active");
  };
  const isAuth = useSelector((state) => state.AuthReducer.isAuth);
  const isRegistered = useSelector((state) => state.AuthReducer.isRegistered);
  const role = useSelector((state) => state.AuthReducer.role);

  return (
    <div className="navbar-main">
      <header>
        <nav className="navbar">
          <p className="nav-branding">
            <Link to="/">Classroom App</Link>
          </p>

          <ul className="nav-menu">
            {!isAuth && (
              <li className="nav-item" onClick={handleClose}>
                <Link to="/login">Login</Link>
              </li>
            )}
            {!isRegistered && !isAuth && (
              <li className="nav-item" onClick={handleClose}>
                <Link to="/register">Register</Link>
              </li>
            )}
            {role == "admin" && (
              <li className="nav-item" onClick={handleClose}>
                <Link to="/create">+ Create Class</Link>
              </li>
            )}
            {role == "admin" && (
              <li className="nav-item" onClick={handleClose}>
                <Link to="/admin">All Classes</Link>
              </li>
            )}
            {isAuth && (
              <li className="nav-item">
                <a href="">Logout</a>
              </li>
            )}
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
