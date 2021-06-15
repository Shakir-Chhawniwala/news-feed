import React from 'react'
import NewsItem from './NewsItem';
import "./NewsList.css"

const NewsList = ({news}) => {

      const renderedItems = news.map((article) => {
        return (
          <NewsItem 
            key={article.id}
            title={article.title}
            summary={article.summary}
            link={article.link}
            published={article.published}
          />
        );
      });
    return (
        <div className="list-container__contain">
        {renderedItems}
        </div>
    )
}

export default NewsList
