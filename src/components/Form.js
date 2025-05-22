import "./Form.css";

import React from 'react'

const Form = () => {
  return (
    <div className="form">
        <form action="mailto:michaeleleke259@gmail.com" method="post" enctype="text/plain">
            <label>Your Name</label>
            <input type="text" name="name" placeholder="Enter your name..." required />
            <label>Email</label>
            <input type="email" name="email" placeholder="Enter your email..." required />
            <label>Subject</label>
            <input type="text" name="subject" placeholder="Enter subject..." required />
            <label>Message</label>
            <textarea rows="6" placeholder="Type your message here..." required></textarea>
            <button className="btn">Submit</button>
        </form>
    </div>
  )
}

export default Form