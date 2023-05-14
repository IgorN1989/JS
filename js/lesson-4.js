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

//   // const arr = Array.from(arguments);
//   // console.log('arr', arr);

//   // const arr2 = [...arguments];
//   // console.log('arr2', arr2);

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

// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'Node', 'Express'];

// function updateCourse(oldName, newName) {
//   if (courses.includes(oldName)) {
//     const idx = courses.indexOf(oldName);
//     // courses.splice(idx, 1, newName);
//     courses[idx] = newName;
//     return `${oldName} замінено на ${newName}`;
//   }
//   return 'Курс з такою назвою не знайдено';
// }

// console.log(updateCourse('Express', 'NestJS'));
// console.log(courses);
// console.log(updateCourse('Angular', 'NestJS'));

// ====================================================================

