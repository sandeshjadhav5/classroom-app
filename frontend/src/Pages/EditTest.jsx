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
  getTests,
  editNoteSuccess,
  editNoteFailure,
  editNoteReq,
} from "../Redux/AppReducer/action";
import axios from "axios";

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
    console.log("name--->", name, "description", description, "file", file);
    if (formData) {
      dispatch(editNoteReq());
      console.log("insideeeeeeeeeeeeeee");
      var token = JSON.parse(localStorage.getItem("token")) || "";

      var id = JSON.parse(localStorage.getItem("singleTest"));

      return axios
        .patch(
          `https://nervous-foal-pea-coat.cyclic.cloud/tests/${id}/addnote`,
          formData,
          {
            headers: {
              Authorization: token,
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((res) => {
          console.log(res.data);
          let x = document.getElementById("toast");
          x.className = "show";
          x.innerText = res.data.msg;
          x.style.backgroundImage =
            "linear-gradient(to bottom right, #d4fc79 , #96e6a1 )";
          x.style.color = "black";

          setTimeout(function () {
            x.className = x.className.replace("show", "");
            dispatch(editNoteSuccess());
          }, 3000);
        })
        .catch((err) => {
          console.log(err);
          dispatch(editNoteFailure());
        });
      // dispatch(editNote(formData));
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
