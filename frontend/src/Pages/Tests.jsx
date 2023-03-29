import React, { useEffect } from "react";
import "./Tests.css";
import { useNavigate } from "react-router-dom";
import { getAllTests } from "../Redux/AppReducer/action";
import { useDispatch, useSelector } from "react-redux";
import TestItem from "../Components/TestItem";
import Navbar from "../Components/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Tests = () => {
  const navigate = useNavigate();

  const tests = useSelector((state) => state.AppReducer.tests);
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.AuthReducer.isAuth);
  const isLoading = useSelector((state) => state.AppReducer.isLoading);
  useEffect(() => {
    dispatch(getAllTests());
  }, []);
  useEffect(() => {
    if (!isAuth) {
      return navigate("/login");
    }
  }, []);

  return (
    <div className="mainDivTest">
      <Navbar />
      <br />
      <br />
      <br />
      <h2>All Classes</h2>
      {isLoading && (
        <div className="loader-gif">
          <br />
          <br />
          <img src="https://media.tenor.com/PfFDd3eNE_gAAAAi/loading-load.gif" />
        </div>
      )}
      <div className="main-cards-div">
        {!isLoading && tests && tests.map((el) => <TestItem {...el} />)}
      </div>
      <ToastContainer />;
    </div>
  );
};

export default Tests;
