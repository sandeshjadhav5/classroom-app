import React, { useEffect, useState } from "react";
import "./Admin.css";
import addClass from "../assets/addClass.gif";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../Components/Navbar";

import { useNavigate } from "react-router-dom";
import {
  addTest,
  addTestLoading,
  addTestSuccess,
} from "../Redux/AppReducer/action";

function Create() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [section, setSection] = useState("");
  const [subject, setSubject] = useState("");
  const [room, setRoom] = useState("");
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.AuthReducer.isAuth);
  const isAddTestLoading = useSelector(
    (state) => state.AppReducer.addTestLoading
  );
  const isAddTestSuccess = useSelector(
    (state) => state.AppReducer.addTestSuccess
  );
  const handleAddTest = (e) => {
    e.preventDefault();
    const payload = {
      name,
      section,
      subject,
      room,
    };
    if (payload) {
      dispatch(addTest(payload));
    }
  };
  useEffect(() => {
    if (!isAuth) {
      return navigate("/login");
    }
  }, []);

  return (
    <div className="createTestPageMain">
      <Navbar />
      <br />
      <div>
        <h1 className="editNote">Create Testroom</h1>
      </div>
      <div className="add-class-grid">
        <div className="createClassImgDiv">
          <img src={addClass} />
        </div>
        <div className="create-form">
          <form onSubmit={handleAddTest}>
            <div>
              <span>Class Name</span>
              <input
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Name"
                type="text"
                required
              />
            </div>
            <div>
              <span>Section</span>
              <input
                onChange={(e) => setSection(e.target.value)}
                placeholder="Enter Section Name"
                type="text"
                required
              />
            </div>
            <div>
              <span>Subject</span>
              <input
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Enter Subject Name"
                type="text"
                required
              />
            </div>
            <div>
              <span>Room</span>
              <input
                onChange={(e) => setRoom(e.target.value)}
                placeholder="Create Room Number"
                type="text"
                required
              />
            </div>
            <div>
              {!isAddTestLoading && (
                <input className="InputSubmitBtn" type="submit" />
              )}
              {isAddTestLoading && (
                <div className="InputSubmitBtnLoading">
                  <div>
                    <img
                      src="https://media.tenor.com/wpSo-8CrXqUAAAAi/loading-loading-forever.gif"
                      alt="loading..."
                    />
                  </div>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
      <div id="snackbar"></div>
    </div>
  );
}

export default Create;
