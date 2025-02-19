// import "../css/styles.css"

// const About = () => {
//     return ( 
//         <div>
//             <section className='aboutintro'>

//             </section>
//             <section className="aboutdesc">
//             <h1>About Us</h1>
//                 <p>Nyatwende Travel and Tours Company, based in Kenya, offers unique travel experiences, blending adventure, culture, and relaxation.<br></br>
//                     We specialize in curated tours, authentic local experiences, and personalized travel services to showcase the best of Kenya’s landscapes,<br></br> wildlife, and vibrant heritage. Whether it’s a safari, beach escape, or cultural exploration, Nyatwende is your trusted partner for memorable journeys.
//             </p>
//             </section>

//             <section className="choose">
//             <h1>Why Choose Us</h1>
//                 <p>
//                     <b>Local and International Expertise</b><br></br>

// Whether exploring Kenya’s beauty or traveling abroad, we offer expert planning and seamless coordination for both local and international trips.<br></br>

//                     <b>Tailor-Made Itineraries</b><br></br>

// Your travel experience is customized to fit your needs—be it adventure, relaxation, or cultural discovery.<br></br>

//                     <b>Trusted Travel Partners</b><br></br>

// We collaborate with reliable service providers worldwide to ensure quality, safety, and memorable experiences.<br></br>

//                     <b>Authentic Experiences</b><br></br>

// Discover hidden gems and enjoy immersive cultural experiences both in Kenya and globally.<br></br>

//                     <b>Dedicated Customer Support</b><br></br>

// Our friendly team is available every step of the way, ensuring your journey is hassle-free and enjoyable.<br></br>
//  <b>Affordable and Transparent Pricing</b><br></br>

// Enjoy competitive prices with no hidden charges, offering excellent value for local and international adventures.<br></br>
// <b>Sustainability and Community Focus</b><br></br>

// We promote responsible tourism by supporting local communities and preserving natural and cultural heritage.<br></br>
// <b>Corporate and Group Travel Options</b><br></br>

// We also offer specialized packages for corporate groups, family vacations, and themed travel experiences.
//                 </p>
                
//             </section>
            
            
            
//         </div>
//      );
// }
 
// export default About;


import React from "react";
import "../css/styles.css" // Import external CSS
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
            seamless travel solutions, ensuring every journey is inspiring, adventurous, and stress-free. 
            Whether you're exploring breathtaking landscapes, indulging in cultural experiences, or planning 
            a business trip, Nyatwende is dedicated to making your travel dreams a reality.
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
