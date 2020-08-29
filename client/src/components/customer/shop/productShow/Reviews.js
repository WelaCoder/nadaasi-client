import React from "react";
import { ShopItemHeading } from "../../utils/heading";
import { Ratings } from "../../utils/details";
import { connect } from "react-redux";
const Reviews = ({ currentProduct }) => {
  return (
    <div>
      <div className="row">
        <div className="col-12">
          <h3 class="text-center font-Futura-bold py-3">Reviews</h3>
          <div className="row">
            {currentProduct != null &&
              currentProduct.reviews.map((r) => (
                <div className="col-md-12 col-lg-6">
                  <ReviewItem review={r} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ReviewItem = ({ review }) => {
  return (
    <div className={"shadow-shop p-2"}>
      <div className="row py-2 font-Futura-bold cart-h3">
        <div className="col-md-7">{review.text}</div>
        <div className="col-md-5">
          <Ratings rating={review.rating} />
        </div>
        <div className="col-md-5" style={{ fontSize: "0.8rem" }}>
          by {review.name}
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  currentProduct: state.app.currentProduct,
});
export default connect(mapStateToProps)(Reviews);
