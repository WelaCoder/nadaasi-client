import React, { useEffect } from "react";
import HomePage from "./home/homepage";
import ContactPage from "./contact/ContactPage";
import AboutPage from "./about/AboutPage";
import CartPage from "./cart/CartPage";
import ShopPage from "./shop/ShopPage";
import MyNavbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";
import Login from "./Login/Login";
import SignUp from "./signup/SignUp";
import { connect } from "react-redux";
import ProductShow from "./shop/productShow/ProductShow";
import { ToastContainer, toast } from "react-toastify";
import { loadCart, loadDressTypes } from "../../actions/appActions";
import { LoadUser } from "../../actions/auth";
import { loadOrders } from "../../actions/orders";
import { getTestimonials } from "../../actions/testimonials";
import setAuthToken from "../../utils/setAuthToken";
import CustomerRoute from "../../utils/CustomerRoute";
import Profile from "./profile/Profile";
import OrderShow from "./profile/OrderShow/OrderShow";
import BonusPage from "./bonus/BonusPage";
import RefundPolicy from "./pages/RefundPolicy";
import SecurePayment from "./pages/SecurePayment";
import Policy from "./pages/Policy";
import MerchartsReturn from "./merchantsreturn/MerchantsReturn";
import SizeChart from "./pages/SizeChart";
import Acquire from "./earn/Acquire";
import Invite from "./earn/inviteer";
import Verify from "./verify/Verify";
import UserRoute from "../../utils/UserRoute";
import OrdersPage from "./profile/OrdersPage";
const Customer = ({
  toastMessage,
  loadCart,
  auth,
  LoadUser,
  loadOrders,
  getTestimonials,
  orders,
  loadDressTypes,
}) => {
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
  useEffect(() => {
    if (localStorage.token && !auth.isAdmin) {
      setAuthToken(localStorage.token);
    }
    loadDressTypes();
    getTestimonials();
    LoadUser();
  }, []);

  useEffect(() => {
    if (orders) {
      // LoadUser();
    }
  }, [orders]);
  return (
    <div>
      <ToastContainer />
      <MyNavbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/deleteEmail/:email" component={HomePage} />
        <Route exact path="/contact" component={ContactPage} />
        <Route exact path="/about" component={AboutPage} />

        <Route exact path="/cart" component={CartPage} />
        <Route exact path="/shop" component={ShopPage} />
        <CustomerRoute exact path="/user" component={Profile} />
        <CustomerRoute exact path="/orders" component={OrdersPage} />
        <CustomerRoute exact path="/bonus" component={BonusPage} />
        <Route exact path="/invite" component={Invite} />
        <Route exact path="/acquire" component={Acquire} />
        <CustomerRoute exact path="/order/:id" component={OrderShow} />
        <Route exact path="/user/sign-in" component={Login} />
        <Route exact path="/user/sign-up" component={SignUp} />
        <Route exact path="/user/sign-up/:id" component={SignUp} />
        <UserRoute exact path="/verify" component={Verify} />
        <Route exact path="/shop-item/:id" component={ProductShow} />
        <Route exact path="/refundpolicy" component={RefundPolicy} />
        <Route exact path="/securepayment" component={SecurePayment} />
        <Route exact path="/sizechart" component={SizeChart} />
        <CustomerRoute
          exact
          path="/merchantreturn"
          component={MerchartsReturn}
        />
        <Route exact path="/policy" component={Policy} />
        <Route path="*" component={() => <Redirect to="/" />} />
      </Switch>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => ({
  toastMessage: state.app.toastMessage,
  auth: state.app,
  testimonials: state.app.testimonials,
  orders: state.app.orders,
});
export default connect(mapStateToProps, {
  loadCart,
  LoadUser,
  loadOrders,
  getTestimonials,
  loadDressTypes,
})(Customer);
