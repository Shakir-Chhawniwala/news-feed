import React, { useState } from "react";
import CardList from "./NewsCard/CardList";
import Pagination from "../Pagination/Pagination";
// import NewsList from "./NewsList";

const NewsArea = ({ news, removeCard }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [newsPerPage] = useState(6);

  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = news.slice(indexOfFirstNews, indexOfLastNews);

  return (
    <div>
      {/* <NewsList news={currentNews} /> */}

      <CardList news={currentNews} handleClick={removeCard} />
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
