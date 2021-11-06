// Display 6 apps: Image, Title, Desc, Links
// Link to Github and Deploymeny
// Imp0rt array of objects containing project data, return in cards 

import React from 'react'
import ProjectCard from './ProjectCard'

//import images

function Projects() {
    const projects = [
        {
            project: "Find My Plate",
            //pjimg: img1,
            deployment: "https://troyat88.github.io/Find-My-Plate/",
            git:"https://github.com/troyat88/Find-My-Plate",
            desc: "An easy to use application that allows users to find dining options in their current area or zip-code, search by cuisine, and search menus.",
            id: "1",
        },
        {
            project: "Your Forum",
            //pjImg: img2,
            deployment: "https://pacific-journey-91002.herokuapp.com", 
            git: "https://github.com/troyat88/your-forum",
            desc: "A public discussion forum where the user in charge of the experience.",
            id: "2",
        },
        {
            project: "Weather Dashboard",
            //pjImg: img3,
            git:"https://github.com/troyat88/Weather-Dashboard",
            deployment:"https://troyat88.github.io/Weather-Dashboard/",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia distinctio quisquam, perspiciatis consequuntur odio sapiente rem! Ratione harum magni, neque laboriosam natus omnis officia aspernatur corrupti quidem, aut sapiente cum iure dolore ullam. Laborum perspiciatis delectus iure consectetur vel porro modi numquam vero dignissimos eveniet!",
            id: "3",
        },
        {
            project: "Workout Tracker",
            //pjImg: img4,
            deployment:"https://arcane-anchorage-46873.herokuapp.com/?id=6180a7636a6039001607973a",
            git:"https://github.com/troyat88/Workout-Tracker", 
            desc: "An app that allows the user to view create and track daily workouts. The user can log multiple exercises in a workout on a given day and also track the name, type, weight, sets, reps, and duration of exercise. For cardio workouts distance travelled will be recoreded.",
            id: "4",
        },
        {
            project: "Team Profile Generator",
           // pjImg: img5,
           deployment:"",
           git:"https://github.com/troyat88/TeamProfileGenerator",
            desc: "A Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person.",
            id: "5",
        },
        {
            project: "Workday Scheduler",
           // pjImg: img6,
           deployment:"https://troyat88.github.io/work-day-scheduler/",
           git:"https://github.com/troyat88/work-day-scheduler",
            desc: "An application that allows the user to add and save events to a 12-hour schedule.",
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
                {projects.map((project) => (
                    // placing each set of show info into its own ShowCard
                    <ProjectCard 
                    project={project.venue}
                    img={project.pjImg}
                    deployment={project.deployment}
                    git={project.git}
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
