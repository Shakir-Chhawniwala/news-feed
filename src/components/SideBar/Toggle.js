import React from "react";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";

import ReorderIcon from "@material-ui/icons/Reorder";
import "./Toggle.css";

const Toggle = ({handleChange}) => {
  return (
    <div className="toggle-container">
      <h3 className="toggle-text">View Toggle</h3>
      <div className="toggle-icons-container">
        <div className="icon-card">
          <ReorderIcon
            style={{ fontSize: 60 }}
            onClick={handleChange}
          />
        </div>
        <div className="icon-list">
          <FormatListBulletedIcon
            style={{ fontSize: 60 }}
            onClick={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Toggle;
