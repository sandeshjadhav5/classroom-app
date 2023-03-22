import { type } from "@testing-library/user-event/dist/type";
import * as types from "./actionTypes";
import axios from "axios";

const getTests = (payload) => {
  return { type: types.GET_TESTS, payload };
};

const addTestLoading = () => {
  return { type: types.ADD_TEST_REQ };
};
const getTestsLoading = () => {
  return { type: types.GET_TESTS_LOADING };
};
const addTestSuccess = () => {
  return { type: types.ADD_TEST_SUCCESS };
};

const addTestFailure = () => {
  return { type: types.ADD_TEST_FAILURE };
};
const editNoteReq = () => {
  return { type: types.EDIT_NOTE_REQ };
};

const editNoteSuccess = () => {
  return { type: types.EDIT_NOTE_SUCCESS };
};

const editNoteFailure = () => {
  return { type: types.EDIT_NOTE_FAILURE };
};

const getAllTests = (payload) => (dispatch) => {
  dispatch(getTestsLoading());
  var token = JSON.parse(localStorage.getItem("token")) || "";
  return axios
    .get(`https://odd-tan-mackerel-wig.cyclic.app/tests`, {
      headers: {
        Authorization: token,
      },
    })
    .then((res) => {
      console.log(res);
      dispatch(getTests(res.data));
    })
    .catch((err) => {
      console.log(err);
    });
};

const addTest = (data) => (dispatch) => {
  dispatch(addTestLoading());
  var token = JSON.parse(localStorage.getItem("token")) || "";
  console.log("token is ->", token);
  return axios
    .post(`https://odd-tan-mackerel-wig.cyclic.app/tests/create`, data, {
      headers: {
        Authorization: token,
      },
    })
    .then((res) => {
      console.log(res.data);
      let x = document.getElementById("snackbar");
      x.className = "show";
      x.innerText = res.data.msg;
      x.style.backgroundColor = "green";
      setTimeout(function () {
        x.className = x.className.replace("show", "");
        dispatch(addTestSuccess());
      }, 3000);
    })
    .catch((err) => {
      console.log(err);
    });
};

const editNote = (data) => (dispatch) => {
  dispatch(editNoteReq());
  var token = JSON.parse(localStorage.getItem("token")) || "";

  var id = JSON.parse(localStorage.getItem("singleTest"));
  console.log("token,id is ->", token, id);

  return axios
    .post(`https://odd-tan-mackerel-wig.cyclic.app/tests/${id}/edit`, data, {
      headers: {
        Authorization: token,
      },
    })
    .then((res) => {
      console.log(res.data);
      let x = document.getElementById("snackbar");
      x.className = "show";
      x.innerText = res.data.msg;
      x.style.backgroundColor = "green";
      setTimeout(function () {
        x.className = x.className.replace("show", "");
        dispatch(editNoteSuccess());
      }, 3000);
    })
    .catch((err) => {
      console.log(err);
    });
};
export {
  getTests,
  addTestSuccess,
  getAllTests,
  addTest,
  addTestLoading,
  editNoteReq,
  editNoteSuccess,
  editNote,
};
