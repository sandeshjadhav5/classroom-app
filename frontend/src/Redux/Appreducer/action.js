import { type } from "@testing-library/user-event/dist/type";
import * as types from "./actionTypes";
import axios from "axios";

const token = JSON.parse(localStorage.getItem("token")) || "";
console.log(token);
const getTests = (payload) => {
  return { type: types.GET_TESTS, payload };
};

const getAllTests = (payload) => (dispatch) => {
  console.log("token is", token);
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
export { getTests, getAllTests };
