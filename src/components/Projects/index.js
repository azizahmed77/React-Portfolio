import React from "react";



const Projects = (props) => {
    return (
        <div className="row" >
            {props.projectsArray.map(project => (
                <div className="card col-5 px-2 py-2 my-2 mx-auto" key={project.id} >
                    <div className="card-header">
                        <h3 className="strong card-title">{project.name}</h3>
                        <h6 className="card-text">{project.description}</h6>
                    </div>
                    <img class="card-img" src={project.image} alt="project screenshot" />
                    <div className="card-footer">
                        <a className=" mx-2" href={project.liveSite}>Deployed Site</a>
                        <a className="mx-2" href={project.repo}>Github Repository</a>
                    </div>
                </div>
            ))}
        </div>

    );
}

export default Projects