import React from 'react';

import Navbar from "../components/Navbar";
import AboutContent from "../components/AboutContent";
import Footer from "../components/Footer";
import Heroimg2 from '../components/Heroimg2';

const About = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="ABOUT" text="I'm a Front_End Developer."/>
      <AboutContent />
      <Footer />
    </div>
  )
}

export default About