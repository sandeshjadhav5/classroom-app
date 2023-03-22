import * as types from "./actionTypes";

const initialState = {
  tests: [],
  isLoading: false,
  addTestLoading: false,
  addTestSuccess: false,
  editNoteLoading: false,
  editNoteSuccess: false,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_TESTS:
      return { ...state, tests: payload, isLoading: false };
    case types.GET_TESTS_LOADING:
      return { ...state, isLoading: true };
    case types.ADD_TEST_REQ:
      return { ...state, addTestLoading: true };
    case types.ADD_TEST_SUCCESS:
      return { ...state, addTestLoading: false, addTestSuccess: true };
    case types.EDIT_NOTE_REQ:
      return { ...state, editNoteLoading: true };
    case types.EDIT_NOTE_SUCCESS:
      return { ...state, editNoteSuccess: true, editNoteLoading: false };
    default:
      return state;
  }
};

export { reducer };
