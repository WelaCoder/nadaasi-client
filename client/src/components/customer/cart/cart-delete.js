import React from "react";
import Delete from "../../../assets/images/Cart/delete.svg";
// import { useCart } from "react-use-cart";
import { connect } from "react-redux";
import { deleteItemFromCart } from "../../../actions/appActions";
import { deleteItemfromLocalCart } from "../../../actions/cartActions";
const CartDelete = ({ showMobile, id, deleteItemFromCart, isAuthenticated, deleteItemfromLocalCart }) => {
  // const { removeItem } = useCart();
  const show = showMobile ? "d-mb " : "";
  return (
    <img
      className={`${show} cursor-pointer`}
      width="17px"
      onClick={async () => {
        if (isAuthenticated) {

          await deleteItemFromCart(id)
          deleteItemfromLocalCart(id);
        } else {
          deleteItemfromLocalCart(id);
        }
      }}
      src={Delete}
      alt="delete"
    />
  );
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.app.isAuthenticated,
});
export default connect(mapStateToProps, { deleteItemFromCart, deleteItemfromLocalCart })(CartDelete);
