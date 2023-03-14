import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { adminLogin, loginFunction } from "../Redux/AuthReducer/action";
import { getAllTests, getTests } from "../Redux/AppReducer/action";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const dispatch = useDispatch();

  const isAuth = useSelector((state) => state.AuthReducer.isAuth);
  const token = JSON.parse(localStorage.getItem("token")) || "";
  console.log("token ->", token);
  console.log("isAuth", isAuth);

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    const payload = { email, password };

    if (email == "admin@gmail.com" && password == "admin@123") {
      dispatch(adminLogin(payload));
      dispatch(getAllTests());
      dispatch(loginFunction(payload));
      navigate("/admin");
    } else {
      dispatch(loginFunction(payload));
    }
  };

  if (isAuth && token) {
    navigate("/tests");
  }
  return (
    <div>
      <Navbar />
      <br />
      <br />
      <br />
      <div className="login-register">
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
              <input
                placeholder="password"
                required
                type={showPassword ? "text" : "password"}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <p onClick={toggleShowPassword} className="show-hide">
              {showPassword ? "Hide" : "Show"}
            </p>
            <div>
              <input type="submit" className="InputSubmitBtn" />
            </div>
          </form>
          <p>
            Don't Have a Account ? <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
      <div id="snackbar"></div>
    </div>
  );
}

export default Login;
