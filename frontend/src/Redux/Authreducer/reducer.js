import * as types from "./actionTypes";

const initialState = {
  isAuth: false,
  isRegistered: false,
  isAuthLoading: false,
  isAuthFailure: false,
  isRegisteredLoading: false,
  isRegisteredFailure: false,
  token: "",
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.LOGIN_USER_REQUEST:
      return { ...state, isAuthLoading: true };
    case types.LOGIN_USER_SUCCESS:
      return { ...state, isAuth: true, isAuthLoading: false };
    case types.LOGIN_USER_FAILURE:
      return {
        ...state,
        isAuthFailure: true,
        isAuthLoading: false,
        isAuth: false,
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
    default:
      return state;
  }
};

export { reducer };
