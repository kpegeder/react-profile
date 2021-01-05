import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";

function Contact() {
  return (
    <div className="contact-section">
      <Container>
        <Row>
          <Col className="contactHeader">Contact</Col>
        </Row>
        <Row>
          <Col sm={4} className="job-icon contact-me">
            <i className="fab fa-linkedin">
              {" "}
              LinkedIn Profile:{" "}
              <a
                href="https://www.linkedin.com/in/kalenpegeder/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </i>
          </Col>
          <Col sm={4} className="job-icon contact-me">
            <i className="far fa-envelope">
              {" "}
              Email:{" "}
              <a
                href="mailto:k.pegeder@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                k.pegeder@gmail.com
              </a>
            </i>
          </Col>
          <Col sm={4} className="job-icon contact-me">
            <i className="fab fa-github">
              {" "}
              GitHub:{" "}
              <a
                href="https://github.com/kpegeder"
                target="_blank"
                rel="noreferrer"
              >
                github.com/kpegeder
              </a>
            </i>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
