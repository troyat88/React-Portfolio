// Create Navbar:
//current page = highlighted-tab
// About,Portfilio, Resume, Contact
//
import React from 'react'

function Nav() {
    return (
<header>
            <nav>
                <ul>
                    <li className="hide-on-small">
                        <a href="/#aboutMe" className="bold">About Me</a>
                    </li>
                    <li>
                        <a href="/#projects" className="navLink">Projects</a>
                    </li>
                    <li>
                        <a href="/#contact" className="navLink">Contact</a>
                    </li>
                    <li>
                    <a href="./images/CODING RESUME.docx" target="_blank">Resume</a>
                    </li>
                </ul>
                

            </nav>
            </header>
    )
}

export default Nav

