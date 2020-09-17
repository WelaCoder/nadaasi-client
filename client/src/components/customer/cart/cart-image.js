import React from "react";
import { API } from '../../../constants/constants'
export const CartImage = ({ image }) => {
  return (
    <div className="cart-item-img shadow-shop">
      <img className="img-full" src={`${API}/uploads/${image}`} alt="" />
    </div>
  );
};
