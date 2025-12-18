import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Harsh J. Rathod</span>{" "}
            from <span className="purple">Gujrat, India</span>.
            <br />
            {/* I’m currently working as a{" "}
            <span className="purple">Software Developer</span> at{" "}
            <span className="purple">Juspay</span>. */}
            <br />I hold an Integrated<span className="purple"> M.Sc.</span> in{" "}
            <span className="purple">Information Technology</span> from{" "}
            <span className="purple">Maharaja Krishnakumarsinhji Bhavnagar University</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning New Library & Framework ✍️
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Gold may fade, but the light of learning shines forever."{" "}
          </p>
          <footer className="blockquote-footer">Samrat Vikramaditya</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
