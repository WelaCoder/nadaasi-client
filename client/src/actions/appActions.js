import axios from "axios";

import {
  Add_PRODUCT,
  DELETE_ITEM_FROM_CART,
  SET_LOADING,
  GET_PRODUCTS,
  SET_CURRENT_PRODUCT,
  SET_CHOOSEN_PRODUCT,
  ADD_TO_CART,
  SET_TOAST,
  LOAD_CART,
  UPDATE_QUANTITY,
  SET_FILTER,
  FILTER_PRODUCTS,
  SORT_PRODUCTS,
  SET_CURRENT_PAGE,
  SET_ADDING_PRODUCT,
  SET_RELEVANT_DRESSES,
  CLEAR_CURRENT_PRODUCT,
  LOAD_SHIPPING,
  USE_POINTS,
  LOAD_DRESS_TYPES,
  SET_SEARCH,
  GET_VOUCHER,
  SET_BODY_TYPE,
} from "./types";

import { toast } from "react-toastify";
import { API } from "../constants/constants";
export const addProduct = (data) => async (dispatch) => {
  try {
    dispatch({
      type: SET_ADDING_PRODUCT,
      payload: true,
    });
    for (var pair of data.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }
    console.log("add product");
    const res = await axios.post(`${API}/api/product`, data);
    dispatch({
      type: SET_ADDING_PRODUCT,
      payload: false,
    });
    toast.success("Successfully added new product");
    // return true;
  } catch (error) {
    console.log(error);
  }
};

export const getProducts = () => async (dispatch) => {
  try {
    dispatch({
      type: SET_LOADING,
      payload: true,
    });
    const res = await axios.get(`${API}/api/product`);
    console.log(res.data.products);
    dispatch({
      type: GET_PRODUCTS,
      payload: res.data.products,
    });
    dispatch({
      type: SET_LOADING,
      payload: false,
    });
  } catch (error) {
    console.log(error);
  }
};
export const getVoucher = () => async (dispatch) => {
  try {
    const res = await axios.get(`${API}/api/voucher`);
    toast.success("Successfully got 100€ voucher");
    dispatch({
      type: GET_VOUCHER,
      payload: res.data,
    });
  } catch (error) {
    toast.error(`You don't have enough points...`);
    console.log(error);
  }
};
export const clearcurrentProduct = () => (dispatch) => {
  dispatch({
    type: CLEAR_CURRENT_PRODUCT,
  });
};
export const setCurrentProduct = (productId) => async (dispatch) => {
  try {
    dispatch({
      type: CLEAR_CURRENT_PRODUCT,
    });
    for (let index = 0; index < 200000; index++) {}
    dispatch({
      type: SET_CURRENT_PRODUCT,
      payload: productId,
    });
    dispatch({
      type: SET_LOADING,
      payload: false,
    });
  } catch (error) {
    console.log(error);
  }
};
export const setChoosenProduct = (product) => async (dispatch) => {
  try {
    dispatch({
      type: SET_CHOOSEN_PRODUCT,
      payload: product,
    });
  } catch (error) {
    console.log(error);
  }
};

export const setRelevantDresses = () => async (dispatch) => {
  try {
    dispatch({
      type: SET_RELEVANT_DRESSES,
    });
  } catch (error) {
    console.log(error);
  }
};

export const addToCart = (choosenProduct) => async (dispatch) => {
  try {
    if (choosenProduct.size == "Custom") {
      if (
        choosenProduct.neck == null ||
        choosenProduct.overBust == null ||
        choosenProduct.bust == null ||
        choosenProduct.neck == null ||
        choosenProduct.hip == null ||
        choosenProduct.waistToAboveKnee == null ||
        choosenProduct.shoulderToWaist == null ||
        choosenProduct.vNeckCut == null ||
        choosenProduct.wrist == null ||
        choosenProduct.foreArm == null ||
        choosenProduct.bicep == null ||
        choosenProduct.armHole == null ||
        choosenProduct.shoulderSeam == null ||
        choosenProduct.armLength == null ||
        choosenProduct.aboveKneeToAnkle == null ||
        choosenProduct.neckToAboveHeel == null ||
        choosenProduct.neckToHeel == null ||
        choosenProduct.hips == null ||
        choosenProduct.waist == null ||
        choosenProduct.underBust == null
      ) {
        return dispatch({
          type: SET_TOAST,
          payload: {
            type: "error",
            message: "Please enter remaining values for custom size",
          },
        });
      }
    }

    const res = await axios.post(`${API}/api/cart`, choosenProduct, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    dispatch({
      type: ADD_TO_CART,
      payload: res.data.cartItem,
    });
  } catch (error) {
    console.log(error);
  }
};

export const setBodyType = (bodyType) => async (dispatch) => {
  try {
    const res = await axios.put(
      `${API}/api/user/setBodyType`,
      { bodyType },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    dispatch({
      type: SET_BODY_TYPE,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const setCountry = (data) => async (dispatch) => {
  try {
    const res = await axios.put(`${API}/api/user/setCountry`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    dispatch({
      type: SET_BODY_TYPE,
      payload: res.data,
    });
    toast.success("Successfully updated address...");
  } catch (error) {
    console.log(error);
  }
};

export const loadCart = () => async (dispatch) => {
  try {
    let cart = localStorage.getItem("cart");
    cart = JSON.parse(cart);
    if (cart == null) {
      cart = [];
    } else {
      cart = cart.cart;
    }
    const res = await axios.put(
      `${API}/api/cart`,
      { cart },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    dispatch({
      type: LOAD_CART,
      payload: res.data.cartItems,
    });
    localStorage.removeItem("cart");
  } catch (error) {
    console.log(error);
  }
};
export const setUsePoints = (value) => async (dispatch) => {
  try {
    dispatch({
      type: USE_POINTS,
      payload: value,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateCount = (cartId, count) => async (dispatch) => {
  try {
    console.log(cartId);
    const res = await axios.post(
      `${API}/api/cart/` + cartId + "/updateQuantity",
      { quantity: count },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch({
      type: UPDATE_QUANTITY,
      payload: res.data.cartItem,
    });
  } catch (error) {
    console.log(error);
  }
};
export const loadDressTypes = () => async (dispatch) => {
  try {
    console.log("loading dress types");
    const res = await axios.get(`${API}/api/dressType`);

    dispatch({
      type: LOAD_DRESS_TYPES,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
export const deleteItemFromCart = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`${API}/api/cart/` + id);

    dispatch({
      type: DELETE_ITEM_FROM_CART,
      payload: res.data.cartItem,
    });
  } catch (error) {
    console.log(error);
  }
};

export const setToast = (toastMessage) => async (dispatch) => {
  try {
    dispatch({
      type: SET_TOAST,
      payload: toastMessage,
    });
  } catch (error) {
    console.log(error);
  }
};

export const setFilters = (filters) => async (dispatch) => {
  try {
    dispatch({
      type: SET_FILTER,
      payload: filters,
    });
    if (filters.price == null) {
      dispatch(filterProducts());
    }
  } catch (error) {
    console.log(error);
  }
};

export const filterProducts = () => async (dispatch) => {
  try {
    dispatch({
      type: FILTER_PRODUCTS,
    });
  } catch (error) {
    console.log(error);
  }
};

export const sortProducts = (order) => async (dispatch) => {
  try {
    dispatch({
      type: SORT_PRODUCTS,
      payload: order,
    });
  } catch (error) {
    console.log(error);
  }
};

export const setCurrentPage = (page) => async (dispatch) => {
  try {
    console.log(page);
    dispatch({
      type: SET_CURRENT_PAGE,
      payload: page,
    });
  } catch (error) {
    console.log(error);
  }
};
export const loadShipping = () => async (dispatch) => {
  try {
    const res = await axios.get(`${API}/api/shipping`);

    dispatch({
      type: LOAD_SHIPPING,
      payload: res.data.shipping,
    });
  } catch (error) {
    console.log(error);
  }
};

export const setSearch = (search) => async (dispatch) => {
  try {
    dispatch({
      type: SET_SEARCH,
      payload: search,
    });
  } catch (error) {
    console.log(error);
  }
};
