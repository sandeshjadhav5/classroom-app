import * as types from "./actionTypes";

const initialState = {
  tests: [],
  isLoading: false,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_TESTS:
      return { ...state, tests: payload, isLoading: false };
    case types.GET_TESTS_LOADING:
      return { ...state, isLoading: true };
    default:
      return state;
  }
};

export { reducer };
