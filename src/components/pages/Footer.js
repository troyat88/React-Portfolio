//Social Media Links
import React from 'react'
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';

function Footer() {
    return (
        <div>
            <footer style={{backgroundColor:"RoyalBlue", height:"100px"}}>
            <div className="social-icons-container">
                <h4>More Contact Resources</h4>
            <section  >   
            <SocialIcon   style={{marginTop:"10px"}} className="social-icon" target="_blank" url="https://github.com/troyat88" />
            <SocialIcon style={{marginTop:"10px"}} className="social-icon" target="_blank" url="https://www.linkedin.com/in/troy-atkinson-uw/" />
            <SocialIcon style={{marginTop:"10px"}} className="social-icon" target="_blank" url="mailto:troyat88@gmail.com" />
            
            </section>
        </div>
            </footer>
        </div>
    )
}

export default Footer
