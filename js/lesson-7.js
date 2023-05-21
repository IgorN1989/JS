// const fnA = function (message, callback) {
//     console.log(message);
//     console.log(callback);
//     callback(100);
// };

// const fnB = function (number) {
//     console.log('Це лог при виклику fnB', number);
// }

// fnA('qweqwe', fnB)

// ====================================================================

// const doMath = function (a, b, callback) {
//   const result = callback(a, b);
//   console.log(result);
// };

// const add = function (x, y) {
//   return x + y;
// };

// const sub = function (x, y) {
//   return x - y;
// };

// doMath(2, 3, add);
// doMath(10, 8, sub);

// doMath(10, 8, function (x, y) {
//   return x + y;
// });

// ====================================================================

// const filter = function (array, test) {
//   const filteredArray = [];

//   for (const el of array) {
//     console.log(el);
//     const passed = test(el);

//     if (passed) {
//       filteredArray.push(el);
//     }
//   }

//   return filteredArray;
// };

// const callback1 = function (value) {
//   return value >= 3;
// };

// const r1 = filter([1, 2, 3, 4, 5], callback1);
// console.log(r1);

// const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], function (value) {
//   return value <= 4;
// });
// console.log(r2);

// const fruits = [
//   { name: 'apples', quantity: 200, isFresh: true },
//   { name: 'grapes', quantity: 150, isFresh: false },
//   { name: 'bananas', quantity: 100, isFresh: true },
// ];

// const getFruitsWithQuantity = function (fruit) {
//     return fruit.quantity >= 120;
// }

// const r3 = filter(fruits, getFruitsWithQuantity);
// console.log(r3);

// ====================================================================

// const fnA = function (parameter) {
//     const innerVariable = 'значення внутряшньої змінної функції fnA';

//     const innerFunction = function () {
//         console.log(parameter);
//         console.log(innerVariable);
//         console.log('Це виклик innerFunction');
//     };

//     return innerFunction;
// };

// const fnB = fnA(555);

// fnB();

// console.log(fnB);

// ====================================================================

// const makeDish = function (sheffName, dish) {
//   console.log(`${sheffName} готує ${dish}`);
// };

// // makeDish('Mango', 'пиріжок');
// // makeDish('Mango', 'омлет');
// // makeDish('Mango', 'чай');

// // makeDish('Poly', 'котлета');
// // makeDish('Poly', 'суп');
// // makeDish('Poly', 'кава');

// const makeSheff = function (name) {
//   const makeDish = function (dish) {
//     console.log(`${name} готує ${dish}`);
//     };

//     return makeDish;
// };

// const mango = makeSheff('Mango');

// // console.log(mango);

// mango('котлети');
// mango('пиріжок');

// const poly = makeSheff('Poly');

// poly('кава');
// poly('суп');

// ====================================================================

// const floatingPoint = 3.456789;
// const someInt = Math.round(floatingPoint);
// const withDecimals = Number(floatingPoint.toFixed(2));

// // const rounder = function (number, places) {
// //   return Number(number.toFixed(places));
// // };

// // console.log(rounder(3.4567, 2));
// // console.log(rounder(3.4567, 3));
// // console.log(rounder(5.1234, 2));
// // console.log(rounder(3.4567, 3));

// const rounder = function(places) {
//   return function (num) {
//     return Number(num.toFixed(places));
//   };
// }

// const rounder2 = rounder(2);
// const rounder3 = rounder(3);

// console.log(rounder2(3.4567));
// console.log(rounder3(3.4567));
// console.log(rounder2(5.1234));
// console.log(rounder3(3.4567));

// ====================================================================

// const salaryManagerFactory = function (employeeName, baseSalary) {
//   let salary = baseSalary;

//   return {
//     raise(amount) {
//       if (amount > 1000) {
//         return 'What!?';
//       }

//       salary += amount;
//     },

//     lower(amount) {
//       salary -= amount;
//     },

//     current() {
//       return `Поточна зарплатня ${employeeName} - ${salary}`;
//     },
//   };
// };

// const salaryManager = salaryManagerFactory('Mango', 5000);

// // console.log(salaryManager);
// console.log(salaryManager.current());
// console.log(salaryManager.raise(10000000));
// console.log(salaryManager.current());
// console.log(salaryManager.raise(100));
// console.log(salaryManager.current());

// ====================================================================

// const add = function (a, b, c) {
//   // console.log(a, b, c);
//   console.log(arguments);
//   return a + b + c;
// };

// const addArrow = (...args) => {
//   // console.log(a, b, c);
//   console.log(args);
//   // return a + b + c;
// };

// const addArrow1 = (a, b, c) => a + b + c;

// console.log(add(5, 10, 15));
// console.log(addArrow(5, 10, 15));

// ====================================================================

// const fnA = function () {
//   return {
//     a: 5,
//   };
// };

// console.log(fnA());

// const arrowFnA = () => ({ arrowA: 5, });

// console.log(arrowFnA());

// ====================================================================

const onGetPositionSuccess = (position) => {
  console.log(('Це виклик onGetPositionSuccess'));
  console.log(position);
};

const onGetPositionError = (error) => {
  console.log('Це виклик onGetPositionError');
  console.log(error);
};

window.navigator.geolocation.getCurrentPosition(
  onGetPositionSuccess,
  onGetPositionError
);

// ====================================================================
// ====================================================================
// ====================================================================
