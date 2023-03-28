import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import loginAnimation from "../assets/loginAnimated.gif";
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
  const isAuthLoading = useSelector((state) => state.AuthReducer.isAuthLoading);
  const role = useSelector((state) => state.AuthReducer.role);

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

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
  useEffect(() => {
    if (isAuth && token && role == "user") {
      return navigate("/tests");
    }
  }, [isAuth, role, token]);
  useEffect(() => {
    if (isAuth && token && role == "admin") {
      return navigate("/admin");
    }
  }, [isAuth, role, token]);

  return (
    <div className="loginPageMain">
      <Navbar />
      <br />
      <br />
      <br />
      <h1 className="loginHeading">Login</h1>

      <div className="login-register">
        <div className="animationLogin">
          <img src={loginAnimation} />
        </div>
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
              {!isAuthLoading && (
                <input type="submit" className="InputSubmitBtn" />
              )}
              {isAuthLoading && (
                <div className="InputSubmitBtnLoading">
                  <div>
                    <img
                      src="https://media.tenor.com/wpSo-8CrXqUAAAAi/loading-loading-forever.gif"
                      alt="loading..."
                    />
                  </div>
                </div>
              )}
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
