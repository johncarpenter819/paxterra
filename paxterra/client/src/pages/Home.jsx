import React from "react";
import Hero from "../component/Hero";
import CtaStrip from "../component/sections/CtaStrip/CtaStrip";
import AboutMe from "../component/sections/AboutMe/AboutMe";
import ServicesOverview from "../component/sections/ServicesOverview/ServicesOverview";
import Gallery from "../component/sections/Gallery/Gallery";
import Testimonials from "../component/sections/Testimonials/Testimonials";
import Footer from "../component/layout/Footer/Footer";
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
        <Gallery />
        <CtaStrip />
        <Testimonials />
        <CtaStrip />
        <Footer />
      </section>
    </>
  );
};

export default Home;
