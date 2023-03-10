import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { useSelector, useDispatch } from "react-redux";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isRegistered = useSelector((state) => state.Authreducer);
  console.log(isRegistered);

  const handleSubmit = (e) => {
    e.preventDefault();
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
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <span>Email</span>
            <input
              placeholder="email id"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <span>Password</span>
            <input placeholder="password" required />
          </div>
          <div>
            <input type="submit" className="InputSubmitBtn" />
          </div>
        </form>
        <p>
          Already Have a Account ? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
