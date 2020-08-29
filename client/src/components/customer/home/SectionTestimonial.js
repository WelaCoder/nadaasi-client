import React from "react";
import { connect } from "react-redux";
import TestimonyImage from "../../../assets/images/home/alex-shaw-9OAecPfYSTA-unsplash.jpg";
import { ShopCarousel } from "../utils/shop-carousel";
import { Ratings } from "../utils/details";
import { API } from "../../../constants/constants";

const SectionTestimonial = ({ testimonials }) => (
  <div className="section">
    <div className="section--testimonial">
      <ShopCarousel itemsOnDesktop={1} itemsonMobile={1}>
        {testimonials == null ? (
          <></>
        ) : (
          testimonials.map((t) => <TestimonialItem testimonail={t} />)
        )}
      </ShopCarousel>
    </div>
  </div>
);

export const TestimonialItem = ({ testimonail }) => {
  return (
    <>
      <div className="section__testimony">
        <div className="section__image-box">
          <img
            src={`${API}/uploads/${testimonail.image}`}
            alt="Testimonial"
            className="section__image"
          />
        </div>
        <div className="section__text-box">
          <div className="section__content">
            <p className="section__title d-flex justify-content-between">
              {testimonail.text}
              <Ratings rating={5} />
            </p>
            <p className="section__quote">{testimonail.detail}</p>
            <p className="section__name">by {testimonail.name}</p>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  testimonials: state.app.testimonials,
});
export default connect(mapStateToProps)(SectionTestimonial);
