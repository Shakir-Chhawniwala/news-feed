import React from "react";
import Card from "./Card";
import "./CardView.css";

const CardView = ({news,loading,handleClick}) => {
if (loading) {
  return <h2>Loading...</h2>
}

  const renderedItems = news.map((article,index) => {
    return (
      <Card
        {...article}
        key={index}
        handleClick={() => handleClick(index)}
      />
    );
  });

  return <div className="card-container">{renderedItems}</div>;
};

export default CardView;
