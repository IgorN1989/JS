// const form = document.querySelector('.js-search');
// const list = document.querySelector('.list');
// const BASE_URL = 'http://api.weatherapi.com/v1/forecast.json';
// const API_KEY = 'c13ad7f0b65643a3977102428221712';

// form.addEventListener('submit', onSearch);

// function onSearch(evt) {
//   evt.preventDefault();
//   const {
//     query: { value: searchValue },
//     days: { value: daysValue },
//   } = evt.currentTarget.elements;
//   if (!searchValue) {
//     alert('EMPTY FIELD!!!😮');
//   }

//   forecastApi(searchValue, daysValue).then(data => createMarkup(data.forecast.forecastday));
// }

// function createMarkup(arr) {
//   const markup = arr
//     .map(
//       item => `<li>
//         <img src="${item.day.condition.icon}" alt="">
//         <span>${item.day.condition.text}</span>
//         <h2>Day: ${item.date}</h2>
//         <h3>${item.day.avgtemp_c}&#8451;</h3>
//       </li>`
//     )
//     .join('');
//   list.innerHTML = markup;
// }

// function forecastApi(name = 'Kiev', value = 7) {
//   return fetch(`${BASE_URL}?key=${API_KEY}&q=${name}&days=${value}`)
//     .then(resp => {
//       if (!resp.ok) {
//         throw new Error(resp.statusText);
//       }
//       return resp.json();
//     })
//     .catch(err => console.error(err));
// }

// ===================================================================

// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   })
//   .then(data => {
//     // Data handling
//   })
//   .catch(error => {
//     // Error handling
//   });

// let globalVariable; // undefined

// // Initializing data fetching
// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => response.json())
//   .then(users => {
//     console.log('users inside then callback: ', users);

//     // Writing the result to a global variable
//     globalVariable = users;

//     // Everything is ok here, the data is in the variable
//     console.log('globalVariable inside fetch callback: ', globalVariable);
//   });

// // No async data here
// console.log('globalVariable outside fetch: ', globalVariable); // undefined

// const headers = new Headers({
//   'Content-Type': 'application/json',
//   'X-Custom-Header': 'custom value',
// });

// headers.append('Content-Type', 'text/bash');
// headers.append('X-Custom-Header', 'custom value');
// headers.has('Content-Type'); // true
// headers.get('Content-Type'); // "text/bash"
// headers.set('Content-Type', 'application/json');
// headers.delete('X-Custom-Header');

// ===================================================================

// const refs = {
//   cardContainer: document.querySelector('.js-card-container'),
//   searchForm: document.querySelector('.js-search-form'),
// };

// refs.searchForm.addEventListener('submit', onSearch);

// function onSearch(e) {
//   e.preventDefault();

//   const form = e.currentTarget;
//   const searchQuery = form.elements.query.value;

//   fetchPokemonById(searchQuery)
//     .then(renderPokemoncard)
//     .catch(onFetchError)
//     .finally(() => form.reset());
// }

// function fetchPokemonById(pokemonId) {
//   const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;

//   return fetch(url).then(responce => {
//     return responce.json();
//   });
// }

// function createMarkup({ sprites, name, weight, height, abilities }) {
//   return `<div class="card">
//        <div class="card-img-top">
//          <img src="${sprites.front_default}" alt="${name}" />
//        </div>
//        <div class="card-body">
//          <h2 class="card-title">Name: ${name}</h2>
//          <p class="card-text">Weight: ${weight}</p>
//          <p class="card-text">Height: ${height}</p>

//          <p class="card-text">
//            <b>Abilities</b>
//          </p>
//          <ul class="list-group">
//            <li class="list-group-item">${abilities[0].ability.name}</li>
//          </ul>
//        </div>
//      </div>;`;
// }

// function renderPokemoncard(pokemon) {
//   const markup = createMarkup(pokemon);
//   refs.cardContainer.innerHTML = markup;
// }

// function onFetchError(error) {
//   alert(error);
//   console.log('Не змогли знайти вашого покемона');
// }

// ===================================================================

// fetch(
//   'https://pixabay.com/api/?key=32119761-f60b77538f277e08da301bce8&q=cat&image_type=vector&orientation=horizontal'
// )
//   .then(r => r.json())
//   .then(console.log());

// ===================================================================

// const options = {
//   method: 'GET',
// };

// console.log(fetch('https://rickandmortyapi.com/api/character', options));

// fetch('https://rickandmortyapi.com/api/character', options)
//   .then(responce => {
//     console.log(responce);
//     if (!responce.ok) {
//       throw new Error(responce.statusText);
//     }

//     // JSON.parse()

//     return responce.json();
//   })
//   //   .then(function (data) {
//   //     console.log(data);
//   //   });
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => console.log(err));

// ===================================================================

// const elements = {
//   searchForm: document.querySelector('.js-search-form'),
//   list: document.querySelector('.js-list'),
// };

// elements.searchForm.addEventListener('submit', handlerSearch);

// function handlerSearch(evt) {
//   evt.preventDefault();

//   const { city, days } = evt.currentTarget.elements;

//   serviceWeather(city.value, days.value)
//     .then(data => (elements.list.innerHTML = createMarkup(data.forecast.forecastday)))
//     .catch(err => console.log(err))
//     .finally(() => evt.target.reset());
// }

// function serviceWeather(city, days) {
//   const BASE_URL = 'http://api.weatherapi.com/v1';
//   const END_POINT = '/forecast.json';
//   const API_KEY = 'c13ad7f0b65643a3977102428221712';

//   const params = new URLSearchParams({
//     key: API_KEY,
//     q: city,
//     days: days,
//     lang: 'uk',
//   });
//   //   console.log(params.toString());

//   return fetch(`${BASE_URL}${END_POINT}?${params}`).then(resp => {
//     if (!resp.ok) {
//       //   console.log(resp);
//       throw new Error(resp.statusText);
//     }

//     return resp.json();
//   });

//   //   fetch(`${BASE_URL}${END_POINT}?key=${API_KEY}&q=${city}&days=${days}&lang=uk`);
// }

// function createMarkup(arr) {
//   return arr
//     .map(
//       ({
//         date,
//         day: {
//           avgtemp_c,
//           condition: { icon, text },
//         },
//       }) => `<li class="weather-card">
//         <img class="weather-icon" src="${icon}" alt="${text}" />
//         <h2 class="date">${date}</h2>
//         <h3 class="weather-text">${text}</h3>
//         <h3 class="temperature">${avgtemp_c}\u2103</h3>
//       </li>`
//     )
//     .join('');
// }
