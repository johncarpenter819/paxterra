import React, { useEffect } from "react";
import "../../../styles/AboutMe.css";
import { initScrollReveal } from "../../../../scroll-reveal";

const AboutMe = () => {
  const familyPhoto1 = "/familyPhoto1.webp";
  const familyPhoto2 = "/familyPhoto2.webp";
  const familyPhoto3 = "/familyPhoto3.webp";
  const familyPhoto4 = "/familyPhoto4.webp";

  useEffect(() => {
    setTimeout(() => initScrollReveal(), 200);
  }, []);

  return (
    <div className="about-me-content reveal-item" data-animation="fade-in">
      <h2 className="section-headline reveal-item" data-animation="slide-up">
        Why Choose PaxTerra?
      </h2>

      <div className="about-me-grid">
        <div
          className="about-me-left-column reveal-item"
          data-animation="slide-in-left"
        >
          <div className="about-me-intro-split">
            <div
              className="about-me-text reveal-item"
              data-animation="slide-up"
            >
              <p>
                After a couple years of working for another tree company and
                numerous side jobs on the weekends, we decided it was time to
                take a leap of faith and start our very own! Jesse has over
                seven years of tree work experience and his wife Maggie has
                helped with numerous side jobs over the past six! Our family
                consists of Jesse, Maggie, our son Paxton (hence the name
                PAX-Terra) and our dog Cleo! We are a close knit family who
                feels we can accomplish anything as long as we are together.
                Spending time outdoors is something all of us have a deep
                passion for whether that's fishing, going on walks or going to a
                new playground. We are ecstatic this career allows us to do that
                every single day.
              </p>
              <p>
                Proudly serving Myersville, Maryland and the surrounding areas.
                We are a family owned Tree and Landscaping company dedicated to
                reasonably priced, quality services. We understand how important
                it is to maintain and care for our trees, that's why we strive
                to be our very best and ensure our tree professionals are
                knowledgeable while practicing the upmost of safety when
                completing jobs.
              </p>
            </div>

            <div
              className="family-photo-grid reveal-item"
              data-animation="slide-in-right"
            >
              <img
                src={familyPhoto1}
                alt="Jesse, Maggie, Paxton"
                className="family-photo"
              />
              <img
                src={familyPhoto2}
                alt="Paxton Outdoors"
                className="family-photo"
              />
              <img src={familyPhoto3} alt="Cleo" className="family-photo" />
              <img
                src={familyPhoto4}
                alt="Jesse working"
                className="family-photo"
              />
            </div>
          </div>
        </div>

        <div className="usp-grid reveal-item" data-animation="slide-up">
          <div className="usp-item">
            <span className="usp-icon">👷</span>
            <h4>Certified Arborists</h4>
          </div>
          <div className="usp-item">
            <span className="usp-icon">🛡️</span>
            <h4>Fully Licensed & Insured</h4>
          </div>
          <div className="usp-item">
            <span className="usp-icon">⏰</span>
            <h4>24/7 Emergency Service</h4>
          </div>
          <div className="usp-item">
            <span className="usp-icon">🏠</span>
            <h4>Locally Owned & Operated</h4>
          </div>
          <div className="usp-item">
            <span className="usp-icon">💰</span>
            <h4>Competitive Pricing</h4>
          </div>
          <div className="usp-item">
            <span className="usp-icon">⭐</span>
            <h4>Exceptional Customer Service</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
