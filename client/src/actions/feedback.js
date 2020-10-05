import axios from "axios";
import { toast } from 'react-toastify'
import {
  CREATE_FEEDBACK,
  CREATE_FEEDBACK_ERROR,
  UPDATE_FEEDBACK,
  GET_FEEDBACK,
  GET_FEEDBACK_ERROR,
  UPDATE_FEEDBACK_ERROR
} from './types'
import { API } from "../constants/constants";

export const createFeedback = ({ name, subject, email, message, phone }) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const body = JSON.stringify({ name, subject, email, message, phone });
    const res = await axios.post(`${API}/api/feedback`, body, config);
    console.log(res.data);
    dispatch({
      type: CREATE_FEEDBACK,
      payload: res.data
    })
    toast.success("Successfully submitted your message...")
  } catch (error) {
    dispatch({
      type: CREATE_FEEDBACK_ERROR
    })
  }
};
export const getFeedback = () => async (dispatch) => {
  try {
    const res = await axios.get(`${API}/api/feedback`);
    dispatch({
      type: GET_FEEDBACK,
      payload: res.data
    })
  } catch (error) {
    dispatch({
      type: CREATE_FEEDBACK_ERROR
    })
  }
}
export const updateFeedback = (id, status) => async (dispatch) => {
  try {
    const res = await axios.patch(`${API}/api/feedback/${id}`, status);
    dispatch({
      type: UPDATE_FEEDBACK
    })
  } catch (error) {
    dispatch({
      type: UPDATE_FEEDBACK_ERROR
    })
  }
}