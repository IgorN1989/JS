// let cost = 0;
// // const subscription = 'pro';
// const subscription = 'free'

// if (subscription === 'pro') {
//     cost = 100;
// }

// console.log(cost);

// let cost;
// // const subscription = 'free';
// const subscription = 'pro'

// if (subscription === 'pro') {
//     cost = 100;
// } else {
//     cost = 0
// }

// console.log(cost);

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


const number = 10;

for (let i = 0; i < number; i += 1) {
    if (i % 2 === 0) {
        continue
    }
    console.log('Непарне i', i);
}







































































