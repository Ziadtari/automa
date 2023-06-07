import React, { Fragment, useEffect, useState } from "react";
import "./Products.css";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors } from "../../actions/mechanicAction";
import Loader from "../layout/Loader/Loader";
import { useParams } from "react-router-dom";
import Pagination from "react-js-pagination";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import { useAlert } from "react-alert";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import SettingsInputComponentIcon from "@mui/icons-material/SettingsInputComponent";
import { Button } from "@material-ui/core";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { getMechanic } from "../../actions/mechanicAction";
import MechanicCard from "../Home/MechanicCard";

const Mechanics = () => {
  const { keyword } = useParams();
  const dispatch = useDispatch();
  const alert = useAlert();
  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 50000]);
  const [category, setCategory] = useState("");
  const [ratings, setRatings] = useState(0);

  const {
    mechanics,
    loading,
    mechanicCount,
    resultPerPage,
    filterMechanicCount,
    error,
  } = useSelector((state) => state.mechanics);

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  };

  let count = filterMechanicCount;

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getMechanic(keyword, currentPage, price, category, ratings));
  }, [dispatch, keyword, currentPage, price, category, ratings, alert, error]);

  const resetFilters = () => {
    setCategory("");
    setRatings(0);
    setPrice([0, 50000]);
  };

  const [showMediaIcons, setShowMediaIcons] = useState(false);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <h2 className="productsHeading">Products</h2>

          <div className="products">
            {mechanics &&
              mechanics.map((mechanic) => (
                <MechanicCard key={mechanic._id} mechanic={mechanic} />
              ))}
          </div>

          <button
            className=" mobile-settingMenu"
            onClick={() => setShowMediaIcons(!showMediaIcons)}
          >
            {showMediaIcons ? (
              <SettingsInputComponentIcon />
            ) : (
              <SettingsApplicationsIcon />
            )}
          </button>

          <div
            className={showMediaIcons ? "mobile-filterBox" : "filterBox"}
            onClick={() => setShowMediaIcons(false)}
          >
            <Typography>Price</Typography>
            <Slider
              value={price}
              onChange={priceHandler}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              marks
              step={5000}
              min={0}
              max={50000}
            />

            <fieldset>
              <Typography>Ratings</Typography>
              <Slider
                value={ratings}
                onChange={(e, newRating) => {
                  setRatings(newRating);
                }}
                aria-label="Small steps"
                valueLabelDisplay="auto"
                marks
                step={1}
                min={0}
                max={5}
              />
            </fieldset>

            <Typography>
              <Button onClick={resetFilters}>
                <RestartAltIcon />
                Reset
              </Button>
            </Typography>
          </div>

          {resultPerPage < count && (
            <div>
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={mechanicCount}
                onChange={setCurrentPageNo}
                nextPageText="Next"
                prevPageText="Prev"
                firstPageText="1st"
                lastPageText="Last"
                itemClass="page-item"
                linkClass="page-link"
                activeClass="pageItemActive"
                activeLinkClass="pageLinkActive"
              />
            </div>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default Mechanics;
