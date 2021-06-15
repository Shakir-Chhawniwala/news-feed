import React from "react";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";

import ReorderIcon from "@material-ui/icons/Reorder";
import "./Toggle.css";

const Toggle = () => {
  return (
    <div className="toggle-container">
      <h3 className="view-text">View Toggle</h3>
      <div className="icon-container">
        <div className="icon1">
          <ReorderIcon style={{ fontSize: 60 }} />
        </div>
        <div className="icon2">
          <FormatListBulletedIcon style={{ fontSize: 60 }} />
        </div>
      </div>
    </div>
  );
};

export default Toggle;
