// const fnA = function (message, callback) {
//     console.log(message);
//     console.log(callback);
//     callback(100);
// };

// const fnB = function (number) {
//     console.log('Це лог при виклику fnB', number);
// }

// fnA('qweqwe', fnB)

// ====================================================================

// const doMath = function (a, b, callback) {
//   const result = callback(a, b);
//   console.log(result);
// };

// const add = function (x, y) {
//   return x + y;
// };

// const sub = function (x, y) {
//   return x - y;
// };

// doMath(2, 3, add);
// doMath(10, 8, sub);

// doMath(10, 8, function (x, y) {
//   return x + y;
// });

// ====================================================================

// const filter = function (array, test) {
//   const filteredArray = [];

//   for (const el of array) {
//     console.log(el);
//     const passed = test(el);

//     if (passed) {
//       filteredArray.push(el);
//     }
//   }

//   return filteredArray;
// };

// const callback1 = function (value) {
//   return value >= 3;
// };

// const r1 = filter([1, 2, 3, 4, 5], callback1);
// console.log(r1);

// const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], function (value) {
//   return value <= 4;
// });
// console.log(r2);

// const fruits = [
//   { name: 'apples', quantity: 200, isFresh: true },
//   { name: 'grapes', quantity: 150, isFresh: false },
//   { name: 'bananas', quantity: 100, isFresh: true },
// ];

// const getFruitsWithQuantity = function (fruit) {
//     return fruit.quantity >= 120;
// }

// const r3 = filter(fruits, getFruitsWithQuantity);
// console.log(r3);

// ====================================================================

// const fnA = function (parameter) {
//     const innerVariable = 'значення внутряшньої змінної функції fnA';

//     const innerFunction = function () {
//         console.log(parameter);
//         console.log(innerVariable);
//         console.log('Це виклик innerFunction');
//     };

//     return innerFunction;
// };

// const fnB = fnA(555);

// fnB();

// console.log(fnB);

// ====================================================================

const makeDish = function (sheffName, dish) {
  console.log(`${sheffName} готує ${dish}`);
};

// makeDish('Mango', 'пиріжок');
// makeDish('Mango', 'омлет');
// makeDish('Mango', 'чай');

// makeDish('Poly', 'котлета');
// makeDish('Poly', 'суп');
// makeDish('Poly', 'кава');

const makeSheff = function (name) {
  const makeDish = function (dish) {
    console.log(`${name} готує ${dish}`);
    };
    
    return makeDish;
};

const mango = makeSheff('Mango');

// console.log(mango);

mango('котлети');
mango('пиріжок');

// ====================================================================
// ====================================================================

// ====================================================================
// ====================================================================
// ====================================================================

// ====================================================================
// ====================================================================
// ====================================================================
