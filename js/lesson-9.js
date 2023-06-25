// const petya = {
//     username: 'Petya',
//     showName() {
//         console.log(this.username);
//     },
// };

// petya.showName();

// console.log(this);

// function showThis() {
//     console.log('this is showThis:', this);
// }

// const user = {
//     username: 'Mango',
// };

// user.showContext = showThis;

// user.showContext()

// const customer = {
//   firstName: 'Jacob',
//   lastName: 'Mercer',
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// function makeMessage(callback) {
//   // callback() - це виклик методу getFullName без об'єкта
//   console.log(`Обробляємо заявку від ${callback()}.`);
// }

// console.log(customer.getFullName());

// makeMessage(customer.getFullName); // Буде помилка у виклику функції

// ====================================================================

// const user = {
//     tag: 'Mango',
//     showTag() {
//         console.log('showTag -> this', this);
//         console.log('showTag -> this.tag', this.tag);
//     }
// }

// user.showTag();

// const outerShowTag = user.showTag;

// outerShowTag();

// user.outerShowTag()

// ====================================================================

// ====================================================================

// ====================================================================

// function foo() {
//     console.log(this);
// }

// foo();

// const obj = {
//     logCtx: foo,
// }

// console.log(obj.logCtx);
// obj.logCtx()

// ====================================================================

// const objA = {
//     name: "objA",
//     logCtx() {
//         console.log(this);
//     }
// };

// objA.logCtx();

// const objB = {
//     name: 'objB',
//     foo: objA.logCtx,
// };

// console.log(objB.foo);
// objB.foo()

// ====================================================================

// const foo = () => { console.log(this); }
// foo();

// ====================================================================

// const obj = {
//     objThis: this,
//     foo: () => {
//         console.log(this);
//     }
// }

// // console.log(obj.objThis);
// obj.foo();

// ====================================================================

// const foo = () => {
//     console.log(this);
// }

// const obj = {
//     key: foo,
// }

// obj.key();

// ====================================================================

// const chopShop = {
//   stones: [
//     {
//       name: 'Emerald',
//       price: 1300,
//       quantity: 4,
//     },
//     {
//       name: 'Diamond',
//       price: 2700,
//       quantity: 3,
//     },
//     {
//       name: 'Sapphire',
//       price: 1400,
//       quantity: 7,
//     },
//     {
//       name: 'Ruby',
//       price: 800,
//       quantity: 2,
//     },
//   ],
//   //   calcTotalPrice(stoneName) {
//   //     return this.stones.reduce((acc, { name, price, quantity }) => {
//   //       if (name === stoneName) {
//   //         return price * quantity;
//   //       }
//   //       return acc;
//   //     }, 0);
//   //   },

// //   calcTotalPrice(stoneName) {
// //     return this.stones.reduce(
// //       (acc, { name, price, quantity }) => (name === stoneName ? (acc = price * quantity) : acc),
// //       0
// //     );
// //   },

//     calcTotalPrice(stoneName) {
//         const {price, quantity} = this.stones.find(item => item.name === stoneName)
//         return price * quantity;
//     }
// };

// console.log(chopShop.calcTotalPrice('Emerald'));
// console.log(chopShop.calcTotalPrice('Diamond'));
// console.log(chopShop.calcTotalPrice('Sapphire'));
// console.log(chopShop.calcTotalPrice('Ruby'));

// ====================================================================

// const phonebook = {
//   contacts: [],
//   add(contact) {
//     const newContact = {
//       list: 'default',
//       ...contact,
//       id: this.generateId(),
//       createdAt: this.getDate(),
//     };
//     this.contacts.push(newContact);
//     return this.contacts;
//   },
//   generateId() {
//     return '_' + Math.random().toString(36).substr(2, 9);
//   },
//   getDate() {
//     return Date.now();
//   },
// };

// // console.log(phonebook.add({ name: 'Mango', email: 'mango@mail.com', list: 'friends' }));
// // console.log(phonebook.add({ name: 'Poly', email: 'poly@mail.com' }));

// const newPhonebook = {
//     contacts: [],
// };

// // phonebook.add.call(newPhonebook, { name: 'Mark', email: 'mark@mail.com', list: 'friends' });

// ====================================================================

// const calculator = {
//   create(c, d) {
//     this.a = c;
//     this.b = d;
//   },

//   add() {
//     return this.a + this.b;
//   },

//   mult() {
//     return this.a * this.b;
//   },
// };

// console.log(calculator);
// calculator.create(5, 2);
// console.log(calculator);
// console.log(calculator.add());
// console.log(calculator.mult());

// calculator.create(11, 13);
// console.log(calculator);
// console.log(calculator.add());
// console.log(calculator.mult());

// ====================================================================

// function changeEven(numbers, value) {
//   // Change code below this line
//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   if (numbers[i] % 2 === 0) {
//   //     numbers[i] = numbers[i] + value;
//   //   }
//   // }

//   const newArr = [];
//   numbers.forEach(number => {
//     if (number % 2 === 0) {
//       number += value;
//     }
//     newArr.push(number);
//   });

//   return newArr;
//   // Change code above this line
// }
// console.log(changeEven([1, 2, 3, 4, 5], 10));

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets.map(planet => planet.length);

// console.log(planetsLengths);

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39
//   }
// ]

// const getActiveUsers = (users) => {
//    return users.filter(({isActive}) => isActive);
// };

// console.log(getActiveUsers(users));

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce((total, player) => total + player.playtime / player.gamesPlayed, 0);

// console.log(totalAveragePlaytimePerGame);

// // Change code below this line
// const getTotalFriendCount = users => {
//    return users.reduce((prev, user) => prev + user.friends.length, 0)
// };
// // Change code above this line

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort();

// const alphabeticalAuthors = [...authors].sort();

// console.log(ascendingReleaseDates);

// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
//   "Howard Lovecraft",
// ];
// // Change code below this line

// const authorsInAlphabetOrder = [...authors].sort((prev, next) => prev.localeCompare(next));

// const authorsInReversedOrder = [...authors].sort((prev, next) => next.localeCompare(prev));

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const sortedByAuthorName = [...books].sort((prev, next) => prev.author.localeCompare(next.author));

// const sortedByReversedAuthorName = [...books].sort((prev, next) => next.author.localeCompare(prev.author));

// const sortedByAscendingRating = [...books].sort((prev, next) => prev.rating - next.rating);

// const sortedByDescentingRating = [...books].sort((prev, next) => next.rating - prev.rating);

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   {
//     title: 'The Dreams in the Witch House',
//     author: 'Howard Lovecraft',
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = books
//   .filter(book => book.rating > MIN_BOOK_RATING)
//   .map(book => book.author)
//   .sort((prev, next) => prev.localeCompare(next));

// // Change code below this line
// const getTotalBalanceByGender = (users, gender) => {
//  return users.filter((user) => user.gender === gender).reduce((prev, user) => prev + user.balance, 0)
// };
// // Change code above this line

// ====================================================================

// const boo = function() {
//     console.log('hi');
// }
// console.dir(boo);

// ====================================================================

// const user = {
//     tag: 'Mango',
//     showTag() {
//         console.log('showTag -> this', this);
//     },

//     item: console.log(this),
// }

// console.log(user);

// const user = {
//   name: 'Igor',
// };

// const showName = function () {
//   console.log('showName -> this', this);
//   console.log('showName -> this.name', name);
// };

// user.showUserName = showName;
// console.log('user', user);

// user.showUserName();

// ====================================================================

// const user = {
//   tag: 'Mango',
//   showTag() {
//     console.log('showTag -> this', this);
//     console.log('showTag -> this.tag', this.tag);
//   },
// };

// const invokeAction = function (action) {
//   console.log(action);

//   action();
// };

// invokeAction(user.showTag);

// ====================================================================

// const makeChangeColor = function () {
//   const changeColor = function (color) {
//     console.log('changeColor -> this', this);
//     // this.color = color;
//   };

//   // changeColor();

//   const sweater = {
//     color: 'teal',
//   };

//   sweater.updateColor = changeColor;

// //   sweater.updateColor('red');

//   return sweater.updateColor;
// };

// const swapColor = makeChangeColor();

// swapColor('blue');

// ====================================================================

// const counter = {
//     value: 0,
//     increment(value) {
//         console.log('increment -> this', this);
//         this.value += value;
//     },
//     decrement(value) {
//         console.log('decrement -> this', this);
//         this.value -= value;
//     },
// };

// const updateCounter = function (value, operation) {
//     operation(value);
// }

// updateCounter(10, counter.increment);
// updateCounter(5, counter.decrement);

// ====================================================================

// const chopShop = {
//   stones: [
//     {
//       name: 'Emerald',
//       price: 1300,
//       quantity: 4,
//     },
//     {
//       name: 'Diamond',
//       price: 2700,
//       quantity: 3,
//     },
//     {
//       name: 'Sapphire',
//       price: 1400,
//       quantity: 7,
//     },
//     {
//       name: 'Ruby',
//       price: 800,
//       quantity: 2,
//     },
//   ],
//   calcTotalPrice(stoneName) {
//     // console.log(this.stones);
//     // return this.stones.reduce((acc, stone) => {
//     //   if (stone.name === stoneName) {
//     //     return stone.price * stone.quantity;
//     //   }
//     //   return acc;
//     // }, 0);

//     return this.stones.reduce(
//       (acc, { name, price, quantity }) => (name === stoneName ? price * quantity : acc),
//       0
//     );
//   },
// };

// console.log(chopShop.calcTotalPrice('Emerald'));
// console.log(chopShop.calcTotalPrice('Diamond'));
// console.log(chopShop.calcTotalPrice('Sapphire'));
// console.log(chopShop.calcTotalPrice('Ruby'));

// ====================================================================

// const phonebook = {
//   contacts: [],
//   add(contact) {
//     const newContact = {
//       list: 'default',
//       ...contact,
//     //   id: this.generateId(),
//     //   id: phonebook.generateId(),
//       id: () => this.generateId(),
//     //   createdAt: this.getDate(),
//     //   createdAt: phonebook.getDate(),
//       createdAt: () => this.getDate(),
//     };
//     this.contacts.push(newContact);
//     return this.contacts;
//   },
//   generateId() {
//     return '_' + Math.random().toString(36).substr(2, 9);
//   },
//   getDate() {
//     return Date.now();
//   },
// };

// // console.log(
// //   phonebook.add({
// //     name: 'Mango',
// //     email: 'mango@mail.com',
// //     list: 'friends',
// //   })
// // );

// // console.log(
// //   phonebook.add({
// //     name: 'Poly',
// //     email: 'poly@mail.com',
// //   })
// // );

// const newPhonebook = {
//     contacts: [],
// };

// console.log(phonebook.add.call(newPhonebook, {
//     name: 'Mark',
//     email: 'mark@mail.com',
//     list: 'friends',
//   }));

// ====================================================================

// const calculator = {
//     create(a, b) {
//         this.a = a;
//         this.b = b;
//     },

//     add() {
//         return this.a + this.b;
//     },

//     mult() {
//         return this.a * this.b;
//     }
// };

// console.log(calculator);
// calculator.create(11, 2);
// console.log(calculator);
// console.log(calculator.add());
// console.log(calculator.mult());

// ====================================================================


