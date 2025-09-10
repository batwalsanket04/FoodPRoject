import React, { useEffect, useState } from "react";
import img from "../src/assets/10002.png";
import img2 from "../src/assets/10024.png";
import Weter from "../src/assets/weter2.png";
import Cap from "../src/assets/cap.png";
import Dish from "../src/assets/dish1.png";
import weter from "../src/assets/weter2.png";

import "./Menu.css"
 
import AOS from "aos";
import "aos/dist/aos.css";
import Menu from "./Menu";
import Special from "./Special";
import AboutRestro from "./AboutRestro";
import BookTable from "./BookTable";
import ContentSection from "./ContentSection";
import Services from "./Services";
import AboutRestro2 from "./AboutRestro2";
import Blog from "./Blog";
import Footer from "./Footer";
import OfferedMenu from "./OfferedMenu";

const Home = () => {

  const [hover, setHover] = useState(false);
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
     
  }, []);
  

  return (
    <>
    <div className="container-fluid p-0 h-100 w-100 pt-5" data-aos="fade-left">
      {/* Hero Section */}
      <div className="position-relative">
        <img
          src={img}
          alt=""
          className="w-100  h-100 img-fluid"
          style={{ maxHeight: "100vh", objectFit: "cover" }}
        />

        {/* Hero Text */}
        <div
          className="position-absolute top-50 start-0 translate-middle-y text-white px-3 px-md-5"
          style={{ width: "clamp(280px, 70%, 900px)" }}
        >
          <h3
            style={{
              color: "#ff5a00",
              fontFamily: "Poppins",
              fontSize: "clamp(16px, 2vw, 25px)",
              fontWeight: "bold",
              textAlign: "left",
              marginTop:"30px"
            }}
            data-aos="fade-left"
          >
            Discover Your Taste
          </h3>

          <h1
            className="fw-bold"
            style={{
              fontSize: "clamp(28px, 5vw, 72px)",
              fontFamily: "Josefin Sans",
              marginTop: "15px",
              color: "#212025",
              textAlign: "left",
              lineHeight: "1.2",
            }}
            data-aos="fade-left"
          >
            We believe good food offers a great smile
          </h1>

          <p
            style={{
              fontSize: "clamp(14px, 2vw, 20px)",
              marginTop: "15px",
              color: "#212025",
              textAlign: "left",
              maxWidth: "600px",
            }}
            data-aos="fade-left"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            soluta, unde dicta similique sed incidunt expedita autem.
          </p>

          <button
            style={{
              width: "clamp(120px, 20vw, 180px)",
              height: "50px",
              marginTop: "20px",
              background: hover ? "#ff5a00" : "transparent",
              border: "2px solid #ff5a00",
              borderRadius: "8px",
              color: hover ? "black" : "#ff5a00",
              fontWeight: 600,
              transition: "all 0.5s ease",
            }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            Reservation
          </button>
        </div>
      </div>

      {/* Content Section */}

      <ContentSection/>
     
  


    
    </div>
      <div className="container-fluid m-0 p-0">
  <OfferedMenu/>
    <Menu/>
  <Special/>
  <AboutRestro/>
  <BookTable/>
  <ContentSection/>
  <Services/>
  <AboutRestro2/>
  <Blog/>
 
</div>
    </>
  );
};

export default Home;
