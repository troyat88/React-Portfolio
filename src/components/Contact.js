// Email Form: Name, Email, Message
// Display my email, GitHub and LinkedIn Links

import React from 'react'

function Contact() {
    return (
<div id="contact">
    <hr></hr>
    <h2>
        Contact Me
    </h2>
    <div className= "d-flex justify-content-center">
    <div className="card" style={{width:"25rem", backgroundColor:"cornflowerblue"}}>
    <div className="mb-3">
    {/* <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label> */}
    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Email" />
  </div>
  <div className="mb-3">
    {/* <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label> */}
    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Name" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleFormControlTextarea1" className="form-label">Enter Your Message</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows={8} defaultValue={""} />
  </div>
  </div>
</div>
</div>
    )
}

export default Contact
