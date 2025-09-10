import React, { useState, useEffect } from "react";
import img from "./assets/10020.png";

const BookTable = () => {
  const [selectedPerson, setSelectedPerson] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  // set current time
  useEffect(() => {
    const now = new Date();
    const hh = String(now.getHours()).padStart(2, "0");
    const mm = String(now.getMinutes()).padStart(2, "0");
    setSelectedTime(`${hh}:${mm}`);
  }, []);

  return (
    <div className=" container-fluid position-relative text-center"  data-aos="fade-right" style={{
        paddingBottom:'100px'
    }}>
      {/* Background Image */}
      <img src={img} alt="Food" className="img-fluid w-100"
      style={{
        width:'100%',
        height:'500px'
      }} />

      {/* Overlay */}
      <div className="position-absolute top-0 start-50 translate-middle-x mt-3 w-100 px-3">
        <h2
          style={{
            fontSize: "20px",
            fontFamily: "Josefin Sans",
            fontWeight: "600",
            color: "#ff5a00",
          }}
        >
          About Our Restaurant
        </h2>
        <p
          style={{
            fontSize: "40px",
            fontFamily: "Josefin Sans",
            fontWeight: "600",
            color: "rgb(33,32,37)",
          }}
        >
          Book A Table
        </p>

        {/* Booking Form */}
        <div
          className="mx-auto shadow-lg p-4"
          style={{
            maxWidth: "900px",
            borderRadius: "15px",
            backgroundColor: "rgba(255,255,255,0.95)",
          }}
        >
          <div className="row g-3 align-items-center">
            {/* Person Select */}
            <div className="col-12 col-md-6 col-lg-3">
              <select
                className="form-select"
                value={selectedPerson}
                onChange={(e) => setSelectedPerson(e.target.value)}
              >
                <option value="">Person</option>
                <option>Person 1</option>
                <option>Person 2</option>
                <option>Person 3</option>
              </select>
            </div>

            {/* Date Picker */}
            <div className="col-12 col-md-6 col-lg-3">
              <input
                type="date"
                className="form-control"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
              />
            </div>

            {/* Time Picker */}
            <div className="col-12 col-md-6 col-lg-3">
              <input
                type="time"
                className="form-control"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
              />
            </div>

            {/* Button */}
            <div className="col-12 col-md-6 col-lg-3">
              <button
                className="btn w-100"
                style={{
                  height: "50px",
                  background: "#ff5a00",
                  color: "white",
                  fontWeight: 600,
                  borderRadius: "8px",
                }}
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookTable;
