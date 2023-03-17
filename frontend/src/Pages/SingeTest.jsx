import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Components/Navbar";
import notes from "../assets/notes.png";
import "./Tests.css";
function SingeTest() {
  const [test, setTest] = useState({});
  var token = JSON.parse(localStorage.getItem("token")) || "";
  console.log("token", token);
  var id = JSON.parse(localStorage.getItem("singleTest"));
  console.log("id", id);
  useEffect(() => {
    axios
      .get(`https://odd-tan-mackerel-wig.cyclic.app/tests/${id}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        console.log(res);
        if (res.data) {
          setTest(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
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

      <p>{test.section}</p>
    </div>
  );
}

export default SingeTest;
