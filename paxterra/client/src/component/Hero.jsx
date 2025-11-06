import React from "react";
import { Link } from "react-router-dom";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <section className="hero-with-form-section">
      <div className="hero-background-visual">
        {/* <img src="/logo-bg.png" alt="PaxTerra logo" /> */}
      </div>

      <div className="hero-content-wrapper">
        <div className="hero-text-content">
          <h1 className="main-hero-headline">
            Expert Tree Solutions for a Healthier Landscape
          </h1>
          <p>
            PaxTerra provides professional, safety-focused tree removal,
            trimming, and risk assessment services. Trust the experts.
          </p>
          <div className="services-bullet-points">
            <ul>
              <li>Stump grinding & removal</li>
              <li>Tree cutting & removal</li>
              <li>Tree planting & pruning</li>
            </ul>
            <ul>
              <li>Tree cabling & bracing</li>
              <li>Tree inspections</li>
              <li>Emergency tree services</li>
            </ul>
          </div>
        </div>

        <div className="quote-form-container">
          <h3 className="form-headline">Request a Quote Today</h3>
          <form className="quote-form">
            <div className="form-row">
              <input type="text" placeholder="Name" required />
              <input type="tel" placeholder="Phone" required />
            </div>
            <div className="form-row">
              <input type="email" placeholder="Email" required />
              <input type="text" placeholder="Zip" required />
            </div>
            <textarea placeholder="Message" rows="5"></textarea>
            <button type="submit" className="send-message-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;
