import React, { useRef } from "react";
import "../../../styles/Footer.css";
import emailjs from "emailjs-com";

const Footer = () => {
  const PaxTerraLogo = "/logo-bg.png";
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wlrusje",
        "template_1f6kyx9",
        form.current,
        "o1EEg6T_Dv3zghnDG"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfuly, we will reach out shortly!");
          e.target.reset();
        },
        (error) => {
          console.error(error.text);
          alert("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <footer className="main-footer">
      <div
        className="footer-content-grid reveal-item"
        data-animation="slide-up"
      >
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
            <form ref={form} onSubmit={sendEmail} className="footer-quote-form">
              <div className="form-row">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Name"
                  required
                />
                <input
                  type="tel"
                  name="user_phone"
                  placeholder="Phone"
                  required
                />
              </div>
              <div className="form-row">
                <input
                  type="email"
                  name="user_email"
                  placeholder="Email"
                  required
                />
                <input type="text" name="user_zip" placeholder="Zip" />
              </div>
              <textarea name="message" placeholder="Message"></textarea>
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
