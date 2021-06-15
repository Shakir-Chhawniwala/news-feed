import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import "./NewsItem.css";
import Avatar from "@material-ui/core/Avatar";
import { Card } from "react-bootstrap";

const NewsItem = ({ title, summary, link, published }) => {
  return (
    <Card className="list-view-container">
      {/* // <div className="list-view-container"> */}
      <div className="list-items-box">
        <div className="video-box">
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            className="user-img"
          />
        </div>
        <div className="list-text-container">
          <h5 className="list-title-text">{title}</h5>
          {/* <p className="list-sum-text">{summary.substring(0,35)}</p> */}
          {/* <p className="list-date-view">{published}</p> */}
        </div>
      </div>
      <div className="icon-container">
        <CloseIcon className="icon" />
      </div>

      {/* // </div> */}
    </Card>
  );
};

export default NewsItem;
