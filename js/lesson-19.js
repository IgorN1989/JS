const form = document.querySelector('.js-search');
const list = document.querySelector('.list');
const BASE_URL = 'http://api.weatherapi.com/v1/forecast.json';
const API_KEY = 'c13ad7f0b65643a3977102428221712';

form.addEventListener('submit', onSearch);

function onSearch(evt) {
  evt.preventDefault();
  const {
    query: { value: searchValue },
    days: { value: daysValue },
  } = evt.currentTarget.elements;
  if (!searchValue) {
    alert('EMPTY FIELD!!!😮');
  }

  forecastApi(searchValue, daysValue).then(data => createMarkup(data.forecast.forecastday));
}

function createMarkup(arr) {
  const markup = arr
    .map(
      item => `<li>
        <img src="${item.day.condition.icon}" alt="">
        <span>${item.day.condition.text}</span>
        <h2>Day: ${item.date}</h2>
        <h3>${item.day.avgtemp_c}&#8451;</h3>
      </li>`
    )
    .join('');
  list.innerHTML = markup;
}

function forecastApi(name = 'Kiev', value = 7) {
  return fetch(`${BASE_URL}?key=${API_KEY}&q=${name}&days=${value}`)
    .then(resp => {
      if (!resp.ok) {
        throw new Error(resp.statusText);
      }
      return resp.json();
    })
    .catch(err => console.error(err));
}
