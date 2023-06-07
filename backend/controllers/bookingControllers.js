const Booking = require("../models/bookingModel");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncError = require("../middleware/catchAsyncError");
const APiFeatures = require("../utils/apiFeatures");
const cloudinary = require("cloudinary");

//Create Booking
exports.createBooking = catchAsyncError(async (req, res, next) => {
  const booking = await Booking.create(req.body);
  res.status(201).json({
    success: true,
    booking,
  });
});

// Get Bookings for Mechanic
exports.getMechanicBookings = catchAsyncError(async (req, res, next) => {
  const bookings = await Booking.find();

  res.status(200).json({
    success: true,
    bookings,
  });
});

//Update Booking
exports.updateBooking = catchAsyncError(async (req, res, next) => {
  let booking = await Booking.findById(req.params.id);
  if (!booking) {
    return next(new ErrorHandler("Booking not found", 404));
  }

  booking = await Booking.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    booking,
  });
});

//Delete Booking
exports.deleteBooking = catchAsyncError(async (req, res, next) => {
  const booking = await Booking.findById(req.params.id);
  console.log(booking);
  if (!booking) {
    return next(new ErrorHandler("Booking not found", 404));
  }

  await booking.remove();
  res.status(200).json({
    success: true,
    message: "Booking Delete Successfully",
  });
});
