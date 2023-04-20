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
  // const [details, setDetails] = useState("");
  // const [title, setTitle] = useState("");
  // const [image, setImage] = useState("");

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFileName] = useState("");

  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.AuthReducer.isAuth);
  const iseEditNoteLoading = useSelector(
    (state) => state.AppReducer.editNoteLoading
  );
  const isEditNoteSuccess = useSelector(
    (state) => state.AppReducer.editNoteSuccess
  );

  const onChangeFile = (e) => {
    // console.log(e.target.files[0]);

    setFileName(e.target.files[0]);
  };

  const handleAddNote = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("name", name);
    formData.append("description", description);
    formData.append("file", file);
    console.log("formData==>", formData);
    if (formData) {
      dispatch(editNote(formData));
    }
  };

  useEffect(() => {
    if (!isAuth) {
      return navigate("/login");
    }
  }, []);

  return (
    <div className="editTestMainDiv">
      <Navbar />
      <br />
      <div>
        <h1 className="editNote">Add Note </h1>
      </div>
      <div className="edit-class-grid">
        <div className="visibleImg">
          <img src={editClass} />
        </div>
        <div className="edit-form">
          <form onSubmit={handleAddNote} encType="multipart/form-data">
            <div>
              <span>Note Title</span>
              <input
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Title"
                type="text"
                required
              />
            </div>
            <div>
              <span>Description</span>
              <textarea
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter Details"
                type="text"
                required
              ></textarea>
            </div>

            <div>
              <span>Image</span>
              <input
                onChange={onChangeFile}
                placeholder="Add File"
                type="file"
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
        <div className="hiddenImg">
          <img src={editClass} />
        </div>
      </div>
      <div id="toast"></div>
    </div>
  );
}

export default EditTest;
