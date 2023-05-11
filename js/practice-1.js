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

// let userInput = Number(prompt('Введіть число'));
// let total = 0;

// while (userInput !== 0) {
//     total += userInput;
//     userInput = Number(prompt('Введіть число'));
// }
// alert(`Загальна сума введених чисел дорівнює ${total}`);
// console.log(`Загальна сума введених чисел дорівнює ${total}`);

// ====================================================================

// У змінній min дежить число від 0 до 59. Визначити в яку чверть години потрапляє це число.

// const min = Math.round(Math.random() * (59 - 0) + 0);
// console.log(min);

// if (min >= 0 && min < 15) {
//     console.log(`Число ${min} в 1 чверті`);
// } else if (min >= 15 && min < 30) {
//     console.log(`Число ${min} в 2 чверті`);
// } else if (min >= 30 && min < 45) {
//     console.log(`Число ${min} в 3 чверті`)
// } else {
//     console.log(`Число ${min} в 4 чверті`)
// }

// ====================================================================

// const min = Math.round(Math.random() * (59 - 0) + 0);
// console.log(min);

// switch (true) {
//   case (min >= 0 && min < 15):
//     console.log('Число в 1 чверті');
//     break;

//   case (min >= 15 && min < 30):
//     console.log('Число в 2 чверті');
//     break;

//   case (min >= 30 && min < 45):
//     console.log('Число в 3 чверті');
//     break;

//   default:
//     console.log('Число в 4 чверті');
// }

// ====================================================================

// const number = Number(prompt('Введіть число'));

// if (number % 3 === 0 && number % 5 === 0) {
//   console.log('fizzbazz');
// } else if (number % 3 === 0) {
//   console.log('fizz');
// } else if (number % 5 === 0) {
//   console.log('bazz');
// } else {
//   console.log('Число не ділиться ні на 3, на на 5');
// }

// ====================================================================

// for (let i = 1 ; i < 20; i += 1) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log('fizzbazz');
//   } else if (i % 3 === 0) {
//     console.log('fizz');
//   } else if (i % 5 === 0) {
//     console.log('bazz');
//   } else {
//     console.log(`Число ${i} не ділиться ні на 3, на на 5`);
//   }
// }

// ====================================================================