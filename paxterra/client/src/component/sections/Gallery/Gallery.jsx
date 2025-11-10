import React, { useState } from "react";
import { galleryData } from "../../../data/galleryData ";
import "../../../styles/Gallery.css";

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!galleryData || galleryData.length === 0) {
    return (
      <section className="gallery-section" id="gallery">
        <h2 className="section-headline centered-headline">
          Our Work in Action
        </h2>
      </section>
    );
  }

  const dataLength = galleryData.length;

  const nextSlide = () => {
    setCurrentIndex(currentIndex === dataLength - 1 ? 0 : currentIndex + 1);
  };

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? dataLength - 1 : currentIndex - 1);
  };

  return (
    <section className="gallery-section" id="gallery">
      <h2 className="section-headline centered-headline">Our Work in Action</h2>

      <div className="carousel-container">
        <button
          className="prev-button"
          onClick={prevSlide}
          aria-label="Previous Slide"
        >
          &lt;
        </button>

        <div className="carousel-slide">
          <img
            src={galleryData[currentIndex].path}
            alt={galleryData[currentIndex].alt}
            className="carousel-image"
          />
        </div>

        <button
          className="next-button"
          onClick={nextSlide}
          aria-label="Next Slide"
        >
          &gt;
        </button>

        <div className="dots-container">
          {galleryData.map((_, index) => (
            <span
              key={index}
              className={index === currentIndex ? "dot-active" : "dot"}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
