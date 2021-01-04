import React from "react";
import "./style.css";

function Skills() {
  return (
    <div>
      <div className="knowledge-section">
        <div className="skillTypes">
          <h1>Skills </h1>
          <ul>
            Technical Skills
            <li className="skill">HTML</li>
            <li className="skill">CSS</li>
            <li className="skill">JavaScript</li>
            <li className="skill">MySQL</li>
            <li className="skill">MongoDB</li>
            <li className="skill">Node.js</li>
            <li className="skill">Express</li>
            <li className="skill">Python</li>
            <li className="skill">jQuery</li>
            <li className="skill">React</li>
          </ul>
          <ul>
            Soft Skills
            <li className="skill">Teamwork</li>
            <li className="skill">Communication</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
