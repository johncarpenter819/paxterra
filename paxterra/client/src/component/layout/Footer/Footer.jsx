import React from "react";
import "../../../styles/Footer.css";

const Footer = () => {
  const PaxTerraLogo = "/logo-bg.png";

  return (
    <footer className="main-footer">
      <div className="footer-content-grid">
        <div className="footer-col footer-col-info">
          <img src={PaxTerraLogo} alt="PaxTerra Logo" className="footer-logo" />
          <p>Licensed and Insured</p>
          <p>Locally owned and operated</p>
          <p className="footer-cert">MD LICENSED TREE EXPERT - # 002655</p>
          <p className="footer-cert">ISA CERTIFIED ARBORIST # MA-6635A</p>

          <div className="footer-socials">
            <a
              href="https://www.facebook.com/profile.php?id=100093019982899"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <img src="/facebook.svg" alt="Facebook" className="social-icon" />
            </a>
            <a
              href="https://www.instagram.com/paxterra.tree/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <img
                src="/instagram.svg"
                alt="Instagram"
                className="social-icon"
              />
            </a>
          </div>
        </div>

        <div className="footer-col footer-col-contact">
          <p className="contact-heading">Phone:</p>
          <a href="tel:301-401-5551" className="contact-info">
            301-401-5551
          </a>

          <p className="contact-heading address-heading">Address</p>
          <address className="contact-info">
            Myersville, MD
            <br />
            21773
          </address>
        </div>

        <div className="footer-col footer-col-form">
          <div className="quote-form-wrapper">
            <h3 className="form-title">Request a Quote Today</h3>
            <form className="footer-quote-form">
              <div className="form-row">
                <input type="text" placeholder="Name" required />
                <input type="tel" placeholder="Phone" required />
              </div>
              <div className="form-row">
                <input type="email" placeholder="Email" required />
                <input type="text" placeholder="Zip" />
              </div>
              <textarea placeholder="Message"></textarea>
              <button type="submit" className="form-submit-button">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        &copy; {new Date().getFullYear()} PaxTerra. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
