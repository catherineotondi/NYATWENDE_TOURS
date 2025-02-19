import React from "react";
import { Link } from "react-router-dom";
import "../css/styles.css"


import myAmboseli from "../img/adventure.jpeg";
import mySafari from "../img/wildlifee.jpeg";
import myKilimanjaro from "../img/wild.jpeg";
import myNational from "../img/wildlifeee.jpeg";
import myWild from "../img/willd.jpeg";
import myWatamu from "../img/wildlif.jpeg";

const packages = [
  { img: myAmboseli, title: "Amboseli Safaris", route: "/amboseli" },
  { img: mySafari, title: "Safari Highlights", route: "/safari-highlights" },
  { img: myKilimanjaro, title: "Kilimanjaro Safari", route: "/kilimanjaro" },
  { img: myNational, title: "Nairobi National Park", route: "/nairobi-park" },
  { img: myWild, title: "Wildebeest Migration", route: "/wildebeest-migration" },
  { img: myWatamu, title: "Malindi Watamu Tour", route: "/malindi-watamu" },
];

const Travelpackages = () => {
  return (
    <section className="travel-packages">
      <h1 className="title" style={{ marginBottom: "70px" }}>TRAVEL PACKAGES</h1>
      <div className="packages-container">
        {packages.map((pkg, index) => (
          <Link to={pkg.route} key={index} className="package-card">
            <img src={pkg.img} alt={pkg.title} className="package-image" />
            <h2 className="package-title">{pkg.title}</h2>
          </Link>
        ))}
          </div>
        
    </section>
  );
};

export default Travelpackages;