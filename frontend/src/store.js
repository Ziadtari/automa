import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  newProductReducer,
  newReviewReducer,
  productDetailsReducer,
  productReducer,
  productReviewsReducer,
  productsReducer,
  reviewReducer,
} from "./reducers/productReducer";

import {
  bookingReducer,
  newBookingReducer,
  bookingsReducer,
} from "./reducers/bookingReducer";

import {
  mechanicDetailsReducer,
  mechanicReducer,
  mechanicReviewsReducer,
  mechanicsReducer,
  mechanicReviewReducer,
  newMechanicReviewReducer,
  mechanicProductsReducer,
} from "./reducers/mechanicReducer";

import {
  allUsersReducer,
  forgotPasswordReducer,
  profileReducer,
  userDetailsReducer,
  userReducer,
} from "./reducers/userReducer";
import { cartReducer } from "./reducers/cartReducer";
import {
  create_wishlist_reducer,
  delete_wish_reducer,
  get_wishlist_reducer,
} from "./reducers/wishlistReducer";
import {
  allOrdersReducer,
  myOrdersReducer,
  newOrderReducer,
  orderDetailsReducer,
  orderReducer,
} from "./reducers/orderReducer";

const reducer = combineReducers({
  products: productsReducer,
  mechanics: mechanicsReducer,
  productDetails: productDetailsReducer,
  mechanicDetails: mechanicDetailsReducer,
  user: userReducer,
  profile: profileReducer,
  forgotPassword: forgotPasswordReducer,
  cart: cartReducer,
  wishlist: create_wishlist_reducer,
  wishlist_data: get_wishlist_reducer,
  deletewish: delete_wish_reducer,
  newOrder: newOrderReducer,
  myOrders: myOrdersReducer,
  orderDetails: orderDetailsReducer,
  newReview: newReviewReducer,
  newMechanicReview: newMechanicReviewReducer,
  newProduct: newProductReducer,
  product: productReducer,
  mechanic: mechanicReducer,
  allOrders: allOrdersReducer,
  order: orderReducer,
  allUsers: allUsersReducer,
  userDetails: userDetailsReducer,
  productReviews: productReviewsReducer,
  mechanicReviews: mechanicReviewsReducer,
  review: reviewReducer,
  mechanicReview: mechanicReviewReducer,
  mechanicProducts: mechanicProductsReducer,
  bookings: bookingsReducer,
  booking: bookingReducer,
  newBooking: newBookingReducer,
});
let initialState = {
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    shippingInfo: localStorage.getItem("shippingInfo")
      ? JSON.parse(localStorage.getItem("shippingInfo"))
      : [],
  },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
