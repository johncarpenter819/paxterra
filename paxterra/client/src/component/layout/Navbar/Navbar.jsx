import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import "../../../styles/Navbar.css";

const PaxTerraLogo = "/logo-bg.png";

const Navbar = () => {
  return (
    <header className="navbar-container">
      <nav className="navbar-content">
        <div className="navbar-logo">
          <Link to="/#top">
            <img src={PaxTerraLogo} alt="PaxTerra Tree Solutions Logo" />
          </Link>
        </div>

        <ul className="navbar-links">
          <li>
            <Link to="/#about">About Us</Link>
          </li>
          <li>
            <Link to="/#services">Services</Link>
          </li>
          <li>
            <Link to="/#gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/#testimonials">Testimonials</Link>
          </li>
          {/* <li>
            <Link to="/#quote" className="contact-button">
              Get Quote
            </Link>
          </li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
