import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import registerGif from "../assets/registerAnimated.gif";
import { useSelector, useDispatch } from "react-redux";
//import { loginFunction } from "../Redux/AuthReducer/action";
import { registerFunction } from "../Redux/AuthReducer/action";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const isRegistered = useSelector((state) => state.AuthReducer.isRegistered);

  const isRegisteredLoading = useSelector(
    (state) => state.AuthReducer.isRegisteredLoading
  );
  const isAuth = useSelector((state) => state.AuthReducer.isAuth);
  const token = JSON.parse(localStorage.getItem("token")) || "";
  const isAuthLoading = useSelector((state) => state.AuthReducer.isAuthLoading);
  const role = useSelector((state) => state.AuthReducer.role);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { name, email, password };
    if (payload) {
      dispatch(registerFunction(payload));
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
  useEffect(() => {
    if (isRegistered) {
      navigate("/login");
    }
  }, [isRegistered]);
  return (
    <div className="registerPageMain">
      <Navbar />
      <br />
      <br />
      <br />
      <h1 className="loginHeading">Register</h1>
      <div className="login-register">
        <div className="animationLogin">
          <img src={registerGif} />
        </div>
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
              <p onClick={toggleShowPassword} className="show-hide">
                {showPassword ? "Hide" : "Show"}
              </p>
            </div>

            <div>
              {!isRegisteredLoading && (
                <input type="submit" className="InputSubmitBtn" />
              )}
              {isRegisteredLoading && (
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
            Already Have a Account ? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
      <div id="snackbar"></div>
    </div>
  );
}

export default Register;
