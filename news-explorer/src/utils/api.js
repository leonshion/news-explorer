import { NEWS_API_KEY, NEWS_API_BASE_URL } from './constants';

export const searchNews = (query) => {
  const today = new Date();
  const lastMonth = new Date(today);
  lastMonth.setMonth(today.getMonth() - 1);
  const from = lastMonth.toISOString().split('T')[0];
  const to = today.toISOString().split('T')[0];

  return fetch(
    `${NEWS_API_BASE_URL}/everything?q=${encodeURIComponent(query)}&from=${from}&to=${to}&pageSize=100&sortBy=publishedAt&language=es&apiKey=${NEWS_API_KEY}`,
    { headers: { 'Accept': 'application/json' } }
  )
    .then((res) => {
      if (!res.ok) throw new Error(`Error: ${res.status}`);
      return res.json();
    })
    .then((data) => {
      if (!data || !Array.isArray(data.articles)) return [];
      return data.articles.filter((a) => a.title && a.title !== '[Removed]');
    })
    .catch((err) => {
      console.error('Error al buscar noticias:', err);
      throw err;
    });
};
