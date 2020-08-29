import React from "react";
import { connect } from "react-redux";
import Skeleton from "react-loading-skeleton";
const Activities = ({ user }) => {
  return (
    <div>
      <div className="row">
        {user == null ? (
          <>
            <div className={"mb-3 col-6"}>
              {<Skeleton height={100} count={1} />}
            </div>
            <div className={"mb-3 col-6"}>
              {<Skeleton height={100} count={1} />}
            </div>
          </>
        ) : user.vouchers.length == 0 ? (
          <>
            <div className="col-6">
              <div class="cart-item d-flex py-3">
                <div
                  class="d-flex ml-3 flex-column justify-content-center w-100 shadow-shop p-3"
                  //   onClick={() => history.push(`/order/${o._id}`)}
                >
                  <div class="d-flex align-items-center flex-col-mb justify-content-between w-100 cart-details  font-Futura-light">
                    <h5 class="">You don't have any vouchers yet.</h5>
                    <div class="d-flex align-items-center w-100-mb justify-content-between-mb">
                      <div class=" d-flex align-items-center justify-content-center  ml-3 mb-3"></div>
                    </div>
                  </div>
                  <div class="font-Futura-medium  ml-0-mb d-flex  justify-content-between"></div>
                </div>
              </div>
            </div>
          </>
        ) : (
          user.vouchers.map((v) => (
            <div className="col-6">
              <div class="cart-item d-flex py-3">
                <div
                  class="d-flex ml-3 flex-column justify-content-center w-100 shadow-shop p-3"
                  //   onClick={() => history.push(`/order/${o._id}`)}
                >
                  <div class="d-flex align-items-center flex-col-mb justify-content-between w-100 cart-details  font-Futura-light">
                    <h5 class="">
                      {v.discount ? <>{v.discount}% discount voucher</> : <></>}
                    </h5>
                    <div class="d-flex align-items-center w-100-mb justify-content-between-mb">
                      <div class=" d-flex align-items-center justify-content-center  ml-3 mb-3">
                        <span
                          className={`ml-auto badge badge-${
                            !v.isActive ? "info" : "success"
                          }`}
                        >
                          {!v.isActive ? "Used" : "New"}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="font-Futura-medium  ml-0-mb d-flex  justify-content-between">
                    <h6 class="mb-0">
                      <span class="mr-1">CODE:</span>
                      <span>{v.code}</span>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.app.user,
});
export default connect(mapStateToProps)(Activities);
