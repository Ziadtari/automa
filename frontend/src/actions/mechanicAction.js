import axios from "axios";

import {
  ALL_MECHANIC_FAIL,
  ALL_MECHANIC_REQUEST,
  ALL_MECHANIC_SUCCESS,
  MECHANIC_DETAILS_REQUEST,
  MECHANIC_DETAILS_FAIL,
  MECHANIC_DETAILS_SUCCESS,
  NEW_MECHANIC_REVIEW_REQUEST,
  NEW_MECHANIC_REVIEW_SUCCESS,
  NEW_MECHANIC_REVIEW_FAIL,
  UPDATE_MECHANIC_REQUEST,
  UPDATE_MECHANIC_SUCCESS,
  UPDATE_MECHANIC_FAIL,
  ALL_MECHANIC_REVIEW_REQUEST,
  ALL_MECHANIC_REVIEW_SUCCESS,
  ALL_MECHANIC_REVIEW_FAIL,
  DELETE_MECHANIC_REVIEW_REQUEST,
  DELETE_MECHANIC_REVIEW_SUCCESS,
  DELETE_MECHANIC_REVIEW_FAIL,
  CLEAR_ERRORS,
} from "../constants/mechanicConstant";

export const getMechanic =
  (keyword = "", currentPage = 1, price = [0, 99999], category, ratings = 0) =>
  async (dispatch) => {
    try {
      dispatch({ type: ALL_MECHANIC_REQUEST });
      let link = `/api/v1/mechanics?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${ratings}`;

      const { data } = await axios.get(link);

      dispatch({
        type: ALL_MECHANIC_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ALL_MECHANIC_FAIL,
        payload: error.response.data.message,
      });
    }
  };

export const getMechanicDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: MECHANIC_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/v1/mechanic/${id}`);

    dispatch({
      type: MECHANIC_DETAILS_SUCCESS,
      payload: data.mechanic,
    });
  } catch (error) {
    dispatch({
      type: MECHANIC_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// New Review
export const newMechanicReview = (reviewData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_MECHANIC_REVIEW_REQUEST });
    const config = {
      headers: { "Content-Type": "application/json" },
    };
    const { data } = await axios.put(
      `/api/v1/mechanic-review`,
      reviewData,
      config
    );
    dispatch({
      type: NEW_MECHANIC_REVIEW_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: NEW_MECHANIC_REVIEW_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get All Reviews of a Mechanic
export const getAllMechanicReviews = (id) => async (dispatch) => {
  try {
    dispatch({ type: ALL_MECHANIC_REVIEW_REQUEST });
    const { data } = await axios.get(`/api/v1/mechanic-reviews?id=${id}`);
    dispatch({
      type: ALL_MECHANIC_REVIEW_SUCCESS,
      payload: data.reviews,
    });
  } catch (error) {
    dispatch({
      type: ALL_MECHANIC_REVIEW_FAIL,
      payload: error.response.data.message,
    });
  }
};

// // Get All Products of a Mechanic
// export const getMechanicProducts = (id) => async (dispatch) => {
//   try {
//     dispatch({ type: ALL_MECHANIC_BOOKING_REQUEST });
//     const { data } = await axios.get(`/api/v1/mechanic?id=${id}`);
//     dispatch({
//       type: ALL_MECHANIC_BOOKING_SUCCESS,
//       payload: data.products,
//     });
//   } catch (error) {
//     dispatch({
//       type: ALL_MECHANIC_BOOKING_FAIL,
//       payload: error.response.data.message,
//     });
//   }
// };

// Delete Review of a Mechanic
export const deleteReviews = (reviewId, mechanicId) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_MECHANIC_REVIEW_REQUEST });
    const { data } = await axios.delete(
      `/api/v1/reviews?id=${reviewId}&mechanicId=${mechanicId}`
    );
    dispatch({
      type: DELETE_MECHANIC_REVIEW_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_MECHANIC_REVIEW_FAIL,
      payload: error.response.data.message,
    });
  }
};

//Clear Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
