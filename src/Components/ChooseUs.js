import React from "react";
import { FaGlobe, FaMapMarkedAlt, FaHandshake, FaStar, FaHeadset, FaDollarSign, FaLeaf, FaUsers } from "react-icons/fa";
import "../css/styles.css" // External CSS for styling

const features = [
  { icon: <FaGlobe />, title: "Local & International Expertise", description: "We offer expert planning and seamless coordination for both local and international trips." },
  { icon: <FaMapMarkedAlt />, title: "Tailor-Made Itineraries", description: "Your travel experience is customized to fit your needs—be it adventure, relaxation, or cultural discovery." },
  { icon: <FaHandshake />, title: "Trusted Travel Partners", description: "We collaborate with reliable service providers worldwide to ensure quality, safety, and memorable experiences." },
  { icon: <FaStar />, title: "Authentic Experiences", description: "Discover hidden gems and enjoy immersive cultural experiences both in Kenya and globally." },
  { icon: <FaHeadset />, title: "Dedicated Customer Support", description: "Our friendly team is available every step of the way, ensuring your journey is hassle-free and enjoyable." },
  { icon: <FaDollarSign />, title: "Affordable & Transparent Pricing", description: "Enjoy competitive prices with no hidden charges, offering excellent value for local and international adventures." },
  { icon: <FaLeaf />, title: "Sustainability & Community Focus", description: "We promote responsible tourism by supporting local communities and preserving natural and cultural heritage." },
  { icon: <FaUsers />, title: "Corporate & Group Travel Options", description: "We also offer specialized packages for corporate groups, family vacations, and themed travel experiences." },
];

const ChooseUs = () => {
  return (
    <section className="why-choose-us">
      <h1 className="section-title">Why Choose Us</h1>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChooseUs;
