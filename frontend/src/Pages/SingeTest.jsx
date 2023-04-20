import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Components/Navbar";
import notesImg from "../assets/notes.png";
import "./Tests.css";
import { BsFillPenFill } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
function SingeTest() {
  const [test, setTest] = useState({});
  const [loading, setLoading] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [notes, setNotes] = useState([]);
  const isAuth = useSelector((state) => state.AuthReducer.isAuth);
  const navigate = useNavigate();
  var token = JSON.parse(localStorage.getItem("token")) || "";
  console.log("notes => ", notes);
  var id = JSON.parse(localStorage.getItem("singleTest"));
  const role = useSelector((state) => state.AuthReducer.role);

  const getSingleTest = () => {
    setLoading(true);
    axios
      .get(`https://odd-tan-mackerel-wig.cyclic.app/tests/${id}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        setLoading(false);
        if (res.data) {
          setTest(res.data);
          setNotes(res.data.notes);
        }
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  const handleDelete = () => {
    var iD = JSON.parse(localStorage.getItem("singleTest"));
    setDeleting(true);
    axios
      .delete(`https://odd-tan-mackerel-wig.cyclic.app/tests/delete/${iD}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        console.log(res);
        setDeleting(false);
        if (res.data == "Deleted the Test") {
          navigate(`/admin`);
        }
      })
      .catch((err) => {
        setDeleting(false);
        console.log(err);
      });
  };

  const imageData = notes;
  const handleNavigate = () => {
    navigate(`/tests/${id}/edit`);
  };

  useEffect(() => {
    getSingleTest();
  }, []);

  if (!isAuth) {
    return navigate("/login");
  } else if (loading) {
    return (
      <>
        <Navbar />
        <br />
        <br />
        <br />
        <div className="single-test-loading">
          <img src="https://media.tenor.com/6gHLhmwO87sAAAAi/gg.gif" />
        </div>
      </>
    );
  } else {
    return (
      <div className="singleTestMainDiv">
        <Navbar />
        <br />
        <br />
        <br />
        {deleting && (
          <div className="deleteDiv">
            <img
              src="https://cdn.pixabay.com/animation/2022/11/16/11/48/11-48-37-507_512.gif"
              alt="Deleting Gif"
            />
          </div>
        )}
        <div className="test-heading">
          <div>
            <div></div>
            <p>{test.name}</p>
          </div>
          <div>
            <img src={notesImg} />
          </div>
        </div>
        {role == "admin" && (
          <div className="editTest" onClick={handleNavigate}>
            <FiEdit />
          </div>
        )}
        <br />
        <br />

        {loading && <h1>Loading...</h1>}

        <div className="single-test-body">
          <p>{test.subject}</p>
        </div>
        <br />

        <div className="single-test-body">
          <p>{test.section}</p>
        </div>

        {role == "admin" && (
          <AiFillDelete onClick={handleDelete} className="deleteBtn" />
        )}

        <br />
        {notes && (
          <div className="single-test-notes">
            {notes.length > 0 && <h2>Notes</h2>}
            {notes.length == 0 && <h2>No Notes Available</h2>}
            {notes &&
              notes.map((el) => {
                const base64String = el.file;

                return (
                  <div key={el._id}>
                    <p>{el.name}</p>
                    <img
                      src={`data:image/png;base64,${base64String}`}
                      alt={el.description}
                    />
                    <p>{el.description}</p>
                  </div>
                );
              })}
          </div>
        )}
      </div>
    );
  }
}

export default SingeTest;
