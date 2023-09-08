// function getFruit(name) {
//   const fruits = {
//     strawberry: '🍓',
//     kiwi: '🥝',
//     apple: '🍎',
//   };

//   return new Promise(resolve => setTimeout(() => resolve(fruits[name]), 500));
// }

// function makeSmoothie() {
//   getFruit('apple').then(apple => {
//     console.log(apple);

//     getFruit('kiwi').then(kiwi => console.log(kiwi));
//   });
// }

// makeSmoothie();

// async function aMakeSmoothie() {
//   console.time('aMakeSmoothie');
//   const apple = await getFruit('apple');
//   console.log(apple);

//   const kiwi = await getFruit('kiwi');
//   console.log(kiwi);
//   console.timeEnd('aMakeSmoothie');
// }

// async function aMakeSmoothie() {
//   try {
//     console.time('aMakeSmoothie');
//     const apple = getFruit('apple');
//     const kiwi = getFruit('kiwi');
//     const berry = getFruit('strawberry');

//     const fruits = await Promise.all([apple, kiwi, berry]);
//     console.log(fruits);

//     console.timeEnd('aMakeSmoothie');

//     return fruits;
//   } catch {
//     console.log('ERROR');
//   }
// }

// aMakeSmoothie().then(fruits => console.log(fruits));

// ===============================================================

// function servicesCountry() {
//   return fetch(`https://restcountries.com/v3.1/name/Ukraine`).then(resp => {
//     if (!resp.ok) {
//       throw new Error(resp.statusText);
//     }

//     return resp.json();
//   })
//     // .then(data => {
//       // return fetch('===data.capital===')
//       //   .then(resp => {

//       // }).then()
//   // })
// }

// async function servicesCountry() {
//   const resp = await fetch('https://restcountries.com/v3.1/name/Ukraine');
//   if (!resp.ok) {
//     throw new Error(resp.statusText);
//   }

//   const data = await resp.json();

//   const respWeather = await fetch('===data.capital===');
//    if (!respWeather.ok) {
//     throw new Error(respWeather.statusText);
//   }

//   const dataWeather = await respWeather.json();
// }

// servicesCountry();

// ===============================================================

// async function servicesCountry() {
//   const resp1 = await fetch('https://restcountries.com/v3.1/name/Ukraine');
//   const resp2 = await fetch('https://restcountries.com/v3.1/name/Poland');
//   const resp3 = await fetch('https://restcountries.com/v3.1/name/Greece');
// }

// servicesCountry()

// async function servicesCountry() {
//   const countries = ['Ukraine', 'Poland', 'Greece'];
//   const responses = countries.map(async country => {
//     const resp = await fetch(`https://restcountries.com/v3.1/name/${country}`);

//     return resp.json();
//   });
//   // console.log(responses);
//   const data = await Promise.allSettled(responses);
//   console.log(data);
// }

// servicesCountry();

// ===============================================================

const elements = {
  form: document.querySelector('.js-search'),
  formContainer: document.querySelector('.js-form-container'),
  addField: document.querySelector('.js-add'),
  list: document.querySelector('.js-list'),
};

elements.addField.addEventListener('click', handlerAddField);
elements.form.addEventListener('submit', handlerSubmit);

function handlerAddField() {
  elements.formContainer.insertAdjacentHTML('beforeend', '<input type="text" name="country" />');
}

async function handlerSubmit(evt) {
  evt.preventDefault();

  const formData = new FormData(evt.currentTarget);
  const countries = formData
    .getAll('country')
    .map(item => item.trim())
    .filter(item => item)
    .filter((item, idx, arr) => arr.indexOf(item) === idx);

  try {
    const capitals = await servicesCountry(countries);
    const weather = await serviceWeather(capitals);
    elements.list.innerHTML = createMarkup(weather);
  } catch (err) {
    console.log(err);
  } finally {
    elements.formContainer.innerHTML = '<input type="text" name="country" />'
  }
}

async function servicesCountry(countries) {
  const BASE_URL = 'https://restcountries.com/v3.1/name/';

  const responses = countries.map(async country => {
    const resp = await fetch(`${BASE_URL}${country}`);
    if (!resp.ok) {
      // throw new Error(resp.statusText);
      return Promise.reject(resp.statusText);
    }

    return resp.json();
  });

  const data = await Promise.allSettled(responses);

  return data
    .filter(({ status }) => status === 'fulfilled')
    .map(({ value }) => value[0].capital[0]);
}

async function serviceWeather(capitals) {
  const BASE_URL = 'http://api.weatherapi.com/v1/';
  const END_POINT = 'current.json';
  const API_KEY = 'c13ad7f0b65643a3977102428221712';

  const responses = capitals.map(async capital => {
    const params = new URLSearchParams({
      key: API_KEY,
      q: capital,
      lang: 'uk',
    });
    const resp = await fetch(`${BASE_URL}${END_POINT}?${params}`);
    if (!resp.ok) {
      return Promise.reject(resp.statusText);
    }

    return resp.json();
  });

  const data = await Promise.allSettled(responses);

  return data
    .filter(({ status }) => status === 'fulfilled')
    .map(
      ({
        value: {
          current: {
            condition: { text, icon },
            temp_c,
          },
          location: { name, country },
        },
      }) => {
        return { text, icon, temp_c, name, country };
      }
    );
}

function createMarkup(arr) {
  return arr
    .map(
      ({ text, icon, temp_c, name, country }) => `
  <div class="weather-container">
    <li>
      <img src="${icon}" alt="${text}">
      <h3>${country}</h3>
      <h2>${name}</h2>
      <p>${text}</p>
      <p>${temp_c}\u2103</p>
    </li>
  </div>`
    )
    .join('');
}
