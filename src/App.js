import React, { useEffect, useState } from "react";
import NewsArea from "./components/NewsArea/NewsArea";
import SideBar from "./components/SideBar/SideBar";
import "./App.css";
import axios from "axios";


function App() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
 const [state, setstate] = useState(true)
  

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      const res = await axios.get("https://api.first.org/data/v1/news");
      setNews(res.data.data);
      setLoading(false);
    };
    fetchNews();
  }, []);
 const removeCard = (key) => {
    setNews(news.slice(0, key).concat(news.slice(key + 1, news.length)));
  
 };
const handleClick = () => {
setstate(false)
}
  return (
    <div className="App">
      <div className="user-info">
        <SideBar handleClick={handleClick}/>
      </div>
      <div className="news-area">
        <NewsArea news={news} loading={loading} removeCard={removeCard}/>
      </div>
    </div>
  );
}

export default App;
