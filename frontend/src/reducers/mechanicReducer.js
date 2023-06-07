import {
  ALL_MECHANIC_FAIL,
  ALL_MECHANIC_REQUEST,
  ALL_MECHANIC_SUCCESS,
  MECHANIC_DETAILS_REQUEST,
  MECHANIC_DETAILS_FAIL,
  MECHANIC_DETAILS_SUCCESS,
  NEW_MECHANIC_REVIEW_REQUEST,
  NEW_MECHANIC_REVIEW_SUCCESS,
  NEW_MECHANIC_REVIEW_RESET,
  NEW_MECHANIC_REVIEW_FAIL,
  UPDATE_MECHANIC_REQUEST,
  UPDATE_MECHANIC_SUCCESS,
  UPDATE_MECHANIC_RESET,
  UPDATE_MECHANIC_FAIL,
  ALL_MECHANIC_REVIEW_REQUEST,
  ALL_MECHANIC_REVIEW_SUCCESS,
  ALL_MECHANIC_REVIEW_FAIL,
  DELETE_MECHANIC_REVIEW_REQUEST,
  DELETE_MECHANIC_REVIEW_SUCCESS,
  DELETE_MECHANIC_REVIEW_RESET,
  DELETE_MECHANIC_REVIEW_FAIL,
  ALL_MECHANIC_PRODUCTS_FAIL,
  ALL_MECHANIC_PRODUCTS_REQUEST,
  ALL_MECHANIC_PRODUCTS_SUCCESS,
  CLEAR_ERRORS,
} from "../constants/mechanicConstant";

export const mechanicsReducer = (state = { mechanics: [] }, action) => {
  switch (action.type) {
    case ALL_MECHANIC_REQUEST:
      return {
        loading: true,
        mechanics: [],
      };
    case ALL_MECHANIC_SUCCESS:
      return {
        loading: false,
        mechanics: action.payload.mechanics,
        mechanicCount: action.payload.mechanicCount,
        resultPerPage: action.payload.resultPerPage,
        filterMechanicCount: action.payload.filterMechanicCount,
      };

    case ALL_MECHANIC_FAIL:
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

export const mechanicDetailsReducer = (state = { mechanic: {} }, action) => {
  switch (action.type) {
    case MECHANIC_DETAILS_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case MECHANIC_DETAILS_SUCCESS:
      return {
        loading: false,
        mechanic: action.payload,
      };
    case MECHANIC_DETAILS_FAIL:
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

export const newMechanicReviewReducer = (state = {}, action) => {
  switch (action.type) {
    case NEW_MECHANIC_REVIEW_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_MECHANIC_REVIEW_SUCCESS:
      return {
        loading: false,
        success: action.payload,
      };
    case NEW_MECHANIC_REVIEW_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_MECHANIC_REVIEW_RESET:
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

export const mechanicReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_MECHANIC_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_MECHANIC_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      };
    case UPDATE_MECHANIC_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UPDATE_MECHANIC_RESET:
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

export const mechanicReviewsReducer = (state = { reviews: [] }, action) => {
  switch (action.type) {
    case ALL_MECHANIC_REVIEW_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case ALL_MECHANIC_REVIEW_SUCCESS:
      return {
        loading: false,
        MECHANIC_REVIEWs: action.payload,
      };

    case ALL_MECHANIC_REVIEW_FAIL:
      return {
        ...state,
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

export const mechanicReviewReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_MECHANIC_REVIEW_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_MECHANIC_REVIEW_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };
    case DELETE_MECHANIC_REVIEW_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_MECHANIC_REVIEW_RESET:
      return {
        ...state,
        isDeleted: false,
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

// export const mechanicBookingsReducer = (state = { bookings: [] }, action) => {
//   switch (action.type) {
//     case ALL_MECHANIC_BOOKING_REQUEST:
//       return {
//         ...state,
//         loading: true,
//       };

//     case ALL_MECHANIC_BOOKING_SUCCESS:
//       return {
//         loading: false,
//         MECHANIC_REVIEWs: action.payload,
//       };

//     case ALL_MECHANIC_BOOKING_FAIL:
//       return {
//         ...state,
//         loading: false,
//         error: action.payload,
//       };

//     case CLEAR_ERRORS:
//       return {
//         ...state,
//         error: null,
//       };
//     default:
//       return state;
//   }
// };

export const mechanicProductsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case ALL_MECHANIC_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case ALL_MECHANIC_PRODUCTS_SUCCESS:
      return {
        loading: false,
        MECHANIC_REVIEWs: action.payload,
      };

    case ALL_MECHANIC_PRODUCTS_FAIL:
      return {
        ...state,
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
