import React from "react";

function Login() {
  return (
    <div>
      <h1 className="loginHeading">Login</h1>
      <div className="formDiv">
        <form>
          <div>
            <span>Email</span>
            <input placeholder="email id" required />
          </div>
          <div>
            <span>Password</span>
            <input placeholder="password" required />
          </div>
          <div>
            <input type="submit" className="InputSubmitBtn" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
