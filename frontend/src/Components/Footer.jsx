import React from "react";
import "./Footer.css";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="socialMediaHandles">
          <p>Follow us</p>
          <a
            className="faceBook"
            href="https://www.facebook.com/GoogleforEducation/"
            target="_blank"
          >
            <FaFacebookSquare />
          </a>
          <a
            className="instagram"
            href="https://www.instagram.com/google/?hl=en"
            target="_blank"
          >
            <AiFillInstagram />
          </a>
          <a
            className="twitter"
            href="https://twitter.com/googleforedu/"
            target="_blank"
          >
            <AiOutlineTwitter />
          </a>
          <a
            className="youtube"
            href="https://www.youtube.com/user/eduatgoogle"
            target="_blank"
          >
            <AiFillYoutube />
          </a>
        </div>
        <hr />
        <div className="footerGrid">
          <div>
            <h4>Product</h4>
            <p>Google Workspace for Education</p>
            <p>Classroom</p>
            <p>Google Meet</p>
            <p>Assignments</p>
            <p>Chromebooks</p>
          </div>
          <div>
            <h4>Get products</h4>
            <p>Contact Sales</p>
            <p>Apply for Google Cloud credits</p>
            <p>Get promotional offers</p>
            <p>Assignments</p>
            <p>Chromebooks</p>
          </div>
          <div>
            <h4>For educators</h4>
            <p>Overview</p>
            <p>Product guides</p>
            <p>Training courses</p>
            <p>Product certification</p>
            <p>Professional certification</p>
          </div>
          <div>
            <h4>About Google for Education</h4>
            <p>Our commitment</p>
            <p>For K12</p>
            <p>For Higher Ed</p>
            <p>Privacy & security</p>
            <p>Accessibility</p>
          </div>
        </div>
        <hr />
      </div>
      <div className="youCanTest">
        <h3>
          2023 <h2>Classroom App</h2>
        </h3>
      </div>
    </div>
  );
}

export default Footer;
