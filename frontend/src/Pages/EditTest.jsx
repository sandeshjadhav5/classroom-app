import React, { useState, useEffect } from "react";
import "./Admin.css";
import editClass from "../assets/editNote.png";
import { editNote } from "../Redux/AppReducer/action";
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
  const iseEditNoteLoading = useSelector(
    (state) => state.AppReducer.editNoteLoading
  );
  const isEditNoteSuccess = useSelector(
    (state) => state.AppReducer.editNoteSuccess
  );
  const handleAddNote = (e) => {
    e.preventDefault();
    const payload = {
      title,
      image,
      details,
    };
    if (payload) {
      dispatch(editNote(payload));
    }
  };

  useEffect(() => {
    if (!isAuth) {
      return navigate("/login");
    }
  }, []);

  return (
    <div>
      <Navbar />
      <br />
      <div>
        <h1 className="editNote">Add Note </h1>
      </div>
      <div className="edit-class-grid">
        <div>
          <img src={editClass} />
        </div>
        <div className="edit-form">
          <form onSubmit={handleAddNote}>
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
              {!iseEditNoteLoading && (
                <input className="InputSubmitBtn" type="submit" />
              )}
              {iseEditNoteLoading && (
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

export default EditTest;
