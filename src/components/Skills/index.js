import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";

function Skills() {
  return (
    <div className="knowledge-section">
      <Container>
        <Row className="skillTypes">
          <h1>Skills </h1>
        </Row>
        <Row>
          <Col className="leadType">Technical Skills</Col>
        </Row>
        <Row>
          <Col className="skill">HTML</Col>
          <Col className="skill">CSS</Col>
          <Col className="skill">JavaScript</Col>
          <Col className="skill">MySQL</Col>
          <Col className="skill">MongoDB</Col>
          <Col className="skill">Node.js</Col>
          <Col className="skill">Express</Col>
          <Col className="skill">Python</Col>
          <Col className="skill">jQuery</Col>
          <Col className="skill">React</Col>
        </Row>
        <Row>
          <Col className="leadType">Soft Skills</Col>
        </Row>
        <Row>
          <Col className="skill">Teamwork</Col>
          <Col className="skill">Communication</Col>
        </Row>
      </Container>
    </div>
  );
}

export default Skills;
