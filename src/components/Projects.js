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

  const projects = [
    {
      id: 0,
      title: "Infosys-Associate Consultant",
      description: [
        "Designed data models, UI, and developed a web application for Verizon Project Management which helps in handling issues caused in Verizon Project Management using JavaScript, ReactJS, Java, and MySQL",
        "Involved in SDLC life cycle - Designing, Coding and Testing. Build reusable code and libraries for future use. Ensure the technical feasibility of UI/UX designs through the utilization of technologies like REST APIs, JavaScript, PostgresQL,HTML, CSS and Java.",
        "Designed the user interface and database and integrated the application into Verizon OneFiber application, which provides visibility to the vendor for the diﬀerent milestones of project status(HLD, SiteSurvey, DD, Permitting, Construction Start, Cable Placed, Splice & Test, Close-Out). This tool will improve the credibility of the product, as senior leaders can directly identify any inconsistency between vendor data and Verizon data. I used JavaScript, REST APIs, ReactJS, and PostgresQL."
      ],
      imgUrl: projImg1,
      tools: "ReactJS, NodeJS, ExpressJS, HTML, CSS, BootStrap, JavaScript, REST APIs, and PostgresQL.",
    },
    {
      id: 1,
      title: "TCS-Systems Engineer",
      description: [
        "Involved in designing the user interface, creating data models, and building the New Search Tool application from scratch, aimed at eﬃciently retrieving documents. Enhanced the application's speed by developing and optimizing the code. Used ReactJS, Javascript, Python.",
        "As a team member, involved in Architecture calls, sprint planning activities, sprint retrospectives, coordinating with diﬀerent teams to get the issues addressed and resolved and providing status in daily stand ups.",
        "Crafted a Download dialogue component and APIs for downloading single or multiple documents in various formats, adopted by several web applications to download documents."
    ],
      imgUrl: projImg1,
      tools: "ReactJS, NodeJS, ExpressJS, JavaScript, Python, REST APIs",
    },
    {
      id: 2,
      title: "TCS-Assistant Systems Engineer",
      description: [
        "Involved in end-to-end development of the application. This includes new feature developments, enhancements of the existing features, bug fixes, etc.",
        "Develop the code based on system requirements with the coding standards as per the guidelines.",
      ],
      imgUrl: projImg1,
      tools: "JavaScript, ReactJS, HTML, CSS, REST APIs, Jest",
    },
    {
        id: 3,
        title: "Personal Project-Donor Management System",
        description: [
          "Developed frontend, backend & database model",
          "Implemented JWT (JSON Web Token) authentication for user login.",
          "Implemented Role-Based Access Control (RBAC) to manage use permissions and access levels.",
          "Developed header, Footer, User Post, and Upload Form components using react.",
          "Worked on create order page functionality and summary page.",
        ],
        imgUrl: projImg1,
        tools: "HTML, CSS, BootStrap, JavaScript, ReactJs, NodeJs, ExpressJs and MongoDB",
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
                  
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link
                          eventKey="first"
                          onClick={() => {
                            setTabSelected(0);
                            document
                              .getElementById("proj - 0")
                              .scrollIntoView({ behavior: "smooth" });
                          }}
                        >
                          Infosys AC
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link
                          eventKey="second"
                          onClick={() => {
                            setTabSelected(1);
                            document
                              .getElementById("proj - 1")
                              .scrollIntoView({ behavior: "smooth" });
                          }}
                        >
                          TCS SE
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link
                          eventKey="third"
                          onClick={() => {
                            setTabSelected(2);
                            document
                              .getElementById("proj - 2")
                              .scrollIntoView({ behavior: "smooth" });
                          }}
                        >
                          TCS ASE
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link
                          eventKey="fourth"
                          onClick={() => {
                            setTabSelected(3);
                            document
                              .getElementById("proj - 3")
                              .scrollIntoView({ behavior: "smooth" });
                          }}
                        >
                          Personal Project
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    {projects.map((proj) => (
                      <ProjectCard {...proj} />
                    ))}
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