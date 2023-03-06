import * as types from "./actionTypes";

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

export {
  userLoginReq,
  userLoginSuccess,
  userLoginFailure,
  registerReq,
  registerSuccess,
  registerFailure,
};
