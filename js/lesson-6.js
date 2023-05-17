// const temps = [14, -4, 25, 8, 11];

// console.log(temps);
// console.log(Math.max(temps));

// console.log(...temps);
// console.log(Math.max(...temps));

// ====================================================================

// const temps = [14, -4, 25, 8, 11];

// const copyOfTemps = [...temps];
// console.log(copyOfTemps);

// const lastWeekTemps = [14, 25, 11];
// const currentWeekTemps = [23, 17, 18];
// const allTemps = [...lastWeekTemps, ...currentWeekTemps];
// console.log(allTemps);

// ====================================================================

// const first = { propA: 5, propB: 10 };
// const second = { propC: 15 };
// const third = { ...first, ...second };
// const fourth = { ...second, ...first };
// console.log(third);
// console.log(fourth);

// ====================================================================

// function multiply(firstNumber, secondNumber, ...otherArgs) {
//   console.log(firstNumber); // Значення першого аргументу
//   console.log(secondNumber); // Значення другого аргументу
//   console.log(otherArgs); // Масив інших аргументів
// }

// // multiply(1, 2);
// // multiply(1, 2, 3);
// multiply(1, 2, 3, 4);

// ====================================================================

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// // Деструктуризуємо
// const { title, author, isPublic, rating, coverImage } = book;
// console.log(coverImage); // undefined

// const accessType = isPublic ? "публічному" : "закритому";
// const message = `Книга ${title} автора ${author} з рейтингом ${rating} знаходиться в ${accessType} доступі.`;

// ====================================================================

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "На березі спокійних вод",
//     author: "Роберт Шеклі",
//     rating: 8.51,
//   },
// ];

// // for (const book of books) {
// //   console.log(book.title);
// //   console.log(book.author);
// //   console.log(book.rating);
// // }

// for (const book of books) {
//   const { title, author, rating } = book;

//   console.log(title);
//   console.log(author);
//   console.log(rating);
// }

// ====================================================================

// function doStuffWithBook(book) {
//   // Робимо щось з властивостями об'єкта
//   console.log(book.title);
//   console.log(book.numberOfPages);
//   // І так далі
// }

// // ✅ Все зрозуміло
// doStuffWithBook({
//   title: "The Last Kingdom",
//   numberOfPages: 736,
//   downloads: 10283,
//   rating: 8.38,
//   isPublic: true,
// });

// ====================================================================
// ====================================================================
// ====================================================================

// const a = { x: 1, y: 2 };
// const b = { x: 0, z: 3 };

// const c = Object.assign(a, b);
// console.log(c);

// const message = 'hello';
// console.log(...message);

// ====================================================================

// const playlist = {
//   name: 'My playlist',
//   rating: 5,
//   tracks: ['track-1', 'track-2', 'track-3'],
//   trackCount: 3,
// };

// const { rating, name, tracks, trackCount: numberOfTracks = 0, author = 'user' } = playlist;

// console.log(numberOfTracks);
// console.log(author);
// console.log(playlist);

// ====================================================================

// const profile = {
//   name: 'Igor',
//   tag: 'IgorN',
//   location: 'Kyiv, Ukraine',
//   avatar: 'https://avatar.com',
//   stats: {
//     followers: 100,
//     views: 3333,
//     likes: 123,
//   },
// };

// const { name, tag, location, avatar, stats: { followers, views, likes } } = profile;

// // const { followers, views, likes } = stats;

// console.log(name, tag, location, avatar, followers, views, likes);

// ====================================================================

// const rgb = [255, 100, 80];

// const [red, green, blue] = rgb;
// // const [red, , blue] = rgb;

// ====================================================================

// const authors = {
//     kiwi: 4,
//     poly: 7,
//     ajax: 9,
//     mango: 6,
// };

// // const ratings = Object.values(authors);
// // console.log(ratings);
// // console.log(Math.max(...ratings));

// // const keys = Object.keys(authors);
// // console.log(keys);

// // for (const key of keys) {
// //     console.log(key);
// //     console.log(authors[key]);
// // }

// const entries = Object.entries(authors);
// // console.log(entries);

// for (const entry of entries) {
//     // console.log(entry);
//     // const name = entry[0];
//     // const rating = entry[1];

//     const [name, rating] = entry;

//     console.log(name, rating);
// }

// ====================================================================

// const profile = {
//   name: 'Igor',
//   tag: 'IgorN',
//   location: 'Kyiv, Ukraine',
//   avatar: 'https://avatar.com',
//   stats: {
//     followers: 100,
//     views: 3333,
//     likes: 123,
//   },
// };

// const { name, tag, location, ...restProps} = profile;

// // const restProps = {
// //     avatar: profile.avatar,
// //     stats: profile.stats,
// // }

// console.log(name, tag, location);
// console.log(restProps);

// ====================================================================

// const fn = function (params) {};

// fn(10, 5, true, [], {}, 6);

// fn({
//   age: 10,
//   friends: 5,
//   isOnline: true,
//   hobbies: [],
//   games: {},
//   rating: 6,
// });

// ====================================================================

// const showProfileInfo = function (userProfile) {
//   // console.log(userProfile);
//   const {
//     name,
//     tag,
//     location,
//     avatar,
//     stats: { followers, views, likes },
//   } = userProfile;

//   console.log(name, tag, location, avatar, followers, views, likes);
// };

// const profile = {
//   name: 'Igor',
//   tag: 'IgorN',
//   location: 'Kyiv, Ukraine',
//   avatar: 'https://avatar.com',
//   stats: {
//     followers: 100,
//     views: 3333,
//     likes: 123,
//   },
// };

// showProfileInfo(profile);

// ====================================================================

// const cart = {
//   items: [],

//   getItems() {
//     return this.items;
//   },

//   add(product) {
//     for (const item of this.items) {

//       if (item.name === product.name) {
//         item.quantity += 1;
//         return;
//       }
// }

//     const newProduct = {
//       ...product,
//       quantity: 1,
//     }
//     this.items.push(newProduct);

//   },

//   remove(productName) {
//     const { items } = this;

//     for (let i = 0; i < items.length; i += 1) {
//       // const item = this.items[i];
//       const { name } = items[i];
//       if (name === productName) {
//         // console.log('FIND');
//         items.splice(i, 1);
//       }
//     }
//   },

//   clear() {
//     this.items = [];
//   },

//   countTotalPrice() {
//     const { items } = this;
//     let total = 0;

//     for (const {price, quantity} of this.items) {
//       total += price * quantity;
//     }

//     return total;
//   },

//   increaseQuantity(productName) {},

//   decreaseQuantity(productName) {},
// };

// console.log(cart.getItems());

// cart.add({ name: '🍎', price: 50 });
// cart.add({ name: '🍇', price: 60 });
// cart.add({ name: '🍋', price: 60 });
// cart.add({ name: '🍋', price: 60 });
// cart.add({ name: '🍓', price: 110 });
// cart.add({ name: '🍓', price: 110 });
// cart.add({ name: '🍓', price: 110 });
// console.table(cart.getItems());

// console.log('Total:', cart.countTotalPrice());

// cart.remove('🍋');
// console.table(cart.getItems());

// cart.clear();
// console.log(cart.getItems());

// ====================================================================
// ====================================================================
// ====================================================================

// function calcBMI({ weight, height }) {
//   const numericWeight = Number(weight.replace(',', '.'));
//   const numericHeight = Number(height.replace(',', '.'));

//   return Number((numericWeight / numericHeight ** 2).toFixed(1));
// }

// console.log(
//   calcBMI({
//     weight: '88,3',
//     height: '1.75',
//   })
// );

// ====================================================================

// function printContactInformation({ names, phones }) {
//   const nameList = names.split(',');
//   const phoneList = phones.split(',');
//   for (let i = 0; i < nameList.length; i += 1) {
//     console.log(`${nameList[i]} : ${phoneList[i]}`);
//   }
// }

// printContactInformation({
//   names: 'Jacob,William,Solomon,Artemis',
//   phones: '89001234567,89001112233,890055566377,890055566300',
// });

// ====================================================================

// /**
//  * Get string with info about company and return info strings
//  * @param {Object} object
//  * @returns {String} Info string
//  */
// function getBotReport({ bots: { repairBots, defenceBots }, companyName }) {
//   console.log('companyName:', companyName);
//   // console.log('bots:', bots);
//   console.log('repairBots:', repairBots);
//   console.log('defenceBots:', defenceBots);
//   return `${companyName} has ${repairBots + defenceBots} bots in stock`;
// }

// console.log(
//   getBotReport({ companyName: 'Cyberdyne Systems', bots: { repairBots: 150, defenceBots: 50 } })
// );

// ====================================================================

// /**
//  * Get object with company and return info about stock
//  * @param {Object} object
//  * @returns {String} Info about stock in company
//  */
// function getStockReport({ companyName, stock }) {
//   // console.log(stock);
//   const values = Object.values(stock);
//   // console.log(values);
//   let total = 0;

//   for (const value of values) {
//     total += value;
//   }
//   // console.log(total);
//   return `${companyName} has ${total} items in stock`;
// }

// console.log(
//   getStockReport({
//     companyName: 'Cyberdyne Systems',
//     stock: { repairBots: 150, defenceBots: 50 },
//   })
// );

// console.log(
//   getStockReport({
//     companyName: 'Belacci',
//     stock: { shoes: 20, skirts: 10, hats: 5  },
//   })
// );

// ====================================================================

// function createContact(partialContact) {
//   return {
//     id: generateId(),
//     list: 'default',
//     ...partialContact,
//   };
// }

// console.log(
//   createContact({
//     name: 'Mango',
//     email: 'mango@mail.com',
//     list: 'friends',
//   })
// );

// console.log(
//   createContact({
//     name: 'Poly',
//     email: 'poly@mail.com',
//   })
// );

// function generateId() {
//   return '_' + Math.random().toString(36).substr(2, 9);
// }

// ====================================================================

// function transformName({ firstName, lastName, ...info }) {
//   console.log(firstName);
//   console.log(lastName);
//   console.log(info);

//   return {
//     fullName: `${firstName} ${lastName}`,
//     ...info,
//   };
// }

// console.log(
//   transformName({
//     id: 1,
//     firstName: 'Jacob',
//     lastName: 'Mercer',
//     email: 'j.mercer@mail.com',
//     friendCount: 40,
//   })
// );

// console.log(
//   transformName({
//     id: 2,
//     firstName: 'Adrian',
//     lastName: 'Cross',
//     email: 'a.cross@hotmail.com',
//     friendCount: 20,
//   })
// );

// ====================================================================

// function createContact(arr) {
//   for (let i = 0; i < arr.length; i += 1) {
//     arr[i] = {
//       id: generateId(),
//       list: 'default',
//       ...arr[i],
//     };
//     console.log(arr[i]);
//   }

// //   for (let obj of arr) {
// //     obj.id = generateId();
// //     if (!obj.hasOwnProperty('list')) {
// //       obj.list = 'default';
// //     }

// //     console.log(arr);
// //   }
// }

// console.log(
//   createContact([
//     {
//       name: 'Mango',
//       email: 'mango@mail.com',
//       list: 'friends',
//     },
//     { name: 'Poly', email: 'poly@mail.com' },
//   ])
// );

// function generateId() {
//   return '_' + Math.random().toString(36).substr(2, 9);
// }

// ====================================================================
// ====================================================================
// ====================================================================
