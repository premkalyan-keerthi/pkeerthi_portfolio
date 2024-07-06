import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import React, { useState, useEffect } from "react";

const Projects = () => {
  const [tabSelected, setTabSelected] = useState(0);

  const projectsdummy = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
  ];

  const projects = [
    {
      id: 0,
      title: "Associate Consultant",
      description: [
        "Designed data models, UI, and developed a web application for Verizon Project Management which helps in handling issues caused in Verizon Project Management using JavaScript, ReactJS, Java, and MySQL",
        "Involved in SDLC life cycle - Designing, Coding and Testing. Build reusable code and libraries for future use. Ensure the technical feasibility of UI/UX designs through the utilization of technologies like REST APIs, JavaScript, PostgresQL,HTML, CSS and Java.",
      ],
      imgUrl: projImg1,
      tools: "JavaScript, REST APIs, ReactJS, and PostgresQL.",
    },
    {
      id: 0,
      title: "Systems Engineer",
      description: [
        "Designed data models, UI, and developed a web application for Verizon Project Management which helps in handling issues caused in Verizon Project Management using JavaScript, ReactJS, Java, and MySQL",
        "Involved in SDLC life cycle - Designing, Coding and Testing. Build reusable code and libraries for future use. Ensure the technical feasibility of UI/UX designs through the utilization of technologies like REST APIs, JavaScript, PostgresQL,HTML, CSS and Java.",
      ],
      imgUrl: projImg1,
      tools: "JavaScript, REST APIs, ReactJS, and PostgresQL.",
    },
    {
      id: 0,
      title: "Assistant Systems Engineer",
      description: [
        "Designed data models, UI, and developed a web application for Verizon Project Management which helps in handling issues caused in Verizon Project Management using JavaScript, ReactJS, Java, and MySQL",
        "Involved in SDLC life cycle - Designing, Coding and Testing. Build reusable code and libraries for future use. Ensure the technical feasibility of UI/UX designs through the utilization of technologies like REST APIs, JavaScript, PostgresQL,HTML, CSS and Java.",
      ],
      imgUrl: projImg1,
      tools: "JavaScript, REST APIs, ReactJS, and PostgresQL.",
    },
  ];

  const getProjectSelected = () => {
    return projects.filter((proj, index) => index === tabSelected)[0];
  };

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link
                          eventKey="first"
                          onClick={() => setTabSelected(0)}
                        >
                          Infosys AC
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link
                          eventKey="second"
                          onClick={() => setTabSelected(1)}
                        >
                          Tab 2
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link
                          eventKey="third"
                          onClick={() => setTabSelected(2)}
                        >
                          Tab 3
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <ProjectCard {...getProjectSelected()} />
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};

export default Projects;