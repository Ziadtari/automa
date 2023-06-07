import { useParams } from "react-router-dom";
import React, { Fragment, useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import "./ProductDetails.css";
import { useSelector, useDispatch } from "react-redux";
import { Rating } from "@material-ui/lab";
import ReviewCard from "./ReviewCard";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import { addItemsToCart } from "../../actions/cartAction";
import { createwishlist } from "../../actions/wishlistAction";
import { loadUser } from "../../actions/userAction";

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@material-ui/core";
import { NEW_MECHANIC_REVIEW_REQUEST } from "../../constants/mechanicConstant";
import {
  getMechanicDetails,
  clearErrors,
  newMechanicReview,
} from "../../actions/mechanicAction";
import { newBooking } from "../../actions/bookingAction";

const MechanicDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const alert = useAlert();
  const sizes = ["S", "M", "L"];
  const [size, setSize] = useState("S");
  const { error: werror } = useSelector((state) => state.wishlist);
  const param = useParams();

  const { mechanic, loading, error } = useSelector(
    (state) => state.mechanicDetails
  );

  const { success, error: reviewError } = useSelector(
    (state) => state.newMechanicReview
  );

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (reviewError) {
      alert.error(reviewError);
      dispatch(clearErrors());
    }

    if (success) {
      alert.success("Review Submitted Successfully");
      dispatch({ type: NEW_MECHANIC_REVIEW_REQUEST });
    }

    dispatch(getMechanicDetails(id));
  }, [dispatch, id, error, alert, reviewError, success, size]);

  const options = {
    value: mechanic.ratings,
    readOnly: true,
    precision: 0.5,
  };

  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const bookMechanic = () => {
    const myForm = new FormData();
    myForm.set("mechanicId", id);
    myForm.set("userId", user._id);
    myForm.set("name", user.name);
    dispatch(newBooking(myForm));
    alert.success("Booking request sent! Mechanic will contact you.");
  };

  const submitReviewToggle = () => {
    open ? setOpen(false) : setOpen(true);
  };

  const reviewSubmitHandler = () => {
    const myForm = new FormData();
    myForm.set("rating", rating);
    myForm.set("comment", comment);
    myForm.set("mechanicId", id);
    dispatch(newMechanicReview(myForm));
    setOpen(false);
  };

  const {
    loading: userloading,
    user,
    isAuthenticated,
  } = useSelector((state) => state.user);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <div className="ProductDetails">
            <div>
              <img src={mechanic.avatar?.url} alt={mechanic.name} />
            </div>

            <div>
              <div className="detailsBlock-1">
                <h2>{mechanic.name}</h2>
                <p>Mechanic # {mechanic._id}</p>
              </div>
              <div className="detailsBlock-2">
                <Rating id="rating" {...options} />
                <span className="detailsBlock-2-span">
                  ({mechanic.numOfReviews} Reviews)
                </span>
              </div>

              <div className="detailsBlock-3">
                <h1>{`Rs ${mechanic.rate}`}</h1>
                {/* <div className="detailsBlock-3-1">
                  <div className="detailsBlock-3-1-1">
                    <button onClick={decreaseQuantity}>-</button>
                    <input readOnly type="number" value={quantity} />
                    <button onClick={increaseQuantity}>+</button>
                  </div>
                </div> */}

                <button
                  className="addCartButton"
                  disabled={mechanic.status === "booked" ? true : false}
                  onClick={bookMechanic}
                >
                  Book
                </button>

                {/* <button className="wishlistButton" onClick={addtowishlist}>
                  WISHLIST
                </button> */}
              </div>

              <p className="stockStatus">
                Status:
                <b
                  className={
                    mechanic.status === "booked" ? "redColor" : "greenColor"
                  }
                >
                  {mechanic.status === "booked" ? "Not Available" : "Available"}
                </b>
              </p>

              <div className="detailsBlock-4">
                Description : <p> Email: {mechanic.email}</p>
                <p> Phone: {mechanic.phone}</p>
                <p> Address: {mechanic.address}</p>
              </div>

              <button onClick={submitReviewToggle} className="submitReview">
                Submit Review
              </button>
            </div>
          </div>

          <h3 className="reviewsHeading">REVIEWS</h3>

          <Dialog
            aria-labelledby="simple-dialog-title"
            open={open}
            onClose={submitReviewToggle}
          >
            <DialogTitle>Submit Review</DialogTitle>
            <DialogContent className="submitDialog">
              <Rating
                onChange={(e) => setRating(e.target.value)}
                value={rating}
                size="large"
              />

              <textarea
                className="submitDialogTextArea"
                cols="30"
                rows="5"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
            </DialogContent>
            <DialogActions>
              <Button onClick={submitReviewToggle} color="secondary">
                Cancel
              </Button>
              <Button onClick={reviewSubmitHandler} color="primary">
                Submit
              </Button>
            </DialogActions>
          </Dialog>

          {mechanic.reviews && mechanic.reviews[0] ? (
            <div className="reviews">
              {mechanic.reviews &&
                mechanic.reviews.map((review) => (
                  <ReviewCard key={review._id} review={review} />
                ))}
            </div>
          ) : (
            <p className="noReviews">No Reviews Yet</p>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default MechanicDetails;
