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

const cars = [
  {
    make: 'Honda',
    model: 'CR-V',
    type: 'suv',
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    make: 'Honda',
    model: 'accord',
    type: 'sedan',
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: 'Honda',
    model: 'Accord',
    type: 'sedan',
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: 'Mazda',
    model: 'Mazda 6',
    type: 'sedan',
    amount: 8,
    price: 24195,
    onSale: false,
  },
  {
    make: 'Mazda',
    model: 'CX-9',
    type: 'suv',
    amount: 7,
    price: 31520,
    onSale: true,
  },
  {
    make: 'Toyota',
    model: '4Runner',
    type: 'suv',
    amount: 19,
    price: 34210,
    onSale: false,
  },
  {
    make: 'Toyota',
    model: 'Sequoia',
    type: 'suv',
    amount: 16,
    price: 45560,
    onSale: false,
  },
  {
    make: 'Toyota',
    model: 'Tacoma',
    type: 'truck',
    amount: 4,
    price: 24320,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'F-150',
    type: 'truck',
    amount: 11,
    price: 27110,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'Fusion',
    type: 'sedan',
    amount: 13,
    price: 22120,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'Explorer',
    type: 'suv',
    amount: 6,
    price: 31660,
    onSale: false,
  },
];

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

// ====================================================================

// const numbers = [-2, 5, 1, -5, -1, 1, 3, 4, -1];

// const positiveNumbers = numbers.filter(number => number > 0);
// console.log(positiveNumbers);

// ====================================================================

// const heroes = [
//   { name: 'Batman', franchise: 'DC' },
//   { name: 'Ironman', franchise: 'Marvel' },
//   { name: 'Thor', franchise: 'Marvel' },
//   { name: 'Superman', franchise: 'DC' },
// ];

// const heroesOfDc = heroes.filter(hero => hero.franchise === 'DC');
// const heroesOfMarvel = heroes.filter(({ franchise }) => franchise === 'Marvel');

// console.table(heroesOfDc);
// console.table(heroesOfMarvel);

// const filterHeroesByFranchise = (array, value) =>
//   array.filter(({ franchise }) => franchise === value);

// console.log(filterHeroesByFranchise(heroes, 'DC'));
// console.log(filterHeroesByFranchise(heroes, 'Marvel'));

// ====================================================================

// const filterByPrice = (array, threshold) => array.filter(({price}) => price < threshold);

// console.table(filterByPrice(cars, 45000));
// console.table(filterByPrice(cars, 40000));
// console.table(filterByPrice(cars, 35000));
// console.table(filterByPrice(cars, 30000));
// console.table(filterByPrice(cars, 25000));

// ====================================================================

// const getCarsWithDiscount = (array) => array.filter(({ onSale }) => onSale);
// const getCarsWithoutDiscount = (array) => array.filter(({onSale}) => !onSale);

// console.table(getCarsWithDiscount(cars));
// console.table(getCarsWithoutDiscount(cars));

// const getModelsOfCarsWithDiscount = (array) => array.filter(({ onSale }) => onSale).map(({model}) => model);
// const getModelsofCarsWithoutDiscount = (array) => array.filter(({onSale}) => !onSale).map(({model}) => model);

// console.table(getModelsOfCarsWithDiscount(cars));
// console.table(getModelsofCarsWithoutDiscount(cars));

// ====================================================================

// const numbers = [
//   1, 2, 3, 4, 61, 19, 10, 11, 20, 25, 74, 35, 92, 5, 27, 2, 41, 20, 100, 1000, 4, 105, 10, 7, 3, 75,
//   1, 20, 25, 74, 35, 92, 5, 27, 2,
// ];

// console.log(numbers.length);

// // function uniqueValue(array) { return array.filter((element, index, array) => array.indexOf(element) === index) }

// // console.log(uniqueValue(numbers));
// // console.log(uniqueValue(numbers).length);

// // const uniqueValue = array => {
// //   return array.reduce((acc, element) => {
// //     if (!acc.includes(element)) {
// //       acc.push(element);
// //     }
// //     return acc;
// //   }, []);
// // };

// // console.log(uniqueValue(numbers));
// // console.log(uniqueValue(numbers).length);

// const uniqueValue = array => {
//   return array.reduce((acc, element) => (!acc.includes(element) ? [...acc, element] : acc), []);
// };

// console.log(uniqueValue(numbers));
// console.log(uniqueValue(numbers).length);

// ====================================================================

// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];

// // const countOfTags = tweets
// //   .flatMap(({ tags }) => tags)
// //   .reduce((acc, element) => {
// //     if (acc[element]) {
// //       acc[element] += 1;
// //     } else {
// //       acc[element] = 1;
// //     }
// //     return acc;
// //   }, {});

// // console.log(countOfTags);

// const countOfTags = tweets
//   .flatMap(({ tags }) => tags)
//   .reduce(
//     (acc, element) => ({...acc, [element]: acc[element] ? (acc[element] += 1) : (acc[element] = 1) }),
//     {}
//   );

// console.log(countOfTags);

// ====================================================================
