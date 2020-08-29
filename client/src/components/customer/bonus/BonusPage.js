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
        {<h1 className="letter-spacing-cart text-uppercase">Bonus</h1>}
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
                  <li className="breadcrumb-item">
                    <a className="text-muted" href="/shop">
                      Shop
                    </a>
                  </li>
                  <li className="breadcrumb-item" aria-current="page">
                    <a className="text-dark font-weight-bold" href="/bonus">
                      BonusPage
                    </a>
                  </li>
                </ol>
              </nav>
              <h4 className="text-uppercase font-Futura-bold mr-3 letter-spacing-cart ">
                Vouchers
              </h4>
              <Vouchers />
              <h4 className="text-uppercase font-Futura-bold mr-3 letter-spacing-cart ">
                Activites
              </h4>
              <Activities />
              {/* <Orders /> */}
            </div>
            <div className=" mb-3 col-lg-4 col-md-5">
              <div className={"shadow-shop p-3 mb-3"}>
                <h4 className="text-uppercase font-Futura-bold mr-3 letter-spacing-cart mt-3 mb-3">
                  Invite & Earn
                </h4>
                <form className="col-md-12 font-Futura-bold letter-spacing-cart mb-2 ">
                  <div className="row-wrap">
                    <div className="row mb-3">
                      <div className="col-md-6 p-0">INVITE CODE</div>
                      <div className="col-md-6 p-0">
                        {user != null && user.inviteCode}
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-md-12 p-0">INVITE & EARN STEPS</div>
                    </div>
                    <div className="row mb-3">
                      <div
                        className="col-md-12 p-0"
                        style={{ fontSize: "0.8em" }}
                      >
                        1. When you recommend Nadaasi to your friend. They get a
                        20% discount voucher.
                      </div>
                    </div>

                    <div className="row mb-3">
                      <div
                        className="col-md-12 p-0"
                        style={{ fontSize: "0.8em" }}
                      >
                        2. And when they purchase you get 20€
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className={"shadow-shop p-3 mb-3"}>
                <h4 className="text-uppercase font-Futura-bold mr-3 letter-spacing-cart mt-3 mb-3">
                  Acquire & Earn
                </h4>
                <form className="col-md-12 font-Futura-bold letter-spacing-cart mb-2 ">
                  <div className="row-wrap">
                    <div className="row mb-3">
                      <div
                        className="col-md-12 p-0"
                        style={{ fontSize: "0.8em" }}
                      >
                        1. When you purchase a dress. You earn 1 bonus point.
                      </div>
                    </div>

                    <div className="row mb-3">
                      <div
                        className="col-md-12 p-0"
                        style={{ fontSize: "0.8em" }}
                      >
                        2. And when you earn 3 bonus points. You get a 100€
                        voucher.
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div
                        className="col-md-12 p-0"
                        style={{ fontSize: "0.8em" }}
                      >
                        3. And when you earn 5 bonus points, then you get to
                        choose a dress for Free.
                      </div>
                    </div>
                  </div>
                </form>
              </div>
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
