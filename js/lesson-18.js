// const promise = new Promise((resolve, reject) => {
//   const canFulfill = Math.random() > 0.5;

//   setTimeout(() => {
//     if (canFulfill) {
//       resolve('OK');
//     }
//     reject('ERROR');
//   }, 500);
// });

// // promise.then(onFulfilled, onFulfilled)

// function onFulfilled(result) {
//   console.log(result);
// }

// function onRejected(error) {
//   console.log(error);
// }

// promise
//   .then(onFulfilled)
//   .then(
//     x => {console.log(x);
//       return 10;
//       })
//       .then(y => {
//           console.log(y);
//       }).catch(error => console.log(error))
//       .finally(() => console.log('я буду виконан в любому випадку'))

// const makeOrder = dish => {
//   const DELAY = 1000;

//   return new Promise((resolve, reject) => {
//     const passed = Math.random() > 0.5;

//     setTimeout(() => {
//       if (passed) {
//         resolve('Ось ваша страва');
//       }

//       reject('вибачьте, закінчились продукти');
//     }, DELAY);
//   });
// };

// makeOrder('пиріжок').then(onMakeOrderSuccess).catch(onMakeOrderError)

// function onMakeOrderSuccess(result) {
//   console.log('onMakeOrderSuccess');
//   console.log(result);
// }

// function onMakeOrderError(error) {
//   console.log('onMakeOrderError');
//   console.log(error);
// }

// const makeOrder = (dish, onSuccess, onError) => {
//   return new Promise((resolve, reject) => {
//     const passed = Math.random() > 0.5;

//     if (passed) {
//       resolve(`Ось ваша страва ${dish}`);
//     }

//     reject('вибачьте, закінчились продукти');
//   });
// };

// makeOrder('пиріжок').then(onMakeOrderSuccess).catch(onMakeOrderError)

// function onMakeOrderSuccess(result) {
//   console.log('onMakeOrderSuccess');
//   console.log(result);
// }

// function onMakeOrderError(error) {
//   console.log('onMakeOrderError');
//   console.log(error);
// }

// ========================================================
// ========================================================
// ========================================================
// ========================================================
// ========================================================

// const promise = new Promise((resolve, reject) => {
//   const canFulfill = Math.random() > 0.5;

//   setTimeout(() => {
//     if (canFulfill) {
//       resolve('Проміс виконався з результатом (виконано, fulfilled)');
//     }

//     reject('Проміс виконався з помилкою (відхилено, rejected)');
//   }, 500);
// });

// console.log(promise);

// // promise.then(
// //   result => {
// //     console.log(`✅ ${result}`);
// //   },
// //   error => {
// //     console.log(`❌ ${error}`);
// //   }
// // );

// promise.then(onFulfilled, onRejected);

// function onFulfilled(result) {
//   console.log('onFulfilled -> onFulfilled');
//   console.log(`✅ ${result}`);
// }

// function onRejected(error) {
//   console.log('onRejected -> onRejected');
//   console.log(`❌ ${error}`);
// }

// ========================================================

// const promise = new Promise((resolve, reject) => {
//   const canFulfill = Math.random() > 0.5;

//   setTimeout(() => {
//     if (canFulfill) {
//       resolve('Проміс виконався з результатом (виконано, fulfilled)');
//     }

//     reject('Проміс виконався з помилкою (відхилено, rejected)');
//   }, 500);
// });

// // promise.then(result => {
// //   console.log(result);

// //   return 5;
// // })
// //   .then(x => {
// //     console.log(x);

// //     return 10;
// //   })
// //   .then(y => {
// //   console.log(y);
// // })

// promise
//   .then(onFulfilled)
//   .then(x => {
//     console.log(x);

//     return 10;
//   })
//   .then(y => console.log(y))
//   .catch(error => console.log(error))
//   .finally(() => console.log('Буде виконано в будь-якому випадку'));

// function onFulfilled(result) {
//   console.log('onFulfilled -> onFulfilled');
//   console.log(`✅ ${result}`);
// }

// function onRejected(error) {
//   console.log('onRejected -> onRejected');
//   console.log(`❌ ${error}`);
// }

// ========================================================

// const makeOrder = (dish, onSuccess, onError) => {
//   const DELAY = 500;

//   const passed = Math.random() > 0.5;

//   setTimeout(() => {
//     if (passed) {
//       onSuccess('Ось ваша страва')
//     } else {
//       onError('Вибачьте, страви не має')
//     }
//     return 5;
//   }, DELAY)
// };

// makeOrder('пиріжек', onMakeOrderSuccess, onMakeOrderError)

// function onMakeOrderSuccess(result) {
//   console.log('onMakeOrderSuccess');
//   console.log(result);
// }

// function onMakeOrderError(error) {
//   console.log('onMakeOrderSuccess');
//   console.log(error);
// }

// const makeOrder = dish => {
//   const DELAY = 500;

//   return new Promise((resolve, reject) => {
//     const passed = Math.random() > 0.5;
//     setTimeout(() => {
//       if (passed) {
//         resolve(`✅Ось ваша страва ${dish}`);
//       }

//       reject(`❌Вибачьте, страви ${dish} не має`);
//     }, DELAY);
//   });
// };

// makeOrder('пиріжек').then(onMakeOrderSuccess).catch(onMakeOrderError);

// function onMakeOrderSuccess(result) {
//   console.log('onMakeOrderSuccess');
//   console.log(result);
// }

// function onMakeOrderError(error) {
//   console.log('onMakeOrderSuccess');
//   console.log(error);
// }

// ========================================================

// const makeOrder = dish => {
//   return Promise.resolve(`✅Ось ваша страва ${dish}`)
// };

// makeOrder('пиріжек').then(onMakeOrderSuccess)

// function onMakeOrderSuccess(result) {
//   console.log('onMakeOrderSuccess');
//   console.log(result);
// }

// function onMakeOrderError(error) {
//   console.log('onMakeOrderSuccess');
//   console.log(error);
// }

// ========================================================

// const fetchPokemonById = id => {
//   return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(r => r.json());
// };

// fetchPokemonById(1).then(onFetchSuccess).catch(onFetchError);
// fetchPokemonById(2).then(onFetchSuccess).catch(onFetchError);
// fetchPokemonById(3).then(onFetchSuccess).catch(onFetchError);

// function onFetchSuccess(pokemon) {
//   console.log('onFetchSuccess -> onFetchSuccess');
//   console.log(pokemon);
// }

// function onFetchError(error) {
//   console.log('onFetchError -> onFetchError');
//   console.log('Це в блоці catch');
//   console.log(error);
// }

// ========================================================

// const makePromise = () => {
//   return new Promise((resolve, reject) => {
//     const passed = Math.random() > 0.5;

//     setTimeout(() => {
//       if (passed) {
//         resolve('✅Це resolve');
//       }

//       reject('⛔Це reject');
//     }, 500);
//   });
// };

// makePromise()
//   .then(result => console.log(result))
//   .catch(error => console.log(error));

// ========================================================

// let raceCounter = 0;

// const horses = ['Secretariat', 'Eclipse', 'West Australian', 'Flying Fox', 'Seabiscuit'];

// const refs = {
//   startBtn: document.querySelector('.js-race-btn'),
//   winnerField: document.querySelector('.js-winner'),
//   progressField: document.querySelector('.js-progress'),
//   tableBody: document.querySelector('.js-results-table > tbody'),
// };

// refs.startBtn.addEventListener('click', onStart);

// function onStart() {
//   raceCounter += 1;
//   const promises = horses.map(run);

//   updateWinnerField('');
//   updateProgressField('🟢🟢🟢Заїзд почався! Ставки не приймаються!');

//   determineWinner(promises);
//   waitForAll(promises);
// }

// function getRandomTime(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// function run(horse) {
//   return new Promise(resolve => {
//     const time = getRandomTime(2000, 3500);

//     setTimeout(() => {
//       resolve({ horse, time });
//     }, time);
//   });
// }

// function determineWinner(horsesP) {
//   Promise.race(horsesP).then(({ horse, time }) => {
//     updateWinnerField(`🏆🏆🏆Переможець ${horse}, фінішував за ${time} часу`);
//     updateResultsTable({ horse, time, raceCounter });
//   });
// }

// function waitForAll(horsesP) {
//   Promise.all(horsesP).then(x => {
//     updateProgressField('📢📢📢Заїзд завершено. Приймаються ставки');
//   });
// }

// function updateWinnerField(message) {
//   refs.winnerField.textContent = message;
// }

// function updateProgressField(message) {
//   refs.progressField.textContent = message;
// }

// function updateResultsTable({ horse, time, raceCounter }) {
//   const tr = `<tr><td>${raceCounter}</td><td>${horse}</td><td>${time}</td></tr>`;
//   refs.tableBody.insertAdjacentHTML('beforeend', tr);
// }
