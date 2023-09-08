function getFruit(name) {
  const fruits = {
    strawberry: '🍓',
    kiwi: '🥝',
    apple: '🍎',
  };

  return new Promise(resolve => setTimeout(() => resolve(fruits[name]), 500));
}

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
//   });
// }

async function servicesCountry() {
  const resp = await fetch('https://restcountries.com/v3.1/name/Ukraine');
  if (!resp.ok) {
    throw new Error(resp.statusText);
  }

  const data = await resp.json();
  console.log(data);
}

servicesCountry();