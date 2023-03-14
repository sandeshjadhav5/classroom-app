import React, { useEffect } from "react";
import "./Tests.css";
import { useNavigate } from "react-router-dom";
import { getAllTests } from "../Redux/AppReducer/action";
import { useDispatch, useSelector } from "react-redux";
import TestItem from "../Components/TestItem";
import Navbar from "../Components/Navbar";
const Tests = () => {
  const navigate = useNavigate();
  const tests = useSelector((state) => state.AppReducer.tests);
  const dispatch = useDispatch();
  console.log("tests", tests);
  const isAuth = useSelector((state) => state.AuthReducer.isAuth);
  const isLoading = useSelector((state) => state.AppReducer.isLoading);
  useEffect(() => {
    dispatch(getAllTests());
  }, []);
  if (!isAuth) {
    return navigate("/login");
  }
  return (
    <div>
      <Navbar />
      <br />
      <br />
      <br />
      <h2>All Tests</h2>
      {isLoading && (
        <div className="loader-gif">
          <br />
          <br />
          <img src="https://media.tenor.com/wpSo-8CrXqUAAAAi/loading-loading-forever.gif" />
        </div>
      )}
      <div className="main-cards-div">
        {!isLoading && tests && tests.map((el) => <TestItem {...el} />)}
      </div>
    </div>
  );
};

export default Tests;
