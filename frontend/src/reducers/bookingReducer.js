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

export const bookingsReducer = (state = { bookings: [] }, action) => {
  switch (action.type) {
    case ALL_BOOKING_REQUEST:
    case MECHANIC_BOOKING_REQUEST:
      return {
        loading: true,
        bookings: [],
      };
    case ALL_BOOKING_SUCCESS:
      return {
        loading: false,
        bookings: action.payload.bookings,
      };
    case MECHANIC_BOOKING_SUCCESS:
      return {
        loading: false,
        bookings: action.payload,
      };
    case ALL_BOOKING_FAIL:
    case MECHANIC_BOOKING_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const newBookingReducer = (state = { booking: {} }, action) => {
  switch (action.type) {
    case NEW_BOOKING_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_BOOKING_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        booking: action.payload.booking,
      };
    case NEW_BOOKING_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_BOOKING_RESET:
      return {
        ...state,
        success: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const bookingReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_BOOKING_REQUEST:
    case UPDATE_BOOKING_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_BOOKING_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };
    case UPDATE_BOOKING_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      };
    case DELETE_BOOKING_FAIL:
    case UPDATE_BOOKING_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_BOOKING_RESET:
      return {
        ...state,
        isDeleted: false,
      };
    case UPDATE_BOOKING_RESET:
      return {
        ...state,
        isUpdated: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
