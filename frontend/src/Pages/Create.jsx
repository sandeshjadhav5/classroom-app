import React, { useState } from "react";
import "./Admin.css";
import addClass from "../assets/addClass.png";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";
import { addTest } from "../Redux/AppReducer/action";

function Create() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [section, setSection] = useState("");
  const [subject, setSubject] = useState("");
  const [room, setRoom] = useState("");
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.AuthReducer.isAuth);

  const handleAddTest = (e) => {
    e.preventDefault();
    const payload = {
      name,
      section,
      subject,
      room,
    };
    console.log(payload);
    if (payload) {
      dispatch(addTest(payload));
    }
  };

  if (!isAuth) {
    return navigate("/login");
  }

  return (
    <div>
      <Navbar />
      <br />
      <div>
        <h1>Create Testroom</h1>
      </div>
      <div className="add-class-grid">
        <div>
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
              <input className="InputSubmitBtn" type="submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Create;
