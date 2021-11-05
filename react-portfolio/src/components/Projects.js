// Display 6 apps: Image, Title, Desc, Links
// Link to Github and Deploymeny
// Imp0rt array of objects containing project data, return in cards 

import React from 'react'
import ProjectCard from './ProjectCard'

//import images

function Projects() {
    const projects = [
        {
            project: "Project 1",
            pjimg: img1,
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia distinctio quisquam, perspiciatis consequuntur odio sapiente rem! Ratione harum magni, neque laboriosam natus omnis officia aspernatur corrupti quidem, aut sapiente cum iure dolore ullam. Laborum perspiciatis delectus iure consectetur vel porro modi numquam vero dignissimos eveniet!",
            id: "1",
        },
        {
            project: "Project 2",
            pjImg: img2,
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia distinctio quisquam, perspiciatis consequuntur odio sapiente rem! Ratione harum magni, neque laboriosam natus omnis officia aspernatur corrupti quidem, aut sapiente cum iure dolore ullam. Laborum perspiciatis delectus iure consectetur vel porro modi numquam vero dignissimos eveniet!",
            id: "2",
        },
        {
            project: "Project 3",
            pjImg: img3,
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia distinctio quisquam, perspiciatis consequuntur odio sapiente rem! Ratione harum magni, neque laboriosam natus omnis officia aspernatur corrupti quidem, aut sapiente cum iure dolore ullam. Laborum perspiciatis delectus iure consectetur vel porro modi numquam vero dignissimos eveniet!",
            id: "3",
        },
        {
            project: "Project 4",
            pjImg: img4,
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia distinctio quisquam, perspiciatis consequuntur odio sapiente rem! Ratione harum magni, neque laboriosam natus omnis officia aspernatur corrupti quidem, aut sapiente cum iure dolore ullam. Laborum perspiciatis delectus iure consectetur vel porro modi numquam vero dignissimos eveniet!",
            id: "4",
        },
        {
            project: "Project 5",
            pjImg: img5,
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia distinctio quisquam, perspiciatis consequuntur odio sapiente rem! Ratione harum magni, neque laboriosam natus omnis officia aspernatur corrupti quidem, aut sapiente cum iure dolore ullam. Laborum perspiciatis delectus iure consectetur vel porro modi numquam vero dignissimos eveniet!",
            id: "5",
        },
        {
            project: "Project 6",
            pjImg: img6,
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia distinctio quisquam, perspiciatis consequuntur odio sapiente rem! Ratione harum magni, neque laboriosam natus omnis officia aspernatur corrupti quidem, aut sapiente cum iure dolore ullam. Laborum perspiciatis delectus iure consectetur vel porro modi numquam vero dignissimos eveniet!",
            id: "6",
        },
    ]

        return( 
            <section id="projects" class="section bg-light">
            <div class="container">
                    <div>
                        <h1 className="text-large bg-dark rounded">Projects</h1>
                    </div>
                <div className="shows">
                {/* Grabbing the show info and mapping through */}
                {Projects.map((project) => (
                    // placing each set of show info into its own ShowCard
                    <ProjectCard 
                    project={project.venue}
                    img={project.pjImg}
                    desc={project.desc}
                    key={project.id}
                    />
                ))}
                </div>
            </div>
        </section>
        )
}

export default Projects
