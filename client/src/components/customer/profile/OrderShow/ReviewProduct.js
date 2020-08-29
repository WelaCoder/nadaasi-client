import { Modal } from "react-bootstrap";
import React, { useState } from "react";
import { rateProduct } from "../../../../actions/orders";
import { connect } from "react-redux";
const ReviewProduct = ({ rateProduct, currentOrder, productId }) => {
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [review, setReview] = useState({
    name: "",
    text: "",
    detail: "",
    rating: 5,
  });
  const onChange = (e) => {
    setReview({
      ...review,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(review);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowModal(false);
    }, 2000);
    await rateProduct(currentOrder._id, productId, review);
  };
  return (
    <div>
      <div class="d-flex align-items-center w-100-mb justify-content-between-mb">
        <div
          id={"findStyleBtn"}
          class="shadow-shop cursor-pointer mt-3 mb-0 p-2 text-center text-uppercase  font-Futura-bold "
          onClick={() => setShowModal(true)}
        >
          <div>Rate Product</div>
        </div>

        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <div style={{ backgroundColor: "white" }}>
            <div class="modal-header">
              <div class="modal-title h4">Rate Product</div>
              <button
                type="button"
                class="close"
                onClick={() => setShowModal(false)}
              >
                <span aria-hidden="true">×</span>
                <span class="sr-only">Close</span>
              </button>
            </div>
            <div class="modal-body">
              <form class="" onSubmit={onSubmit}>
                <div class="col-sm-12">
                  <div class="d-flex align-items-center justify-content-center row">
                    <div class="col-md-3">Review</div>
                    <div class="col-md-9">
                      <div class="mt-2 mb-0 form-group">
                        <input
                          name="text"
                          value={review.text}
                          required
                          onChange={onChange}
                          placeholder="Review"
                          type="text"
                          class="form-control"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="d-flex align-items-center justify-content-center row">
                    <div class="col-md-3">Rating</div>
                    <div class="col-md-9">
                      <div class="mt-2 mb-0 form-group">
                        <input
                          name="rating"
                          value={review.rating}
                          min={1}
                          required
                          onChange={onChange}
                          placeholder="Enter Hip Size"
                          type="number"
                          max={5}
                          class="form-control"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row mb-2">
                    <div class="col-md-3 ">Detail</div>
                    <div class="col-md-9 ">
                      <textarea
                        name="detail"
                        rows="4"
                        placeholder={
                          "What are your thoughts about our product?"
                        }
                        required
                        onChange={onChange}
                        class="w-100 shadow-shop mt-2"
                      ></textarea>
                    </div>
                  </div>
                  <div class="row mb-2 px-2"></div>
                  <div class="row">
                    <button type="submit" class="mt-3 btn btn-dark btn-block">
                      <span
                        className={
                          isLoading
                            ? "mr-2 spinner-border spinner-border-sm"
                            : ""
                        }
                        role="status"
                        aria-hidden="true"
                      ></span>
                      {isLoading ? "Submitting Review" : "Submit Review"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  currentOrder: state.app.currentOrder,
});
export default connect(mapStateToProps, { rateProduct })(ReviewProduct);
