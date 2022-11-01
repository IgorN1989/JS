// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//   let arr = [];
//   for (const product of products) {
//     const keys = Object.keys(product);
//     for (const key of keys) {
//       if (key === propName) {
//         arr.push(product[key]);
//       }
//     }
//   }
//   return arr;
//   // Change code above this line
// }

// getAllPropValues('name');

// let weight = prompt("введіть вагу");
// let height = prompt("введіть зріст");

// weight = parseFloat(weight.replaceAll(",", "."));
// height = parseFloat(height.replaceAll(",", "."));

// const bmi = (weight / Math.pow(height, 2)).toFixed(1);
// console.log(bmi);


// const value = Number(prompt("Enter number"))

// if (value > 0) {
//   console.log("Це позитивне число");
// } else if (value === 0) {
//   console.log("Це нуль");
// } else if (value < 0) {
//   console.log("Це від'ємне число");
// } else {
//   console.log("Це не число");
//   }

// if (value > 0) {
//   console.log("Це позитивне число");
// }
// if (value === 0) {
//   console.log("Це нуль");
// }
// if (value < 0) {
//   console.log("Це від'ємне число");
// }
// if (isNaN(value)) {
//   console.log("Це не число");
//   }

// let link = "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/parseFloat";
// console.log(link.slice(link.length - 1))
// console.log(link.endsWith("/"));
// console.log(link.length);

// if (!link.endsWith("/")) {
// // link = `${link}/`
//   // link = link + "/"
//   link += "/"
// }
// console.log(link);

// console.log(link[-2]);

// const days = Number(prompt("Enter days"));

// if (days === 0) {
//   console.log("Today");
// } else if (days === 1) {
//   console.log("Tomorrow");
// } else if (days === 2) {
//   console.log("Day after tomorrow");
// } else {
//   console.log("Future");
// }

// switch (days) {
//   case 0:
//     console.log("Today");
//     break;

//   case 1:
//     console.log("Tomorrow");
//     break;

//   case 2:
//     console.log("Day after tomorrow");
//     break;

//   default:
//     console.log("Future");
// }


// const max = 100;
// const min = 20;

// for (let i = min; i <= max; i += 1) {
//   if (i % 5 === 0) {
//     console.log(i);
//   }
// }

// const color = prompt("Enter color")
// console.log(color);

// const a = new Date().getMilliseconds();

// switch (color) {
//   case "red":
//     console.log("STOP!!!")
//     break;
//   case "yellow":
//     console.log("READY!!!")
//     break;
//   case "green":
//     console.log("GO!!! || RUN!!!")
//     break;
//   default:
//     console.log("BE CAREFUL!!!")
// }


// const b = new Date().getMilliseconds();

// console.log(a-b);

// function changeEven(numbers, value) {

//   let newArray = []
//   numbers.forEach(number => { if (number % 2 === 0) { number += value; } newArray.push(number)})
//   return newArray;


// }

// console.log(changeEven([1, 2, 3, 4, 5], 10));

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const getTags = tweets =>
//   tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);

//     return allTags;
//   }, []);

// const tags = getTags(tweets);

// // Винесемо callback-функцію окремо, а в reducе передамо посилання на неї.
// // Це стандартна практика, якщо callback-функція досить велика.

// // Якщо в об'єкті-акумуляторі acc відсутня своя властивість з ключем tag,
// // то створюємо її і записуємо їй значення 0.
// // В іншому випадку збільшуємо значення на 1.
// const getTagStats = (acc, tag) => {
//   if (!acc.hasOwnProperty(tag)) {
//     acc[tag] = 0;
//   }

//   acc[tag] += 1;

//   return acc;
// };

// // Початкове значення акумулятора - це порожній об'єкт {}
// const countTags = tags => tags.reduce(getTagStats, {});

// const tagCount = countTags(tags);
// console.log(tagCount);


// const obj = {
//   a: 5,
//   b: {
//     c: "hello10",
//     d: 20,
//   },
// };

// console.log(obj);

// const copy = { ...obj };

// console.log(copy);

// console.log(obj === copy);
// console.log(obj.a === copy.a);
// console.log(obj.b === copy.b);
// console.log(obj.b.c);

// copy.b.c = 1234;
// console.log(obj.b.c);
// console.log(copy.b.c);
// console.log(obj.b.c === copy.b.c);


// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const allTags = tweets.reduce((totalTags, tweet) => [...totalTags, ...tweet.tags], []);

// console.log(allTags);

// const tagsStats = allTags.reduce((acc, tag) => {
//   console.log(acc);

//   if (acc[tag]) {
//     acc[tag] += 1;

//     return acc;
//   }

//   acc[tag] = 1;
//   return acc;
// }, {});

// const allTags = tweets.reduce((totalTags, tweet) => [...totalTags, ...tweet.tags], []);

// const tagsStats = allTags.reduce(
//   (acc, tag) => ({
//     ...acc,
//     [tag]: acc[tag] ? acc[tag] + 1 : 1,
//   }),
//   {},
// );

// console.log(tagsStats);

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets.map(planet => planet.length);

// console.log(planetsLengths);

// const getUserNames = users.map(user => user.name)


// Колекція об'єктів для всіх прикладів з автомобілями
// const cars = [{
//         make: 'Honda',
//         model: 'CR-V',
//         type: 'suv',
//         amount: 14,
//         price: 24045,
//         onSale: true
//     },
//     {
//         make: 'Honda',
//         model: 'accord',
//         type: 'sedan',
//         amount: 2,
//         price: 22455,
//         onSale: true
//     },
//     {
//         make: 'Honda',
//         model: 'Accord',
//         type: 'sedan',
//         amount: 2,
//         price: 22455,
//         onSale: true
//     },
//     {
//         make: 'Mazda',
//         model: 'Mazda 6',
//         type: 'sedan',
//         amount: 8,
//         price: 24195,
//         onSale: false
//     },
//     {
//         make: 'Mazda',
//         model: 'CX-9',
//         type: 'suv',
//         amount: 7,
//         price: 31520,
//         onSale: true
//     },
//     {
//         make: 'Toyota',
//         model: '4Runner',
//         type: 'suv',
//         amount: 19,
//         price: 34210,
//         onSale: false
//     },
//     {
//         make: 'Toyota',
//         model: 'Sequoia',
//         type: 'suv',
//         amount: 16,
//         price: 45560,
//         onSale: false
//     },
//     {
//         make: 'Toyota',
//         model: 'Tacoma',
//         type: 'truck',
//         amount: 4,
//         price: 24320,
//         onSale: true
//     },
//     {
//         make: 'Ford',
//         model: 'F-150',
//         type: 'truck',
//         amount: 11,
//         price: 27110,
//         onSale: true
//     },
//     {
//         make: 'Ford',
//         model: 'Fusion',
//         type: 'sedan',
//         amount: 13,
//         price: 22120,
//         onSale: true
//     },
//     {
//         make: 'Ford',
//         model: 'Explorer',
//         type: 'suv',
//         amount: 6,
//         price: 31660,
//         onSale: false
//     }
// ];


// const getModels = (arr) => {
//   const models = arr.map((item) => item.model)
//   return models
// }
// console.log(getModels(cars));

// const getModels = (arr) => arr.map(({model}) => model)

// console.log(getModels(cars));

// const makeCarsWithDiscount = (cars, discount) => {
//   const result = cars.map((car) => {
//     const changePrice = car.price / 100 * (100-discount);
//     car.price = changePrice;
//     return car;
//   })
//   return result;
//  };
// console.log(makeCarsWithDiscount(cars, 6));

// const makeCarsWithDiscount = (cars, discount) =>
//   cars.map((car) => {car.price = car.price / 100 * (100-discount);
//     return car;
//   })

// const makeCarsWithDiscount = (cars, discount) => cars.map((car) => {
//   car.price -= car.price / 100 * discount;
//   car.price = Math.ceil(car.price)
//   return car;
//   })

// console.log(makeCarsWithDiscount(cars, 6));
// console.log(makeCarsWithDiscount(cars, 11));


// const filterByPrice = (cars, threshold) => {
//   const result = cars.filter((item) => {
//     if (item.price < threshold) {
//       return item
//     }
//   })
//   return result;
// };


// const filterByPrice = (cars, threshold) => cars.filter(({ price }) => price < threshold);

// console.log(filterByPrice(cars, 30000));
// console.log(filterByPrice(cars, 25000));


// const getCarsWithDiscount = cars => {
//   const result = cars.filter(car => {
//     if (car.onSale) {
//       return car;
//     }
//   })
//   return result;
// };

// const getCarsWithDiscount = cars => cars.filter(({ onSale }) => onSale);

// console.log(cars);
// console.log(getCarsWithDiscount(cars));



// const getCarsWithType = (cars, type) => {
//   const result = cars.filter((car) => {
//     if (car.type === type) {
//       return car;
//     }
//   })
//   return result;
// }

// const getCarsWithType = (cars, type) => cars.filter(({ type: carType }) => carType === type);

// console.log(getCarsWithType(cars, "suv"));
// console.log(getCarsWithType(cars, "sedan"));


// const getCarByModel = (cars, model) => {
//   const result = cars.find(car => {
//     if (car.model === model) {
//       return car;
//     }
//   })
//   return result;
// }

// const getCarByModel = (cars, model) => cars.find(({model: carModel}) => carModel === model)

// console.log(getCarByModel(cars, "F-150"));
// console.log(getCarByModel(cars, "CX-9"));


// const sortByAscendingAmount = cars => cars.sort((prevCar, nextCar) => prevCar.amount - nextCar.amount)

// console.table(cars)
// console.table(sortByAscendingAmount(cars))

// const sortByAscendingPrice = cars => cars.sort((prevCar, nextCar) => prevCar.price - nextCar.price)

// console.table(cars)
// console.table(sortByAscendingPrice(cars))

// const sortByModel = (cars, order) => {
//   let result;
//   if (order === "asc") {
//   result = cars.sort((prevCar, nextCar) => prevCar.model.localeCompare(nextCar.model))
//   } else {
//     result = cars.sort((prevCar, nextCar) => nextCar.model.localeCompare(prevCar.model))
//   }
//   return result
// };

// console.table(cars);
// console.table(sortByModel(cars, "asc"));
// // console.table(cars);
// console.table(sortByModel(cars, "desc"));




// const getTotalAmount = cars => {
//     const result = cars.reduce((acc, car) => {
//         return acc + car.amount
//     }, 0)
//     return result
// };

// console.log(getTotalAmount(cars));


// const getModelsOnSale = cars => {
//     const result = cars.filter((car) => car.onSale).map(({ model }) => model)
//     return result
// };

// console.table(getModelsOnSale(cars));


// getSortedCarsOnSale = cars => {
//     const result = cars.filter(({ onSale }) => onSale).sort((a, b) => a.price - b.price);
//     return result.reduce((acc, car, idx) => {
//         return acc + `${idx+1}. ${car.make} ${car.model} ціна ${car.price}:\n`
//     }, `Кількість автомобілів ${result.length}:\n`)
// };


// console.log(getSortedCarsOnSale(cars));


// getSortedCarsOnSale = cars => {
//     const result = cars.filter((car) => car.onSale).sort((a, b) => a.price - b.price);
//     return result.reduce((acc, car, idx) => {
//         return acc + `${idx+1}. ${car.make} ${car.model} ціна ${car.price}:\n`
//     }, result.length ? `Кількість автомобілів ${result.length}:\n`: "Немає 😒")
// };

// console.log(getSortedCarsOnSale(cars));


// Потрібно повернути обєкт де ключом являється назва літери а значенням та кількість раз скільки ця літера зустрічаєьься в рядку
// const str = 'fwewfwfaczfascawdczxzsdaczzcsfacaDAxcadfa';
// const st1 = 'fwewfwfaczfascazvdxfndgfmretnsrafGDBhwerDAxcadfa';

// function foo(str) {
//     str = str.split("");
//     return str.reduce((acc, value) => {
//         // if (key in obj)
//         if (acc.hasOwnProperty(value)) {
//             acc[value] += 1
//         } else {
//             acc[value] = 1
//         }
//         return acc;
//     }, {})
// }

// console.table(foo(str));
// console.table(foo(st1));

// const arr = [1, 2, 3, [4, 5], 6];
// console.log(arr);

// const newArray = [1, 2, 3,...arr[3], 6];
// console.log(newArray);

// const newArr = arr.map(element => element);
// console.log(newArr);


// const chopShop = {
//     stones: [
//         {
//             name: "Emerald",
//             price: 1300,
//             quantity: 4,
//         },
//         {
//             name: "Diamond",
//             price: 2700,
//             quantity: 3,
//         },
//         {
//             name: "Sapphire",
//             price: 1400,
//             quantity: 7,
//         },
//         {
//             name: "Ruby",
//             price: 800,
//             quantity: 2,
//         },
//     ],
//     calcTotalPrice(stoneName) {
//         // return this.stones.reduce((acc, stone) => {
//         //     if (stone.name === stoneName) {
//         //         return stone.price * stone.quantity
//         //     }
//         //     return acc
//         // }, 0)


//         const { price, quantity } = this.stones.find(item => item.name === stoneName)
//         return price * quantity


//         //         return this.stones.reduce((acc, {name, price,quantity}) => name === stoneName ? acc = price * quantity : acc, 0)
//     },
// };

// console.log(chopShop.calcTotalPrice("Emerald"));
// console.log(chopShop.calcTotalPrice("Diamond"));
// console.log(chopShop.calcTotalPrice("Sapphire"));
// console.log(chopShop.calcTotalPrice("Ruby"));


// const phoneBook = {
//     contacts: [],
//     add(contact) {
//         const newContact = {
//             list: "default",
//             ...contact,
//             id: phoneBook.generateId(),
//             createdAt: phoneBook.getDate(),
//         };
//         this.contacts.push(newContact);
//         return this.contacts
//     },
//     generateId: () => {
//         return "_" + Math.random().toString(36).substr(2, 9);
//     },
//     getDate: () => {
//         return Date.now();
//     },
// };

// // console.log(phoneBook.add({
// //     name: "Mango",
// //     email: "mango@mail.com",
// //     list: " friends",
// // }),
// // );
// // console.log(phoneBook.add({
// //     name: "Poly",
// //     email: "poly@mail.com",
// // }),
// // );

// const newPhoneBook = {
//     contacts: [],

// }

// console.log(phoneBook.add.call(newPhoneBook, {
//     name: "Mark",
//      email: "mark@mail.com",
//     list: " friends",
// }));


// const calculator = {
//     create(a, b) {
//         this.a = a,
//         this.b = b
//     },
//     add() {
//         return this.a + this.b
//     },
//     mult() {
//         return this.a * this.b
//     }
// };

// console.log(calculator);
// calculator.create(5, 2)
// console.log(calculator);
// console.log(calculator.add());
// console.log(calculator.mult());

const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male",
    age: 37
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female",
    age: 34
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male",
    age: 24
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female",
    age: 21
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male",
    age: 27
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male",
    age: 38
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female",
    age: 39
  }
]

const getTotalFriendCount = users => {
  return users.reduce((prev, { friends }) => prev + friends.length, 0)
};

;

// console.log(users);

// const getFriends = (users) => {
//    return users.flatMap(user => user.friends).filter((friend, index, array) => array.indexOf(friend) === index)
// };

// console.log(getFriends(users));

// const getUserWithEmail = (users, email) => {
//    return users.find((user) => user.email === email)
// };



// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce((prev, player) => {return prev + player.playtime / player.gamesPlayed}, 0);
// console.log(totalAveragePlaytimePerGame);



// const obj = {
//   name: " user"
// }

// console.log(obj);


// Array.prototype.sayHello = function (name) {
//   console.log(`Hello, my name ${name}`);
// }

// const str = "1234567";

// // str.sayHello("Igor")
// [1,2].sayHello("Dima")

// console.log([1,2]);


// const arr = [1, 2, 3];

// arr.forEach(val => console.log(val))
// console.log(arr);

// const obj = {
//   name: " user"
// }

// console.log(obj);



// class Blogger {
//   constructor({ name, age, numberOfPosts, topics }) {
//     this.name = name;
//     this.age = age;
//     this.numberOfPosts = numberOfPosts;
//     this.topics = topics;
//   }

//   getInfo() {
//     return `User ${this.name} is ${this.age} years old and has ${this.numberOfPosts} posts`
//   }

//   updatePostCount(value) {
//     this.numberOfPosts += value;
//   }
// }

// const mango = new Blogger({
//   name: "mango@mail.com",
//   age: 24,
//   numberOfPosts: 20,
//   topics: ["tech", "cooking"],
// })

// console.log(mango);
// console.log(mango.getInfo());
// mango.updatePostCount(5);
// console.log(mango.getInfo());


// class Storage {
//   constructor(arr) {
//     this.items = arr
//   }

//   getItems() {
//     return this.items;
//   }

//   addItem(item) {
//     this.items.push(item);
//   }

//   removeItem(item) {
//     if (this.items.includes(item)) {
//       const idx = this.items.indexOf(item);
//       this.items.splice(idx,1);
//     }
//   }
// }


// const storage = new Storage(["🍎", "🍋", "🍇", "🍑"])
// // console.log(storage);

// // storage.addItem("🍌");
// // console.table(storage.items);

// storage.removeItem("🍎");
// console.table(storage.items);


class Notes {
  static Priority = {
    LOW: "low",
    NORMAL: "normal",
    HIGH: "high",
  }

  constructor(arr) {
    this.items = arr;
  }

  addNote(note) {
    this.items.push(note);
  }

  // removeNote(text) {
  //   const idx = this.items.findIndex(({ text: itemText }) => text === itemText)
  //   console.log(idx);
  //   if (!!~idx) {
  //     this.items.splice(idx, 1);
  //   } else {
  //     console.log("NOT FIND");
  //   }
  // }

  // removeNote(text) {
  //   const inArr = this.items.some(item => item.text === text);
  //   if (inArr) {
  //     const idx = this.items.findIndex(({ text: itemText }) => text === itemText)
  //     this.items.splice(idx, 1);
  // } else {
  //   console.log("NOT FIND");
  // }
  // }

  //   removeNote(text) {
  //   const inArr = this.items.find(item => item.text === text);
  //   if (inArr) {
  //     const idx = this.items.findIndex(({ text: itemText }) => text === itemText)
  //     this.items.splice(idx, 1);
  // } else {
  //   console.log("NOT FIND");
  // }
  // }


  //   updatePriority(text, newPriority) {
  //     const inArr = this.items.find(item => item.text === text);
  //       if (inArr) {
  //         inArr.priority = newPriority;
  //       } else {
  //         console.log("NOT FIND");
  //     }
  //   }
}

// const myNotes = new Notes([]);

// myNotes.addNote({ text: "My first note", priority: Notes.Priority.LOW });
// myNotes.addNote({ text: "My second note", priority: Notes.Priority.HIGH });
// console.log(myNotes.items);

// // myNotes.removeNote("My second note")

// myNotes.updatePriority("My second note", Notes.Priority.NORMAL);






// // const firstToggle = new this.firstToggle({ isOpen: true });
// // console.group("firstToggle");

// class Storage {
//   constructor(arr) {
//     this.items = arr;
//   }

//   getItems() {
//     return this.items;
//   }

//   addItem(newItem) {
//     this.items.push(newItem);
//   }

//   removeItem(itemToRemove) {
//     this.items.splice((this.items.indexOf(itemToRemove)), 1)
//   }
// }


// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// // storage.addItem("Droid");
// // console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// // storage.removeItem("Prolonger");
// // console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]


class Car {
  // Change code below this line

  static MAX_PRICE = 50000;
  
  #price;

  constructor({ price }) {
    this.#price = price;
  }

  getMaxPrice() {
    console.log(Car.MAX_PRICE);
  }

  // get price() {
  //   return this.#price;
  // }

  // set price(newPrice) {
  //   if (newPrice <= this.MAX_PRICE) {
  //     this.#price = newPrice;
  //   }
  // }
  // Change code above this line
}

Car.getMaxPrice()

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000
