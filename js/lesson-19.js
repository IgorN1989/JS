const BASE_URL = 'http://api.weatherapi.com/v1/forecast.json';
const API_KEY = 'c13ad7f0b65643a3977102428221712';
function forecastApi(name = 'Kiev') {
  fetch(`${BASE_URL}?key=${API_KEY}&q=${name}&days=7`)
    .then(resp => {
      // console.log(resp);
      if (!resp.ok) {
        throw new Error(resp.statusText);
      }
      return resp.json();
    })
    .then(data => console.log(data))
    .catch(err => console.error(err));
}
forecastApi();
