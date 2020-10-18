import React from "react";
import { Link } from "react-router-dom";

import FooterLogo from "../../../assets/images/nadaasi/Nadaasi-white.png";
import TelephoneLogo from "../../../assets/images/footer/telephone-white.svg";
import EnvelopeLogo from "../../../assets/images/footer/envelope-white.svg";
import VisaLogo from "../../../assets/images/footer/visa-pay-logo-white.svg";
import MasterCard from "../../../assets/images/footer/mastercard-white.svg";

const Footer = () => (
  <div className="footer" >
    <div className="footer-company">
      <p className='mb-3 '>
        <a href="/" className="footer-logo ">
          <img className='img-margin' src={FooterLogo} width="200px" alt="logo" />
        </a>
      </p>
      <p style={{color : '#afadad'}}>
        <img style={{ color : '#afadad'} }src={TelephoneLogo} width="25px" alt="Phone" />
        0469375029
      </p>
      <p style={{color : '#afadad'}}>
        <a className="mailto" href="mailto:info@nadaasi.com">
          <img style={{color : '#afadad'}} src={EnvelopeLogo} width="25px" alt="Mail" />
          info@nadaasi.com
        </a>
      </p>
      <p style={{color : '#afadad'}}>
        Pay Later: <img src={VisaLogo} width="30px" alt="visa" />
        <img src={MasterCard} width="30px" alt="Master" />
      </p>
    </div>
    <div className="footer-info ">
      <h2 className='p-margin footer-top' >Information</h2>
      <p className="footer-text">
        <Link to="/securepayment">Secure Payment</Link>
      </p>
      <p className="footer-text">
        <Link to="/sizechart">Size Chart</Link>
      </p>
      <p className="footer-text">
        <Link to="/policy">Privacy Policy</Link>
      </p>
      <p className="footer-text">
        <Link to="/refundpolicy">Refund Policy</Link>
      </p>
    </div>
    <div className="footer-personal w-100">
      <h2 className='p-margin footer-top' >Your Account</h2>

      <p className='footer-text'>
        <Link to="/user" className="card-link">
          Personal info
        </Link>
      </p>
      <p className='footer-text'>
        <Link to="/merchantreturn" className="card-link">
          Merchandise Returns
        </Link>
      </p>
      <p className='footer-text'>
        <Link to="/orders" className="card-link">
          Orders
        </Link>
      </p>
      {/* <p>
        <Link to="/user" className="card-link">
          Credit slips
        </Link>
      </p>
      <p>
        <Link to="/user" className="card-link">
          Addresses
        </Link>
      </p> */}
    </div>
    <div className="footer-personal w-100">
      <h2 className='p-margin footer-top'  >Bonus</h2>

      <p className='footer-text'>
        <Link to="/invite" className="card-link">
          Invite & Earn
        </Link>
      </p>
      <p className='footer-text'>
        <Link to="/acquire" className="card-link">
          Acquire & Earn
        </Link>
      </p>
      {/* <p>
        <Link to="/bonus" className="card-link">
          Vouchers & Activities
        </Link>
      </p> */}
    </div>
  </div>
);

export default Footer;
