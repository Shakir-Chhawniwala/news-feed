import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import "./List.css";
import Avatar from "@material-ui/core/Avatar";


const List = ({ title, summary,  published, handleClick }) => {
  return (
    <div className="list">
      <div className="list-items-box">
        <div className="video-box">
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            className="user-img"
          />
        </div>
        <div className="list-text-container">
          <h5 className="list-title-text">{title}...</h5>
          <p className="list-sum-text">{summary}</p>
          <p className="list-date-view">{published}</p>
        </div>
      </div>
      <div className="cross-icon-container">
        <CloseIcon className="icon" onClick={handleClick} />
      </div>
    </div>
  );
};

export default List;
