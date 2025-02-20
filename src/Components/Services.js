// import "../css/styles.css"
// import myAmboseli from "../img/wild.jpeg";
// import mySafari from "../img/wildlife.jpeg";
// import myKilimanjaro from "../img/wild.jpeg";
// import myNational from "../img/wildli.jpeg";
// import myWild from "../img/willd.jpeg";
// import myWatamu from "../img/wildlif.jpeg";
// import { Link } from 'react-router-dom';



// const Services = () => {
//     return ( 
//         <div>
//             <section>
//             <h1>Our Services</h1> 
//                 <p>
//                     <b>Hotel Booking and Reservation</b><br></br>

// We offer reliable hotel booking services, connecting you with the best accommodations—whether it’s a luxury resort, a boutique hotel, or a budget-friendly option. Our goal is to match your preferences and budget for a comfortable stay.<br></br>
// <b>Airport Transfers</b><br></br>

// Start and end your journey stress-free with our professional airport transfer services. We ensure timely pickups and drop-offs in clean, comfortable vehicles with friendly and courteous drivers.<br></br>
// <b>Beach Holidays</b><br></br>

// Escape to paradise with our beach holiday packages. Whether you seek relaxation on Kenya’s stunning coastline or an exotic tropical getaway, we create perfect beach experiences tailored to your desires.<br></br>
// <b>Customized Tours and Holidays</b><br></br>

// Experience travel designed just for you! We create personalized itineraries for solo travelers, families, or groups, ensuring your holiday aligns with your interests—be it adventure, culture, or relaxation.<br></br>
// <b>Safaris</b><br></br>

// Discover Kenya’s extraordinary wildlife and scenic beauty with our safari packages. From the iconic Maasai Mara to Amboseli’s majestic elephants, we offer unforgettable experiences for nature and adventure lovers.<br></br>
// <b>Travel Documentation</b><br></br>

// Our team helps you manage your travel documents, including permits and certifications, to ensure a smooth and worry-free travel process.<br></br>
// <b>Travel Consultation</b><br></br>

// Need guidance on where to go and how to plan your trip? Our travel experts provide advice on destinations, activities, and itineraries to help you make the best choices.<br></br>
// <b>Visa Application Assistance</b><br></br>

// Navigating visa requirements can be tricky. We offer personalized support, ensuring your visa application process is straightforward, with all necessary documentation prepared for submission.<br></br>
// <b>Air Reservation and Ticketing</b><br></br>

// Book domestic and international flights with ease. We offer competitive rates and efficient ticketing services to get you to your destination hassle-free.<br></br>
// <b>Conferences and Team Building</b><br></br>

// We organize corporate events and team-building activities designed to strengthen teams, improve communication, and promote collaboration—all while ensuring a fun and memorable experience.</p>
//             </section>

//             <section>
//                 <h1>TRAVEL PACKAGES</h1>

//                 <div>
//                     <div className="imagecontainer">

//                     <Link to={`/`}>
//                             <img src={myAmboseli} alt="Amboseli" style={{ width: "350px", height: "450px" }} />
//                             <h1>Amboseli Safaris</h1>  
//                         </Link>
//                         <Link to={`/`}>
//                             <img src={mySafari} alt="Safari" style={{ width: "350px", height: "450px" }} />
//                             <h1>Safari Highlights</h1>  
//                         </Link>
//                         <Link to={`/`}>
//                             <img src={myKilimanjaro} alt="Kilimanjaro" style={{ width: "350px", height: "450px" }} />
//                             <h1>Kilimanjaro Safari</h1>  
//                     </Link>
//                     <Link to={`/`}>
//                             <img src={myNational} alt="National" style={{ width: "350px", height: "450px" }} />
//                             <h1>Nairobi National Park</h1>  
//                     </Link>
//                     <Link to={`/`}>
//                             <img src={myWild} alt="Wild" style={{ width: "350px", height: "450px" }} />
//                             <h1>Wildbeest Migration</h1>  
//                         </Link>
//                         <Link to={`/`}>
//                             <img src={myWatamu} alt="watamu" style={{ width: "350px", height: "450px" }} />
//                             <h1>Malindi Watamu Tour</h1>  
//                     </Link>
//                 </div>
                



//                 </div>

                
             
                
                
//             </section>
            
             
//         </div>
//      );
// }
 
// export default Services;


import React from "react";
import { FaHotel, FaPlane, FaUmbrellaBeach, FaMap, FaPaw, FaFileAlt, FaSuitcase, FaPassport, FaTicketAlt, FaUsers } from "react-icons/fa";
import "../css/styles.css"// Import external CSS file
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







