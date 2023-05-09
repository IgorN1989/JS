// const fnA = function (message, callback) {
//     console.log(message);
//     // console.log(callback);
//     callback(100);
// }

// const fnB = function (number) {
//     console.log("world", number);
// }

// fnA("hello", fnB)

// const doMath = function (a, b, callback) {
//   const result = callback(a, b);
//   console.log(result);
// };

// doMath(2, 3, function (x, y) {
//   return x + y;
// });

// doMath(10, 8, function (x, y) {
//   return x - y;
// });

// const filter = function (array, test) {
//     const filteredArray = []

//     for (const el of array) {
//         console.log(el);
//         const passed = test(el);

//         if (passed) {
//             filteredArray.push(el);
//         }
//     }
//     return filteredArray;
// }

// const callback1 = function (value) {
//     return value >= 3;
// }

// const r1 = filter([1, 2, 3, 4, 5], callback1);

// console.log(r1);

// const callback2 = function (value) {
//     return value <= 4;
// }

// const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8, 9], callback2);

// console.log(r2);

// const fruits = [
//     { name: "apples", quantity: 200, isFresh: true },
//     { name: "grapes", quantity: 150, isFresh: false },
//     { name: "bananas", quantity: 100, isFresh: true },
// ];

// const getFruitsWithQuantity = function (fruit) {
//     return fruit.quantity >= 120;
// }

// const r3 = filter(fruits, getFruitsWithQuantity);

// console.log(r3);

// const fnA = function (parameter) {
//     const innerVariable = "значення внутрішньої змінної функції fnA";

//     const innerFunction = function () {
//         console.log(parameter);
//         console.log("Це визов innerFunction");
//     };

//     return innerFunction;
// }

// const fnB = fnA(555);

// fnB();

// console.log(fnB);

// const makeDish = function (sheffName, dish) {
//     console.log(`${sheffName} готує ${dish}`);
// }

// makeDish("Mango", "steak");
// makeDish("Mango", "tea");
// makeDish("Mango", "cofee");

// makeDish("Poly", "eggs");
// makeDish("Poly", "soup");
// makeDish("Poly", "bread");

// const makeSheff = function (name) {
//     const makeDish = function (dish) {
//         console.log(`${name} готує ${dish}`);
//     };
//     return makeDish;
// };

// const mango = makeSheff("Mango");

// // console.log(mango);

// mango("meat");
// mango("rabbit");

// const add = function(a, b, c) {
//     console.log(arguments);
//     return a + b + c;
// }

// const addArrow = (...args) => {
//     console.log(args);
//     // return a + b + c;
// }

// console.log(add(5, 10, 15));

// console.log(addArrow(5,10,15));

// const fnA = function () {
//     return {
//         a: 5,
//     };
// };

// console.log(fnA());

// const arrowFnA = () => ({arrowA: 5,});

// console.log(arrowFnA());

// const filter = function (array, test) {
//     const filteredArray = []

//     for (const el of array) {
//         console.log(el);
//         const passed = test(el);

//         if (passed) {
//             filteredArray.push(el);
//         }
//     }
//     return filteredArray;
// }

// // const callback1 = value => value >= 3;

// const r1 = filter([1, 2, 3, 4, 5], value => value >= 3);

// console.log(r1);

// const callback2 = value => value <= 4;

// const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8, 9], callback2);

// console.log(r2);

// const fruits = [
//     { name: "apples", quantity: 200, isFresh: true },
//     { name: "grapes", quantity: 150, isFresh: false },
//     { name: "bananas", quantity: 100, isFresh: true },
// ];

// // const getFruitsWithQuantity = fruit => fruit.quantity >= 120;

// const r3 = filter(fruits, fruit => fruit.quantity >= 120);

// console.log(r3);

// const logger = msg => console.log(msg);

// console.log(logger);

// function add(a, b) {
//     return a + b;
// }

// console.log(add(1, 2));
// console.log(add);

// const arr = [3, 10];

// /**
//  * Test callback
//  * @param {*} array with some value;
//  * @param {*} callback function add and logger;
//  */

// function foo(array, callback) {
//     const first = arr[0];
//     const second = arr[1];
//     const result = callback(first, second);
//     console.log(callback);
//     console.log(result);
// }

// foo(arr, add);
// foo(arr, logger);

// function logger(a, b) {
//     alert(`функція логгер ${a}`);
//     alert(`функція логгер ${b}`);
// }

// let i = 0;

// function createProduct(partialProduct, callback) {
//     i += 1;
//     const object = {
//         id: i,
//         ...partialProduct
//     }
//     callback(object);
// }

// function logProduct(product) {
// console.log(product);
// }

// function logTotalPrice(product) {

//     console.log(product.price * product.quantity);
// }

// createProduct({
//     name: "apple",
//     price: 30,
//     quantity: 3,
// }, logProduct);

// createProduct({
//     name: "lemon",
//     price: 20,
//     quantity: 5,
// }, logProduct);

// createProduct({
//     name: "lemon",
//     price: 20,
//     quantity: 5,
// }, logTotalPrice);

// createProduct({
//     name: "apple",
//     price: 30,
//     quantity: 3,
// }, logTotalPrice);

// const TRANSACTION_LIMIT = 1000;

// const account = {
//     username: "Jacob",
//     balance: 3400,
//     withdraw(amount, onSuccess, onError) {
//         if (amount > this.balance) {
//             onError("Мало коштів")
//         } else if (amount > TRANSACTION_LIMIT) {
//             onError("Перевищено ліміт")
//         } else {
//             this.balance -= amount
//             onSuccess(`Списано ${amount}, залишок - ${this.balance}`)
//         }
//     },
//     deposit(amount, onSuccess, onError) {
//         if (amount <= 0) {
//             onError("Значення має бути більше нуля")
//         } else if (amount > TRANSACTION_LIMIT) {
//             onError("Перевищено ліміт")
//         } else {
//             this.balance += amount
//             onSuccess(`Кошти успішно додані! Баланс - ${this.balance}`)
//         }
//     },
// }

// function handleSuccess(message) {
//     console.log(`Success! ${message}`);
// }

// function handleError(message) {
//     console.log(`Error! ${message}`);
// }

// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(6000, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);
// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);

// function each(array, callback) {
//     for (const element of array) {
//        console.log(callback(element));
//     }
// }

// each([64, 49, 36, 25, 16], function (value) {
//     return value * 2;
// });

// each([64, 49, 36, 25, 16], function (value) {
//     return value - 10;
// });

// each([64, 49, 36, 25, 16], function (value) {
//     return Math.sqrt(value);
// });

// each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.ceil(value);
// });

// each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.floor(value);
// });

// function foo (value) {
//     return value * 2;
// }

// const boo = function (value) {
//     return value * 2;
// }

// const boo = ({name}) => {
//     return
// }

// boo({name: "User"})

// const boo = (value) => value * 2;

// boo(4)

// console.log(boo(4));

// const boo = (...args) => {
//     console.log(args);
//     // value * 12
// };

// boo(4,1,2,3,6)

// function createProduct(partialProduct, callback) {
//     const product = {
//         id: Date.now(),
//         ...partialProduct
//     };
//         callback(product);
// }

// const createProduct = (partialProduct, callback) => {
//     const product = {
//         id: Date.now(),
//         ...partialProduct
//     };
//         callback(product);
// }

// const logProduct = product => console.log(product);

// const logTotalPrice = product => console.log(product.price * product.quantity);

// createProduct({
//     name: "apple",
//     price: 30,
//     quantity: 3,
// }, logProduct);

// createProduct({
//     name: "lemon",
//     price: 20,
//     quantity: 5,
// }, logProduct);

// const createProduct = (partialProduct, callback) => ({id: Date.now(), ...partialProduct});

// console.log(createProduct({
//     name: "apple",
//     price: 30,
//     quantity: 3,
// }));

// ====================================================================
// ====================================================================
// ====================================================================
// ====================================================================
// ====================================================================
// ====================================================================

// function multiply() {
//   console.log('Це лог на момент виклику функції multiply');
// }

// multiply();

// ====================================================================

// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// let total = 0;

// for (const value of cart) {
//     total += value;
// }

// console.log('Total:', total);

// const calculateTotalPrice = function (items) {
//     console.log('items всередені функції:', items);

//     let total = 0;

//     for (const item of items) {
//         total += item;
//     }

//     return total;
// }

// console.log((calculateTotalPrice([1, 2, 3])));
// console.log((calculateTotalPrice([5, 10, 15, 20])));
// console.log((calculateTotalPrice([100, 200, 300])));

// ====================================================================

// const logItems = function (items) {
//   for (const item of items) {
//     console.log(item);
//   }
// };

// logItems(['Mango', 'Kiwi', 'Poly', 'Ajax']);
// logItems([1, 2, 3, 4, 5]);
// logItems(['keyboard', 'headphones', 'watch']);

// ====================================================================

// const logins = ['Mango', 'Kiwi', 'Poly', 'Ajax'];

// const findLogin = function (allLogins, loginToFind) {
//   for (const login of allLogins) {
//     if (login === loginToFind) {
//       return `Користувач ${loginToFind} знайден`;
//     }
//   }
//   return `Користувач ${loginToFind} не знайден`;
// };

// console.log(findLogin(logins, 'Avoc'));
// console.log(findLogin(logins, 'Kiwi'));
// console.log(findLogin(logins, 'Jaml'));
// console.log(findLogin(logins, 'Poly'));

// ====================================================================

// const logins = ['Mango', 'Kiwi', 'Poly', 'Ajax'];

// const findLogin = function (allLogins, loginToFind) {
//   return logins.includes(loginToFind)
//     ? `Користувач ${loginToFind} знайден`
//     : `Користувач ${loginToFind} не знайден`;
// };

// console.log(findLogin(logins, 'Avoc'));
// console.log(findLogin(logins, 'Kiwi'));
// console.log(findLogin(logins, 'Jaml'));
// console.log(findLogin(logins, 'Poly'));

// ====================================================================

// const findSmallestNumber = function (numbers) {
//   let smallestNumber = numbers[0];

//   for (const number of numbers) {
//     if (number < smallestNumber) {
//       smallestNumber = number;
//     }
//   }
//   return smallestNumber;
// };

// console.log(findSmallestNumber([3, 8, 12, -2, 15]));
// console.log(findSmallestNumber([100, 54, 8, 12, 47]));
// console.log(findSmallestNumber([7, 21, 84, 15, 4]));

// ====================================================================

// const changeCase = function (string) {
//   const letters = string.split('');
//   console.log(letters);
//   let invertedString = '';

//   for (const letter of letters) {
//     const isInLowerCase = letter === letter.toLowerCase();
//     invertedString += isInLowerCase ? letter.toUpperCase() : letter.toLowerCase();
//   }

//   return invertedString;
// };

// console.log(changeCase('qweRTY'));
// console.log(changeCase('mAnGo'));
// console.log(changeCase('AjAx'));

// ====================================================================

// const slugify = function (string) {
//     // const normaliziedTitle = string.toLowerCase();
//     // const words = normaliziedTitle.split(' ');
//     // const slug = words.join('-');

//     // return slug;

//     return string.toLowerCase().split(' ').join('-');
// }

// console.log(slugify('Top 10 benefits of React framefork'));
// console.log(slugify('Azure Static Web Apps are Awesome'));
// console.log(slugify('Technical writting tips for non-native English speakers'));

// ====================================================================

// const fn = function (...args) {
//   console.log(args);
// };

// fn(1, 2, 3);
// fn(1, 2, 3, 4, 5);
// fn(1, 2, 3, 4, 5, 6, 7);

// ====================================================================

// const add = function (...args) {
//   let total = 0;

//   for (const arg of args) {
//     total += arg;
//   }

//   return total;
// };

// console.log(add(1, 2, 3));
// console.log(add(1, 2, 3, 4, 5, 6));

// ====================================================================

// const filterNumbers = function (array, ...args) {
//   // console.log(array);
//   // console.log(args);

//   const notUniqueElements = [];

//   for (const element of array) {
//     if (args.includes(element)) {
//       notUniqueElements.push(element);
//       //   console.log(`${element} is everywhere`);
//     }
//   }
//   return notUniqueElements;
// };

// console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8));
// console.log(filterNumbers([10, 15, 25, 30], 23, 30, 18, 15));
// console.log(filterNumbers([100, 200, 300, 400, 500], 7, 12, 200, 64));

// ====================================================================

// function foo(array) {
//     for (let i = 0; i < array.length; i += 1) {
//         array[i] *= 2;
//     }
// }

// const numbers = [1, 2, 3, 4, 5];
// foo(numbers);
// console.log(numbers);

// ====================================================================

// const foo = function (param) {
//     console.log(param);
// }
// console.log(foo);
// foo();
// foo('hello')

// ====================================================================

// function getSum() {
//   console.log(arguments);

//   const arr = Array.from(arguments);
//   console.log('arr', arr);

//   const arr2 = [...arguments];
//   console.log('arr2', arr2);

//   let total = 0;
//   for (const argument of arguments) {
//     total += argument;
//   }
//   return total;
// }

// console.log(getSum(1, 2, 3, 4, 5, 6, 7, 8));
// console.log(getSum(44, 5, 14, 3));

// ====================================================================

// function foo() {
//   console.log('start foo');
// }

// function boo() {
//   console.log('start boo');
//   foo();
//   console.log('end boo');
// }

// boo();

// ====================================================================

// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];

// function addCourse(name) {
//   if (!courses.includes(name)) {
//     courses.push(name);
//     return;
//   }
//   return 'Ви вже маєте даний курс';
// }

// const res = addCourse('Express');
// console.log(res);
// console.log(courses);
// const result = addCourse('CSS');
// console.log(result);

// ====================================================================

// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];

// function removeCourse(name) {
//   if (courses.includes(name)) {
//     const idx = courses.indexOf(name);
//     courses.splice(idx, 1);
//     return `Курс ${name} успішно видалено`;
//   }

//   return 'Курс з такою назвою не знайдено';
// }

// console.log(removeCourse('React'));
// console.log(courses);
// console.log(removeCourse('Vue'));

// ====================================================================

const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'Node', 'Express'];

function updateCourse(oldName, newName) {
  if (courses.includes(oldName)) {
    const idx = courses.indexOf(oldName);
    // courses.splice(idx, 1, newName);
    courses[idx] = newName;
    return `${oldName} замінено на ${newName}`;
  }
  return 'Курс з такою назвою не знайдено';
}

console.log(updateCourse('Express', 'NestJS'));
console.log(courses);
console.log(updateCourse('Angular', 'NestJS'));

// ====================================================================

// ====================================================================
