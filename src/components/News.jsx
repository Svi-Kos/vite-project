import React from "react";
import { Link } from "react-router-dom";

export default function News() {
  const [news, setNews] = React.useState([]);
  React.useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=javascript&pageSize=20&page=1&apiKey=ad42073aaabd468e840f30ff1eae084a"
    )
      .then((res) => res.json())
      .then((data) => setNews(data.articles));
  }, []);
  console.log(news);
  const newsElements = news.map((article) => (
    <div key={article.publishedAt} className="van-tile">
      <Link to={`${article.url}`}>
        <img src={article.urlToImage} />
        <div className="van-info">
          <h3>{article.title}</h3>
        </div>
      </Link>
    </div>
  ));

  return (
    <div className="van-list-container">
      <h1>Last news about Java Script</h1>
      <div className="van-list">{newsElements}</div>
    </div>
  );
}
