import React, { useEffect, useState } from 'react'
import bgImg from "../src/assets/10003.png";

import AOS from "aos";
import "aos/dist/aos.css";

const OfferedMenu = () => {
    const [ismobile,setMobile]=useState(window.innerWidth<780)
    
      // styling of btn
     
      useEffect(() => {
        AOS.init({
          duration: 1500,
          once: true,
        });
        const handleResize = () => {
          setMobile(window.innerWidth < 780);
        };
        window.addEventListener("resize", handleResize);
    
        return () => window.removeEventListener("resize", handleResize);
        AOS.refresh();
      }, []);
      
  return (
    <div>

        <div
    className="gallary d-flex justify-content-center align-items-center"
    style={{
      backgroundImage: `url(${bgImg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      height: "400px",
      
    }}
  >
    <div className="row w-100 justify-content-center " >
      <div className="col text-center" data-aos="zoom-in-up">
        <h2 style={{ color: "#ff5a00", fontSize: "2rem",}}>
          Our Offered Menu
        </h2>
        <p style={{ color: "black",
    fontSize:ismobile? "2rem":"4rem",
    width:ismobile? "100%":"60%",
    textAlign: "center",
    margin: "0 auto",
    padding:'30px',
    fontFamily:'poppins'
     }}>
          Some Trendy And Popular Courses Offerd
        </p>
      </div>
     <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 justify-content-center mt-2 " style={{fontFamily:'poppins'}}  data-aos="zoom-in-up">
  </div>    
    </div>    
  </div>
      
    </div>
  )
}

export default OfferedMenu
