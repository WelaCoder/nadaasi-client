import React, { useState } from "react";
import Order from "../../../assets/images/Cart/order.svg";
import axios from "axios";
import { applyCoupon } from "../../../actions/coupon";

// import { useDispatch } from "react-redux";

// import { applyCoupon } from '../../features/product/productSlice';
import { connect } from "react-redux";
const Coupon = ({ cart, applyCoupon, appliedCoupon, user }) => {
  const [coupon, setCoupon] = useState();

  const [loading, setloading] = useState(false);

  const [error, setError] = useState(false);

  // const dispatch = useDispatch();

  const onSubmit = async (e) => {
    e.preventDefault();
    setloading(true);
    await applyCoupon(coupon);
    setloading(false);
  };
  if (cart == null) return <></>;
  return (
    <>
      {error && (
        <div className="alert alert-warning py-1 text-capitalize font-Futura-light d-flex align-items-center">
          <span role="img" aria-label="error" className="mr-2">
            ⚠️
          </span>{" "}
          <span>{error.Message}.</span>
        </div>
      )}
      {appliedCoupon ? (
        <div className="alert alert-success py-1 text-capitalize font-Futura-light d-flex align-items-center">
          <span role="img" aria-label="tada" className="mr-2">
            🎉
          </span>{" "}
          <span>
            {appliedCoupon.id != null ? `Voucher has been applied with discount of ${appliedCoupon.discount}%.` : `${appliedCoupon.name || 'Voucher'} applied successfully...`}
          </span>
        </div>
      ) : (
          <form onSubmit={onSubmit} class="input-group mb-3 col p-0">
            <div class="input-group-prepend">
              <span class="input-group-text border-0 bg-white black-border">
                <img src={Order} alt="order" width="34px" />
              </span>
            </div>

            <input
              type="text"
              class="form-control coupon-input font-Futura-light letter-spacing-cart shadow-shop"
              placeholder="COUPON CODE"
              onChange={(e) => {
                setCoupon(e.target.value);
              }}
            />
            <div class="input-group-append">
              <button width="34px" className="btn btn-dark border-0"
                disabled={loading || user == null}
              >
                <span
                  className={
                    loading ? "mr-2 spinner-border spinner-border-sm" : ""
                  }
                  role="status"
                  aria-hidden="true"
                ></span>
                {loading ?

                  'Applying'
                  :
                  'APPLY'
                }

              </button>
            </div>
          </form>
        )}
    </>
  );
};
const mapStateToProps = (state) => ({
  cart: state.app.cart,
  user: state.app.user,
  appliedCoupon: state.app.appliedCoupon,
});
export default connect(mapStateToProps, { applyCoupon })(Coupon);
