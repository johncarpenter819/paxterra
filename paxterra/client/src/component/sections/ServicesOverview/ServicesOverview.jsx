import React, { useEffect } from "react";
import { servicesData } from "../../../data/servicesData";
import "../../../styles/ServicesOverview.css";
import { initScrollReveal } from "../../../../scroll-reveal";

const ServicesOverview = () => {
  useEffect(() => {
    setTimeout(() => initScrollReveal(), 200);
  }, []);

  return (
    <section className="services-overview" id="services">
      <h2
        className="section-headline centered-headline reveal-item"
        data-animation="slide-up"
      >
        Tree & Stump Services in Maryland
      </h2>

      <div className="service-area-list">
        <span>🌳 Frederick County</span>
        <span>🌳 Washington County</span>
        <span>🌳 Montgomery County</span>
        <span>🌳 Carroll County</span>
        <span>🌳 Howard County</span>
      </div>

      {servicesData.map((service, index) => {
        const animationType =
          index % 2 === 0 ? "slide-in-left" : "slide-in-right";

        return (
          <div
            key={service.id}
            className={`service-card ${
              service.isReversed ? "reversed" : ""
            } reveal-item`}
            data-animation={animationType}
          >
            <div
              className="service-image"
              style={{ backgroundImage: `url(${service.imagePath})` }}
            ></div>
            <div className="service-content">
              <div className="service-icon-wrapper">
                <span className="service-icon">{service.icon}</span>
              </div>

              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default ServicesOverview;
