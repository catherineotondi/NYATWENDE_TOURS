// import React from 'react';
// import { Link } from 'react-router-dom';
// import "../css/styles.css"

// const Navbar = () => {
//   return (
//     <nav>
//       <div className='navbar'>
//         <ul>
          
         
          
        
//                   <li><Link to="/contact">Contact Us</Link></li>
//                   <li><Link to="/services">Services</Link></li>
//                   <li><Link to="/about">About Us</Link></li>
//                   <li><Link to="/">Home</Link></li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;





import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/styles.css" // Import external CSS
import logo from "../img/logo.png"; // Replace with your logo path

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <Link to="/" className="logo">
          <img src={logo} alt="Nyatwende Logo" />
        </Link>

        {/* Desktop Menu */}
        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>

          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        {/* Hamburger Menu for Mobile */}
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <div className={`bar ${isOpen ? "open" : ""}`}></div>
          <div className={`bar ${isOpen ? "open" : ""}`}></div>
          <div className={`bar ${isOpen ? "open" : ""}`}></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;