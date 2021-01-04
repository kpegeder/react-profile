import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./style.css";
import Portrait from "../../assets/images/portrait.jpeg";

function About() {
  return (
    <div className="about-section">
      <Container>
        <Row className="about">
          <h1>About Me</h1>
        </Row>
        <Row>
          <Col md={3}>
            <Image
              src={Portrait}
              className="d-block bio-image"
              alt="Kalen's head shot outside"
              roundedCircle
            />
          </Col>
          <Col>
            <p className="about-me">
              Growing up, my favorite subject in school had to have been math.
              For me, math was logical with a right or wrong answer. As I
              started to take harder math classes, I viewed math as a puzzle. I
              enjoy seeing a problem and thinking about ways to fix them. It
              wasn’t until I was in college at Oregon State University that I
              learned coding. While I was in college, I always enjoyed when we
              had problems which required coding. Since graduation, I have found
              a passion for helping others learn or improve their knowledge. I
              have worked as a ski instructor predominating working with young
              children (3.5-5 yrs.), coached soccer to kids (8-10 yrs.), and
              tutor math at a community college. Now, it’s time for me to reset
              and think about what I like doing. It has led me to self-teaching
              myself how to coding a different language than college. In my
              spare time, I enjoy doing outdoor activities such as soccer,
              ultimate frisbee, skiing, and hiking. When I’m not outdoors,
              you’ll find me learning coding and listening to music.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
