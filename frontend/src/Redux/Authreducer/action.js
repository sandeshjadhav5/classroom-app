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

const loginFunction = (payload) => (dispatch) => {
  dispatch(userLoginReq());
  return axios
    .post(`https://classroom-app-backend.onrender.com/users/login`, payload)
    .then((res) => {
      console.log(res);
      let token = res.data.token;
      if (token) {
        localStorage.setItem("token", JSON.stringify(res.data.token));
        var x = document.getElementById("snackbar");
        x.className = "show";
        x.innerText = res.data;
        setTimeout(function () {
          x.className = x.className.replace("show", "");
        }, 3000);
        dispatch(userLoginSuccess());
      } else if (res.data == "Login Failed") {
        dispatch(userLoginFailure());
        var x = document.getElementById("snackbar");
        x.innerText = res.data;
        x.className = "show";
        setTimeout(function () {
          x.className = x.className.replace("show", "");
        }, 3000);
      }
    })
    .catch((err) => {
      console.log(err);
      alert("Failed To Login");
      dispatch(userLoginFailure());
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
};
