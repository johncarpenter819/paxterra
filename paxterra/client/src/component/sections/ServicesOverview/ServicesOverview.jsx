import React from "react";
import { servicesData } from "../../../data/servicesData";
import "../../../styles/ServicesOverview.css";

const ServicesOverview = () => {
  return (
    <section className="services-overview">
      <h2 className="section-headline">Tree & Stump Services in Maryland</h2>

      <ul>
        <li>Frederick County</li>
        <li>Washington County</li>
        <li>Montgomery County</li>
        <li>Carroll County</li>
        <li>Howard County</li>
      </ul>

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
