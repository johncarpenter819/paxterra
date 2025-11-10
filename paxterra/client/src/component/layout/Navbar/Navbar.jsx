import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "../../../styles/Navbar.css";

const PaxTerraLogo = "/logo-bg.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar-container">
      <nav className="navbar-content">
        <div className="navbar-logo">
          <Link to="/#top" onClick={handleLinkClick}>
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
        </ul>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? "x" : "☰"}
        </button>
      </nav>

      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        <ul className="mobile-menu-links">
          <li>
            <Link to="/#about" onClick={handleLinkClick}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/#services" onClick={handleLinkClick}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/#gallery" onClick={handleLinkClick}>
              Gallery
            </Link>
          </li>
          <li>
            <Link to="/#testimonials" onClick={handleLinkClick}>
              Testimonials
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
