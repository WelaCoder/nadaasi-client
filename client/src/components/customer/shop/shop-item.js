import React from "react";
import { API } from "../../../constants/constants";
import Like from "../../../assets/images/home/icons/heart.svg";
import { Ratings, ItemDetails, Price } from "../utils/details";
import { useHistory } from "react-router-dom";
import FadeIn from "react-fade-in";
import { clearcurrentProduct } from "../../../actions/appActions";
import { connect } from "react-redux";
const ShopItem = ({ product, clearcurrentProduct }) => {
  const {
    name,
    rating,
    price,
    images,
    _id,
    originalPrice,
    sale,
    discountType,
    discount,
  } = product;
  const history = useHistory();
  return (
    <FadeIn>
      <div className="mb-3 w-100-mb   p-0">
        <div
          onClick={() => {
            clearcurrentProduct();
            history.push(`/shop-item/${_id}`);
          }}
          className="thumbnail cursor-pointer shadow-shop"
        >
          <img
            className="img-full-shop"
            src={`${API}/uploads/${images[0]}`}
            alt="image not found"
          />
        </div>
        <div className="product-info py-2">
          <ItemDetails>
            <h6 className="font-weight-bold mb-0">{name}</h6>
            {/* <img src={Like} width="17px" alt="like" /> */}
          </ItemDetails>
          <ItemDetails>
            <Price
              currency="€"
              price={price}
              sale={sale}
              originalPrice={originalPrice}
              discount={discount}
              discountType={discountType}
            />
            <Ratings rating={rating} />
          </ItemDetails>
        </div>
      </div>
    </FadeIn>
  );
};

export default connect(null, { clearcurrentProduct })(ShopItem);
