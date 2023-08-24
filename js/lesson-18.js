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

// const promise = new Promise()
