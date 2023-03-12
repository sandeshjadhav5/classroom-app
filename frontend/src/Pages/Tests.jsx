import React, { useEffect } from "react";
import { getAllTests } from "../Redux/AppReducer/action";
import { useDispatch, useSelector } from "react-redux";
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
    </div>
  );
};

export default Tests;
