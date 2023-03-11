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
    .post(`https://odd-tan-mackerel-wig.cyclic.app/users/login`, payload)
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
    .post(`https://odd-tan-mackerel-wig.cyclic.app/users/register`, payload)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
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
};
