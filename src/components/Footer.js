import "./Footer.css"

import React from 'react'
import { FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa"
import walkGif from '../assets/dog.gif';


const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div  className="location">
                    <FaHome size={20} style={{color:"#fff", marginRight: "2rem"}} />
                    <div>
                    <p>V9FX+GPJ, Obukpa 410105, Enugu</p>
                    <p>Nigera.</p>
                    </div>
                </div>
                <div className="phone">
                   <h4>  <FaPhone size={20} style={{color: "#fff", marginRight: "2rem"}} />+2348143409159</h4>
                </div>

                <div className="email">
                   <h4>  <FaMailBulk size={20} style={{color: "#fff", marginRight: "2rem"}} />michaeleleke259@gmail.com</h4>
                </div>
            </div>
            <div className="right">
                <h4>About Me</h4>
                <p>
                    My Name is Eleke Imammachukwu.I'm a Frontend developer, that's good at HTML,CSS,react js.I enjoy doing new project and design challenges
                </p>
                <div className="social">
                 <a href="https://github.com/Micheal-18"><FaGithub size={20} style={{color: "#fff", marginRight: "2rem"}} /></a>
                 <a href="https://x.com/michael_eleke"><FaTwitter size={20} style={{color: "#fff", marginRight: "2rem"}} /> </a>
                 <a href="https://www.linkedin.com/in/eleke-michael-bb53a3237/"><FaLinkedin size={20} style={{color: "#fff", marginRight: "2rem"}} /> </a>
                </div>

            </div>

          <footer>
            <div className="walking-gif">
                <img 
                  src={walkGif} 
                  alt="animated cartoon" 
                  style={{ width: 80, height: 80 }} 
               />
            </div>
          </footer>             
        </div>


    </div>
  )
}


export default Footer