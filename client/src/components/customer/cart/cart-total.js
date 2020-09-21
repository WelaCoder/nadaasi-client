import React, { useState, useEffect } from "react";
import Visa from "../../../assets/images/Cart/banks/visa.svg";
import Aktia from "../../../assets/images/Cart/banks/aktia.svg";
import Danske from "../../../assets/images/Cart/banks/danske-bank.svg";
import MasterCard from "../../../assets/images/Cart/banks/mastercard.svg";
import Nordea from "../../../assets/images/Cart/banks/nordea.svg";
import Osuuspankki from "../../../assets/images/Cart/banks/osuuspankki.svg";
import Spankki from "../../../assets/images/Cart/banks/s-pankki.svg";
import Saastopankki from "../../../assets/images/Cart/banks/saastopankki.svg";
import Alandsbanken from "../../../assets/images/Cart/banks/alandsbanken.svg";
import Klarna from "../../../assets/images/Cart/banks/klarna_logo_black.png";
import { createSession } from "../../../actions/payment";
import axios from "axios";

import { connect } from "react-redux";
import { toast } from "react-toastify";
import { setCountry } from "../../../actions/appActions";
const CartTotal = ({
  cart,
  createSession,
  user,
  useBalance,
  shipping,
  appliedCoupon,
  usePoints,
  setCountry,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const total = () => {
    var total = 0;
    if (cart != null && cart.length != 0) {
      for (let index = 0; index < cart.length; index++) {
        const element = cart[index];
        total += Number(element.product.price) * Number(element.quantity);
      }
    }
    return total;
  };

  const [order, setOrder] = useState({
    country: {
      name: "Finland",
      code: "FI",
    },
    town: "",
    postalCode: "",
    email: "",
    message: "",
    address: "",
    shipping: "standard",
    tax: 0,
    vat: 24,
  });
  const [disabled, setDisabled] = useState(false);
  const onChange = (e) => {
    setOrder({
      ...order,
      [e.target.name]: e.target.value,
    });
  };
  const onClick = async (e) => {
    e.preventDefault();
    console.log(order);
    if (user) {
      if (user.country == null) {
        setCountry(order.country);
      }
      setIsLoading(true);
      await createSession({ ...order, useBalance, appliedCoupon, usePoints }, user);
      setIsLoading(false);
    } else {
      toast.info("You must be logged in to Proceed...")
    }
  };
  useEffect(() => {
    if (user != null && user.country != null) {
      setOrder({ ...order, country: user.country });
    }

  }, [user])

  const countryName = (code) => {
    switch (code) {
      case "FI":
        return "Finland";
      case "SE":
        return "Sweden";
      case "NO":
        return "Norway";
      case "DE":
        return "Germay";
      case "NL":
        return "Netherland";
      case "AT":
        return "Austria";
      case "CH":
        return "Switzerland";
      case "US":
        return "United States of America";
      case "UK":
        return "United Kingdom";
      case "DK":
        return "Denmark";

      default:
        return "";
    }
  };
  // const countryVat = (code) => {
  //   switch (code) {
  //     case "FI":
  //       return 24;
  //     case "SE":
  //       return 25;
  //     case "NO":
  //       return 25;
  //     case "DE":
  //       return 19;
  //     case "NL":
  //       return 21;
  //     case "AT":
  //       return 20;
  //     case "CH":
  //       return 7.7;
  //     case "US":
  //       return 0;
  //     case "UK":
  //       return 20;
  //     case "DK":
  //       return 25;
  //     default:
  //       return 0;
  //   }
  // };
  let balanceDiscount = 0;
  let shippingCost;
  if (shipping) {
    if (order.shipping == "standard") {
      shippingCost = shipping.standardCost;
    } else {
      shippingCost = shipping.fastCost;
    }
  }
  if (user && useBalance) {
    balanceDiscount = user.balance;
  }

  if (user && usePoints) {
    let units = 0;
    for (let index = 0; index < cart.length; index++) {
      const cartProduct = cart[index];
      units += cartProduct.quantity;
    }
    if ((units * 5) <= user.points) {
      balanceDiscount = total()

    } else {
      toast.error(`You don't have enough points`);

    }
  }
  if (user && appliedCoupon && appliedCoupon.isActive) {
    let units = 0;
    for (let index = 0; index < cart.length; index++) {
      const cartProduct = cart[index];
      units += cartProduct.quantity;
    }
    switch (appliedCoupon.discountType) {
      case 'di':

        balanceDiscount = units * appliedCoupon.discount;
        break;
      case 'pi':
        balanceDiscount = 0;
        for (let index = 0; index < cart.length; index++) {
          const cartProduct = cart[index];
          balanceDiscount += (cartProduct.details.price * appliedCoupon.discount / 100) * cartProduct.quantity
        }
        break;
      case 'fs':
        balanceDiscount = 0;
        shippingCost = 0;
        break;
      case 'dst':
      case 'dt':
        balanceDiscount = appliedCoupon.discount;
        break;
      default:
        balanceDiscount = 0;
        break;
    }
  }
  return (
    <form
      // onSubmit={handleSubmit(onSubmit)}
      className="col-md-12 font-Futura-bold letter-spacing-cart mb-2 "
      onSubmit={onClick}
    >
      <div className="row-wrap">
        <div className="row mb-3">
          <div className="col-md-6 p-0">SUBTOTAL</div>
          <div className="col-md-6 p-0">€ {total()}</div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6 p-0">SHIPPING</div>
          <div className="col-md-6 p-0">Free Shipping to Finland.</div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6 p-0">SHIPPING</div>
          <div className="col-md-6 p-0">
            <div className="form-group">
              <select
                name="shipping"
                className="form-control filter-input"
                // ref={register}
                onChange={(e) => {
                  console.log(e.target.value);
                  setOrder({
                    ...order,
                    shipping: e.target.value,
                  });
                }}
              >
                <option value="standard">Standard</option>
                <option value="fast">Fast</option>
              </select>
            </div>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6 p-0">ADDRESS*</div>
          <div className="col-md-6 p-0">
            <div className="form-group">
              {user == null || user.country == null ?
                <select
                  name="country"
                  className="form-control filter-input"
                  // ref={register}
                  onChange={(e) => {
                    console.log(e.target.value);
                    setOrder({
                      ...order,
                      country: {
                        name: countryName(e.target.value),
                        code: e.target.value,
                      },
                    });
                  }}
                >
                  <option value="FI">Finland</option>
                  <option value="SE">Sweden</option>
                  <option value="NO">Norway</option>
                  <option value="DE">Germany</option>
                  <option value="NL">NETHERLAND</option>
                  <option value="AT">AUSTRIA</option>
                  <option value="CH">Switzerland</option>
                  <option value="DK">Denmark</option>
                  <option value="UK">United Kingdom</option>
                  <option value="US">United States</option>
                </select> : user.country.name
              }

            </div>
            <div className="form-group">
              <input
                name="town"
                className="form-control filter-input"
                placeholder="Town / City"
                required
                onChange={onChange}
              // ref={register}
              />
            </div>
            <div className="form-group">
              <input
                name="postalCode"
                className="form-control filter-input"
                placeholder="Postal Code"
                required
                onChange={onChange}
              // ref={register}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                className="form-control filter-input"
                placeholder="Email Address"
                required
                onChange={onChange}
              // ref={register}
              />
            </div>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-md-6 p-0">Street Address</div>
          <div className="col-md-6 p-0"></div>
        </div>
      </div>

      <div className="row mb-2">
        <textarea
          name="address"
          rows="4"
          required
          onChange={onChange}
          // ref={register}
          className="w-100 shadow-shop mt-2"
        ></textarea>
      </div>
      <div className="row mb-2">
        <div className="col-md-6 p-0">MESSAGE</div>
        <div className="col-md-6 p-0">Optional</div>
      </div>
      <div className="row mb-2">
        <textarea
          name="message"
          rows="4"
          onChange={onChange}
          // ref={register}
          className="w-100 shadow-shop mt-2"
        ></textarea>
      </div>
      <div className="col-md-12 border-subtotal px-0 py-2 mb-3">
        <div className="row no-wrap">
          <div className="col-md-6 p-0">SUBTOTAL</div>
          <div className="col-md-6 d-flex justify-content-end p-0 ">
            € {total()}
          </div>
        </div>
        <div className="row no-wrap">
          <div className="col-md-6 mt-2  p-0">VAT</div>
          <div className="col-md-6 mt-2 d-flex justify-content-end p-0 ">
            24%
          </div>
        </div>
        <div className="row no-wrap">
          <div className="col-md-6 mt-2  p-0">SHIPPING</div>
          <div className="col-md-6 mt-2 d-flex justify-content-end p-0 ">
            €{shippingCost}
          </div>
        </div>

        <div className="row no-wrap">
          {
            // product?.coupon?.isActive
            (
              <>
                <div className="col-md-6 mt-2 p-0">Discount </div>
                <div className="col-md-6 mt-2 d-flex justify-content-end p-0 ">
                  - €
                  {balanceDiscount >= total()
                    ? total()
                    : // product?.coupon?.isActive
                    //   ? cartTotal - product.coupon.value
                    //   : cartTotal

                    balanceDiscount}
                  {
                    // product.coupon.value
                  }
                </div>
              </>
            )
          }
        </div>
      </div>
      <div className="row ">
        <div className="col-md-12 d-flex p-0 justify-content-end">
          €{" "}
          {balanceDiscount >= total()
            ? shippingCost
            : // product?.coupon?.isActive
            //   ? cartTotal - product.coupon.value
            //   : cartTotal

            total() - balanceDiscount + shippingCost}
        </div>
      </div>
      <div className="row mt-3 ">
        <button
          disabled={cart == null || cart.length == 0 || isLoading}
          type="submit"
          className={`btn text-uppercase btn-dark btn-block letter-spacing-none ${cart == null && "disabled"
            } ${cart && cart.length == 0 && "disabled"}`}
        >
          <span
            className={
              isLoading ? "mr-2 spinner-border spinner-border-sm" : ""
            }
            role="status"
            aria-hidden="true"
          ></span>
          {isLoading ? 'Proceeding to checkout' : 'Proceed to checkout'}
        </button>
        <small className="text-muted letter-spacing-none py-1">
          By clicking "Proceed to Checkout" i approve terms user terms and
          confirm i have read privacy notice i agree to the terms and
          conditions.
        </small>
        <h5 className="letter-spacing-none">Available Payment Methods.</h5>
        <small className="text-muted letter-spacing-none py-1">
          Pay later,monthy financing bank transfer and card.
        </small>
        <div className="justify-content-between py-1">
          <img className="p-1" src={Klarna} width="40px" alt="" />
          <img className="p-1" src={Visa} width="40px" alt="" />
          <img className="p-1" src={Aktia} width="40px" alt="" />
          <img className="p-1" src={Danske} width="40px" alt="" />
          <img className="p-1" src={MasterCard} width="40px" alt="" />
          <img className="p-1" src={Nordea} width="40px" alt="" />
          <img className="p-1" src={Osuuspankki} width="40px" alt="" />
          <img className="p-1" src={Spankki} width="40px" alt="" />
          <img className="p-1" src={Saastopankki} width="40px" alt="" />
          <img className="p-1" src={Alandsbanken} width="40px" alt="" />
        </div>
      </div>
    </form>
  );
};
const mapStateToProps = (state) => ({
  cart: state.app.cart,
  user: state.app.user,
  useBalance: state.app.useBalance,
  usePoints: state.app.usePoints,
  appliedCoupon: state.app.appliedCoupon,
  shipping: state.app.shipping,
});
export default connect(mapStateToProps, { createSession, setCountry })(CartTotal);
