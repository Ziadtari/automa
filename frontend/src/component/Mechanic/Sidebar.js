import React, { Fragment, useState, useEffect } from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import { TreeView, TreeItem } from "@material-ui/lab";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PostAddIcon from "@material-ui/icons/PostAdd";
import AddIcon from "@material-ui/icons/Add";
import ImportExportIcon from "@material-ui/icons/ImportExport";
import ListAltIcon from "@material-ui/icons/ListAlt";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import RateReviewIcon from "@material-ui/icons/RateReview";
import WidgetsIcon from "@mui/icons-material/Widgets";
import ListIcon from "@mui/icons-material/List";
import MapIcon from "@mui/icons-material/Map";

const Sidebar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);

  const handleResize = () => {
    if (window.innerWidth > 850) {
      setShowMediaIcons(false);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  return (
    <Fragment>
      <button
        className=" mobile-settingMenu2"
        onClick={() => setShowMediaIcons(!showMediaIcons)}
      >
        {showMediaIcons ? <ListIcon /> : <WidgetsIcon />}
      </button>

      <div
        className={showMediaIcons ? "mobile-sidebar" : "sidebar"}
        onClick={() => setShowMediaIcons(false)}
      >
        <Link to="/mechanic/dashboard">
          <p>
            <DashboardIcon /> Dashboard
          </p>
        </Link>

        <Link to="/mechanic/bookings">
          <p>
            <ListAltIcon />
            Bookings
          </p>
        </Link>

        <TreeView
          className="tree"
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ImportExportIcon />}
        >
          <TreeItem nodeId="1" label="Products">
            <nav>
              <Link to="/mechanic/products">
                <TreeItem nodeId="2" label="All" icon={<PostAddIcon />} />
              </Link>
            </nav>
            <nav>
              <Link to="/mechanic/product">
                <TreeItem nodeId="3" label="Create" icon={<AddIcon />} />
              </Link>
            </nav>
          </TreeItem>
        </TreeView>

        <Link to="/mechanic/map">
          <p>
            <MapIcon /> Map
          </p>
        </Link>
      </div>
    </Fragment>
  );
};

export default Sidebar;
