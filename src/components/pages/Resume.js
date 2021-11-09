import React from 'react';

//import { Document } from 'react-pdf/dist/esm/entry.webpack';
import Resume1 from "../../images/CODINGRESUME.pdf";

export const Resume = () => {

    return (
        <div className="resume" style={{backgroundColor:"cornflowerblue", height:"100%"}}>
            <h1>
                Full Stack Skills
            </h1>
            <ul style={{listStyle:"none"}}>
                <li>
                    HTML, CSS, JavaScript
                </li>
                <li>
                    Web/Third-Party/Server-Side API
                </li>
                <li>
                    NodeJS, Express, SQL
                </li>
                <li>
                    NoSQL,REACT, MERN
                </li>                
            </ul>
            <h5>
                Download my Resume
            </h5>
            <a  href={Resume1} download>
  <img style={{marginBottom:"100px"}} src="https://img.icons8.com/ios/50/000000/open-resume.png" alt="Resume Icon"/>
</a>

      
    
            
        </div>
    )
}


export default Resume