import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { API } from "../../../../constants/constants";

export const SingleItemImage = ({ image }) => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener('resize', () => {
      setWidth(window.innerWidth);
    });
  }, [])

  return (
    <div className={`thumbnail-single ${width < 768 ? 'col-4 p-0' : ''}  mb-1 mr-1`}>
      <img className="img-full-shop shadow-shop" src={`${API}/uploads/${image}`} alt={image} />
    </div>
  );
};
