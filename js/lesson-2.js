// let cost = 0;
// // const subscription = 'pro';
// const subscription = 'free'

// if (subscription === 'pro') {
//     cost = 100;
// }

// console.log(cost);

// ===================================================

// let cost;
// // const subscription = 'free';
// const subscription = 'pro'

// if (subscription === 'pro') {
//     cost = 100;
// } else {
//     cost = 0
// }

// console.log(cost);

// ===================================================

// let cost;
// const subscription = 'premium';

// if (subscription === 'free') {
//     cost = 0;
// } else if (subscription === 'pro') {
//     cost = 100;
// } else if (subscription === 'premium') {
//     cost = 500;
// } else {
//     console.log('Invalid subscription type');
// }
// console.log(cost);

// ===================================================

// let type;
// const age = 20;

// if (age >= 18) {
//     type = 'adult';
// } else {
//     type = 'child'
// }
// console.log(type);

// const age = 10;
// const type = age >= 18 ? 'adult' : 'child';
// console.log(type);

// const num1 = 5;
// const num2 = 10;

// const biggerNumber = num1 > num2 ? num1 : num2;
// console.log(biggerNumber);

// let cost;
// const subscription = 'premium';

// switch (subscription) {
//     case 'free':
//         cost = 0;
//         break;

//     case 'pro':
//         cost = 100;
//         break;

//     case 'premium':
//         cost = 500;
//         break;

//     default:
//         console.log('Invalid subscription type');
// }

// console.log(cost);

// let counter = 0;

// while (counter < 10) {
//     console.log('counter: ', counter);
//     counter += 1;
// }

// let clientCounter = 18;
// const maxClients = 25;

// while (clientCounter < maxClients) {
//     console.log(clientCounter);
//     clientCounter += 1;
// }

// let password = '';

// do {
//     password = prompt('Enter password', '');
// } while (password.length < 5);

// console.log('Password', password);

// for (let i = 0; i <= 20; i += 5) {
//     console.log(i);
// }

// const target = 3;
// let sum = 0;

// for (let i = 0; i <= target; i += 1) {
//     sum += i;
// }

// console.log(sum);

// const max = 10;
// for (let i = 0; i < max; i += 1) {
//     console.log(`${max} % ${i}`, max % i);
// }

// for (let i = 0; i <= 5; i += 1) {
//     console.log(i);

//     if (i === 3) {
//         console.log('Знайшли число 3, перериваємо виконання циклу');
//         break;
//     }
// }

// console.log('Лог після циклу');

// const number = 10;

// for (let i = 0; i < number; i += 1) {
//     if (i % 2 === 0) {
//         continue
//     }
//     console.log('Непарне i', i);
// }

// ====================================================================
// Repeta
// ====================================================================

// const stars = 21;
// let price;

// if (stars === 1) {
//     price = 20;
// } else if (stars === 2) {
//     price = 30;
// } else if (stars === 3) {
//     price = 50;
// } else if (stars === 4) {
//     price = 70;
// } else if (stars === 5) {
//     price = 120;
// } else {
// console.log("Такої кількості зірок нема");
// }

// console.log("Price: ", price);

// ====================================================================

// const stars = 21;
// let price;

// switch (stars) {
//     case 1:
//         price = 20;
//         break;

//     case 2:
//         price = 30;
//         break;

//     case 3:
//         price = 50;
//         break;

//     case 4:
//         price = 70;
//         break;

//     case 5:
//         price = 120;
//         break;

//     default:
//         console.log("Такої кількості зірок нема");
// }
// console.log("Price: ", price);

// ====================================================================

// const stars = 6;
// let price;

// if (stars === 1 || stars === 2) {
//     price = 20;
// } else if (stars === 3 || stars === 4) {
//     price = 30;
// } else if (stars === 5) {
//     price = 120;
// } else {
// console.log("Такої кількості зірок нема");
// }

// console.log("Price: ", price);

// ====================================================================

// const stars = 4;
// let price;

// switch (stars) {
//   case 1:
//   case 2:
//     price = 20;
//     break;

//   case 3:
//   case 4:
//     price = 30;
//     break;

//   case 5:
//     price = 120;
//     break;

//   default:
//     console.log('Такої кількості зірок нема');
// }
// console.log('Price: ', price);

// ====================================================================

// const options = 2;

// let message;

// switch (options) {
//     case 1:
//         message = "Ви можете забрати товар завтра з 12:00 в офісі";
//         break;

//     case 2:
//         message = "Кур'єр доставить замовлення завтра";
//         break;

//     case 3:
//         message = "Замовлення буде надіслано сьогодні";
//         break;

//     default:
//         message = "Вам передзвонить менеджер";
// }

// console.log(message);

// ====================================================================

// for (let i = 0; i < 10; i += 1) {
// console.log(i);
// }

// console.log('qweqwe');

// ====================================================================

// const minSalary = 500;
// const maxSalary = 5000;

// const employees = 5;
// let totalSalary = 0;

// for (let i = 1; i <= employees; i += 1) {
//     const salary = Math.round(
//         Math.random() * (maxSalary - minSalary) + minSalary);
//     console.log(`Salare of worker ${i} - ${salary}`);
//     totalSalary += salary;
// }

// console.log(totalSalary);

// ====================================================================

// const min = 6;
// const max = 13;
// let total = 0;

// for (let i = min; i <= max; i += 1) {
//     if (i % 2 !== 0) {
//         continue;
//     }
//     console.log("парне:", i);
//         total += i;
// }

// console.log("total:", total);

// ====================================================================

// let balance = 10000;
// const payment = 2000;

// console.log(`Загальна вартість замовлення ${payment} гривень. Перевіряємо кількість доступних коштів на рахунку`);

// if (balance >= payment) {
//     console.log("ok");
//     balance -= payment;
// } else {
//     console.log('Недостатньо коштів');
// }

// console.log('Баланс:', balance);

// ====================================================================

// let totalSpent = 20000;
// let payment = 500;
// let discount = 0;

// if (totalSpent >= 100 && totalSpent < 1000) {
//     console.log("Бронзовий аккаунт, знижка 2%");
//     discount = 0.02;
// } else if (totalSpent >= 1000 && totalSpent < 5000) {
//     console.log("Срібний аккаунт, знижка 5%");
//     discount = 0.05;
// } else if (totalSpent >= 5000) {
//     console.log("Золотий аккаунт, знижка 10%");
//     discount = 0.1;
// } else {
//     console.log("Не партнер, знижка 0%");
// }

// payment -= payment * discount;

// console.log(`Оформлюємо замовлення на суму ${payment} зі знижкою ${discount * 100}%`);

// totalSpent += payment;
// console.log(`Загальна сума витрат у магазині ${totalSpent}`);
// ====================================================================

// ====================================================================

// console.log('false' == false);

// console.log(Boolean('false'));

// console.log(false == 'false');

// console.log('M' < 'm');

// ====================================================================

// const value = prompt('Яка офіційна назва JavaScript?').toLowerCase();
// const ecma = 'ECMAScript';

// if (value === ecma.toLowerCase()) {
//     alert('Вірно!')
// } else {
//     alert('Не знаєте? ECMAScript')
// }

// ====================================================================

// const value = Number(prompt('Enter number'));
// // console.log(value);
// // console.log(typeof (value));

// if (value > 0) {
//     console.log('Це додатне число');
// } else if (value === 0) {
//     console.log('Це нуль');
// } else if (value < 0){
//     console.log("Це від'ємне число");
// } else {
//     console.log('Це не число');
// }

// ====================================================================

// let link = 'https://somesite.com/about';

// console.log(link.endsWith('/'));
// console.log(link.slice(link.length - 1));

// if (!link.endsWith('/')) {
//     link = `${link}/`
//     link += '/';
// }
// console.log(link.slice(link.length - 1));
// console.log(link);
// console.log(link[link.length-1]==='/');

// ====================================================================

// const days = Number(prompt('Enter days'));

// console.log(days);

// if (days === 0) {
//     console.log("Сьогодні");
// } else if (days === 1) {
//     console.log("Завтра");
// } else if (days === 2) {
//     console.log("Післязавтра");
// } else {
//     console.log("Дата в майбутньому");
// }

// ====================================================================

// const days = Number(prompt('Enter days'));

// switch (days) {
//   case 0:
//     console.log('Сьогодні');
//     break;

//   case 1:
//     console.log('Завтра');
//     break;

//   case 2:
//     console.log('Післязавтра');
//     break;

//   default:
//     console.log('Дата в майбутньому');
// }

// ====================================================================

// const max = 100;
// const min = 20;
 
// for (let i = min; i <= max; i += 1) {
//   if (i % 5 === 0) {
//     console.log(i);
//   }
// }

// ====================================================================

// const color = prompt("Enter color").toLowerCase();

// switch (color) {
//     case 'red':
//         alert('STOP!!!')
//         break;
    
//     case 'yellow':
//         alert('READY')
//         break;
    
//     case 'green':
//         alert('GO!')
//         break;
    
//     default:
//         alert('Not working')
// }
// console.log(color);

// ====================================================================

const test = prompt('hhhh')
console.dir(test);