import * as types from "./actionTypes";

const initialState = {
  tests: [],
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_TESTS:
      return { ...state, tests: payload };
    default:
      return state;
  }
};

export { reducer };
