import React, { Component } from "react";
import Img1 from "./assets/10006.png";
import Img2 from "./assets/10007.png";
import Img3 from "./assets/10004.png";
 

export default class Lounch extends Component {
  render() {
    return (
      <div className="container mt-4 "  data-aos="fade-right">
        <div className="row g-3">
         
          <div className="col-12 col-md-6"  data-aos="zoom-in-up">
            <div className="row g-3 text-center">
              <div className="col-6 col-md-12">
                <img src={Img3} alt="img1" className="img-fluid rounded shadow" />
              </div>
              <div className="col-6 col-md-12">
                <img src={Img1} alt="img2" className="img-fluid rounded shadow" />
              </div>
            </div>
          </div>

          {/* Right side large image */}
          <div className="col-12 col-md-6"  data-aos="zoom-in-up">
            <img
              src={Img2}
              alt="img3"
              className="img-fluid rounded shadow h-100 w-100"
              style={{ objectFit: "cover" }}
            />
          </div>

          {/* Full-width image at the bottom */}
         
        </div>
      </div>
    );
  }
}
