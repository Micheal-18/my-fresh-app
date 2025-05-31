import "./Heroimg.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// List of images you want to cycle through
import Img1 from "../assets/sex.jpg";
import Img2 from "../assets/star.jpg";  // add more images here
import Img3 from "../assets/astro.jpg";
import Img4 from "../assets/stop.jpg";

const images = [Img1, Img2, Img3, Img4]; // array of images

const HeroImg = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 10000); // Change image every 3 seconds

    // Cleanup timeout to avoid memory leaks
    return () => clearTimeout(timer);
  }, [currentImage]);

  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={images[currentImage]} alt="Intro" />
      </div>
      <div className="content">
        <p>HI, I'M A FREELANCER.</p>
        <h1>React Developer.</h1>
        <div>
          <Link to="/project" className="btn">Projects</Link>
          <Link to="/contact" className="btn btn-light">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
