//import React from 'react'
import React, { Fragment } from 'react'


function projectCard(project) {
    return (
        <Fragment>
    <figure>
                <img className="rounded" src={project.pjImg} alt="placeholder"></img>
            </figure>
            <div className="ml-25">
                <h2>
                    {project.project}
                </h2>
                <p>
                    {project.desc}
                </p>
                
            </div> 
        </Fragment>
    )
}

export default projectCard


