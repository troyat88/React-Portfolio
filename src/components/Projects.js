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
            pjImg: "https://github.com/troyat88/Find-My-Plate/blob/main/assets/images/Screenshot.png?raw=true",
            deployment: "https://troyat88.github.io/Find-My-Plate/",
            git:"https://github.com/troyat88/Find-My-Plate",
            desc: "An easy to use application that allows users to find dining options in their current area or zip-code, search by cuisine, and search menus.",
            id: "1",
        },
        {
            project: "Your Forum",
            pjImg: "https://github.com/troyat88/your-forum/blob/main/assets/usage.png?raw=true",
            deployment: "https://pacific-journey-91002.herokuapp.com", 
            git: "https://github.com/troyat88/your-forum",
            desc: "A public discussion forum where the user in charge of the experience.",
            id: "2",
        },
        {
            project: "Weather Dashboard",
            pjImg: "https://github.com/troyat88/Weather-Dashboard/blob/main/assets/images/Weather-Screenshot.png?raw=true",
            git:"https://github.com/troyat88/Weather-Dashboard",
            deployment:"https://troyat88.github.io/Weather-Dashboard/",
            desc: "A dashboard where viewers can view weather conditions and a forecast by city.",
            id: "3",
        },
        {
            project: "Workout Tracker",
            pjImg: "https://github.com/troyat88/Workout-Tracker/blob/main/assets/Demo.gif?raw=true",
            deployment:"https://arcane-anchorage-46873.herokuapp.com/?id=6180a7636a6039001607973a",
            git:"https://github.com/troyat88/Workout-Tracker", 
            desc: "An app that allows the user to view create and track daily workouts. The user can log multiple exercises in a workout on a given day and also track the name, type, weight, sets, reps, and duration of exercise. For cardio workouts distance travelled will be recoreded.",
            id: "4",
        },
        {
            project: "Team Profile Generator",
           pjImg: "https://github.com/troyat88/TeamProfileGenerator/blob/main/assets/Demo.gif?raw=true",
           deployment:"https://github.com/troyat88/TeamProfileGenerator`",
           git:"https://github.com/troyat88/TeamProfileGenerator",
            desc: "A Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person.",
            id: "5",
        },
        {
            project: "Workday Scheduler",
            pjImg: "https://github.com/troyat88/work-day-scheduler/blob/main/Assets/CalendarScreenShot.jpg?raw=true",
           deployment:"https://troyat88.github.io/work-day-scheduler/",
           git:"https://github.com/troyat88/work-day-scheduler",
            desc: "An application that allows the user to add and save events to a 12-hour schedule.",
            id: "6",
        },
    ]

    return( 
            <section id="projects" style={{backgroundColor:"cornflowerblue"}}>
            <div class="container">
                    <div>
                        <h1 className="text-large">Projects</h1>
                    </div>
                    <hr></hr>
                <div>
                {/* Grabbing the show info and mapping through */}
                {projects.map((project) => (
                    // placing each set of show info into its own ShowCard
                    <ProjectCard 
                    project={project.project}
                    pjImg={project.pjImg}
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
