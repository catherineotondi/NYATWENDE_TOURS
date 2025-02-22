
import React from "react";
import "../css/styles.css"; // Import external CSS
import contactImage from "../img/cont-removebg-preview.png"; // Replace with your image

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* Left Side - Image */}
        <div className="contact-image">
          <img src={contactImage} alt="Contact Us" />
        </div>

        {/* Right Side - Contact Details */}
        <div className="contact-details">
          <h2>Contact Us</h2>

          {/* Address */}
          <div className="contact-info">
            <span className="icon">📍</span>
            <p><strong><span className="contact-id">Address:</span></strong> Riruta, Nairobi, Kenya</p>
          </div>

          {/* Email */}
          <div className="contact-info">
            <span className="icon">✉️</span>
            <p><strong><span className="contact-id">Email:</span></strong>info@nyatwendeafrica.com</p>
          </div>

          {/* Phone */}
          <div className="contact-info">
            <span className="icon">📞</span>
            <p><strong><span className="contact-id">Phone:</span></strong> Phone: +254 706136146 | +254 798178735</p>
          </div>

          {/* Business Hours */}
          <div className="contact-info">
            <span className="icon">⏰</span>
            <p><strong><span className="contact-id">Business Hours:</span></strong></p>
            <p><span className="contactgap1">Monday - Friday: 8:00 AM - 6:00 PM</span></p>
            <p><span className="contactgap2">Saturday : 8:00 AM - 4:00 PM</span></p>
            <p><span className="contactgap2"> Sunday: closed</span></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
