import React from "react";

const Education = () => {
  return (
    <div className="edBg">
      <div className="edBox">
        <div className="firstPart">
          <h2>Lamar University</h2>
          <span>Aug 2023 - May 2025</span>
        </div>
        <div className="firstPart">
          <p>Master of Science in Computer Science</p>
          <span>3.8 GPA</span>
        </div>
        <p>
          <b>Coursework: </b> Analysis of Algorithms, Advanced Operating
          Systems, Software Engineering
        </p>
      </div>
      <div className="edBox">
        <div className="firstPart">
          <h2>
            Jawaharlal Nehru Technological University Kakinada, Vizianagaram
          </h2>
          <span>May 2019</span>
        </div>
        <div className="firstPart">
          <p>Bachelor of Science in Mechanical Engineering</p>
        </div>
      </div>
    </div>
  );
};

export default Education;