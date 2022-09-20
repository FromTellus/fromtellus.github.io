import React from "react";

const Projects = () => {
  return (
    <div className="main-section">
      <h1 className="projectInfoHeading">SneakerSpot</h1>
      <div className="projectInfoParagraph">
        <p>
          A bartering platform for sneaker enthusiasts. The application is full-stack offering users
          secure authorization, a messaging service and complete CRUD control over their collection stored
          in our database.
        </p>
        <ul className="projectListContainer">
          <p>This project was built using </p>
          <li className="projectInfoList">React</li>
          <li className="projectInfoList">Redux</li>
          <li className="projectInfoList">Node.js</li>
          <li className="projectInfoList">Express</li>
          <li className="projectInfoList">PostgreSQL</li>
        </ul>
      </div>
      <img
        src="https://i.ibb.co/8dfbFgG/ezgif-com-gif-maker.gif"
        alt="ezgif-com-gif-maker"
        border="0"
      />
    </div>
  );
};

export default Projects;
