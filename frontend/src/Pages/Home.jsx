import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="main-home-div">
      <div className="logoImg">
        <img src="https://www.testim.io/wp-content/uploads/2020/05/Testim-HItsubscribe-Who-Performs-Software-Testing-in-2020_572_450.jpg" />
      </div>
      <div className="heading">
        <h1>Where teaching and learning come together</h1>
      </div>
      <div className="headingText">
        <p>
          Google Classroom is your all-in-one place for teaching and learning.
          Our easy-to-use and secure tool helps educators manage, measure, and
          enrich learning experiences.
        </p>
      </div>
      <div className="btn-div">
        <div>
          <Link to="/register">
            <button className="btn-solid-lg">Getting Started</button>
          </Link>
        </div>
        <div>
          <Link to="/login">
            <button className="btn-solid-rh">Sign in to Testroom</button>
          </Link>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="homePageCards">
        <div>
          <img src="https://edu.google.com/assets/icons/pages/main/classroom/all-in-one-place.svg" />
          <h3>All-in-one place</h3>
          <p>
            Bring all your learning tools together and manage multiple classes
            in one central destination.
          </p>
        </div>

        <div>
          <img src="https://edu.google.com/assets/icons/pages/main/classroom/easy-to-use.svg" />
          <h3>Easy to use</h3>
          <p>
            Anyone in your school community can get up and running with
            Classroom in minutes.
          </p>
        </div>
        <div>
          <img src="https://edu.google.com/assets/icons/pages/main/classroom/built-for-collaboration.svg" />
          <h3>Built for collaboration</h3>
          <p>
            Work simultaneously in the same document with the whole class or
            connect face-to-face with Google Meet.
          </p>
        </div>
        <div>
          <img src="https://edu.google.com/assets/icons/pages/main/classroom/access-from-anywhere.svg" />
          <h3>Access from anywhere</h3>
          <p>
            Empower teaching and learning from anywhere, on any device, and give
            your class more flexibility and mobility.
          </p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="learnImg">
        <img src="https://lh3.googleusercontent.com/1JfWP9PWR-lVzQzZ0bDn_TYuUWZIfDjUbr5p6cMpXW8Nf5N5dnz0t8W4Wz4AshBsXBPXONTYk3avCCDLd9d7J_f1gBQ_B77nLdsEhw6ENwLslLTtRXM=w1296-v1-e30" />
      </div>
      <br />
      <br />
      <br />
      <div className="detailsOne">
        <div>
          <h4>EASY TO USE</h4>
          <h1>Save time and simplify everyday tasks</h1>
          <ul>
            All editions
            <li>
              - Switch from class to assignment to student in just a few clicks
            </li>
            <li>
              - Track student progress in your gradebook and export scores to
              your school’s student information system (SIS)
            </li>
            <li>
              - Keep grading consistent and transparent with rubrics displayed
              alongside student work
            </li>
            <li>
              - Store frequently used phrases in a customizable comment bank
            </li>
            <li>
              - Prepare and schedule tasks, assignments, and quizzes across
              multiple classes
            </li>
          </ul>
        </div>
        <div>
          <img src="https://lh3.googleusercontent.com/eiuQVtahi5MknaMtb9J3sguRdSN1Zi-mjfPBkiTSFvzUZfrmVfgOTsr8vus3QFRaDoVPdWEdZPhydGAo8eZ3AjImKeMEUxFRVdPam2V0P26wMc3oBg=w1296-v1-e30" />
        </div>
      </div>
      <div className="detailsOne">
        <div>
          <img src="https://lh3.googleusercontent.com/pVscMUbEHu5KIwTrn0OvGO77FHFMZdCrFLUlsH0r2BdI4o2hDE-1m6RcUOkOmsSDEL-iUf4qH2o79IUzBZWMOIZPDhuDMUR_q6oXDMY5yN1U6C5s-A=w1296-v1-e30" />
        </div>
        <div>
          <h4>ENRICH</h4>
          <h1>Enhance student learning experiences</h1>
          <ul>
            All editions
            <li>
              - Switch from class to assignment to student in just a few clicks
            </li>
            <li>
              - Track student progress in your gradebook and export scores to
              your school’s student information system (SIS)
            </li>
            <li>
              - Keep grading consistent and transparent with rubrics displayed
              alongside student work
            </li>
            <li>
              - Store frequently used phrases in a customizable comment bank
            </li>
            <li>
              - Prepare and schedule tasks, assignments, and quizzes across
              multiple classes
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
