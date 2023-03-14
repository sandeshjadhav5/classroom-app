import { type } from "@testing-library/user-event/dist/type";
import * as types from "./actionTypes";
import axios from "axios";

const getTests = (payload) => {
  return { type: types.GET_TESTS, payload };
};

const getTestsLoading = () => {
  return { type: types.GET_TESTS_LOADING };
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
  var token = JSON.parse(localStorage.getItem("token")) || "";
  console.log("token is ->", token);
  return axios
    .post(`https://odd-tan-mackerel-wig.cyclic.app/tests/create`, data, {
      headers: {
        Authorization: token,
      },
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
export { getTests, getAllTests, addTest };
