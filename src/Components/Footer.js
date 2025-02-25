// import React from "react";
// import "../css/styles.css" // Import external CSS

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <p>&copy; {new Date().getFullYear()} Nyatwende Travel & Tours. All rights reserved.</p>
//     </footer>
//   );
// };

// export default Footer;


import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa"; // Import social icons
import "../css/styles.css"; // Import external CSS

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Nyatwende Travel & Tours. All Rights Reserved.</p>
        <div className="social-icons">
          <a href="https://www.facebook.com/profile.php?id=61572586970183" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="icon" />
          </a>
          <a href="https://www.instagram.com/nyatwende_africatours?igsh=MXBlbTN5bWZscWExeg%3D%3D" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="icon" />
          </a>
          <a href="https://x.com/i/flow/login?redirect_after_login=%2FRugi_Njaamunge" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="icon" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;