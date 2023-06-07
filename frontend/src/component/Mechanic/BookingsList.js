import React, { Fragment, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import "./productList.css";
import { useSelector, useDispatch } from "react-redux";
import {
  clearErrors,
  getAdminProduct,
  deleteProduct,
} from "../../actions/productAction";
import { Link, useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
import { Button } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import SideBar from "./Sidebar";
import { DELETE_PRODUCT_RESET } from "../../constants/productConstant";
import { deleteBooking, getBookings } from "../../actions/bookingAction";
import { DELETE_BOOKING_REQUEST } from "../../constants/bookingConstant";

const BookingList = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();
  const { error, bookings } = useSelector((state) => state.bookings);

  const { error: deleteError, isDeleted } = useSelector(
    (state) => state.booking
  );

  const deleteBookingHandler = (id) => {
    dispatch(deleteBooking(id));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (deleteError) {
      alert.error(deleteError);
      dispatch(clearErrors());
    }

    if (isDeleted) {
      alert.success("Booking Delete Successfully");
      navigate("/mechanic/dashboard");
      dispatch({ type: DELETE_BOOKING_REQUEST });
    }

    dispatch(getBookings());
  }, [dispatch, alert, error, navigate, deleteError, isDeleted]);

  const columns = [
    { field: "id", headerName: "Booking ID", minWidth: 250, flex: 1.5 },

    {
      field: "name",
      headerName: "Name",
      minWidth: 150,
      flex: 1,
    },

    {
      field: "date",
      headerName: "Date",
      minWidth: 150,
      flex: 1,
    },

    {
      field: "actions",
      flex: 1,
      headerName: "Actions",
      minWidth: 150,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <Fragment>
            <Button
              onClick={() =>
                deleteBookingHandler(params.getValue(params.id, "id"))
              }
            >
              <DeleteIcon />
            </Button>
          </Fragment>
        );
      },
    },
  ];

  const rows = [];

  bookings &&
    bookings.forEach((item) => {
      rows.push({
        id: item._id,
        date: new Date(item.createdAt).toLocaleString(),
        name: item.name,
      });
    });

  return (
    <Fragment>
      <div className="dashboard">
        <SideBar />
        <div className="productListContainer">
          <h1 id="productListHeading">ALL BOOKINGS</h1>

          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            className="productListTable"
            autoHeight
          />
        </div>
      </div>
    </Fragment>
  );
};

export default BookingList;
