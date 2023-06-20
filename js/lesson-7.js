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

// const onGetPositionSuccess = (position) => {
//   console.log(('Це виклик onGetPositionSuccess'));
//   console.log(position);
// };

// const onGetPositionError = (error) => {
//   console.log('Це виклик onGetPositionError');
//   console.log(error);
// };

// window.navigator.geolocation.getCurrentPosition(
//   onGetPositionSuccess,
//   onGetPositionError
// );

// ====================================================================
// ====================================================================
// ====================================================================

// /**
//  * Test callback
//  * @param {*} arr array with some value
//  * @param {*} callback function add and logger
//  */
// function add(a, b) {
//   return a + b;
// }

// console.log(add(1, 2));

// const arr = [3, 10];

// function foo(array, callback) {
//   const firstEl = array[0];
//   const secondEl = array[1];
//   const result = callback(firstEl, secondEl);
//   console.log(callback);
//   console.log(result);
// }

// foo(arr, add);

// foo(arr, logger);

// function logger(a, b) {
//   alert(`Функція логгер: ${a}`);
//   alert(`Функція логгер: ${b}`);
// }

// ====================================================================

// let i = Date.now()

// function createProduct(partialProduct, callback) {
//   i += 1;
//   const obj = {
//     id: i,
//     ...partialProduct,
//   };
//   callback(obj);
// };

// function logProduct(product) {
//   console.log(product);
//  };

// function logTotalPrice({price, quantity}) {
//   console.log(price * quantity);
//   return price * quantity;
// };

// createProduct({
//   name: '🍎',
//   price: 30,
//   quantity: 3,
// }, logProduct);

// createProduct({
//   name: '🍋',
//   price: 20,
//   quantity: 5,
// }, logTotalPrice);

// createProduct({
//   name: '🍎',
//   price: 30,
//   quantity: 3,
// }, logTotalPrice);

// createProduct({
//   name: '🍋',
//   price: 20,
//   quantity: 5,
// }, logProduct);

// ====================================================================

// const TRANSACTION_LIMIT = 1000;

// const account = {
//   userName: 'Jacob',
//   balance: 3400,

//   withdraw(amount, onSuccess, onError) {
//     if (amount > this.balance) {
//       onError('Мало коштів');
//     } else if (amount > TRANSACTION_LIMIT) {
//       onError('Перевищенно ліміт');
//     } else {
//       this.balance -= amount;
//       onSuccess(`Списано ${amount}. Залишок = ${this.balance}`);
//     }
//   },

//   deposit(amount, onSuccess, onError) {
//     if (amount <= 0) {
//       onError('Значення має бути більше нуля');
//     } else if (amount > TRANSACTION_LIMIT) {
//       onError('Перевищенно ліміт');
//     } else {
//       this.balance += amount;
//       onSuccess(`Рахунок поповненно на ${amount}. Баланс = ${this.balance}`)

//     }
//   },
// };

// function handleSuccess(message) {
//   console.log(`✔ Success! ${message}`);
// }

// function handleError(message) {
//   console.log(`❌ Error! ${message}`);
// }

// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(3600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);
// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);

// ====================================================================

// function each(array, callback) {
//   for (const element of array) {
//     console.log(callback(element));
//   }
// }

// each([64, 49, 36, 25, 16], function (value) {
//   return value * 2;
// });

// each([64, 49, 36, 25, 16], function (value) {
//   return value - 10;
// });

// each([64, 49, 36, 25, 16], function (value) {
//   return Math.sqrt(value);
// });

// each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//   return Math.ceil(value);
// });

// each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//   return Math.floor(value);
// });

// ====================================================================

// let i = Date.now()

// const createProduct= (partialProduct, callback) => {
//   i += 1;
//   const product = {
//     id: i,
//     ...partialProduct,
//   };
//   callback(product);
// };

// const logProduct = product => console.log(product);

// const logTotalPrice = ({ price, quantity }) => console.log(price * quantity);

// createProduct({
//   name: '🍎',
//   price: 30,
//   quantity: 3,
// }, logProduct);

// createProduct({
//   name: '🍋',
//   price: 20,
//   quantity: 5,
// }, logTotalPrice);

// createProduct({
//   name: '🍎',
//   price: 30,
//   quantity: 3,
// }, logTotalPrice);

// createProduct({
//   name: '🍋',
//   price: 20,
//   quantity: 5,
// }, logProduct);

// ====================================================================

// const each = (array, callback) => {
//   const newArr = [];
//   for (const el of array) {
//     newArr.push(callback(el));
//   }
//   return newArr;
// };

// console.log(each([64, 49, 36, 25, 16], value => value * 2));

// console.log(each([64, 49, 36, 25, 16], value => value - 10));

// console.log(each([64, 49, 36, 25, 16], value => Math.sqrt(value)));

// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], value => Math.ceil(value)));

// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], value => Math.floor(value)));

// ====================================================================

// const logItems = items => {
//   console.log(items);

//   for (let i = 0; i < items.length; i += 1) {
//     console.log(`${i + 1} - ${items[i]}`);
//   }

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

// ====================================================================

// const logItems = items =>
//   items.forEach((item, idx) => {
//     console.log(`${idx + 1} - ${item}`);
//   });

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

// ====================================================================

// const printContactInformation = ({ names, phones }) => {
//   const nameList = names.split(',');
//   const phoneList = phones.split(',');

//   // for (let i = 0; i < nameList.length; i += 1) {
//   //   console.log(`${nameList[i]} : ${phoneList[i]}`);
//   // }
//   nameList.forEach((name, idx) => {
// console.log(`${name} - ${phoneList[idx]}`);
//   })
// }

// printContactInformation({
//   names: 'Jacob,William,Solomon,Artemis',
//   phones: '89001234567,89001112233,890055566377,890055566300',
// });

// ====================================================================

// function calculateAverage(...args) {
//   let total = 0;
//   for (let i = 0; i < args.length; i += 1) {
//     total += args[i];
//   }
//   return total / args.length;
// }

// console.log(calculateAverage(1, 2, 3, 4));
// console.log(calculateAverage(14, 8, 2));
// console.log(calculateAverage(27, 43, 2, 8, 36));

// const calculateAverage = (...args) => {
//   let total = 0;
//   args.forEach(el => (total += el));
//   return total / args.length;
// };

// console.log(calculateAverage(1, 2, 3, 4));
// console.log(calculateAverage(14, 8, 2));
// console.log(calculateAverage(27, 43, 2, 8, 36));

// ====================================================================
// ====================================================================
// ====================================================================

