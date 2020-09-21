import React, { useRef, useEffect } from "react";
import { connect } from "react-redux";
import Vouchers from "./Vouchers";
import Activities from "./Activities";

const BonusPage = ({ user }) => {
  const ref = useRef(null);
  useEffect(() => {
    ref.current.scrollIntoView();
  }, []);
  return (
    <div>
      <div
        ref={ref}
        className="cart-img d-flex justify-content-center 
 align-items-center font-Futura-bold"
      >
        {<h1 className="letter-spacing-cart text-uppercase">Vouchers & Activites</h1>}
      </div>
      <div className="container" id={"orderContainer"}>
        <div className="mt-3 col-md-12">
          <div className="row">
            <div className="col p-0-mb">
              <nav aria-label="breadcrumb ">
                <ol className="breadcrumb  mb-2 bg-transparent font-Futura-light p-0">
                  <li className="breadcrumb-item">
                    <a className="text-muted" href="/">
                      Home
                    </a>
                  </li>

                  <li className="breadcrumb-item" aria-current="page">
                    <a className="text-dark font-weight-bold" href="/bonus">
                      Vouchers & Activites
                    </a>
                  </li>
                </ol>
              </nav>

              <div className="d-flex justify-content-between">
                <h4 className="text-uppercase font-Futura-bold mr-3 letter-spacing-cart ">
                  {'Vouchers'}
                </h4>
                <h4 className=" font-Futura-bold mr-3 letter-spacing-cart ">
                  Points:
                  {' '}
                  {user != null && user.points}
                </h4>
              </div>
              <Vouchers />
              <h4 className="text-uppercase font-Futura-bold mr-3 letter-spacing-cart ">
                Activites
              </h4>
              <Activities />
              {/* <Orders /> */}
            </div>
            <div className=" mb-3 col-lg-4 col-md-5">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  user: state.app.user,
});
export default connect(mapStateToProps)(BonusPage);
