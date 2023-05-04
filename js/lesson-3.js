// const clients = ['Mango', 'Poly', 'Ajax']
// console.log(clients[0]);
// console.log(clients[1]);
// console.log(clients[2]);
// console.log(clients.length);

// clients[0] = 'Kiwi';
// clients[1] = 'Pango';
// console.log(clients);

// const lastElementIndex = clients.length-1
// const lastElement = clients[lastElementIndex];
// console.log(lastElementIndex);
// console.log(lastElement);

// ====================================================================

// const clients = ['Mango', 'Poly', 'Ajax'];
// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }

// ====================================================================

// const clients = ['Mango', 'Poly', 'Ajax'];

// for (const client of clients) {
//   console.log(client);
// }

// const string = 'javascript';

// for (const letter of string) {
//   console.log(letter);
// }

// ====================================================================

// const clients = ['Mango', 'Poly', 'Ajax'];
// const clientNameToFind = 'Poly';
// let message = "Клієнт з таким ім'ям відсутній в базі даних!";

// for (const client of clients) {
//   if (client === clientNameToFind) {
//     message = "Клієнт з таким ім'ям є в базі даних!";
//     break;
//   }
// }

// console.log(message);

// ====================================================================

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }

//   console.log(`Число більше за ${threshold}: ${numbers[i]}`);
// }

// for (const number of numbers) {
//   if (number < threshold) {
//     continue;
//   }

//   console.log(`Число більше за ${threshold}: ${number}`);
// }

// ====================================================================

// const name = "Mango"
// console.log(name.split(''));

// const message = "JavaScript - це цікаво";
// console.log(message.split(' '));

// const words = ["JavaScript", "це", "цікаво"];
// console.log(words.join(' '));

// ====================================================================

// const clients = ['Mango', 'Poly', 'Ajax', 'Kiwi'];
// console.log(clients.indexOf('Mango'));
// console.log(clients.indexOf('Poly'));
// console.log(clients.indexOf('Ajax'));
// console.log(clients.indexOf('Kiwi'));

// console.log(clients.includes('Kiwi'));
// console.log(clients.includes('Bingo'));

// ====================================================================

// const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
// const fruit = 'cherry';

// const hasFruit = redFruits.includes(fruit);

// if (hasFruit) {
//   console.log(`${fruit} is a red fruit!`);
// }

// ====================================================================

// const numbers = [1, 2, 3, 4, 5];

// console.log(numbers.pop()); //  5
// console.log(numbers); // [1, 2, 3, 4]

// console.log(numbers.pop()); //  4
// console.log(numbers); // [1, 2, 3]

// console.log(numbers.pop()); //  3
// console.log(numbers); // [1, 2]

// console.log(numbers.pop()); //  2
// console.log(numbers); // [1]

// console.log(numbers.pop()); //  1
// console.log(numbers); // []

// console.log(numbers.pop());
// console.log(numbers); // undefined

// console.log(numbers.unshift(3));
// console.log(numbers);

// console.log(numbers.push(456));
// console.log(numbers);

// console.log((numbers.shift()));
// console.log(numbers);

// ====================================================================

// const clients = ['Mango', 'Poly', 'Ajax', 'Kiwi'];
// console.log(clients.slice(1, 3));
// console.log(clients.slice());
// console.log(clients.slice(1));
// console.log(clients.slice(-1));

// ====================================================================

// const scores = [1, 2, 3, 4, 5];
// const deletedScores = scores.splice(0, 3);

// console.log(scores);
// console.log(deletedScores);

// ====================================================================

// const colors = ["red", "green", "blue"];
// colors.splice(2, 0, 'purple');
// console.log(colors);
// colors.splice(1, 0, 'yellow', 'pink');
// console.log(colors);

// ====================================================================

// const languages = ["C", "C++", "Java", "JavaScript"];
// languages.splice(1, 1, 'Python');
// console.log(languages);

// languages.splice(2, 1, "C#", "Swift", "Go");
// console.log(languages);

// ====================================================================

// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newClients = ["Monkong", "Singu"];

// const allClientsWithOldFirst = oldClients.concat(newClients);
// console.log(allClientsWithOldFirst);

// const allClientsWithNewFirst = newClients.concat(oldClients);
// console.log(allClientsWithNewFirst);

// console.log(oldClients);
// console.log(newClients);

// ====================================================================

// Repeta

// ====================================================================

// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// console.log(friends);
// console.table(friends);

// ====================================================================

// const cart = [54, 28, 105, 70, 92, 17, 120];
// let total = 0;

// for (let i = 0; i < cart.length; i += 1) {
//   // console.log(cart[i]);
//   total += cart[i];
// }

// console.log(total);

// ====================================================================

// const cart = [54, 28, 105, 70, 92, 17, 120];
// let total = 0;

// for (const item of cart) {
//     total += item;
// }

// console.log(total);

// ====================================================================

// const cart = [54, 28, 105, 70, 92, 17, 120];
// let total = 0;

// for (let i = 0; i < cart.length; i += 1) {
//   cart[i] = Math.round(cart[i] * 1.1);
//   total += cart[i];
// }

// console.log(total);

// ====================================================================

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];
// let total = 0;

// for (const number of numbers) {
//   if (number % 2 !== 0) {
//     continue;
//     }

//   total += number;
// }

// console.log(total);

// ====================================================================

// const logins = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// const loginToFind = 'Poly';
// let message = `Користувач ${loginToFind} не знайден`;

// for (let i = 0; i < logins.length; i += 1) {
//   const login = logins[i];

//   if (login === loginToFind) {
//     message = `Користувач ${loginToFind} знайден`;
//     break;
//   }
// }

// console.log(message);

// ====================================================================

// const logins = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// const loginToFind = 'Poly';
// let message = `Користувач ${loginToFind} не знайден`;

// for (const login of logins) {

//   if (login === loginToFind) {
//     message = `Користувач ${loginToFind} знайден`;
//     break;
//   }
// }

// console.log(message);

// ====================================================================

// const logins = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// const loginToFind = 'Poly';

// const message = logins.includes(loginToFind)
//   ? `Користувач ${loginToFind} знайден`
//   : `Користувач ${loginToFind} не знайден`;

// console.log(message);

// ====================================================================

const numbers = [51, 18, 13, 24, 7, 85, 19];
let smallestNumber = numbers[0];

for (const number of numbers) {
  if (number < smallestNumber) {
    smallestNumber = number;
  }
}

console.log(smallestNumber);

// ====================================================================

// ====================================================================

// ====================================================================

// ====================================================================

// ====================================================================

// ====================================================================
