// Avatar
//Short Bio
import React from 'react'
import headshot from "../images/images/headshot.jpg"


function About() {
    return (
        <main>
        <aside>
          <h2 id="about-me">About Me</h2>
          <img id="headshot" src="{headshot}" alt="headshot of Troy Atkinson" />
          <p className="headline"><b>BA Communication Studies</b></p>
          <p className="headline">University of Washington</p>
          <p className="headline">class of 2018</p>
          <hr />
          <p className="headline"><b>US Navy</b></p>
          <p className="headline">2008-2014</p>
        </aside>
        <p className="bio">I am currently enrolled in the University of Washington's Coding Bootcamp. 
          My plans are to find a career using my passion for design, creativity and problem solving as a developer.
          I am drawn to web developement by a desire to better understand the ever changing digital world we find ourselves living in daily.</p>
        <p className="bio"> Before joining Coding Bootcamp I was a staff manager and personal trainer at a gym in Seattle. before that, my studies at the Univerity of Washington focused on Journalism. 
          And before college I had the privelage of travelling the seas and working with people from around the world while serving in the US Navy.  
        </p>
        <br />
        <h4>Interests</h4>
        <ul id="interests">
          <li>UX/UI Design</li>
          <li>App Developement</li>
          <li>Product Management</li>
        </ul>
        <h4>Skills</h4>
        <ul id="skills">
          <li>Copy Writing</li>
          <li>Spanish</li>
          <li>Team Management</li>
        </ul>
      </main>
    )
}

export default About
