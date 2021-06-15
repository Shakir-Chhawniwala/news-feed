import React from "react";
import Card from "./Card";
import "./CardList.css";

const NewsCard = ({news,loading,handleClick}) => {
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

export default NewsCard;
