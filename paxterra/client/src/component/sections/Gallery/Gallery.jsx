import React from "react";
import { galleryData } from "../../../data/galleryData ";
import "../../../styles/Gallery.css";

const Gallery = () => {
  return (
    <section className="gallery-section" id="gallery">
      <h2 className="section-headline centered-headline">Our Work in Action</h2>

      <div className="gallery-grid">
        {galleryData.map((image) => (
          <div key={image.id} className="gallery-item">
            <img src={image.path} alt={image.alt} className="gallery-image" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
