import React from "react";
import "./style.css";

function Contact() {
  return (
    <div className="row justify-content-md-center">
      <div className="center col-md-12">
        <h2>Contact</h2>
      </div>
      <div className="job-icon col-md-4">
        <i className="fab fa-linkedin">
          LinkedIn Profile:
          <a
            href="https://www.linkedin.com/in/kalenpegeder/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </i>
      </div>
      <div className="job-icon col-md-4">
        <i className="far fa-envelope">
          Email:
          <a href="mailto:k.pegeder@gmail.com" target="_blank" rel="noreferrer">
            k.pegeder@gmail.com
          </a>
        </i>
      </div>
      <div className="job-icon col-md-4">
        <i className="fab fa-github">
          GitHub:
          <a
            href="https://github.com/kpegeder"
            target="_blank"
            rel="noreferrer"
          >
            github.com/kpegeder
          </a>
        </i>
      </div>
    </div>
  );
}

export default Contact;
