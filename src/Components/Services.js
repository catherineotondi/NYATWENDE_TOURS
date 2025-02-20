import React from "react";
import { FaHotel, FaPlane, FaUmbrellaBeach, FaMap, FaPaw, FaFileAlt, FaSuitcase, FaPassport, FaTicketAlt, FaUsers } from "react-icons/fa";
import "../css/styles.css";// Import external CSS file
import Travelpackages from "./Travelpackages";
import { Link } from 'react-router-dom';

const services = [
  { icon: <FaHotel />, title: "Hotel Booking & Reservation", description: "Reliable hotel booking services for luxury resorts, boutique hotels, and budget-friendly stays." },
  { icon: <FaPlane />, title: "Airport Transfers", description: "Stress-free airport pickups and drop-offs with comfortable, reliable vehicles." },
  { icon: <FaUmbrellaBeach />, title: "Beach Holidays", description: "Enjoy stunning beach getaways on Kenya’s coast or tropical island retreats." },
  { icon: <FaMap />, title: "Customized Tours & Holidays", description: "Tailor-made itineraries for solo travelers, families, and groups to match your interests." },
  { icon: <FaPaw />, title: "Safaris", description: "Explore Kenya’s wildlife with safaris to Maasai Mara, Amboseli, and more." },
  { icon: <FaFileAlt />, title: "Travel Documentation", description: "Assistance with travel documents, permits, and certifications for a smooth journey." },
  { icon: <FaSuitcase />, title: "Travel Consultation", description: "Expert advice on destinations, itineraries, and activities to enhance your trip." },
  { icon: <FaPassport />, title: "Visa Application Assistance", description: "Personalized support for visa applications with complete documentation guidance." },
  { icon: <FaTicketAlt />, title: "Air Reservation & Ticketing", description: "Book domestic and international flights with ease at competitive rates." },
  { icon: <FaUsers />, title: "Conferences & Team Building", description: "Corporate events and team-building activities for communication and collaboration." }
];

const Services = () => {
    return (
        <div>
        
             <div className="services-container">
      <h2 className="services-title" style={{ marginBottom: "60px" }}>Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
                    <Link to={`/contact`}>
                      <button className="appointment-button">BOOK AN APPOINTMENT TODAY</button>
                  </Link>
      </div>
            </div>
            <Travelpackages />
      </div>
   
  );
};

export default Services;







