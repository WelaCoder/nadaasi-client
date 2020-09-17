import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Skeleton from "react-loading-skeleton";
import { setCurrentOrder } from "../../../../actions/orders";
import { useParams, useLocation } from "react-router-dom";

import Star from "../../../../assets/images/home/icons/star.svg";
import ReviewProduct from "./ReviewProduct";
const Orders = ({ currentOrder, setCurrentOrder }) => {
  const params = useParams();

  useEffect(() => {
    console.log("object");
    setCurrentOrder(params.id);
  }, []);
  return (
    <>
      {currentOrder == null ? (
        <>
          <div className={"mb-3"}>{<Skeleton height={100} count={1} />}</div>
          <div className={"mb-3"}>{<Skeleton height={100} count={1} />}</div>
          <div className={"mb-3"}>{<Skeleton height={100} count={1} />}</div>
        </>
      ) : (
          currentOrder.products.map((o, index) => (
            <div class="cart-item d-flex py-3" key={o._id}>
              <div class="cart-item-img shadow-shop mt-2">
                <img
                  class="order-img"
                  src={`/uploads/${o.details.images[0]}`}
                  alt=""
                />
              </div>
              <div
                class="d-flex ml-3 flex-column justify-content-center w-100  p-3"
              // onClick={() => getOrder(o.orderId)}
              >
                <div class="d-flex align-items-center flex-col-mb justify-content-between w-100 cart-details  font-Futura-light">
                  <h5 class="">{o.details.name}</h5>
                  {currentOrder.rated[index] ||
                    currentOrder.status != "Recieved" ? (
                      <></>
                    ) : (
                      <ReviewProduct productId={o.details._id} />
                    )}
                </div>
                <div class="font-Futura-medium  ml-0-mb d-flex p-0  justify-content-between">
                  <h6 class=" mb-0">
                    <span class="mr-1">Size:</span>
                    <span>{o.size}</span>
                  </h6>
                </div>
                <div class="font-Futura-medium  ml-0-mb d-flex  justify-content-between">
                  <h6 class=" mb-0">
                    <span class="mr-1">Quantity:</span>
                    <span>{o.quantity}</span>
                  </h6>
                </div>
                <div class="font-Futura-medium  ml-0-mb d-flex  justify-content-between">
                  <h6 class=" mb-0">
                    <span class="mr-1">Price: </span>
                    <span>{o.details.price}</span>
                  </h6>
                </div>
              </div>
            </div>
          ))
        )}
    </>
  );
};

const mapStateToProps = (state) => ({
  currentOrder: state.app.currentOrder,
});
export default connect(mapStateToProps, { setCurrentOrder })(Orders);
