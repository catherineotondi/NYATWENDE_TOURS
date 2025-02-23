
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/styles.css" // Import external CSS
import logo from "../img/logo.png"; // Replace with your logo path
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for menu

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle menu function
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu when a link is clicked
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <Link to="/" className="logo">
          <img src={logo} alt="Nyatwende Logo" />
        </Link>

        {/* Desktop Menu */}
        {/* <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>

          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul> */}

        {/* Hamburger Menu for Mobile */}
        <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={isOpen ? "nav-links active" : "nav-links"}>
        <li>
          <Link to="/" onClick={closeMenu}>Home</Link>
        </li>
        <li>
          <Link to="/about" onClick={closeMenu}>About Us</Link>
        </li>
        <li>
          <Link to="/services" onClick={closeMenu}>Services</Link>
          </li>
          <li>
          <Link to="/tours" onClick={closeMenu}>Tours & Safaris</Link>
        </li>
        <li>
          <Link to="/contact" onClick={closeMenu}>Contact Us</Link>
        </li>
      </ul>
     
      </div>
    </nav>
  );
};

export default Navbar;