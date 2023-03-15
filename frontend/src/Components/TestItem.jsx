import React from "react";
import "../Pages/Tests.css";
import { Link, useNavigate } from "react-router-dom";

function TestItem({ name, section, subject, _id }) {
  const navigate = useNavigate();
  var upper_card_div = document.getElementsByClassName("upper-test-card");
  var randomColor = Math.floor(Math.random() * 16777215).toString(16);
  const handleNavigate = () => {
    localStorage.setItem("singleTest", JSON.stringify(_id));
    navigate(`/tests/${_id}`);
  };
  return (
    <div>
      <div onClick={handleNavigate} className="test-card" key={_id}>
        <div
          style={{ backgroundColor: "#" + randomColor }}
          className="upper-test-card"
        >
          <p className="test-card-name">{name}</p>
          <p className="test-card-section">{section}</p>
        </div>
        <div className="imgDiv">
          <img src="https://lh3.googleusercontent.com/a/default-user=s75-c" />
        </div>
        <div className="subject-div">
          <p className="test-card-subject">{subject}</p>
        </div>
      </div>
    </div>
  );
}

export default TestItem;
