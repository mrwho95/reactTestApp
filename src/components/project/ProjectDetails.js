import React from "react";

const ProjectDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>I Love You...</p>
        </div>
        <div className="card-action gret lighten-4 grey-text">
          <div>Posted by Mr Who</div>
          <div>18 May 2020</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
