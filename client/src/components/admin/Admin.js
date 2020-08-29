import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { ViewOrders } from "./views/viewOrders";
import { ViewCoupon } from "./views/viewCoupons";
import { AddCoupon } from "./views/addCoupon";
import { ViewProducts } from "./views/viewProduct";
import { UploadProduct } from "./views/uploadProduct";
import { Feedback } from "./views/feedback";
import { Users } from "./views/users";
import { Login } from "./views/login";
import Appbar from "./Navbar.js";
import { connect } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
const Admin = ({ toastMessage }) => {
  useEffect(() => {
    if (toastMessage != null) {
      if (toastMessage.type == "error") {
        toast.error(toastMessage.message);
      } else if (toastMessage.type == "success") {
        toast.success(toastMessage.message);
      } else if (toastMessage.type == "info") {
        toast.info(toastMessage.message);
      }
    }
  }, [toastMessage]);
  return (
    <>
      <ToastContainer />
      <div className="container-fluid p-0 overflow-hidden">
        <div className="d-flex">
          <div>
            <Appbar />
          </div>
          <div className="main">
            <Switch>
              <Route exact path="/admin" component={Login} />
              <Route exact path="/admin/users" component={Users} />
              <Route exact path="/admin/feedback" component={Feedback} />
              <Route
                exact
                path="/admin/upload-product"
                component={UploadProduct}
              />
              <Route exact path="/admin/products" component={ViewProducts} />
              <Route exact path="/admin/add-coupon" component={AddCoupon} />
              <Route exact path="/admin/coupons" component={ViewCoupon} />
              <Route exact path="/admin/orders" component={ViewOrders} />
              {/* <Route path="*" component={() => <Redirect to="/" />} /> */}
            </Switch>
          </div>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({
  toastMessage: state.app.toastMessage,
});
export default connect(mapStateToProps)(Admin);
