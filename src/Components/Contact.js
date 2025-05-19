
import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaClock } from "react-icons/fa"; // Import icons
import "../css/styles.css"; // Import external CSS
import contactImage from "../img/ser.jpg"; // Import your image

const Contact = () => {
  return (
    <div className="contact-container">
      {/* Top Section with Image */}
      <div className="contact-image-container">
        <img src={contactImage} alt="Contact Us" className="contact-image" />
      </div>

      {/* Contact Details Section */}
      <div className="contact-details">


        <div className="contact-card">
          <FaMapMarkerAlt className="contact-icon" />
          <h3>Our Address</h3>
          <p>Riruta, Nairobi. Kenya</p>
        </div>

        <div className="contact-card">
          <FaEnvelope className="contact-icon" />
          <h3>Email Us</h3>
          <p>info@nyatwendeafrica.com</p>
        </div>

        <div className="contact-card">
          <FaPhone className="contact-icon" />
          <h3>Call Us</h3>
          <p>+254 706136146 | +254 798178735</p>
        </div>

        <div className="contact-card">
          <FaClock className="contact-icon" />
          <h3>Business Hours</h3>
          <p><b>Mon-Fri:</b> 9:00 AM - 6:00 PM<br></br><br></br><b>Sat-Sun:</b> 10:00 AM - 5:00 PM<br></br><br></br><b>Sunday: closed</b></p>
        </div>
      </div>
      <div className="formcontact-container">
      <h1>Contact Us</h1>
      <p>We'd love to hear from you. Please fill out the form below:</p>

      <div className="google-form-container">
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfgalSFiGQb82Ilqi4Gk1_1Ny1FiobrW19IdQCvWjPt9aQcMA/viewform?embedded=true" width="640" height="1551" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

      </div>
    </div>
      
    </div>
  );
};

export default Contact;
