import React from "react";
import "../../../styles/CtaStrip.css";

const CtaStrip = () => (
  <div className="cta-strip-container">
    <div className="cta-strip-content">
      <h3 className="cta-headline">Speak with a Certified Arborist Today!</h3>
      <div className="contact-info-group">
        <div className="contact-card primary">
          <span className="phone-number">301.401.5551</span>
          <span className="details">Mon-Fri 8:00am- 4:00pm EST</span>
        </div>
      </div>
    </div>
  </div>
);

export default CtaStrip;
