import React from "react";
import { connect } from "react-redux";
import { updateCount } from "../../../actions/appActions";
import { updateLocalCartCount } from "../../../actions/cartActions";
const CartQuantity = ({ quantity, id, updateCount, user, updateLocalCartCount }) => {
  // const { updateItemQuantity } = useCart();
  console.log(quantity);
  return (
    <div className="form-group">
      <input
        defaultValue={quantity}
        min={1}
        onChange={async (e) => {
          const value =
            e.target.value === Number(0) ? 1 : Number(e.target.value);
          if (user == null) {
            updateLocalCartCount(id, value);
          } else {

            await updateCount(id, value);
          }
          // updateItemQuantity(id, value);
        }}
        type="number"
        className="form-control input-cart border-0 shadow-shop"
      />
    </div>
  );
};
const mapStateToProps = (state) => ({
  cart: state.app.cart,
  user: state.app.user,

});
export default connect(mapStateToProps, { updateCount, updateLocalCartCount })(CartQuantity);
