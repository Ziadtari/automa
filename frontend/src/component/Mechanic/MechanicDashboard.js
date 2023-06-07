import React, { useEffect } from "react";
import Sidebar from "./Sidebar.js";
import "./dashboard.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Doughnut, Line } from "react-chartjs-2";
import Chart from "chart.js/auto"; //important
import { useDispatch, useSelector } from "react-redux";
import { getBookings } from "../../actions/bookingAction.js";
import { getMechanicProduct } from "../../actions/productAction.js";

const MechanicDashboard = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.mechanicProducts);
  const { bookings } = useSelector((state) => state.bookings);

  useEffect(() => {
    dispatch(getMechanicProduct());
    dispatch(getBookings());
  }, [dispatch]);

  let totalAmount = 0;
  products &&
    products.forEach((item) => {
      totalAmount += item.totalPrice;
    });

  const lineState = {
    labels: ["Initial Amount", "Amount Earned"],
    datasets: [
      {
        label: "TOTAL AMOUNT",
        backgroundColor: ["orange"],
        hoverBackgroundColor: ["rgb(197, 72, 49)"],
        data: [0, totalAmount],
      },
    ],
  };

  return (
    <div className="dashboard">
      <Sidebar />

      <div className="dashboardContainer">
        <Typography component="h1">Dashboard</Typography>

        <div className="dashboardSummary">
          <div>
            <p>
              Total Amount <br /> Rs {totalAmount?.toFixed(2)}
            </p>
          </div>
          <div className="dashboardSummaryBox2">
            <Link to="/mechanic/products">
              <p>Products</p>
              <p>{products && products.length}</p>
            </Link>
            <Link to="/mechanic/bookings">
              <p>Bookings</p>
              <p>{bookings && bookings.length}</p>
            </Link>
          </div>
        </div>
        <div className="graphContainer">
          <div className="lineChart">
            <Line data={lineState} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MechanicDashboard;
