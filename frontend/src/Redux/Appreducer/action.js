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
  console.log("invoked");
  dispatch(getTestsLoading());
  var token = JSON.parse(localStorage.getItem("token")) || "";
  return axios
    .get(`http://localhost:8080/tests`, {
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
      addTestFailure();
      console.log(err);
    });
};

const editNote = (formData) => (dispatch) => {
  dispatch(editNoteReq());
  var token = JSON.parse(localStorage.getItem("token")) || "";

  var id = JSON.parse(localStorage.getItem("singleTest"));

  return axios
    .patch(
      `https://odd-tan-mackerel-wig.cyclic.app/tests/${id}/addnote`,
      formData,
      {
        headers: {
          Authorization: token,
          "Content-Type": "multipart/form-data",
        },
      }
    )
    .then((res) => {
      console.log(res.data);
      let x = document.getElementById("toast");
      x.className = "show";
      x.innerText = res.data.msg;
      x.style.backgroundImage =
        "linear-gradient(to bottom right, #d4fc79 , #96e6a1 )";
      x.style.color = "black";

      setTimeout(function () {
        x.className = x.className.replace("show", "");
        dispatch(editNoteSuccess());
      }, 3000);
    })
    .catch((err) => {
      console.log(err);
      dispatch(editNoteFailure());
    });
};
export {
  getTests,
  addTestSuccess,
  addTestFailure,
  getAllTests,
  addTest,
  addTestLoading,
  editNoteReq,
  editNoteSuccess,
  editNote,
  editNoteFailure,
};
