import React from "react";
import {
  Card,
  Container,
  Button,
  Row,
  Col,
  Image,
  CardGroup,
} from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

function Projects() {
  return (
    <Container fluid className="py-4">
      <Row className="py-4"></Row>
      {/* <Row className="py-4"></Row> */}

      <Row className="py-4">
        <Col className="title__text py-4">
          Our trusted carbon avoidance and removal projects to neutralise your
          flights
        </Col>
      </Row>

      <Container className=" ">
        <Row className="d-flex mx-1 px-1">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
