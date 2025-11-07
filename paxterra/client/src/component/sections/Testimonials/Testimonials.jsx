import React from "react";
import "../../../styles/Testimonials.css";

const reviewsData = [
  {
    id: 1,
    rating: 5,
    text: "Jesse came out and provided a free estimate and was extremely reasonably priced. He took down three trees threatening to fall on our home. Would highly recommend.",
    author: "Gina K.",
    source: "Yelp",
  },
  {
    id: 2,
    rating: 5,
    text: "I had posted on Facebook about a partial tree that came down during a storm. Jesse replied right away and said he could be there within the hour. As it was a holiday weekend I figured this would not be cleared until later in the week. Jesse came the next day at 8am and had it all cleared by 930. His chainsaw was even quiet. No one woke up. This is a new business however Jesse has experience. I highly recommend him. Polite professional and reasonable prices.",
    author: "Beth G.",
    source: "Yelp",
  },
  {
    id: 3,
    rating: 5,
    text: "Prompt and timely estimate and service. Jesse trimmed multiple tree around the outside of our home and removed the debris for a very reasonable price. Will definitely contact him again for future needs!",
    author: "Shannon W.",
    source: "Yelp",
  },
];

const Testimonials = () => {
  const yelpUrl =
    "https://www.yelp.com/biz/pax-terra-myersville?adjust_creative=-kscCX6kKc10Dv_LWKDeaw&hrid=3wY8W27IYY3V_fqsGRQObQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=-kscCX6kKc10Dv_LWKDeaw";

  const renderStars = (rating) => {
    return "⭐".repeat(rating);
  };

  return (
    <section className="testimonials-section" id="testimonials">
      <h2 className="section-headline centered-headline">
        Hear From Our Customers
      </h2>

      <div className="review-grid">
        {reviewsData.map((review) => (
          <div key={review.id} className="review-card">
            <div
              className="review-rating"
              aria-label={`Rating: ${review.rating} out of 5 stars`}
            >
              {renderStars(review.rating)}
            </div>
            <p className="review-text">"{review.text}"</p>
            <p className="review-author">
              - {review.author},{" "}
              <span className="review-source">{review.source}</span>
            </p>
          </div>
        ))}
      </div>

      <div className="testimonials-cta">
        <a
          href={yelpUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button"
        >
          Read All Our Yelp Reviews
        </a>
      </div>
    </section>
  );
};

export default Testimonials;
