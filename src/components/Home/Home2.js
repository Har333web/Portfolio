import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avtar.png";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
             Hi! I’m Harsh Rathod, a passionate and motivated Web Developer from India.
I completed my M.Sc. (IT) in 2025, after earning my B.Com and PGDCA qualifications.
Over the past two years, I’ve worked as a Computer Teacher, where I gained valuable experience in explaining technical concepts, solving problems, and building a strong foundation in programming and web technologies.
              <br />
              <br />
             My main interests lie in
              <i>
                <b className="purple">
                  {" "}
                  React.js, PHP, full-stack web development.{" "}
                </b>
              </i>
            I love creating clean, responsive, and user-friendly web applications that deliver great user experiences.
I’m always eager to learn new technologies and keep improving my coding skills.
              <br />
              <br />
             Currently, I’m looking for opportunities as a
              <i>
                <b className="purple">
                  {" "}
                 React JS Developer, PHP Developer, Web Developer, or Web Designer,{" "}
                </b>
              </i>
             where I can apply my knowledge, grow with a dynamic team, and contribute to real-world projects.
              <br />
              <br />
             
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
