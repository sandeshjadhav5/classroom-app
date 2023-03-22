import React, { useState } from "react";
import "./Admin.css";
import editClass from "../assets/editNote.png";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";
import {
  addTest,
  addTestLoading,
  addTestSuccess,
} from "../Redux/AppReducer/action";

function EditTest() {
  const navigate = useNavigate();
  const [details, setDetails] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");

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
      title,
      image,
      details,
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
        <h1 className="editNote">Add Note </h1>
      </div>
      <div className="edit-class-grid">
        <div className="edit-form">
          <form onSubmit={handleAddTest}>
            <div>
              <span>Note Title</span>
              <input
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter Title"
                type="text"
                required
              />
            </div>
            <div>
              <span>Details</span>
              <textarea
                onChange={(e) => setDetails(e.target.value)}
                placeholder="Enter Details"
                type="text"
                required
              ></textarea>
            </div>

            <div>
              <span>Image</span>
              <input
                onChange={(e) => setImage(e.target.value)}
                placeholder="Enter Image URL"
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
        <div>
          <img src={editClass} />
        </div>
      </div>
      <div id="snackbar"></div>
    </div>
  );
}

export default EditTest;
