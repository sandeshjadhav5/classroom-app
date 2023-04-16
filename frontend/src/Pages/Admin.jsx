import React, { useEffect } from "react";
import "./Admin.css";
import { Link, useNavigate } from "react-router-dom";
import classSvg from "../assets/classroomPng.png";
import TestItem from "../Components/TestItem";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../Components/Navbar";
import { getAllTests } from "../Redux/AppReducer/action";
import TestItemAdmin from "../Components/TestItemAdmin";
function Admin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const tests = useSelector((state) => state.AppReducer.tests);
  const isLoading = useSelector((state) => state.AppReducer.isLoading);
  const isAdminLogin = useSelector((state) => state.AuthReducer.isAdminLogin);
  const isAuth = useSelector((state) => state.AuthReducer.isAuth);

  console.log("tests =>", tests);

  useEffect(() => {
    dispatch(getAllTests());
  }, []);
  useEffect(() => {
    if (!isAdminLogin || !isAuth) {
      return navigate("/login");
    }
  }, []);
  return (
    <div className="mainDivTest">
      <Navbar />
      <br />
      <br />
      <br />
      {!tests && (
        <div>
          <div className="classSvg">
            <img src={classSvg} />
          </div>
          <div className="btn-create">
            <Link to="/create">
              <button className="css-button-arrow--black">Create Class</button>
            </Link>
          </div>
        </div>
      )}
      {isLoading && (
        <div className="loader-gif">
          <br />
          <br />
          <img src="https://media.tenor.com/wpSo-8CrXqUAAAAi/loading-loading-forever.gif" />
        </div>
      )}
      <div className="main-cards-div">
        {!isLoading &&
          tests &&
          tests.map((el) => <TestItemAdmin {...el} key={el._id} />)}
      </div>
    </div>
  );
}

export default Admin;
