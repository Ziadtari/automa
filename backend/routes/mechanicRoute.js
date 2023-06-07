const express = require("express");
const {
  getAllMechanics,
  getMechanicDetails,
  createMechanicReview,
  getMechanicReviews,
  deleteMechanicReview,
  updateMechanicStatus,
} = require("../controllers/mechanicController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const router = express.Router();

router.route("/mechanics").get(getAllMechanics);

router.route("/mechanic/:id").get(getMechanicDetails);

router.route("/mechanic-review").put(isAuthenticatedUser, createMechanicReview);

router.route("/mechanic-reviews").get(getMechanicReviews);

router
  .route("/mechanic-reviews")
  .delete(isAuthenticatedUser, deleteMechanicReview);

router.route("/mechanic-status").put(isAuthenticatedUser, updateMechanicStatus);

module.exports = router;
