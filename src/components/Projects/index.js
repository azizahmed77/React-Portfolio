import React from "react";



const Projects = (props) => {
    return (
      <div className >
        {props.projectsArray.map(project => (
        <div className="card px-2 py-2 my-2 mx-2 w-50" key={project.id} >
        <div className="card-header">
          <h3 className="bold card-title">{project.name}</h3>
        </div>
        <img class="card-img" src={project.image} alt="relevant-image-to-card"/>
        <div className="card-footer">
            <a className=" mx-2" href={project.liveSite}>Deployed</a>
            <a className="mx-2" href={project.repo}>Github Repo</a>
          </div>
        </div>
        ))}
      </div>
      
    );
}

export default Projects