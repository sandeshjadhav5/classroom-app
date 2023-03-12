import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { useSelector, useDispatch } from "react-redux";
//import { loginFunction } from "../Redux/AuthReducer/action";
import { registerFunction } from "../Redux/AuthReducer/action";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const isRegistered = useSelector((state) => state.AuthReducer.isRegistered);
  console.log(isRegistered);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { name, email, password };
    if (payload) {
      dispatch(registerFunction(payload));
    }
  };

  return (
    <div>
      <Navbar />
      <br />
      <br />
      <br />
      <h1 className="loginHeading">Register</h1>
      <div className="formDiv">
        <form onSubmit={handleSubmit}>
          <div>
            <span>Name</span>
            <input
              placeholder="Enter your Name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <span>Email</span>
            <input
              placeholder="email id"
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
            />
          </div>
          <div>
            <span>Password</span>
            <input
              className="password-input"
              type={showPassword ? "text" : "password"}
              placeholder="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <input type="submit" className="InputSubmitBtn" />
          </div>
        </form>
        <button onClick={toggleShowPassword}>
          {showPassword ? "Hide" : "Show"} Password
        </button>
        <p>
          Already Have a Account ? <Link to="/login">Login</Link>
        </p>
      </div>
      <div id="snackbar"></div>
    </div>
  );
}

export default Register;
