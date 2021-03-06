import { CREATE_PAYMENT_SESSION } from "./types";
import axios from "axios";
import { API } from "../constants/constants";
export const createSession = (order, user) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await axios.post(`${API}/api/payment`, order, config);
    dispatch({
      type: CREATE_PAYMENT_SESSION,
      payload: res.data,
    });
    if (res.data.success) {
      window.open(`${API}/api/payment/` + user._id);
    }
    // await axios.post('/payment',{html: res.data.session.html_snippet},config)
  } catch (error) {
    console.log(error);
  }
};
