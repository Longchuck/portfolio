import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Tran Duc Long </span>
            from <span className="purple"> Ho Chi Minh city</span>
            <br /> I am a final year student pursuing an Information Technology (IT) at Ho Chi Minh City University of Technology and Education.
            <br />
            Additionally, I am currently employed as a software developer at <span className="purple">AmagumoLabs</span>. 
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Sport (football, swimming)
            </li>
            <li className="about-activity">
              <ImPointRight /> Painting
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Feel free to do what you want!"{" "}
          </p>
          <footer className="blockquote-footer">Long Tran</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
