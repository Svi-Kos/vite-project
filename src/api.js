export async function getNews(query) {
  const res = await fetch(
    `https://newsapi.org/v2/everything?q=${query}&pageSize=20&page=1&apiKey=ad42073aaabd468e840f30ff1eae084a`
  );

  if (!res.ok) {
    throw {
      message: "failed to fetch",
      status: res.status,
    };
  }

  const data = await res.json();

  return data.articles;
}
