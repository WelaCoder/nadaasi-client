import React from "react";
import { Price, Ratings } from "../../utils/details";
import FilterColors from "../../utils/filterColors";
import Quantity from "./quantity";
import Measurements from "./measurements";
// import { useCart } from "react-use-cart";
// import { useSelector } from "react-redux";
// import { selectProduct } from '../../features/product/productSlice';
import Skeleton from "react-loading-skeleton";
import { connect } from "react-redux";
import { addToCart, deleteItemFromCart } from "../../../../actions/appActions";
import { toast } from "react-toastify";
import { addtoStorage, deleteItemfromLocalCart } from "../../../../actions/cartActions";
const SingleItemDetails = ({
  currentProduct,
  addToCart,
  choosenProduct,
  cart,
  deleteItemFromCart,
  isAuthenticated,
  addtoStorage,
  deleteItemfromLocalCart
}) => {
  if (currentProduct == null)
    return (
      <div className="h-100 d-flex flex-column justify-content-between">
        <Skeleton count={1} height="600px" />
      </div>
    );
  const inCart = () => {
    if (currentProduct != null) {
      for (let index = 0; index < cart?.length; index++) {
        const element = cart[index];
        if (element.product._id == currentProduct._id) {
          return true;
        }
      }
      return false;
    }
    return false;
  };
  const id = () => {
    if (currentProduct != null) {
      for (let index = 0; index < cart?.length; index++) {
        const element = cart[index];
        if (element.product._id == currentProduct._id) {
          return element;
        }
      }
      return false;
    }
    return false;
  };
  return (
    <div className="d-flex flex-column justify-content-center  h-100">
      {inCart() ? (
        <>
          <h4 className="font-Futura-bold mb-0">{currentProduct.name}</h4>
          <div className="d-flex justify-content-between align-items-center py-2">
            <Price
              currency="€"
              price={
                // price
                currentProduct.price
              }
              discount={currentProduct.discount}
              discountType={currentProduct.discountType}
            />
            <Ratings
              rating={
                // rating
                currentProduct.rating
              }
            />

          </div>

          <button
            onClick={() => {
              if (isAuthenticated) {

                deleteItemFromCart(id()._id);
              } else {
                deleteItemfromLocalCart(id()._id)
              }
              // removeItem(_id);
            }}
            className="btn btn-dark mb-5"
          >
            Remove From Cart
          </button>
        </>
      ) : (
          <>
            <h4 className="font-Futura-bold mb-0">{currentProduct.name}</h4>
            <div className="d-flex justify-content-between align-items-center py-2">
              <Price
                currency="€"
                price={
                  currentProduct.price
                }
                sale={currentProduct.sale}
                originalPrice={currentProduct.originalPrice}
                discount={currentProduct.discount}
                discountType={currentProduct.discountType}
              />
              <Ratings
                rating={
                  // rating
                  currentProduct.rating
                }
              />
            </div>

            <Measurements />
            <Quantity />
            <FilterColors />
            <div className=" mt-5">
              <button
                onClick={() => {
                  if (isAuthenticated) {
                    addToCart(choosenProduct);
                  } else {
                    addtoStorage(choosenProduct, currentProduct);
                  }
                }}
                className="btn btn-dark btn-block"
              >
                {
                  // inCart(_id) ? "Already In Cart" :
                  "ADD TO CART"
                }
              </button>
            </div>
          </>
        )}
    </div>
  );
};
const mapStateToProps = (state) => ({
  currentProduct: state.app.currentProduct,
  cart: state.app.cart,
  isAuthenticated: state.app.isAuthenticated,
  choosenProduct: state.app.choosenProduct,
});
export default connect(mapStateToProps, { addToCart, deleteItemFromCart, addtoStorage, deleteItemfromLocalCart })(
  SingleItemDetails
);
