import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Orders from "./Orders";
import { LoadUser } from "../../../actions/auth";
import { Link } from "react-router-dom";
import { setCountry } from "../../../actions/appActions";
const Profile = ({ user, LoadUser, orders, setCountry }) => {
  useEffect(() => {

    window.scrollTo(0, 0);
    if (user != null && user.country != null) {
      setcountry(user.country);
    }
  }, [])
  const [country, setcountry] = useState({
    code: '',
    name: ''
  });
  const countryName = (code) => {
    switch (code) {
      case "FI":
        return "Finland";
      case "SE":
        return "Sweden";
      case "NO":
        return "Norway";
      case "DE":
        return "Germay";
      case "NL":
        return "Netherland";
      case "AT":
        return "Austria";
      case "CH":
        return "Switzerland";
      case "US":
        return "United States of America";
      case "UK":
        return "United Kingdom";
      case "DK":
        return "Denmark";

      default:
        return "";
    }
  };
  return (
    <div>
      <div
        class="cart-img d-flex justify-content-center 
 align-items-center font-Futura-bold"
      >
        {user && (
          <h1 class="letter-spacing-cart text-uppercase">{user.firstname}</h1>
        )}
      </div>
      <div class="container" id={"orderContainer"}>
        <div class="mt-3 col-md-12">
          <nav aria-label="breadcrumb ">
            <ol class="breadcrumb  mb-2 bg-transparent font-Futura-light p-0">
              <li class="breadcrumb-item">
                <a class="text-muted" href="/">
                  Home
                    </a>
              </li>
              <li class="breadcrumb-item">
                <a class="text-muted" href="/shop">
                  Shop
                    </a>
              </li>
              <li class="breadcrumb-item" aria-current="page">
                <a class="text-dark font-weight-bold" href="/user">
                  Profile
                    </a>
              </li>
            </ol>
          </nav>
          <div class="row">
            <div class=" mb-3 col-md-3">
              <div class={"shadow-shop p-3"}>

                <form class="col-md-12 font-Futura-bold letter-spacing-cart mb-2 ">
                  <div class="row-wrap">

                  <div>
                      <Link to={'/user'} style={{ color: 'black', fontSize:'1.5rem' }} className='mb-1 lead'>
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
                      <Link to={'/bonus'} style={{ color: 'black' }} className='mb-1'>
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
            
            <div class=" mb-3 col-lg-8">
              <div class={"shadow-shop p-3"}>
                <h4 class="text-uppercase font-Futura-bold mr-3 letter-spacing-cart mt-3 mb-3">
                  Personal Info
                </h4>
                <form class="col-md-12 font-Futura-bold letter-spacing-cart mb-2 ">
                  <div class="row-wrap">
                    <div class="row mb-3">
                      <div class="col-md-6 p-0">FIRSTNAME</div>
                      <div class="col-md-6 p-0">{user && user.firstname}</div>
                    </div>
                    <div class="row mb-3">
                      <div class="col-md-6 p-0">LASTNAME</div>
                      <div class="col-md-6 p-0">{user && user.lastname}</div>
                    </div>
                    <div class="row mb-3">
                      <div class="col-md-6 p-0">EMAIL</div>
                      <div class="col-md-6 p-0"><p>
                        {user && user.email}
                        {''}
                      </p></div>
                    </div>
                    <div class="row mb-3">
                      <div class="col-md-6 p-0">ADDRESS</div>
                      <div class="col-md-6 p-0"><p>
                        {user && user.address}
                      </p></div>
                    </div>
                    <div class="row mb-3">
                      <div class="col-md-6 p-0">COUNTRY</div>
        <div class="col-md-6 p-0">{user && user?.country?.name}</div>
                    </div>
                    <div class="row mb-3">
                      <div class="col-md-6 p-0">BODY TYPE</div>
                      <div class="col-md-6 p-0">{user && user.bodyType}</div>
                    </div>

                    <div class="row mb-3">
                      <div class="col-md-6 p-0">BALANCE</div>
                      <div class="col-md-6 p-0 ">
                        <span className="text-info mr-1">
                          {user && user.balance}
                        </span>
                        €
                      </div>
                    </div>
                    <div class="row mb-3">
                      <div class="col-md-6 p-0 ">POINTS</div>
                      <div class="col-md-6 p-0 text-info">
                        {user && user.points}
                      </div>
                    </div>
                    <div class="row mb-3">
                      <div class="col-md-6 p-0">MEMBER SINCE</div>
                      <div class="col-md-6 p-0">
                        {user && new Date(user.date).toDateString()}
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
  orders: state.app.orders,
});
export default connect(mapStateToProps, { LoadUser, setCountry })(Profile);
