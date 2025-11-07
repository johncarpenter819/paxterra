import React from "react";
import Hero from "../component/Hero";
import CtaStrip from "../component/sections/CtaStrip/CtaStrip";
import AboutMe from "../component/sections/AboutMe/AboutMe";
import ServicesOverview from "../component/sections/ServicesOverview/ServicesOverview";
import "../styles/Home.css";

const Home = () => {
  return (
    <>
      <Hero />
      <CtaStrip />

      <section id="about" className="contentSection">
        <AboutMe />
        <CtaStrip />
        <ServicesOverview />
        <CtaStrip />
      </section>
    </>
  );
};

export default Home;
