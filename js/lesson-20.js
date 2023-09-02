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

// import NewsApiService from './lesson-20-news-service.js';
// import LoadMoreBtn from './loadMoreBtn.js';

// const refs = {
//   searchForm: document.querySelector('.js-search-form'),
//   articlesContainer: document.querySelector('.js-articles-container'),
//   //   loadMoreBtn: document.querySelector('[data-action="load-more"]'),
// };

// const loadMoreBtn = new LoadMoreBtn({ selector: '[data-action="load-more"]', hidden: true });
// const newsApiService = new NewsApiService();

// console.log(loadMoreBtn);

// refs.searchForm.addEventListener('submit', onSearch);
// loadMoreBtn.refs.button.addEventListener('click', fetchArticles);

// function onSearch(e) {
//   e.preventDefault();

//   newsApiService.query = e.currentTarget.elements.query.value;

//   loadMoreBtn.show();
//   newsApiService.resetPage();
//   clearArticlesContainer();

//   fetchArticles();
// }

// function fetchArticles() {
//   loadMoreBtn.disable();
//   newsApiService.fetchArticles().then(articles => {
//     appendArticlesMarkup(articles);
//     loadMoreBtn.enable();
//   });
// }

// function appendArticlesMarkup(articles) {
//   refs.articlesContainer.insertAdjacentHTML('beforeend', createMarkup(articles));
// }

// function createMarkup(arr) {
//   return arr
//     .map(
//       ({ url, urlToImage, title, author, description }) => `<li>
//         <a href="${url} target="_blank" rel="noopener noreferrer""
//           ><article>
//             <img src="${urlToImage}" alt="" width="240"/>
//             <h2>${title}</h2>
//             <p>Posted by: ${author}</p>
//             <p>${description}</p></article
//         ></a>
//       </li>`
//     )
//     .join('');
// }

// function clearArticlesContainer() {
//   refs.articlesContainer.innerHTML = '';
// }

// =================================================================

// Створи фільмотеку з популярними фільмами, для цього використай
// https://developer.themoviedb.org/reference/trending-movies

// Щоб отримати постер фільму потрібно підставити url з відповіді від бекенду та url з документації
// https://developer.themoviedb.org/docs/image-basics

// Відмалюй картки з фільмами
// Приклад картки  => https://prnt.sc/Hi_iLLg7Nd1F

// Реалізуй пагінацію
// 1 Кнопка "Load More"
// 2 Infinity scroll (https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)

// api_key: '345007f9ab440e5b86cef51be6397df1';

// =================================================================

// function serviceFilms(currentPage = '1') {
//   const params = new URLSearchParams({
//     page: currentPage,
//     api_key: '345007f9ab440e5b86cef51be6397df1',
//   });

//   //   fetch(
//   //     `https://api.themoviedb.org/3/trending/movie/week?api_key=345007f9ab440e5b86cef51be6397df1&page=${currentPage}`
//   //   );

//   return fetch(`https://api.themoviedb.org/3/trending/movie/week?${params}`).then(resp =>
//     resp.json()
//   );
// }

// serviceFilms(2)
//   .then(data => {
//     if ('success' in data && !data.success) {
//       throw new Error(data.status_message);
//     }
//     console.log(data);
//   })
//   .catch(err => console.log(err));

// =================================================================
// LOAD MORE BUTTON
// =================================================================

// const elements = {
//   container: document.querySelector('.js-movie-list'),
//   loadBtn: document.querySelector('.js-load-more'),
// };

// const defaults = {
//   poster: 'https://www.reelviews.net/resources/img/default_poster.jpg',
//   date: 'XXXX-XX-XX',
//   title: 'Title not found',
//   vote: 'XX.XX',
// };
// let page = 1;

// elements.loadBtn.addEventListener('click', handlerLoadMore);

// function handlerLoadMore() {
//   page += 1;
//   serviceFilms(page)
//     .then(data => {
//       elements.container.insertAdjacentHTML('beforeend', createMarkup(data.results));

//       if (data.page >= data.total_pages) {
//         elements.loadBtn.classList.replace('load-more', 'load-more-hidden');
//       }
//     })
//     .catch(err => elements.loadBtn.classList.replace('load-more', 'load-more-hidden'));
// }

// function createMarkup(arr) {
//   return arr
//     .map(
//       ({ poster_path, release_date, original_title, vote_average }) => `
//       <li class="movie-card">
//         <img src="${
//           poster_path ? 'https://image.tmdb.org/t/p/w300' + poster_path : defaults.poster
//         }" alt="${original_title || defaults.title}" />
//         <div class="movie-info">
//           <h2>${original_title || defaults.title}</h2>
//           <p>Release Date: ${release_date || defaults.date}</p>
//           <p>Vote Average: ${vote_average || defaults.vote}</p>
//         </div>
//       </li>`
//     )
//     .join('');
// }

// function serviceFilms(currentPage = '1') {
//   const params = new URLSearchParams({
//     page: currentPage,
//     api_key: '345007f9ab440e5b86cef51be6397df1',
//   });

//   return fetch(`https://api.themoviedb.org/3/trending/movie/week?${params}`).then(resp => {
//     if (!resp.ok) {
//       throw new Error('Error');
//     }

//     return resp.json();
//   });
// }

// serviceFilms()
//   .then(data => {
//     elements.container.insertAdjacentHTML('beforeend', createMarkup(data.results));
//     if (data.page < data.total_pages) {
//       elements.loadBtn.classList.replace('load-more-hidden', 'load-more');
//     }
//   })
//   .catch(err => elements.loadBtn.classList.replace('load-more', 'load-more-hidden'));

// =================================================================
// INFINITY SCROLL
// =================================================================

// const elements = {
//   container: document.querySelector('.js-movie-list'),
//   quard: document.querySelector('.js-quard'),
// };

// const defaults = {
//   poster: 'https://www.reelviews.net/resources/img/default_poster.jpg',
//   date: 'XXXX-XX-XX',
//   title: 'Title not found',
//   vote: 'XX.XX',
// };
// let page = 1;
// const options = {
//   //   root: null,
//   rootMargin: '300px',
//   //   threshold: 0,
// };
// const observer = new IntersectionObserver(handlerLoadMore, options);

// function handlerLoadMore(entries) {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       page += 1;
//       serviceFilms(page)
//         .then(data => {
//           elements.container.insertAdjacentHTML('beforeend', createMarkup(data.results));

//           if (data.page >= data.total_pages) {
//             observer.unobserve(elements.quard);
//           }
//         })
//         .catch(err => console.log(err));
//     }
//   });
// }

// function createMarkup(arr) {
//   return arr
//     .map(
//       ({ poster_path, release_date, original_title, vote_average }) => `
//       <li class="movie-card">
//         <img src="${
//           poster_path ? 'https://image.tmdb.org/t/p/w300' + poster_path : defaults.poster
//         }" alt="${original_title || defaults.title}" />
//         <div class="movie-info">
//           <h2>${original_title || defaults.title}</h2>
//           <p>Release Date: ${release_date || defaults.date}</p>
//           <p>Vote Average: ${vote_average || defaults.vote}</p>
//         </div>
//       </li>`
//     )
//     .join('');
// }

// function serviceFilms(currentPage = '1') {
//   const params = new URLSearchParams({
//     page: currentPage,
//     api_key: '345007f9ab440e5b86cef51be6397df1',
//   });

//   return fetch(`https://api.themoviedb.org/3/trending/movie/week?${params}`).then(resp => {
//     if (!resp.ok) {
//       throw new Error('Error');
//     }

//     return resp.json();
//   });
// }

// serviceFilms()
//   .then(data => {
//     elements.container.insertAdjacentHTML('beforeend', createMarkup(data.results));
//     if (data.page < data.total_pages) {
//       observer.observe(elements.quard);
//     }
//   })
//   .catch(err => console.log(err));
