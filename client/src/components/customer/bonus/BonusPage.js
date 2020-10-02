import React, { useRef, useEffect } from "react";
import { connect } from "react-redux";
import Vouchers from "./Vouchers";
import Activities from "./Activities";
import { Link } from "react-router-dom";

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

              {/* <Orders /> */}
            </div>
            <div className=" mb-3 col-lg-4 col-md-5">
            </div>
          </div>
          <div className="row">
            <div className=" mb-3 col-lg-4 col-md-5">
              <div class={"shadow-shop p-3"}>

                <form class="col-md-12 font-Futura-bold letter-spacing-cart mb-2 ">
                  <div class="row-wrap">

                  <div>
                      <Link to={'/user'} style={{ color: 'black' }} className='mb-1 lead'>
                        Personal Info
                    </Link>
                    </div>
                    
                    <div className='lead mb-1'>
                      Bonus
                      
                    </div>
                    <div>
                      <Link to={'/invite'} style={{ color: 'black' }} className='mb-1'>
       <span className='ml-1 pl-1' >- Invite & Earn</span>
                    </Link>
                    </div>
                    <div>
                      <Link to={'/acquire'} style={{ color: 'black' }} className='mb-1'>
       <span className='ml-1 pl-1' >   - Acquire & Earn</span>
                    </Link>
                    </div>
                    <div>
                      <Link to={'/bonus'} style={{ color: 'black', fontSize:'1.5rem' }} className='mb-1'>
       <span className='ml-1 pl-1' >- Vouchers & Activities</span>
                    </Link>
                    </div>
                    <div>
                      <Link to={'/orders'} style={{ color: 'black' }} className='mb-1 lead'>
                        Orders
                    </Link>
                    </div>
                    <div>
                      <Link to={'/merchantreturn'} style={{ color: 'black' }} className='mb-1 lead'>
                        Merchandise Returns
                    </Link>
                    </div>
                    

                    <div class="row mb-3 ">




                    </div>

                  </div>
                </form>
              </div>
            
            </div>
            <div className="col p-0-mb">


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
