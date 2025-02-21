
import React from "react";
import { Link } from 'react-router-dom';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Carousel styles
import "../css/styles.css"; // External CSS

import abouttImage from "../img/TRAV.jpg"; // Replace with actual images
import missionIcon from "../img/mission.png";
import visionIcon from "../img/vision.jpeg";
import valuesIcon from "../img/value.jpeg";
import carousel1 from "../img/TRAA.jpg";
import carousel2 from "../img/giaraffe.jpg";
import carousel3 from "../img/ROAD.jpg";
import carousel4 from "../img/TRAVE.jpg";
import carousel5 from "../img/TRAVEL.jpg";

const testimonials = [
  "Nyatwende Travel and Tours provided an amazing safari experience! The team was professional and made sure everything was seamless.",
  "Our family vacation was perfectly planned, and we had a stress-free experience thanks to Nyatwende Travel.",
  "I highly recommend Nyatwende Travel for international trips. They made visa processing and bookings so easy!",
];

const Home = () => {
  return (
    <div className="home-container">
      {/* Section 1: Carousel */}
      <section className="carousel-section">
        <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} interval={3000}>
          <div><img src={carousel1} alt="Travel 1" /></div>
          <div><img src={carousel2} alt="Travel 2" /></div>
          <div><img src={carousel3} alt="Travel 3" /></div>
          <div><img src={carousel4} alt="Travel 4" /></div>
          <div><img src={carousel5} alt="Travel 5" /></div>
        </Carousel>
      </section>

      {/* Section 2: About Us */}
      <section className="homeabout-section">
        <div className="homeabout-container">
          <div className="homeabout-text">
            <h2>Nyatwende  Africa Tours & Travel Company</h2>
            <p>
            With over 5 years of existence, <b>Nyatwende Africa Tours and Travel</b> has quickly become a trusted name in the travel industry, specializing in<b> personalized tours and safaris</b>  across Africa. With over <b>5 years of experience,</b>  we pride ourselves on delivering unique, high-end travel experiences that cater to every traveler’s individual preferences. Our dedicated team takes the time to listen carefully to your needs and desires, ensuring that we create tours tailored specifically to you, filled with unforgettable moments.<br></br><br></br>
We have had the pleasure of serving hundreds of clients from around the world, curating a wide range of custom journeys through Kenya, Tanzania, Zanzibar, and beyond. Whether you’re looking for a thrilling safari adventure, a cultural exploration, or a relaxing beach getaway, our goal is to make your vacation one that you will cherish and share with loved ones for years to come.<br></br><br></br>
At <b>Nyatwende Africa Tours and Travel,</b> we believe that every traveler deserves a trip that feels personal, authentic, and exciting. We don’t just show you the sights—we immerse you in the culture, history, and natural beauty of each destination. Start planning your journey today, and let us help you create a lifetime of memories.
            </p>
            <Link to={`/about`}>
                      <button className="read-button">Read more</button>
                  </Link>
          </div>
          <div className="homeabout-image">
            <img src={abouttImage} alt="About Nyatwende" />
          </div>
         
        </div>
      
       
      </section>

      {/* Section 3: Mission, Vision & Values */}
      <section className="values-section">
        <div className="values-container">
          <div className="value-card">
            <img src={missionIcon} alt="Mission" className="value-icon" />
            <h3>Our Mission</h3>
            <p>To provide exceptional travel experiences that create lasting memories.</p>
          </div>
          <div className="value-card">
            <img src={visionIcon} alt="Vision" className="value-icon" />
            <h3>Our Vision</h3>
            <p>To become Africa’s premier travel agency, renowned for offering high-quality,
tailor-made tours and safaris that immerse travelers in the true essence of the
continent.</p>
          </div>
          <div className="value-card">
            <img src={valuesIcon} alt="Values" className="value-icon" />
            <h3>Our Values</h3>
            <p>Integrity, customer satisfaction, and sustainable tourism.</p>
          </div>
        </div>
      </section>

      {/* Section 4: Testimonials */}
      <section className="testimonials-section">
        <h2>What Our Clients Say</h2>
        <div className="testimonials-container">
          {testimonials.map((testimonial, index) => (
            <p key={index} className="testimonial-text">{testimonial}</p>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;