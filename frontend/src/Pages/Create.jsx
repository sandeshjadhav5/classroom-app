import React from "react";
import "./Admin.css";

function Create() {
  return (
    <div>
      <div>
        <h1>Create Class</h1>
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
  );
}

export default Create;
