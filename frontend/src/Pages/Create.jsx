import React from "react";
import "./Admin.css";
import addClass from "../assets/addClass.png";

function Create() {
  return (
    <div>
      <div>
        <h1>Create Testroom</h1>
      </div>
      <div className="add-class-grid">
        <div>
          <img src={addClass} />
        </div>
        <div className="create-form">
          <form>
            <div>
              <span>Class Name</span>
              <input />
            </div>
            <div>
              <span>Section</span>
              <input />
            </div>
            <div>
              <span>Subject</span>
              <input />
            </div>
            <div>
              <span>Room</span>
              <input />
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
