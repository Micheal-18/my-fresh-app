import { Link } from "react-router-dom";
import "./AboutContent.css";

import React from 'react'
import React1 from "../assets/react1.jpg";
import React2 from "../assets/pro1.jpg";
import React3 from "../assets/me.jpg";

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <div className="img-container">
                <img src={React3} className="img" alt="true"/>
            </div>
            <p>I am a Front-End Developer. I create responsive secure websites for my clients.</p>
            <Link to="/contact"></Link>
            <button className="btn">Contact</button>
            <p>Check out some of my work!</p>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={React1} className="img" alt="true"/>
                </div>
                <div className="img-stack bottom">
                    <img src={React2} className="img" alt="true"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent