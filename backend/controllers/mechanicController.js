const User = require("../models/userModel");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncError = require("../middleware/catchAsyncError");
const APiFeatures = require("../utils/apiFeatures");
const cloudinary = require("cloudinary");

//Get All Mechanics
exports.getAllMechanics = catchAsyncError(async (req, res) => {
  const resultPerPage = 8;
  const mechanicCount = await User.countDocuments({ role: "mechanic" });

  const apiFeature = new APiFeatures(User.find({ role: "mechanic" }), req.query)
    .search()
    .filter();

  let mechanics = await apiFeature.query;
  let filterMechanicCount = mechanics.length;

  apiFeature.pagination(resultPerPage);

  mechanics = await apiFeature.query.clone();
  res.status(200).json({
    success: true,
    mechanics,
    mechanicCount,
    resultPerPage,
    filterMechanicCount,
  });
});

//Get Mechanic Details
exports.getMechanicDetails = catchAsyncError(async (req, res, next) => {
  const mechanic = await User.findById(req.params.id);
  if (!mechanic) {
    return next(new ErrorHandler("Mechanic not found", 404));
  }
  res.status(200).json({
    success: true,
    mechanic,
  });
});

//Create new review or update review
exports.createMechanicReview = catchAsyncError(async (req, res, next) => {
  const { rating, comment, mechanicId } = req.body;
  const review = {
    user: req.user._id,
    name: req.user.name,
    rating: Number(rating),
    comment,
  };
  const mechanic = await User.findById(mechanicId);
  const isReviewed = mechanic.reviews.find(
    (rev) => rev.user.toString() === req.user._id.toString()
  );
  if (isReviewed) {
    mechanic.reviews.forEach((rev) => {
      if (rev.user.toString() === req.user._id.toString())
        (rev.rating = rating), (rev.comment = comment);
    });
  } else {
    mechanic.reviews.push(review);
    mechanic.numOfReviews = mechanic.reviews.length;
  }

  let avg = 0;
  mechanic.reviews.forEach((rev) => {
    avg += rev.rating;
  });
  mechanic.ratings = avg / mechanic.reviews.length;

  await mechanic.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
  });
});

//Grt All Reviews of a Mechanic
exports.getMechanicReviews = catchAsyncError(async (req, res, next) => {
  const mechanic = await User.findById(req.query.id);
  if (!mechanic) {
    return next(new ErrorHandler("Mechanic not found", 404));
  }

  res.status(200).json({
    success: true,
    reviews: mechanic.reviews,
  });
});

//Delete Review
exports.deleteMechanicReview = catchAsyncError(async (req, res, next) => {
  const mechanic = await User.findById(req.query.mechanicId);
  if (!mechanic) {
    return next(new ErrorHandler("Mechanic not found", 404));
  }

  const reviews = mechanic.reviews.filter(
    (rev) => rev._id.toString() !== req.query.id.toString()
  );

  let avg = 0;

  reviews.forEach((rev) => {
    avg += rev.rating;
  });

  let ratings = 0;

  if (reviews.length === 0) {
    ratings = 0;
  } else {
    ratings = avg / reviews.length;
  }

  const numOfReviews = reviews.length;

  await mechanic.findByIdAndUpdate(
    req.query.mechanicId,
    {
      reviews,
      ratings,
      numOfReviews,
    },
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );

  res.status(200).json({
    success: true,
  });
});

//Update Mechanic Status
exports.updateMechanicStatus = catchAsyncError(async (req, res, next) => {
  const user = await User.findByIdAndUpdate(
    req.user.id,
    { status: req.body.status },
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );

  res.status(200).json({
    success: true,
  });
});
