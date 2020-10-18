import React, { useState } from "react";
import Order from "../../../assets/images/Cart/order.svg";
import axios from "axios";
import { applyCoupon } from "../../../actions/coupon";

// import { useDispatch } from "react-redux";

// import { applyCoupon } from '../../features/product/productSlice';
import { connect } from "react-redux";
import { toast } from "react-toastify";
const Coupon = ({ cart, applyCoupon, appliedCoupon, user , appliedCouponIsUsed }) => {
  const [coupon, setCoupon] = useState();

  const [loading, setloading] = useState(false);

  const [error, setError] = useState(false);
  const [display , setDisplay] = useState(false)
  // const dispatch = useDispatch();

  const onSubmit = async (e) => {
    e.preventDefault();
    setloading(true);
    if (user) {
      console.log(appliedCouponIsUsed)
      await applyCoupon(coupon );
    } else {
      toast.error("You must be logged in to apply coupon...");
    }
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
      { appliedCoupon ? (<span>{ appliedCoupon.isActive === true ? (<span>{ appliedCouponIsUsed === true ? (<span>{<span>
        <span>
          <span style={{display: 'none'}}> </span>
        <form onSubmit={ onSubmit } class="input-group mb-3 col p-0">
          <div class="input-group-prepend">
            <span class="input-group-text border-0 bg-white black-border">
              <img src={Order} alt="order" width="34px" />
            </span>
          </div>
          <input
            type="text"
            disabled={cart.length > 0 ? false : true}    
            class="form-control coupon-input font-Futura-light letter-spacing-cart shadow-shop"
            placeholder="COUPON CODE"
              onChange={ (e) => {
              setCoupon(e.target.value);
            }}
          />
          <div class="input-group-append">
            <button
              width="34px"
              disabled={cart.length > 0 ? false : true} 
              className="btn btn-dark border-0"
              disabled={loading}
            >
              <span
                className={
                  loading ? "mr-2 spinner-border spinner-border-sm" : ""
                }
                role="status"
                aria-hidden="true"
              ></span>
              {loading ? "Applying" : "APPLY"}
            </button>
          </div>
        </form> </span>)
      </span>
      }</span>) : ((<span> <div className="alert alert-success py-1 text-capitalize font-Futura-light d-flex align-items-center">
          <span role="img" aria-label="tada" className="mr-2">
            🎉
          </span>{" "}
          <span>
            {appliedCoupon.id != null
              ? `Voucher has been applied with discount of ${appliedCoupon.discount}%.`
              : `${appliedCoupon.name || "Voucher"} applied successfully...`}
          </span>
      </div></span>)) }</span>) : (
          <span>
          <span style={{display: 'none'}}> </span>
        <form onSubmit={ onSubmit } class="input-group mb-3 col p-0">
          <div class="input-group-prepend">
            <span class="input-group-text border-0 bg-white black-border">
              <img src={Order} alt="order" width="34px" />
            </span>
          </div>
          <input
            type="text"
            disabled={cart.length > 0 ? false : true}    
            class="form-control coupon-input font-Futura-light letter-spacing-cart shadow-shop"
            placeholder="COUPON CODE"
              onChange={ (e) => {
              setCoupon(e.target.value);
            }}
          />
          <div class="input-group-append">
            <button
              width="34px"
              disabled={cart.length > 0 ? false : true} 
              className="btn btn-dark border-0"
              disabled={loading}
            >
              <span
                className={
                  loading ? "mr-2 spinner-border spinner-border-sm" : ""
                }
                role="status"
                aria-hidden="true"
              ></span>
              {loading ? "Applying" : "APPLY"}
            </button>
          </div>
        </form> </span>) }</span>
       
      ) : (
        <form onSubmit={onSubmit} class="input-group mb-3 col p-0">
          <div class="input-group-prepend">
            <span class="input-group-text border-0 bg-white black-border">
              <img src={Order} alt="order" width="34px" />
            </span>
          </div>

          <input
              type="text"
            disabled={cart.length > 0 ? false : true}    
              
            class="form-control coupon-input font-Futura-light letter-spacing-cart shadow-shop"
            placeholder="COUPON CODE"
              onChange={ (e) => {
              setCoupon(e.target.value);
            }}
          />
          <div class="input-group-append">
            <button
              width="34px"
              className="btn btn-dark border-0"
                disabled={ loading }
            disabled={cart.length > 0 ? false : true}    
                
            >
              <span
                className={
                  loading ? "mr-2 spinner-border spinner-border-sm" : ""
                }
                role="status"
                aria-hidden="true"
              ></span>
              {loading ? "Applying" : "APPLY"}
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
  appliedCouponIsUsed :  state.app.appliedCouponIsUsed,
});
export default connect(mapStateToProps, { applyCoupon })(Coupon);
