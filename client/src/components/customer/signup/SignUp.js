import React, { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link, Redirect } from "react-router-dom";
import { toast } from "react-toastify";
import { toastConfig } from "../../../config/toastConfig";
import { connect } from "react-redux";

import { signUp } from "../../../actions/auth";

const SignUp = ({ signUp, auth: { isAuthenticated } }) => {
  const [formdata, setformdata] = useState({
    firstname: "",
    lastname: "",
    inviteCode: "",
    email: "",
    password: "",
    country: {
      name: "Finland",
      code: "FI"
    },

  });
  const params = useParams();
  const [isloading, setisloading] = useState(false);
  const { firstname, lastname, inviteCode, email, password, country } = formdata;
  const onChange = (e) => {
    setformdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    setformdata({
      ...formdata,
      inviteCode: params.id,
    })
  }, [params])
  if (isAuthenticated) {
    toast.success("Successfully Registered", toastConfig);
    return <Redirect to="/verify" />;
  }
  const onSubmit = (e) => {
    e.preventDefault();
    const re = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$");
    const isOk = re.test(password);

    console.log(isOk);

    if (!isOk) {
      return toast.error('Please enter a secure password');
    }


    setisloading(true);
    signUp({ firstname, lastname, inviteCode, email, password, country });
    setTimeout(() => {
      setisloading(false);
    }, 700);
  };
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
    <Fragment>
      <div className="d-flex justify-content-center align-items-center font-Futura-light custom-height-sign-up container">
        <div className="mx-auto col-md-6">
          <form className="" onSubmit={onSubmit}>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    name="firstname"
                    placeholder="Enter Firstname"
                    required=""
                    value={firstname}
                    onChange={onChange}
                    type="text"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    name="lastname"
                    placeholder="Enter Lastname"
                    required
                    value={lastname}
                    onChange={onChange}
                    type="text"
                    className="form-control"
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <input
                name="inviteCode"
                placeholder="Invite Code"
                value={inviteCode}
                onChange={onChange}
                type="text"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <input
                name="email"
                placeholder="Enter Email Address"
                required
                value={email}
                onChange={onChange}
                type="email"
                className="form-control"
              />

            </div>
            <div className="form-group">
              <select
                name="country"
                className="form-control filter-input"
                // ref={register}
                value={
                  formdata.country.code
                }
                required
                onChange={(e) => {
                  setformdata(
                    {
                      ...formdata,
                      country: {
                        name: countryName(e.target.value),
                        code: e.target.value,
                      }
                    },
                  );

                }}
              >
                <option value="FI">Finland</option>
                <option value="SE">Sweden</option>
                <option value="NO">Norway</option>
                <option value="DE">Germany</option>
                <option value="NL">NETHERLAND</option>
                <option value="AT">AUSTRIA</option>
                <option value="CH">Switzerland</option>
                <option value="DK">Denmark</option>
                <option value="UK">United Kingdom</option>
                <option value="US">United States</option>

              </select>
            </div>
            <div className="form-group">
              <input
                name="password"
                placeholder="Enter Password"
                required
                value={password}
                onChange={onChange}
                type="password"
                className="form-control"
              />
            </div>

            <small id="emailHelp" class="form-text text-muted">Please include minimum eight characters, at least one uppercase, atleast one lowercase letter and one number.</small>
            <button type="submit" className="btn btn-block btn-dark my-2">
              <span
                className={
                  isloading ? "mr-2 spinner-border spinner-border-sm" : ""
                }
                role="status"
                aria-hidden="true"
              ></span>
              {isloading ? "Signing Up..." : "Sign Up"}
            </button>
            <div className="text-center w-100 font-Futura-medium">
              Already A Member?
              <Link to="/user/sign-in">Signin Here</Link>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};
const mapStateToProps = (state) => ({
  auth: state.app,
});
export default connect(mapStateToProps, { signUp })(SignUp);
