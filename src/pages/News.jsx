import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import Form from "../components/Form.jsx";
import { getNews } from "../api";

export default function News() {
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("search");

  const [news, setNews] = React.useState([]);
  const [query, setQuery] = React.useState(
    typeFilter ? typeFilter : "javascript"
  );
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    if (!query) {
      return;
    }

    async function loadNews() {
      setLoading(true);
      try {
        const data = await getNews(query);
        setNews(data);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }

      setLoading(false);
    }

    loadNews();

    // fetch(
    //   `https://newsapi.org/v2/everything?q=${query}&pageSize=20&page=1&apiKey=ad42073aaabd468e840f30ff1eae084a`
    // )
    //   .then((res) => res.json())
    //   .then((data) => setNews(data.articles));
  }, [query]);
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

  function showNewsByQuery(query) {
    setQuery(query);
    setSearchParams({ search: `${query}` });
  }

  if (loading) {
    return <h1>loading...</h1>;
  }

  if (error) {
    return <h1>There is an error: {error.message}</h1>;
  }

  return newsElements ? (
    <div className="van-list-container">
      <h4>Enter search query to find news</h4>
      <Form onSubmit={showNewsByQuery} />
      {query ? <h1>Last news about {query}</h1> : ""}
      <div className="van-list">{newsElements}</div>
    </div>
  ) : (
    <>
      <h1>Enter search query to find news</h1>
      <Form onSubmit={showNewsByQuery} />
    </>
  );
}
