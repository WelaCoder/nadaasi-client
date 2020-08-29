import {
  LOAD_ORDERS,
  GET_ORDER,
  SET_CURRENT_ORDER,
  RATE_PRODUCT,
  LOAD_USER,
  USE_BALANCE,
} from "./types";
import axios from "axios";
import { toast } from "react-toastify";
import setAuthToken from "../utils/setAuthToken";
export const loadOrders = () => async (dispatch) => {
  try {
    let res = await axios.get(`/api/order/`);
    dispatch({
      type: LOAD_ORDERS,
      payload: res.data.orders,
    });
    res = await axios.get("/api/user");
    dispatch({
      type: LOAD_USER,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const setCurrentOrder = (orderId) => async (dispatch) => {
  try {
    console.log("getting order");
    console.log(orderId);
    setAuthToken(localStorage.token);
    const res = await axios.get(`/api/order/${orderId}`);
    dispatch({
      type: SET_CURRENT_ORDER,
      payload: res.data.order,
    });
  } catch (error) {
    console.log(error);
  }
};
export const rateProduct = (orderId, productId, review) => async (dispatch) => {
  try {
    console.log("getting order");
    console.log(orderId);
    setAuthToken(localStorage.token);
    console.log(orderId);
    const res = await axios.post(
      `/api/order/${orderId}/rateProduct/${productId}`,
      review,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (res.data.order) {
      toast.success("Successfully submitted review...");
      dispatch({
        type: RATE_PRODUCT,
        payload: res.data.order,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
export const setUseBalance = (value) => async (dispatch) => {
  try {
    dispatch({
      type: USE_BALANCE,
      payload: value,
    });
  } catch (error) {
    console.log(error);
  }
};
