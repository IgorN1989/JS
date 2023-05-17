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

const showProfileInfo = function (userProfile) {
  // console.log(userProfile);
  const {
    name,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  } = userProfile;

  console.log(name, tag, location, avatar, followers, views, likes);
};

const profile = {
  name: 'Igor',
  tag: 'IgorN',
  location: 'Kyiv, Ukraine',
  avatar: 'https://avatar.com',
  stats: {
    followers: 100,
    views: 3333,
    likes: 123,
  },
};

showProfileInfo(profile);

// ====================================================================
// ====================================================================
// ====================================================================
// ====================================================================
// ====================================================================
// ====================================================================
// ====================================================================
// ====================================================================
// ====================================================================
// ====================================================================
// ====================================================================
// ====================================================================
// ====================================================================
// ====================================================================
