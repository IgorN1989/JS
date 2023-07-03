// function each(array, callback) {
//   let arr = [];
//   for (let i = 0; i < array.length; i += 1) {
//     //   console.log(callback(array[i]));
//     arr.push(callback(array[i]));
//   }
//   return arr;
// }

// const add = value => value * 2;

// console.log(each([1, 8, 5], add));

// ====================================================================

// function each(array, callback) {
//   return array.map(callback);
// }

// const add = value => value * 2;

// console.log(each([1, 8, 5], add));

// ====================================================================

// const cars = [
//   {
//     make: 'Honda',
//     model: 'CR-V',
//     type: 'suv',
//     amount: 14,
//     price: 24045,
//     onSale: true,
//   },
//   {
//     make: 'Honda',
//     model: 'accord',
//     type: 'sedan',
//     amount: 2,
//     price: 22455,
//     onSale: true,
//   },
//   {
//     make: 'Honda',
//     model: 'Accord',
//     type: 'sedan',
//     amount: 2,
//     price: 22455,
//     onSale: true,
//   },
//   {
//     make: 'Mazda',
//     model: 'Mazda 6',
//     type: 'sedan',
//     amount: 8,
//     price: 24195,
//     onSale: false,
//   },
//   {
//     make: 'Mazda',
//     model: 'CX-9',
//     type: 'suv',
//     amount: 7,
//     price: 31520,
//     onSale: true,
//   },
//   {
//     make: 'Toyota',
//     model: '4Runner',
//     type: 'suv',
//     amount: 19,
//     price: 34210,
//     onSale: false,
//   },
//   {
//     make: 'Toyota',
//     model: 'Sequoia',
//     type: 'suv',
//     amount: 16,
//     price: 45560,
//     onSale: false,
//   },
//   {
//     make: 'Toyota',
//     model: 'Tacoma',
//     type: 'truck',
//     amount: 4,
//     price: 24320,
//     onSale: true,
//   },
//   {
//     make: 'Ford',
//     model: 'F-150',
//     type: 'truck',
//     amount: 11,
//     price: 27110,
//     onSale: true,
//   },
//   {
//     make: 'Ford',
//     model: 'Fusion',
//     type: 'sedan',
//     amount: 13,
//     price: 22120,
//     onSale: true,
//   },
//   {
//     make: 'Ford',
//     model: 'Explorer',
//     type: 'suv',
//     amount: 6,
//     price: 31660,
//     onSale: false,
//   },
// ];

// function getPrices(array) {
//   return array.map(element => element.price);
// }

// // console.log(getPrices(cars));

// // function makeCarsWithDiscount(array, discount) {
// //   return array.map(element => {
// //     element.price = (element.price / 100) * (100 - discount);
// //     return element;
// //   });
// // }

// function makeCarsWithDiscount(array, discount) {
//   return array.map(element => {
//     return {...element, price: Math.ceil((element.price / 100) * (100 - discount))};
//   });
// }

// console.table(makeCarsWithDiscount(cars, 10));
