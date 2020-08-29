import axios from "axios";
import { toast } from "react-toastify";

import {
  AUTH_CUSTOMER_SUCCESS,
  LOAD_USER,
  AUTH_CUSTOMER_FAILURE,
  AUTH_CUSTOMER_LOGOUT,
} from "./types";
import setAuthToken from "../utils/setAuthToken";
import { loadOrders } from "./orders";
import { loadCart, loadShipping } from "./appActions";
// LoadUser
export const LoadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    let res = await axios.get("/api/user");
    dispatch({
      type: LOAD_USER,
      payload: res.data,
    });
    dispatch(loadOrders());
    dispatch(loadCart());
    dispatch(loadShipping());
  } catch (error) {
    console.log(error.response.data.msg);
    // toast.error(error.response.data.msg, { autoClose: "1500" });
    dispatch({
      type: AUTH_CUSTOMER_FAILURE,
      payload: error.response.data.msg,
    });
  }
};
// sign UP
export const signUp = ({
  firstname,
  lastname,
  inviteCode,
  email,
  password,
}) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({
      firstname,
      lastname,
      inviteCode,
      email,
      password,
    });
    const res = await axios.post("/api/user/signup", body, config);
    dispatch({
      type: AUTH_CUSTOMER_SUCCESS,
      payload: res.data,
    });
    dispatch(LoadUser());
  } catch (error) {
    dispatch({
      type: AUTH_CUSTOMER_FAILURE,
      payload: error.response.data.msg,
    });
  }
};
// Login
export const login = ({ email, password }) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({ email, password });
    const res = await axios.post("/api/user/login", body, config);

    dispatch({
      type: AUTH_CUSTOMER_SUCCESS,
      payload: res.data,
    });
    dispatch(LoadUser());
  } catch (error) {
    toast.error(error.response.data.msg, { autoClose: "1500" });
    dispatch({
      type: AUTH_CUSTOMER_FAILURE,
      payload: error.response.data.msg,
    });
  }
};
//Sign out
export const LogOut = () => async (dispatch) => {
  dispatch({
    type: AUTH_CUSTOMER_LOGOUT,
  });
};
