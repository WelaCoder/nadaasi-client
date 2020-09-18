import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { toast } from "react-toastify";
// import { toastConfig } from "../../../config/toastConfig";
import { connect } from "react-redux";
import { returnMerchant } from '../../../actions/return';
// import { set } from "mongoose";

const MerchartsReturnForm = ({ returnMerchant }) => {
  // const { register, handleSubmit, reset } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [formdata, setformdata] = useState({
    name: '',
    orderId: '',
    email: '',
    problem: '',
    phone: '',
  })
  const { name, orderId, email, problem, phone } = formdata;

  const onChange = e => {
    setformdata({
      ...formdata,
      [e.target.name]: e.target.value
    })
  }
  const onSubmit = e => {
    e.preventDefault();

    setIsLoading(true)
    returnMerchant({ name, orderId, email, problem, phone })
    setTimeout(() => {
      setIsLoading(false)
    }, 700);
  };

  return (
    <form
      // onSubmit={handleSubmit(onSubmit)}
      onSubmit={onSubmit}
      className="font-Futura-light h-100 form-ipad"
    >
      <div className="form-group">
        <input
          type="text"
          className="form-control shadow-contact border-0 input-contact  "
          placeholder="Name *"
          required
          name="name"
          value={name}
          onChange={onChange}
        // ref={register}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control shadow-contact border-0 input-contact  "
          placeholder="Order_Id *"
          required
          name="orderId"
          value={orderId}
          onChange={onChange}
        // ref={register}
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          className="form-control shadow-contact border-0 input-contact  "
          placeholder="Email *"
          required
          name="email"
          value={email}
          onChange={onChange}
        // ref={register}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control shadow-contact border-0 input-contact  "
          placeholder="Phone"
          name="phone"
          value={phone}
          onChange={onChange}
        // ref={register}
        />
      </div>
      <div className="form-group">
        <textarea
          className="form-control shadow-contact border-0 input-contact"
          placeholder="Problem *"
          rows="4"
          required
          name="problem"
          value={problem}
          onChange={onChange}
        // ref={register}
        ></textarea>
      </div>

      <button
        type="submit"
        className="btn border-0 shadow-contact border-0 btn-outline-dark btn-block font-weight-bold"
      // disabled={isLoading}
      >
        <span
          className={isLoading ? "mr-2 spinner-border spinner-border-sm" : ""}
          role="status"
          aria-hidden="true"
        ></span>
        {isLoading ? "SENDING..." : "SEND"}
      </button>
    </form>
  );
};

export default connect(null, { returnMerchant })(MerchartsReturnForm);