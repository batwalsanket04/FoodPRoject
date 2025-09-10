import React from "react";
import "./ContactCompo.css";
import { FaHome, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const ContactCompo = () => {
  return (
    <div className="contact-page" data-aos="fade-right">
      <div className="contact-container">
        {/* Left: Form */}
        <div className="contact-form">
          <h2>Get in Touch</h2>
          <form>
            <textarea placeholder="Enter Message"></textarea>
            <div className="form-row">
              <input type="text" placeholder="Enter your name" />
              <input type="email" placeholder="Email" />
            </div>
            <input type="text" placeholder="Enter Subject" />
            <button type="submit">SEND</button>
          </form>
        </div>

        {/* Right: Contact Info */}
        <div className="contact-info align-content-center text-center">
          <div className="info-item">
            <FaHome className="icon" />
            <div>
              <strong>Buttonwood, California.</strong>
              <p>Rosemead, CA 91770</p>
            </div>
          </div>

          <div className="info-item">
            <FaPhoneAlt className="icon" />
            <div>
              <strong>+1 253 565 2365</strong>
              <p>Mon to Fri 9am to 6pm</p>
            </div>
          </div>

          <div className="info-item">
            <FaEnvelope className="icon" />
            <div>
              <strong>support@colorlib.com</strong>
              <p>Send us your query anytime!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCompo;
