import React from "react";

import FacebookLogo from "../../../assets/images/home/icons/facebook.svg";
import InstagramLogo from "../../../assets/images/home/icons/instagram.svg";

const SectionSocial = () => (
  <div className="section">
    <div className="social">
      <div className="social-item-one" />
      <div className="social-item-two" />
      <div className="social-item-three">
        <p className="text-center">Follow us on</p>
        <div className="d-flex justify-content-center align-items-center">
          <a href={'#!'} onClick={() => { window.open("https://www.facebook.com/nadaasidresses/") }} >
            <img src={FacebookLogo} width="35" alt="facebook" className="mr-2" />
          </a>
          <a href={'#!'} onClick={() => { window.open("https://www.instagram.com/nadaasidresses/") }}>
            <img
              src={InstagramLogo}
              width="35"
              alt="instagram"
              className="ml-2"
            />
          </a>
        </div>
      </div>
      <div className="social-item-four" />
      <div className="social-item-five" />
      <div className="social-item-six" />
    </div>
  </div>
);

export default SectionSocial;
