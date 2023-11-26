import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import moviePrj from "../../Assets/Projects/moviePrj.png";
import cameraDb from "../../Assets/Projects/cameraDb.png";
import smartCM from "../../Assets/Projects/smartCM.png";
import ParticleComponent from "../Home/HomeParticles";

function Projects() {
  return (
    <Container fluid className="project-section">
      <ParticleComponent />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={moviePrj}
              isBlog={false}
              title="Movie review app"
              description="The movie review app, where you will have your own admin panel to upload movies and users can rate the movie from 1 to 10. As admin you can see the progress, add, update or delete the movies. Also you can create new actors whom you can then add inside movies as they are the actors of that particular movie."
              ghLink="https://github.com/Longchuck/MovieReviewApp_Frontend"
              demoLink="https://movie-review-app-frontend.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cameraDb}
              isBlog={false}
              title="Camera Dashboard"
              description="Create a camera management dashboard interface to manage surveillance devices in the system. Allow users to view and manage cameras, configure desired camera alert settings."
              ghLink="https://github.com/Longchuck/CameraDashboard"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={smartCM}
              isBlog={false}
              title="Smart Contact Manager"
              description="Develop a web-based contact management application that empowers users to effortlessly add new contacts, including details such as name, phone number, email, etc. This intuitive platform allows users to update, delete, and search through their contacts, providing an efficient experience for managing personal or professional connections."
              ghLink="https://github.com/Longchuck/SmartContactManager"             
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
