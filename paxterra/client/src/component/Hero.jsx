import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/Hero.css";
import emailjs from "emailjs-com";

const Hero = () => {
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
    <section className="hero-with-form-section">
      <div className="hero-background-visual"></div>

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
              <li>Woodworking</li>
              <li>Tree inspections</li>
              <li>Emergency tree services</li>
            </ul>
          </div>
        </div>

        <div className="quote-form-container">
          <h3 className="form-headline">Request a Quote Today</h3>
          <form ref={form} onSubmit={sendEmail} className="quote-form">
            <div className="form-row">
              <input type="text" name="user_name" placeholder="Name" required />
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
              <input type="text" name="user_zip" placeholder="Zip" required />
            </div>
            <textarea name="message" placeholder="Message" rows="5"></textarea>
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
