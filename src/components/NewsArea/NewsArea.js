import React, { useState } from "react";
import CardView from "./NewsCard/CardView";
import Pagination from "../Pagination/Pagination";
import ListView from "./NewsList/ListView";

const NewsArea = ({ news, removeCard, loading, active }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [newsPerPage] = useState(5);
  


  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = news.slice(indexOfFirstNews, indexOfLastNews);

  return (
    <div>
      {active ? (
        <ListView
          news={currentNews}
          handleClick={removeCard}
          loading={loading}
        />
      ) : (
        <CardView news={currentNews} handleClick={removeCard} />
      )}
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={news.length}
        pageSize={newsPerPage}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default NewsArea;
