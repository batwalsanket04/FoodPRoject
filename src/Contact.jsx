import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import abt from './assets/abt.png';
import ContactCompo from './ContactCompo';

const Contact = () => {
    useEffect(() => {
        AOS.init({
          duration: 1200,  
          once: true,     
        });
      }, []);
  return (
    <div>
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
                  Contact Us
                </h1>
              </div>
              <ContactCompo/>
      
    </div>
  )
}

export default Contact
