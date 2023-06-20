// // Налаштування
// const recordCollection = {
//   2548: {
//     albumTitle: 'Slippery When Wet',
//     artist: 'Bon Jovi',
//     tracks: ['Let It Rock', 'You Give Love a Bad Name'],
//   },
//   2468: {
//     albumTitle: '1999',
//     artist: 'Prince',
//     tracks: ['1999', 'Little Red Corvette'],
//   },
//   1245: {
//     artist: 'Robert Palmer',
//     tracks: [],
//   },
//   5439: {
//     albumTitle: 'ABBA Gold',
//   },
// };

// // Змініть код лише під цим рядком
// function updateRecords(records, id, prop, value) {
//   if (prop === 'tracks' && value.length !== 0) {
//     if (!records[id].hasOwnProperty(prop)) {
//       records[id][prop] = [];
//       records[id][prop].push(value);
//     } else {
//       records[id][prop].push(value);
//     }
//   } else {
//     records[id][prop] = value;
//   }

//   if (value.length === 0) {
//     delete records[id][prop];
//   }

//   return records;
// }

// updateRecords(recordCollection, 5439, 'artist', 'ABBA');
// updateRecords(recordCollection, 5439, 'tracks', 'Take a Chance on Me');
// updateRecords(recordCollection, 2548, 'artist', '');
// updateRecords(recordCollection, 1245, 'tracks', 'Addicted to Love');
// updateRecords(recordCollection, 2468, 'tracks', 'Free');
// updateRecords(recordCollection, 2548, 'tracks', '');
// updateRecords(recordCollection, 1245, 'albumTitle', 'Riptide');

// console.log(recordCollection);

// function multiplyAll(arr) {
//   let product = 1;
//   // Змініть код лише під цим рядком

// // for(let i = 0; i < arr.length; i += 1) {
// //   for(let j = 0; j < arr[i].length; j += 1) {
// //     product *= arr[i][j];
// //   }
// // }

// const allItems = arr.flatMap((innerArr) => innerArr)
//     for (let i = 0; i < allItems.length; i += 1) {
//         product *= allItems[i];
//     }

//   // Змініть код лише над цим рядком
//   return product;
// }

// console.log(multiplyAll([[1, 2], [3, 4], [5, 6, 7]]));

// Налаштування
// const contacts = [
//   {
//     firstName: 'Akira',
//     lastName: 'Laine',
//     number: '0543236543',
//     likes: ['Pizza', 'Coding', 'Brownie Points'],
//   },
//   {
//     firstName: 'Harry',
//     lastName: 'Potter',
//     number: '0994372684',
//     likes: ['Hogwarts', 'Magic', 'Hagrid'],
//   },
//   {
//     firstName: 'Sherlock',
//     lastName: 'Holmes',
//     number: '0487345643',
//     likes: ['Intriguing Cases', 'Violin'],
//   },
//   {
//     firstName: 'Kristian',
//     lastName: 'Vos',
//     number: 'unknown',
//     likes: ['JavaScript', 'Gaming', 'Foxes'],
//   },
// ];

// function lookUpProfile(name, prop) {
//   for (const contact of contacts) {
//     if (name === contact.firstName) {
//       if (contact.hasOwnProperty(prop)) {
//         return contact[prop];
//       } else {
//         return 'No such property';
//       }
//     }
//   }
//   return 'No such contact';
// }

// console.log(lookUpProfile('Kristian', 'lastName'));
// console.log(lookUpProfile('Sherlock', 'likes'));
// console.log(lookUpProfile('Harry', 'likes'));
// console.log(lookUpProfile('Bob', 'number'));
// console.log(lookUpProfile('Bob', 'potato'));
// console.log(lookUpProfile('Akira', 'address'));

// console.log(Math.floor(Math.random() * 21));

// function countup(n) {
//   if (n < 1) {
//     return [];
//   } else {
//     const countArray = countup(n - 1);
//     countArray.push(n);
//     return countArray;
//   }
// }
// console.log(countup(5));

// function countdown(n) {
//     if (n < 1) {
//         return [];
//     } else {
//         const countArray = countdown(n - 1);
//         countArray.unshift(n);
//         return countArray;
//  }
// }

// console.log(countdown(5));


// function rangeOfNumbers(startNum, endNum) {
//   if (endNum < startNum) {
//     return [];
//   } else {
//     const numbers = rangeOfNumbers(startNum, endNum - 1);
//     numbers.push(endNum);
//     return numbers
//   }
// };

// console.log(rangeOfNumbers(10,20));