import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1 className="loginHeading">Login</h1>
      <div className="formDiv">
        <form onSubmit={handleSubmit}>
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
          Don't Have a Account ? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
