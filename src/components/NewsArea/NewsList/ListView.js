import React from "react";
import List from "./List";
import "./ListView.css";

const ListView = ({ news, loading, handleClick }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  const renderedItems = news.map((article, index) => {
    return (
      <List {...article} key={index} handleClick={() => handleClick(index)} />
    );
  });
  return <div className="list-container">{renderedItems}</div>;
};

export default ListView;
