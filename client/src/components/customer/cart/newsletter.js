import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Toggle from "react-toggle";
import { connect } from "react-redux";
import { setUseBalance } from "../../../actions/orders";
import { setUsePoints } from "../../../actions/appActions";
const NewsLetter = ({ setUseBalance, useBalance, usePoints, setUsePoints }) => {
  return (
    <div class="d-flex row cart-details  font-Futura-light">

      <div className="d-flex justify-content-end align-items-center col-6">
        <span className="mr-2">Use Points</span>
        <Toggle
          id="123"
          // defaultChecked={true}
          checked={usePoints}
          onChange={(e) => {
            setUsePoints(e.target.checked);
          }}
        />
      </div>
      <div className="d-flex justify-content-end align-items-center col-6">
        <span className="mr-2">Use Balance</span>
        <Toggle
          id="123"
          // defaultChecked={true}
          checked={useBalance}
          onChange={(e) => {
            setUseBalance(e.target.checked);
          }}
        />
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  useBalance: state.app.useBalance,
  usePoints: state.app.usePoints,
});
export default connect(mapStateToProps, { setUseBalance, setUsePoints })(NewsLetter);
