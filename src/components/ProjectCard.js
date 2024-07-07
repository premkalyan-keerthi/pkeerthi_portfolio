import { Col } from "react-bootstrap";
import React from "react";

const ProjectCard = ({ title, description, imgUrl, tools, id }) => {
  return (
    <Col id={`proj - ${id}`} size={12} sm={6} md={4} className="tab-panel">
      <div className="proj-imgbx">
        <h1>{title}</h1>
        <ul>
          {description.map((des, index) => (
            <li key={index}>
              <p className="descriptionP">{des}</p>
            </li>
          ))}
        </ul>
        <div className="proj-txtx">
          <h1>
            {"Tools - "}
            {tools}
          </h1>
          {/* <span>{"description"}</span> */}
        </div>
      </div>
    </Col>
  );
};

export default React.memo(ProjectCard);