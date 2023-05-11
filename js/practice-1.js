// console.log(Number(null));
// console.log(null);

// const string = 'hello';
// const arr = [1,2,3];
// console.log(Number(arr));

// console.log(5 + '5');
// console.log('5'+5);

// ====================================================================

// const answer = prompt('Яка офіційна мова JavaScript?');
// const correctAnswer = 'ECMAScript';

// console.log(answer);

// if (answer === null) {
//     alert("Ви не ввели відповідь");
// } else if (answer.toLowerCase() === correctAnswer.toLowerCase()) {
//     alert("Вірно!");
// } else {
//     alert("Не знаєте? ECMAScript")
// }

// const userInput = prompt('Яка офіційна мова JavaScript?');
// console.log(userInput);

// if (userInput === 'ECMAScript') {
//   alert('Вірно!');
// } else {
//   alert('Не знаєте? ECMAScript');
// }

// ====================================================================

// Перевести кількість хвилин в формат (ГГ:ХХ)

// const userInput = Number(prompt('Введіть кількість хвилин'));
// // console.log(userInput);

// let hours = Math.floor(userInput / 60);
// hours = String(hours).padStart(2, '0');
// // console.log(hours);

// let minutes = userInput % 60;
// minutes = String(minutes).padStart(2, '0');
// // console.log(minutes);

// console.log(`${hours}:${minutes}`);

// ====================================================================

// Скласти всі парні числа від max до min

// let max = Number(prompt('Введіть максимальне значення'));
// let min = Number(prompt('Введіть мінімальне значення'));
// let total = 0;

// for (let i = max; i >= min; i -= 1) {
//   if (i % 2 === 0) {
//     total += i;
//   }
// }

// console.log(total);

// ====================================================================

// Скласти всі непарні числа від max до min

// let max = Number(prompt('Введіть максимальне значення'));
// let min = Number(prompt('Введіть мінімальне значення'));
// let total = 0;

// // for (let i = max; i >= min; i -= 1) {
// //   if (i % 2 !== 0) {
// //     total += i;
// //   }
// // }

// // or

// for (let i = max; i >= min; i -= 1) {
//   if (i % 2 === 0) {
//     continue;
//   }
//   total += i;
// }

// console.log(total);

// ====================================================================

let userInput = Number(prompt('Введіть число'));
let total = 0;

while (userInput !== 0) {
    total += userInput;
    userInput = Number(prompt('Введіть число'));
}
alert(`Загальна сума введених чисел дорівнює ${total}`);
console.log(`Загальна сума введених чисел дорівнює ${total}`);