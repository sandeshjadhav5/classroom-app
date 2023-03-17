import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Components/Navbar";
import notes from "../assets/notes.png";
import "./Tests.css";

import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
function SingeTest() {
  const [test, setTest] = useState({});
  const [loading, setLoading] = useState(false);
  const isAuth = useSelector((state) => state.AuthReducer.isAuth);
  const navigate = useNavigate();
  var token = JSON.parse(localStorage.getItem("token")) || "";

  var id = JSON.parse(localStorage.getItem("singleTest"));
  const getSingleTest = () => {
    setLoading(true);
    axios
      .get(`https://odd-tan-mackerel-wig.cyclic.app/tests/${id}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        console.log(res);
        setLoading(false);
        if (res.data) {
          setTest(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    getSingleTest();
  }, []);

  if (!isAuth) {
    return navigate("/login");
  } else if (loading) {
    return (
      <div className="single-test-loading">
        <img src="https://media.tenor.com/6gHLhmwO87sAAAAi/gg.gif" />
      </div>
    );
  } else {
    return (
      <div>
        <Navbar />
        <br />
        <br />
        <br />

        <div className="test-heading">
          <div>
            <div></div>
            <p>{test.name}</p>
          </div>
          <div>
            <img src={notes} />
          </div>
        </div>
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
      </div>
    );
  }
}

export default SingeTest;
