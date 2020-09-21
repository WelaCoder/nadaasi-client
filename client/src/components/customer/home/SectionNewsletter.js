import React from "react";
import { useHistory } from 'react-router-dom';
const SectionNewsletter = () => {

  let history = useHistory();
  return (
    <div className="section">
      <div className="section--newsletter">
        <div className="section__text-box">
          <h4 className="section__text--big mb-0 pb-0">Invite & Earn</h4>
          <div className="my-2 d-flex justify-content-center align-items-center">

            <button type="button" className=" invite-button" onClick={() => { history.push('/invite') }}>
              Invite
          </button>
          </div>
          <h3 className="section__text">Help your friends to raise their fashion style</h3>
        </div>
      </div>
    </div>
  )
};

export default SectionNewsletter;
