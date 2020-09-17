import React from "react";
import Like from "../../../../assets/images/home/icons/heart.svg";
import { ItemDetails, Price, Ratings } from "../../utils/details";
import { Link } from "react-router-dom";
import { setCurrentProduct } from "../../../../actions/appActions";
import { connect } from "react-redux";
import { API } from "../../../../constants/constants";
const SingleCarouselItem = ({ item, setCurrentProduct }) => {
  const { images, name, rating, price, _id } = item;
  return (
    <Link
      to={`/shop-item/${_id}`}
      id={"relevantProduct"}
      onClick={() => setCurrentProduct(_id)}
    >
      <div className="w-100-mb px-1">
        <div className=" shadow-shop">
          <img className="img-full" src={`${API}/uploads/${images[0]}`} alt="" />
        </div>
        <div className="product-info py-2">
          <ItemDetails>
            <h6 className="font-weight-bold mb-0">{name}.</h6>
            <img src={Like} width="17px" alt="like" />
          </ItemDetails>
          <ItemDetails>
            <Price currency="€" price={price} />
            <Ratings rating={rating} />
          </ItemDetails>
        </div>
      </div>
    </Link>
  );
};

export default connect(null, { setCurrentProduct })(SingleCarouselItem);
