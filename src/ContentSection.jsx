import React, { useState, useEffect } from "react";
import img2 from "./assets/10024.png";
import Weter from "./assets/weter2.png";
import Cap from "./assets/cap.png";
import Dish from "./assets/dish1.png";
import weter from "./assets/weter2.png";
import AOS from "aos";
import "aos/dist/aos.css";

const ContentSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const arr = [Weter, Cap, Dish, weter];

     useEffect(() => {
       AOS.init({
         duration: 2000,
         once: true,
       });
      }, []);
  // Detect screen resize
  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);



  return (
    <div className="container-fluid py-5" data-aos="fade-up-left">
      <div className="row align-items-center">
        {/* LEFT - Text */}
        <div className="col-12 col-md-6 text-center text-md-start" data-aos="flip-left"
     >
          <h3
            className="fw-bold"
            style={{
              color: "#ff5a00",
              marginTop: isMobile ? "15%" : "5%",
              fontFamily: "Poppins",
            }}
          >
            Discover Your Text
          </h3>

          <h2
            className="fw-bold mt-4 mb-4"
            style={{
              fontSize: "clamp(24px, 4vw, 49px)",
              fontFamily: "Josefin Sans",
              color: "#212025",
              lineHeight: "1.3",
              textAlign: "justify",
              marginInline: "auto",
            }}
          >
            We Provide Good Food For Your Family!
          </h2>

          <p
            style={{
              fontSize: "clamp(14px, 2vw, 18px)",
              marginTop: "8%",
              maxWidth: "550px",
              marginInline: "auto",
              textAlign: "justify",
              marginBottom: "8%",
            }}
          >
            Ut enim acgsd minim veniam, quxcis nostrud exercitation ullamco
            laboris nisi ufsit aliquip ex ea commodo consequat is aute irure m,
            quis nostrud exer.
          </p>

          {/* Features Grid */}
          <div className="row mt-4 text-center">
            {arr.map((icon, i) => (
              <div
                className="col-12 col-sm-6 d-flex align-items-center mb-3"
                key={i}
              >
                <img
                  src={icon}
                  alt="icon"
                  style={{
                    height: "60px",
                    width: "60px",
                    marginRight: "12px",
                  }}
                />
                <p className="mb-0">Ut enim ad minim veniam, quis nostrud exer.</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT - Image */}
        <div className="col-12 col-md-6 text-center" data-aos="fade-right">
          <img
            src={img2}
            alt="Food"
            className="img-fluid"
            style={{
              maxHeight: "800px",
              width: "100%",
              objectFit: "contain",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ContentSection;
