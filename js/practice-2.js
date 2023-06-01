// const checkString = (str) => {
//     let exp;
//     if (str && 0) {
//         exp = false;
//     } else {
//         exp = true;
//     }
//     console.log(exp);
// }

// checkString('HTML & CSS & JS Tasks');
// console.log(Boolean('string' && 0));

// const a = {};
// const b = {};

// const c = {
//     d: 1,
//     c: 2,
// };

// c[a] = 3;
// c[b] = 4;

// console.log(c);

// const arr = [1, 2, 3, 4, 5]

// console.log(arr.push(6, 7, 8));
// console.log(arr);

// const arr = [];

// console.log(arr.pop());

// ====================================================================

// const genres = ['Jazz', 'Blues'];

// genres.push("Rock'n'Roll");
// console.log(genres);
// console.log(genres[0]);
// console.log(genres[genres.length - 1]);
// console.log(genres.shift());
// console.log(genres);
// genres.unshift('Country', 'Reggy');
// console.log(genres);

// ====================================================================

// const genres = ['Jazz', 'Blues', "Rock'N'Roll", 'Country', 'Reggy'];

// function getLongestWord(arr) {
//   let longestWord = arr[0];
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i].length > longestWord.length) {
//       longestWord = arr[i];
//     }
//   }
//   return longestWord;
// }

// console.log(getLongestWord(genres));

// let longestWord = genres[0];
// for (let i = 0; i < genres.length; i += 1) {
//   if (genres[i].length > longestWord.length) {
//     longestWord = genres[i];
//   }
// }

// console.log(longestWord);

// ====================================================================

// const managerSalaries = [1000, 1500, 2500, 4000, 5000];
// const developerSalaries = [8000, 40000, 15000];

// const allSalaries = [...managerSalaries, ...developerSalaries];
// console.log(allSalaries);

// let total = 0;
// for (const salary of allSalaries) {
//     total += salary;
// }

// const totalAmount = allSalaries.reduce((acc, item) => acc += item, 0)

// console.log(total);
// console.log(totalAmount);

// ====================================================================