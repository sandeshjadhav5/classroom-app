import React, { useEffect } from "react";
import "./Tests.css";
import { getAllTests } from "../Redux/AppReducer/action";
import { useDispatch, useSelector } from "react-redux";
import TestItem from "../Components/TestItem";
const Tests = () => {
  const tests = useSelector((state) => state.AppReducer.tests);
  const dispatch = useDispatch();
  console.log("tests", tests);

  useEffect(() => {
    dispatch(getAllTests());
  }, []);

  return (
    <div>
      <h1>All Tests</h1>
      <div className="main-cards-div">
        {tests && tests.map((el) => <TestItem {...el} />)}
      </div>
    </div>
  );
};

export default Tests;
