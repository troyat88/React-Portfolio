//import React from 'react'
import React, { Fragment } from 'react'


function projectCard(project) {
    return (
        <Fragment>
            
  {/* <div className="col">
  <div className="card mb-3" style={{maxWidth: 540}}>
    <div className="row g-0">
      <div className="col-md-4">
        <img src={project.pjImg} className="img-fluid rounded-start" alt="project icon" />
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">{project.project}</h5>
          <p className="card-text">{project.desc}</p>
          
          <figure style={{display:"inline-block"}}>
                <a href={project.git} target="_blank" ><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Logo.png"  style={{height:"50px", width:"80px"}} alt="link"/></a> 
                <figcaption style={{fontSize:"10px"}}> Click here to visit code repository</figcaption>

                <a href={project.deployment} target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/5957/5957136.png"  style={{height:"50px", width:"80px"}} alt="link"/></a> 
                <figcaption style={{fontSize:"10px"}}> Click here to visit deployed application.</figcaption>

                </figure>
        </div>
      </div>
    </div>
  </div>
  </div> */}

  {/* <div className="col">
  <div className="card mb-3" style={{maxWidth: 540, width:"450px"}}>
    <div className="row g-0">
    <div className="col-md-4"> */}

            <figure>
              <img  src={project.pjImg} alt="placeholder" style={{height:"300px", width:"450px"}}></img>
            </figure>
            <div className="ml-25">
                <h2>
                    {project.project}
                </h2>
                <p>
                    {project.desc}
                </p>
                <figure style={{display:"inline-block"}}>
                <a href={project.git} target="_blank" ><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Logo.png"  style={{height:"50px", width:"80px"}} alt="link"/></a> 
                <figcaption style={{fontSize:"10px"}}> Click here to visit code repository</figcaption>

                <a href={project.deployment} target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/5957/5957136.png"  style={{height:"50px", width:"80px"}} alt="link"/></a> 
                <figcaption style={{fontSize:"10px"}}> Click here to visit deployed application.</figcaption>

                </figure> 
            </div> 
            {/* </div>
            </div>
            </div>
            </div> */}
            <hr></hr>
        </Fragment>
    )
}

export default projectCard


