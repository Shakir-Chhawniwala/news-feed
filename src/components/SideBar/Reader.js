import React from "react";
import "./Reader.css";
import Avatar from "@material-ui/core/Avatar";

const Reader = () => {
  return (
    <div className="user-card">
      <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        className="user-img"
      />

      <div className="welcome-msg">
        <h5>Hi Reader,</h5>
        <p>Here's your News!</p>
      </div>
    </div>
  );
};

export default Reader;
