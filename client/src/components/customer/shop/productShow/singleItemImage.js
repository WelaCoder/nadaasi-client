import React from "react";
import { API } from "../../../../constants/constants";

export const SingleItemImage = ({ image }) => {
  return (
    <div className="thumbnail-single shadow-shop mb-1 mr-1">
      <img className="img-full-shop" src={`${API}/uploads/${image}`} alt={image} />
    </div>
  );
};
