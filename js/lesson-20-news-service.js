const API_KEY = '998da77ec83644b1a32a6a45028d130c';
const BASE_URL = 'https://newsapi.org/v2';

export default class NewsApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchArticles() {
    const options = {
      headers: {
        Authorization: API_KEY,
      },
    };

    const url = `${BASE_URL}/everything?q=${this.searchQuery}&language=en&pageSize=2&page=${this.page}`;

    return fetch(url, options)
      .then(responce => responce.json())
      .then(({ articles }) => {
        this.incrementPage();

        return articles;
      });
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
