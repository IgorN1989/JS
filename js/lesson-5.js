// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   location: {
//     country: "Jamaica",
//     city: "Ocho Rios",
//   },
//   hobbies: ["swiming", "music", "sci-fi"],
// };

// const location = user.location;
// console.log(location); // Об'єкт location

// const country = user.location.country;
// console.log(country); // 'Jamaica'

// const ctr = location.country;
// console.log(ctr);

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// book.pageCount = 836;
// book.originalLanguage = "en";
// book.translations = ["ua"];

// console.log(book.pageCount); // 836
// console.log(book.originalLanguage); // 'en'
// console.log(book.translations);

// console.log(book);

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Ключ
// //   console.log(key);
//   // Значення властивості з таким ключем
//   console.log(book[key]);
// }

// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = "Манго";

// console.log(dog); // {name: 'Манго'}
// console.log(dog.name); // 'Манго'
// console.log(dog.legs); // 4

// // ❌ Повертає true для всіх властивостей
// console.log("name" in dog); // true
// console.log("legs" in dog); // true

// // ✅ Повертає true тільки для власних властивостей
// console.log(dog.hasOwnProperty("name")); // true
// console.log(dog.hasOwnProperty("legs")); // false

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Якщо це власна властивість - виконуємо тіло if
//   if (book.hasOwnProperty(key)) {
//     console.log(key);
//     console.log(book[key]);
//   }

//   // Якщо це невласна властивість - нічого не робимо
// }

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);

// for (const key of keys) {
//   // Ключ
//   console.log(key);
//   // Значення властивості
//   console.log(book[key]);
// }

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'На березі спокійних вод',
//     author: 'Роберт Шеклі',
//     rating: 8.51,
//   },
//   {
//     title: 'Сон смішної людини',
//     author: 'Федір Достоєвський',
//     rating: 7.75,
//   },
// ];

// for (const book of books) {
//   // Об'єкт книги
//   console.log(book);
//   // Назва
//   console.log(book.title);
//   //   Автор
//   console.log(book.author);
//   // Рейтинг
//   console.log(book.rating);
// }

// ====================================================================
// ====================================================================
// ====================================================================

// const playlist = {
//   name: 'My playlist',
//   rating: 5,
//   tracks: ['track-1', 'track-2', 'track-3'],
//   trackCount: 3,
// };

// console.log(playlist);

// console.log(playlist.name);
// console.log(playlist.rating);
// console.log(playlist.tracks);
// console.log(playlist.trackCount);

// const propertyName = 'tracks';

// console.log(playlist[propertyName]);
// console.log(playlist['rating']);

// ====================================================================

// const username = 'Mango';
// const email = 'mango@mail.com';

// // const signupData = {
// //     username: username,
// //     email: email,
// // }

// const signupData = {
//     username,
//     email,
// }

// console.log(signupData);

// ====================================================================

// const inputName = 'color';
// const inputValue = 'tomato';

// const colorPickerData = {
//     [inputName]: inputValue,
// };

// console.log(colorPickerData);

// ====================================================================

// const playlist = {
//   name: 'My playlist',
//   rating: 5,
//   tracks: ['track-1', 'track-2', 'track-3'],
//   trackCount: 3,
//   //     getName: function () {
//   //       console.log('Its a getName');
//   //   }
//   getName() {
//     console.log('Its a getName');
//   },
// };

// console.log(playlist);

// playlist.getName();

// ====================================================================

// const playlist = {
//   name: 'My playlist',
//   rating: 5,
//   tracks: ['track-1', 'track-2', 'track-3'],

//   changeName(newName) {
//     this.name = newName;
//   },

//   addTrack(newTrack) {
//     this.tracks.push(newTrack);
//   },

//   updateRating(newRating) {
//     this.rating = newRating;
//   },

//   getTrackCount() {
//     return this.tracks.length;
//   },
// };

// playlist.changeName('Poly');
// playlist.addTrack('track-4');
// playlist.updateRating(4.5);
// playlist.getTrackCount();

// console.log(playlist);

// ====================================================================

// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };

// let totalFeedback = 0;

// // const keys = Object.keys(feedback);

// // console.log(keys);

// // for (const key of keys) {
// //   console.log(key);
// //   console.log(feedback[key]);

// //   totalFeedback += feedback[key];
// // }

// // console.log('totalFeedback:', totalFeedback);

// const values = Object.values(feedback);

// console.log(values);

// for (const value of values) {
//     console.log(value);

//     totalFeedback += value;
// }

// console.log('totalFeedback:', totalFeedback);

// ====================================================================

// const friends = [
//   { name: 'Mango', online: false },
//   { name: 'Kiwi', online: true },
//   { name: 'Poly', online: true },
//   { name: 'Ajax', online: false },
// ];

// // console.table(friends);

// for (const friend of friends) {
//   // console.log(friend);
//   // console.log(friend.name);
//   // console.log(friend.online);

//   friend.newProp = 555;
// }

// // console.table(friends);

// // const findFriendByName = function (allFriends, nameToFind) {
// //   for (const friend of allFriends) {
// //     if (friend.name === nameToFind) {
// //       return `FIND ${nameToFind}!!!`;
// //     }
// //   }

// //   return `Not find ${nameToFind}`;
// // };

// // console.log(findFriendByName(friends, 'Poly'));
// // console.log(findFriendByName(friends, 'Chelsy'));

// // const getAllNames = function (allFriends) {
// //   const names = [];

// //   for (const friend of friends) {
// //     names.push(friend.name);
// //   }
// //   return names;
// // };

// // console.log(getAllNames(friends));

// // const getOnlineFriends = function (allFriends) {
// //   const onlineFriends = [];

// //   for (const friend of allFriends) {
// //     if (friend.online) {
// //       onlineFriends.push(friend);
// //     }
// //   }
// //   return onlineFriends;
// // };

// // console.log(getOnlineFriends(friends));

// // const getOfflineFriends = function (allFriends) {
// //     const offlineFriends = [];

// //   for (const friend of allFriends) {
// //     if (!friend.online) {
// //       offlineFriends.push(friend);
// //     }
// //   }
// //   return offlineFriends;
// // };

// // console.log(getOfflineFriends(friends));

// // const getFriendsByOnlineStatus = function (allFriends) {
// //   const friendsByStatus = {
// //     online: [],
// //     offline: [],
// //   };

// //   for (const friend of allFriends) {
// //     if (friend.online) {
// //       friendsByStatus.online.push(friend);
// //       continue;
// //     }

// //     friendsByStatus.offline.push(friend);

// //     // const key = friend.online ? 'online' : 'offline';
// //     // friendsByStatus[key].push(friend);
// //   }

// //   return friendsByStatus;
// // };

// // console.log(getFriendsByOnlineStatus(friends));

// ====================================================================

// const cart = {
//     items: [],
//     getItems() { },
//     add(product) { },
//     remove(productName) { },
//     clear() { },
//     countTotalPrice() { },
//     increaseQuantity(productName) { },
//     decreaseQuantity(productName) { },
// }

// console.table(cart.getItems());

// cart.add({ name: '🍎', price: 50 });
// cart.add({ name: '🍋', price: 60 });
// cart.add({ name: '🍋', price: 60 });
// cart.add({ name: '🍓', price: 130 });

// console.table(cart.getItems());

// cart.remove('🍎');