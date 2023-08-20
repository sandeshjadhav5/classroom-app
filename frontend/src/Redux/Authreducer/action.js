import * as types from "./actionTypes";
import axios from "axios";

const userLoginReq = () => {
  return { type: types.LOGIN_USER_REQUEST };
};

const userLoginSuccess = () => {
  return { type: types.LOGIN_USER_SUCCESS };
};

const userLoginFailure = () => {
  return { type: types.LOGIN_USER_FAILURE };
};

const registerReq = () => {
  return { type: types.REGISTER_REQUEST };
};

const registerSuccess = () => {
  return { type: types.REGISTER_SUCCESS };
};

const registerFailure = () => {
  return { type: types.REGISTER_FAILURE };
};

const logoutUser = () => {
  localStorage.removeItem("token");
  return { type: types.LOGOUT_USER };
};

const adminLogin = (payload) => {
  return { type: types.ADMIN_LOGIN };
};

const adminLoginFunction = (payload) => (dispatch) => {
  return axios
    .post(`http://localhost:8080/users/login`, payload)
    .then((res) => {
      console.log(res);
      let token = res.data.token;
      if (token) {
        localStorage.setItem("token", JSON.stringify(res.data.token));
        dispatch(adminLogin);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

const loginFunction = (payload) => (dispatch) => {
  dispatch(userLoginReq());
  return axios
    .post(`https://nervous-foal-pea-coat.cyclic.cloud/users/login`, payload)
    .then((res) => {
      console.log(res);
      let token = res.data.token;
      if (token) {
        localStorage.setItem("token", JSON.stringify(res.data.token));
        let x = document.getElementById("snackbar");
        x.className = "show";
        x.innerText = res.data.msg;
        x.style.backgroundColor = "green";
        setTimeout(function () {
          x.className = x.className.replace("show", "");
          dispatch(userLoginSuccess());
        }, 3000);
      } else if (res.data == "Login Failed") {
        dispatch(userLoginFailure());
        let x = document.getElementById("snackbar");
        x.innerText = res.data;
        x.style.backgroundColor = "red";
        x.className = "show";
        setTimeout(function () {
          x.className = x.className.replace("show", "");
        }, 3000);
      } else if (res.data == "Wrong Credentials") {
        dispatch(userLoginFailure());
        let x = document.getElementById("snackbar");
        x.innerText = res.data;
        x.style.backgroundColor = "red";
        x.className = "show";
        setTimeout(function () {
          x.className = x.className.replace("show", "");
        }, 3000);
      }
    })
    .catch((err) => {
      console.log(err);
      let x = document.getElementById("snackbar");
      x.innerText = "Error Loggin In";
      x.style.backgroundColor = "#1A5276";
      x.className = "show";
      setTimeout(function () {
        x.className = x.className.replace("show", "");
      }, 3000);
      dispatch(userLoginFailure());
    });
};

const registerFunction = (payload) => (dispatch) => {
  dispatch(registerReq());
  return axios
    .post(`https://nervous-foal-pea-coat.cyclic.cloud/users/register`, payload)
    .then((res) => {
      console.log(res);
      if (res.data == "User Registered") {
        let x = document.getElementById("snackbar");
        x.className = "show";
        x.innerText = res.data;
        x.style.backgroundColor = "green";
        setTimeout(function () {
          x.className = x.className.replace("show", "");
          dispatch(registerSuccess());
        }, 3000);
      } else {
        let x = document.getElementById("snackbar");
        x.className = "show";
        x.innerText = "Failed To Register";
        x.style.backgroundColor = "red";
        setTimeout(function () {
          x.className = x.className.replace("show", "");
          dispatch(registerFailure());
        }, 3000);
      }
    })
    .catch((err) => {
      console.log(err);
      let x = document.getElementById("snackbar");
      x.className = "show";
      x.innerText = "Error in Registering";
      x.style.backgroundColor = "red";
      setTimeout(function () {
        x.className = x.className.replace("show", "");
        dispatch(registerFailure());
      }, 3000);
    });
};

export {
  userLoginReq,
  userLoginSuccess,
  userLoginFailure,
  registerReq,
  registerSuccess,
  registerFailure,
  loginFunction,
  registerFunction,
  logoutUser,
  adminLogin,
  adminLoginFunction,
};
