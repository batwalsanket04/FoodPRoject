import React from "react";
import logo2 from './assets/10023.png';
import logo from "./assets/10015.png"; // logo
import img1 from "./assets/10012.png";
import img2 from "./assets/10011.png";
import img3 from "./assets/10013.png";
import img4 from "./assets/10009.png";
import img5 from "./assets/10008.png";
import img6 from "./assets/10001.png";
   
import { NavLink } from "react-router-dom";

const Footer = () => {
  const linkStyle = {
    color: "rgba(255,255,255,0.8)",
    textDecoration: "none",
    display: "block",
    marginBottom: "8px",
    transition: "all 0.3s ease",
    cursor: "pointer",
  };

  const hoverStyle = {
    color: "#ff5a00",
    paddingLeft: "5px",
  };

  return (
    <footer
      style={{
        color: "#fff",
        padding: "60px 0",
        backgroundImage: `url(${logo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        zIndex: 1,
        height:'500px'
        
      }}
    >
      {/* Overlay for better readability */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.7)",
          zIndex: -1,
        }}
      ></div>

      <div className="container "  data-aos="fade-left">
        <div className="row">
          {/* Logo Section */}
          <div className="col-md-3 mb-4">
            <img src={logo2} alt="Logo" style={{ maxWidth: "160px" }} />
            <p style={{ color: "#ff5a00", fontWeight: "600", marginTop: "10px" }}>
              Food & Drinks
            </p>
          </div>

          {/* Navigation */}
          <div className="col-md-3 mb-4" data-aos="fade-down">
            <h5 style={{ fontWeight: "600", marginBottom: "20px" }}>Navigation</h5>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {["Home", "Events", "Testimonial", "Categories", "Contacts"].map(
                (item, index) => (
                  <li key={index}>
                    <NavLink
                      to="#"
                      style={linkStyle}
                      onMouseOver={(e) => {
                        e.target.style.color = hoverStyle.color;
                        e.target.style.paddingLeft = hoverStyle.paddingLeft;
                      }}
                      onMouseOut={(e) => {
                        e.target.style.color = linkStyle.color;
                        e.target.style.paddingLeft = "0";
                      }}
                    >
                      {item}
                    </NavLink>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Useful Links */}
          <div className="col-md-3 mb-4" data-aos="fade-down">
            <h5 style={{ fontWeight: "600", marginBottom: "20px" }}>Useful Links</h5>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {["Registration", "Login", "Policy", "Terms & Conditions"].map(
                (item, index) => (
                  <li key={index}>
                    <NavLink
                      to="#"
                      style={linkStyle}
                      onMouseOver={(e) => {
                        e.target.style.color = hoverStyle.color;
                        e.target.style.paddingLeft = hoverStyle.paddingLeft;
                      }}
                      onMouseOut={(e) => {
                        e.target.style.color = linkStyle.color;
                        e.target.style.paddingLeft = "0";
                      }}
                    >
                      {item}
                    </NavLink>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Instagram Feed */}
          <div className="col-md-3 mb-4">
            <h5 style={{ fontWeight: "600", marginBottom: "20px" }}>
              Instagram Feed
            </h5>
            <div className="row g-2">
              {[img1, img2, img3, img4, img5, img6].map((img, index) => (
                <div className="col-4" key={index}>
                  <img
                    src={img}
                    alt={`insta-${index}`}
                    style={{
                      width: "100%",
                      height: "80px",
                      objectFit: "cover",
                      borderRadius: "4px",
                      transition: "transform 0.3s ease",
                    }}
                    onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
                    onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 text-center mt-5">
        <p style={{ margin: 0, fontSize: "14px", color: "rgba(255,255,255,0.6)" }}>
          Copyright ©2025 All rights reserved | 
          This template is made with ❤️ by <span className="text-danger">Sanket Batwal</span>
        </p>
      </div>
      
    </footer>
    
  );
};

export default Footer;
