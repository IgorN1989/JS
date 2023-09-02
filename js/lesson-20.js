// const options = {
//   headers: {
//     Authorization: '998da77ec83644b1a32a6a45028d130c',
//   },
// };

// const url = 'https://newsapi.org/v2/everything?q=cat&language=en&pageSize=5&page=1';

// fetch(url, options)
//   .then(r => r.json())
//   .then(console.log);

// =================================================================
import NewsApiService from './lesson-20-news-service.js';
import LoadMoreBtn from './loadMoreBtn.js';

const refs = {
  searchForm: document.querySelector('.js-search-form'),
  articlesContainer: document.querySelector('.js-articles-container'),
  //   loadMoreBtn: document.querySelector('[data-action="load-more"]'),
};

const loadMoreBtn = new LoadMoreBtn({ selector: '[data-action="load-more"]', hidden: true });
const newsApiService = new NewsApiService();

console.log(loadMoreBtn);

refs.searchForm.addEventListener('submit', onSearch);
loadMoreBtn.refs.button.addEventListener('click', fetchArticles);

function onSearch(e) {
  e.preventDefault();

  newsApiService.query = e.currentTarget.elements.query.value;

  loadMoreBtn.show();
  newsApiService.resetPage();
  clearArticlesContainer();

  fetchArticles();
}

function fetchArticles() {
  loadMoreBtn.disable();
  newsApiService.fetchArticles().then(articles => {
    appendArticlesMarkup(articles);
    loadMoreBtn.enable();
  });
}

function appendArticlesMarkup(articles) {
  refs.articlesContainer.insertAdjacentHTML('beforeend', createMarkup(articles));
}

function createMarkup(arr) {
  return arr
    .map(
      ({ url, urlToImage, title, author, description }) => `<li>
        <a href="${url} target="_blank" rel="noopener noreferrer""
          ><article>
            <img src="${urlToImage}" alt="" width="240"/>
            <h2>${title}</h2>
            <p>Posted by: ${author}</p>
            <p>${description}</p></article
        ></a>
      </li>`
    )
    .join('');
}

function clearArticlesContainer() {
  refs.articlesContainer.innerHTML = '';
}
