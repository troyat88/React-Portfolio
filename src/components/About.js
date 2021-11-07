// Avatar
//Short Bio
import React from 'react';

function About() {

    return (
        <main className="main">
         <div>
        <aside className="aside">
        <div className="card" style={{width:"15rem", backgroundColor:"lightsteelblue"}}>
          <h2 id="about-me">About Me</h2>
          <img id="headshot" src="{headshot}" alt="headshot of Troy Atkinson" />
          <p className="headline"><b>BA Communication Studies</b></p>
          <p className="headline">University of Washington</p>
          <p className="headline">class of 2018</p>
          <hr />
          <p className="headline"><b>US Navy</b></p>
          <p className="headline">2008-2014</p>
          </div>
        </aside>
        <div style={{textAlign:"center"}}>
        <p className="bio" style={{ textAlign:"center"}}>I am currently enrolled in the University of Washington's Coding Bootcamp. 
          My plans are to find a career using my passion for design, creativity and problem solving as a developer.
          I am drawn to web developement by a desire to better understand the ever changing digital world we find ourselves living in daily.</p>
        <p className="bio" style={{ textAlign:"center"}}> Before joining Coding Bootcamp I was a staff manager and personal trainer at a gym in Seattle. before that, my studies at the Univerity of Washington focused on Journalism. 
          And before college I had the privelage of travelling the seas and working with people from around the world while serving in the US Navy.  
        </p>
        </div>
        </div>
        <br />
        <div>
        <h4>Interests</h4>
        <div className="d-flex justify-content-center">
        <ul id="interests">
          <li>UX/UI Design</li>
          <li>App Developement</li>
          <li>Product Management</li>
        </ul>
        </div>
        <h4>Skills</h4>
        <div className="d-flex justify-content-center">
        <ul id="skills">
          <li>Copy Writing</li>
          <li>Spanish</li>
          <li>Team Management</li>
        </ul>
        </div>
        </div>
      </main>
    )
}

export default About
