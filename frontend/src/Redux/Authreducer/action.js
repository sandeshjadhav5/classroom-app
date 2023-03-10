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
      localStorage.setItem("token", JSON.stringify(res.data.token));
      dispatch(userLoginSuccess());
    })
    .catch((err) => {
      console.log(err);
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
