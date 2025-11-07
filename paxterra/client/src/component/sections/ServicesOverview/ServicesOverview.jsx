import React from "react";
import { servicesData } from "../../../data/servicesData";
import "../../../styles/ServicesOverview.css";

const ServicesOverview = () => {
  return (
    <section className="services-overview" id="services">
      <h2 className="section-headline centered-headline">
        Tree & Stump Services in Maryland
      </h2>

      <div className="service-area-list">
        <span>🌳</span>
        <span>Frederick County</span>
        <span>🌳</span>
        <span>Washington County</span>
        <span>🌳</span>
        <span>Montgomery County</span>
        <span>🌳</span>
        <span>Carroll County</span>
        <span>🌳</span>
        <span>Howard County</span>
      </div>

      {servicesData.map((service) => (
        <div
          key={service.id}
          className={`service-card ${service.isReversed ? "reversed" : ""}`}
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
      ))}
    </section>
  );
};

export default ServicesOverview;
