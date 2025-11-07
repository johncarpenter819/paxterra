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

        <div className="navbar-certifications">
          <span>MD LICENSED TREE EXPERT - # 002655</span>
          <span>ISA CERTIFIED ARBORIST - # MA-6635A</span>
          <img src="/ISA-cert.webp" alt="cert" />
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
