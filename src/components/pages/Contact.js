// Email Form: Name, Email, Message
// Display my email, GitHub and LinkedIn Links

import React, { useState } from 'react'
import { checkName, validateEmail } from '../../utils/helpers';

function Contact() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else {
      setName(inputValue);
    } 
  };

  const handleFormSubmit = (e) => {
    
    e.preventDefault();

    
    if (!validateEmail(email)) {
      setErrorMessage('Email or name is invalid');
      return;
    }
    if (!checkName(name)) {
      setErrorMessage(
        `PLEASE ENTER A NAME!`
      );
      return;
    }

    setName('');
    
    setEmail('');
  };

    return (
<div id="contact">
    <hr></hr>
    <h2>
        Contact Me
    </h2>

    <div className= "d-flex justify-content-center">
    <div className="card" style={{width:"25rem", backgroundColor:"cornflowerblue"}}>
    <form className="form">
    <div className="mb-3">
    {/* <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label> */}
    <input value={email} onChange={handleInputChange} name="email" type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Email" />
  </div>
  <div className="mb-3">
    {/* <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label> */}
    <input value={name} onChange={handleInputChange} name="name" type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Name" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleFormControlTextarea1" className="form-label">Enter Your Message</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows={8} defaultValue={""} />
    <div className="card-footer">
        <button type="button" onClick={handleFormSubmit}>Send Message</button>
    </div>
  </div>
  </form>
  </div>
</div>
</div>
    )
}

export default Contact
