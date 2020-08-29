import React from "react";
import { connect } from "react-redux";
import Skeleton from "react-loading-skeleton";
const Activities = ({ user }) => {
  let activities = null;
  if (user != null) {
    activities = user.activities.reverse();
  }
  return (
    <div>
      {user == null ? (
        <>
          <div className={"mb-3"}>{<Skeleton height={100} count={1} />}</div>
          <div className={"mb-3"}>{<Skeleton height={100} count={1} />}</div>
          <div className={"mb-3"}>{<Skeleton height={100} count={1} />}</div>
        </>
      ) : user.activities.length == 0 ? (
        <>
          <div class="cart-item d-flex py-3">
            <div
              class="d-flex ml-3 flex-column justify-content-center w-100 shadow-shop p-3"
              //   onClick={() => history.push(`/order/${o._id}`)}
            >
              <div class="d-flex align-items-center flex-col-mb justify-content-between w-100 cart-details  font-Futura-light">
                <h5 class=""> You don't have any activities yet.</h5>
                <div class="d-flex align-items-center w-100-mb justify-content-between-mb">
                  <div class="d-none-mb d-flex align-items-center justify-content-center  ml-3 mb-3"></div>
                </div>
              </div>
              <div class="font-Futura-medium  ml-0-mb d-flex  justify-content-between">
                <h6 class="mb-0"></h6>
                {/* <img
                  class="d-mb  cursor-pointer"
                  width="17px"
                  src="/static/media/delete.650cdc57.svg"
                  alt="delete"
                /> */}
              </div>
            </div>
          </div>
        </>
      ) : (
        activities.map((a) => {
          return (
            <div class="cart-item d-flex py-3">
              <div
                class="d-flex ml-3 flex-column justify-content-center w-100 shadow-shop p-3"
                //   onClick={() => history.push(`/order/${o._id}`)}
              >
                <div class="d-flex align-items-center flex-col-mb justify-content-between w-100 cart-details  font-Futura-light">
                  <h5 class=""> {a.text}</h5>
                  <div class="d-flex align-items-center w-100-mb justify-content-between-mb">
                    <div class="d-none-mb d-flex align-items-center justify-content-center  ml-3 mb-3"></div>
                  </div>
                </div>
                <div class="font-Futura-medium  ml-0-mb d-flex  justify-content-between">
                  <h6 class="mb-0">{new Date(a.dated).toDateString()}</h6>
                  {/* <img
                  class="d-mb  cursor-pointer"
                  width="17px"
                  src="/static/media/delete.650cdc57.svg"
                  alt="delete"
                /> */}
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.app.user,
});
export default connect(mapStateToProps)(Activities);
