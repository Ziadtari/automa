import axios from "axios";

import {
  ALL_BOOKING_FAIL,
  ALL_BOOKING_REQUEST,
  ALL_BOOKING_SUCCESS,
  DELETE_BOOKING_FAIL,
  DELETE_BOOKING_REQUEST,
  DELETE_BOOKING_RESET,
  DELETE_BOOKING_SUCCESS,
  MECHANIC_BOOKING_FAIL,
  MECHANIC_BOOKING_REQUEST,
  MECHANIC_BOOKING_SUCCESS,
  NEW_BOOKING_FAIL,
  NEW_BOOKING_REQUEST,
  NEW_BOOKING_RESET,
  NEW_BOOKING_SUCCESS,
  UPDATE_BOOKING_FAIL,
  UPDATE_BOOKING_REQUEST,
  UPDATE_BOOKING_RESET,
  UPDATE_BOOKING_SUCCESS,
  CLEAR_ERRORS,
} from "../constants/bookingConstant";

// Get All Bookings of a Mechanic
export const getBookings = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_BOOKING_REQUEST });
    const { data } = await axios.get(`/api/v1/bookings`);
    dispatch({
      type: ALL_BOOKING_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_BOOKING_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete Booking
export const deleteBooking = (bookingId) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_BOOKING_REQUEST });
    const { data } = await axios.delete(`/api/v1/booking?id=${bookingId}`);
    dispatch({
      type: DELETE_BOOKING_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_BOOKING_FAIL,
      payload: error.response.data.message,
    });
  }
};

// New Booking
export const newBooking = (bookingData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_BOOKING_REQUEST });
    const config = {
      headers: { "Content-Type": "application/json" },
    };
    const { data } = await axios.put(`/api/v1/booking`, bookingData, config);
    dispatch({
      type: NEW_BOOKING_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: NEW_BOOKING_FAIL,
      payload: error.response.data.message,
    });
  }
};

//Clear Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
