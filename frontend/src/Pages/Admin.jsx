import React from "react";
import "./Admin.css";
import { Link } from "react-router-dom";
import classSvg from "../assets/classroomPng.png";
function Admin() {
  return (
    <div>
      <div className="classSvg">
        <img src={classSvg} />
      </div>
      <div className="btn-create">
        <Link to="/create">
          <button className="css-button-arrow--black">Create Class</button>
        </Link>
      </div>
    </div>
  );
}

export default Admin;
