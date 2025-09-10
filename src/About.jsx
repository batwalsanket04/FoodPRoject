import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import abt from './assets/abt.png';
import AboutRestro from './AboutRestro';
import BookTable from './BookTable';
import ContentSection from './ContentSection';
import AboutRestro2 from './AboutRestro2';
import Services from './Services';

const About = () => {
     useEffect(() => {
    AOS.init({
      duration: 1200,  
      once: true,     
    });
  }, []);
  return (
    <div>
      {/* Image Banner with Overlay Text */}
      <div className="container-fluid position-relative text-center" data-aos="fade-down">
        <img
          src={abt}
          alt=""
          style={{ width: "100%", height: "400px", objectFit: "cover" }}
        />

        <h1
          className="position-absolute top-50 start-50 translate-middle"
          style={{
            color: "#000",
            fontSize: "60px",
            fontWeight: "bold",
            fontFamily: 'Josefin Sans'
          }}
        >
          About Us
        </h1>
      </div>

      {/* Other Content */}
      <AboutRestro />
      <BookTable/>
      <ContentSection/>
      <AboutRestro2/>
      <Services/>
    </div>
  )
}

export default About
