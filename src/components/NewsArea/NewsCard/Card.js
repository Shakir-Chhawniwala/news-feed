import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import { Card } from "react-bootstrap";
import "./Card.css";

const Cards = ({
  title,
  summary,
  link,
  published,
  handleClick,
}) => {
  return (
    <Card className="card">
      <Card.Body className="body-container">
        <CloseIcon className="cross-icon" onClick={handleClick} />

        <Card.Text className="title-text">
          {title}
        </Card.Text>
        <Card.Text className="sum-text">
          {summary}...
        </Card.Text>
        <Card.Text className="date-published">{published}</Card.Text>
      </Card.Body>
      <div className="video-preview">
        <video controls width="200">
          <source src={link} type="video/mp4" />
        </video>
      </div>
    </Card>
  );
};

export default Cards;

