import { GET_TESTIMONIALS } from "./types";
import axios from "axios";
import { toast } from "react-toastify";
import setAuthToken from "../utils/setAuthToken";
import { API } from "../constants/constants";

export const getTestimonials = (orderId) => async (dispatch) => {
  try {
    const res = await axios.get(`${API}/api/testimonial/`);
    dispatch({
      type: GET_TESTIMONIALS,
      payload: res.data.testimonials,
    });
  } catch (error) {
    console.log(error);
  }
};
