import React, { Component } from "react";
import Img1 from "./assets/10006.png";
import Img2 from "./assets/10007.png";
import Img3 from "./assets/10004.png";
import Img4 from "./assets/10005.png";

export default class Breakfast extends Component {
  render() {
    const items = [
      { img: Img3, price: "$12" },
      { img: Img4, price: "$18" },
    ];

    return (
      <div className="container mt-4"  data-aos="zoom-in-up">
        <div className="row g-3">
          {/* Left side image */}
          <div className="col-12 col-md-6">
            <div className="row g-3 text-center">
              <div className="col-6 col-md-12">
                <div className="image-card position-relative overflow-hidden rounded shadow">
                  <img
                    src={items[0].img}
                    alt="img2"
                    className="img-fluid w-100 h-100"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="overlay d-flex flex-column justify-content-center align-items-center">
                    <h5 className="text-white mb-2">{items[0].price}</h5>
                    <button className="btn btn-warning fw-bold">
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side large image */}
          <div className="col-12 col-md-6"  data-aos="zoom-in-up">
            <div className="image-card position-relative overflow-hidden rounded shadow h-100">
              <img
                src={items[1].img}
                alt="img3"
                className="img-fluid w-100 h-100"
                style={{ objectFit: "cover" }}
              />
              <div className="overlay d-flex flex-column justify-content-center align-items-center">
                <h5 className="text-white mb-2">{items[1].price}</h5>
                <button className="btn btn-warning fw-bold">Order Now</button>
              </div>
            </div>
          </div>
        </div>

        {/* Hover effect CSS */}
        <style jsx>{`
          .image-card {
            height: 250px;
          }

          .overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.6);
            opacity: 0;
            transition: opacity 0.3s ease;
          }

          .image-card:hover .overlay {
            opacity: 1;
          }
        `}</style>
      </div>
    );
  }
}
