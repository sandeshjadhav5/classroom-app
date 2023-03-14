import * as types from "./actionTypes";

const initialState = {
  isAuth: false,
  isRegistered: false,
  isAuthLoading: false,
  isAuthFailure: false,
  isRegisteredLoading: false,
  isRegisteredFailure: false,
  isAdminLogin: false,
  token: "",
  role: "",
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.LOGIN_USER_REQUEST:
      return { ...state, isAuthLoading: true };
    case types.LOGIN_USER_SUCCESS:
      return { ...state, isAuth: true, isAuthLoading: false, role: "user" };
    case types.LOGIN_USER_FAILURE:
      return {
        ...state,
        isAuthFailure: true,
        isAuthLoading: false,
        isAuth: false,
      };
    case types.ADMIN_LOGIN:
      return {
        ...state,
        role: "admin",
        isAdminLogin: true,
        isAuth: true,
        isRegistered: true,
      };
    case types.REGISTER_REQUEST:
      return { ...state, isRegistered: false, isRegisteredLoading: true };
    case types.REGISTER_SUCCESS:
      return {
        ...state,
        isRegistered: true,
        isRegisteredLoading: false,
        isRegisteredFailure: false,
      };
    case types.REGISTER_FAILURE:
      return {
        ...state,
        isRegistered: false,
        isRegisteredLoading: false,
        isRegisteredFailure: true,
      };
    case types.LOGOUT_USER:
      return {
        ...state,
        isAuth: false,
        isAdminLogin: false,
      };
    default:
      return state;
  }
};

export { reducer };
