const express = require("express");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const {
  getMechanicBookings,
  createBooking,
  deleteBooking,
} = require("../controllers/bookingControllers");
const router = express.Router();

router.route("/bookings").get(getMechanicBookings);

router.route("/booking").put(isAuthenticatedUser, createBooking);

router.route("/booking").delete(isAuthenticatedUser, deleteBooking);

module.exports = router;
