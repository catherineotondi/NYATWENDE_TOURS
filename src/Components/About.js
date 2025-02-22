
import React from "react";
import "../css/styles.css"; // Import external CSS
import aboutImage from "../img/maasai.jpeg"; // Replace with your image
import { Link } from 'react-router-dom';
import ChooseUs from "./ChooseUs";

const About = () => {
    return (
        <div>
            <section className="about-section">
      <div className="about-container">
        {/* Left Side - Image */}
        <div className="about-image">
          <img src={aboutImage} alt="About Us" />
        </div>

        {/* Right Side - Text */}
        <div className="about-text">
          <h2>About Us</h2>
          <p>
          Nyatwende Tours and Travel Company is your trusted partner in delivering unforgettable
travel experiences. We specialize in curated tours, personalized travel packages, and
seamless travel solutions, ensuring every journey is inspiring, adventurous, and stress-
free. Whether you are exploring breathtaking landscapes, indulging in cultural experiences,
or planning a business trip, Nyatwende is dedicated to making your travel dreams a reality.
                  </p>
                  
                  <Link to={`/services`}>
                      <button className="explore-button">Explore</button>
                  </Link>
        </div>
          </div>
          
            </section>
            <ChooseUs />
      </div>
    
      
  );
};

export default About;
