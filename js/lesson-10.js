// class User {
//   // Необов'язкове оголошення публічних властивостей
//   name;
//   // Обов'язкове оголошення приватних властивостей
//   #email;

//   constructor({ name, email }) {
//     this.name = name;
//     this.#email = email;
//   }

//   getEmail() {
//     return this.#email;
//   }

//   changeEmail(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const mango = new User({
//   name: "Манго",
//   email: "mango@mail.com",
// });
// mango.changeEmail("mango@supermail.com");
// // console.log(mango.getEmail()); // mango@supermail.com
// // console.log(mango.#email); // Виникне помилка, це приватна властивість

// console.log(mango);

// ====================================================================

// class User {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }
// }

// const mango = new User('Mango', 'mango@mail.com');
// console.log(mango);

// const poly = new User('Poly', 'poly@mail.com');
// console.log(poly);

// ====================================================================

// class User {
//   constructor({ name, email }) {
//     this.name = name;
//     this.email = email;
//   }
// };

// const mango = new User({
//   name: 'Mango',
//   email: 'mango@mail.com',
// });
// console.log(mango);

// const poly = new User({
//   name: 'Poly',
//   email: 'poly@mail.com',
// });
// console.log(poly);

// ====================================================================

// class User {
//   constructor({ name, email }) {
//     this.name = name;
//     this.email = email;
//   }

//   getEmail() {
//     return this.email;
//   }

//   changeEmail(newEmail) {
//     this.email = newEmail;
//   }
// }

// console.log(User);

// ====================================================================

// class User {
//   name;
//   #email;

//   constructor({ name, email }) {
//     this.name = name;
//     this.#email = email;
//   }

//   getEmail() {
//     return this.#email;
//   }

//   changeEmail(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const mango = new User({
//   name: 'Mango',
//   email: 'mango@mail.com',
// });

// console.log(mango.getEmail());
// mango.changeEmail('newmango@mail.com');
// console.log(mango.getEmail());
// console.log(mango.email);
// console.log(mango.#email);

// ====================================================================

// class User {
//   #email;

//   constructor({ name, email }) {
//     this.name = name;
//     this.#email = email;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     if (newEmail === '') {
//       console.log('Error!!!!!');
//       return;
//     }

//     this.#email = newEmail;
//   }
// }

// const mango = new User({ name: 'Mango', email: 'mango@mail.com' });
// console.log(mango.email);

// mango.email = 'mango@supermail.com';
// console.log(mango.email);

// mango.email = '';
// console.log(mango.email);

// ====================================================================

// class User {
//   static Roles = {
//     ADMIN: 'admin',
//     EDITOR: 'editor',
//   };

//   #email;
//   #role;

//   constructor({ email, role }) {
//     this.#email = email;
//     this.#role = role;
//   }

//   get role() {
//     return this.#role;
//   }

//   set role(newRole) {
//     this.#role = newRole;
//   }
// }

// const mango = new User({ email: 'mango@mail.com', role: User.Roles.ADMIN, });

// console.log(mango.Roles);
// console.log(User.Roles);

// console.log(mango.role);
// mango.role = User.Roles.EDITOR;
// console.log(mango.role);

// ====================================================================

// class User {
//   static #takenEmails = [];

//   static isEmailTaken(email) {
//     return User.#takenEmails.includes(email);
//   }

//   #email;

//   constructor({ email }) {
//     this.#email = email;
//     User.#takenEmails.push(email);
//   }
// }

// const mango = new User({ email: 'mango@mail.com' });

// console.log(User.isEmailTaken('poly@mail.com'));
// console.log(User.isEmailTaken('mango@mail.com'));

// ====================================================================

// class User {
//   #email;

//   constructor(email) {
//     this.#email = email;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// class ContentEditor extends User {
// }

// const editor = new ContentEditor('mango@mail.com');
// console.log(editor);
// console.log(editor.email);

// class Admin extends User { };

// const admin = new Admin('poly@mail.com')
// console.log(admin);

// ====================================================================

// class User {
//   #email;

//   constructor(email) {
//     this.#email = email;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// class ContentEditor extends User {
//   constructor({ email, posts }) {
//     super(email);
//     this.posts = posts;
//   }

//   addPost(post) {
//     this.posts.push(post);
//   }
// }

// const editor = new ContentEditor({ email: 'mango@mail.com', posts: [] });
// console.log(editor);
// console.log(editor.email);
// editor.addPost('post-1');
// console.log(editor.posts);

// ====================================================================

// const objB = {
//     b: 2,
// }

// const objA = {
//     a: 1,
//     __proto__: objB,
// }

// console.log(objA);
// console.log(objA.b);

// ====================================================================

// const objC = {
//     z: 5,
// };

// console.log('objC', objC);
// console.log('objC', objC.hasOwnProperty('z'));

// const objB = Object.create(objC);
// objB.y = 2;

// console.log('objB', objB);
// console.log('objB',objB.y);
// console.log('objB',objB.z);

// const objA = Object.create(objB);
// objA.x = 1;

// console.log('objA', objA);
// console.log('objA', objA.x);
// console.log('objA', objA.y);
// console.log('objA', objA.z);

// objA.z = 1000;
// console.log('objA', objA);
// console.log('objC', objC);

// ====================================================================

// const Car = function ({ brand, model, price } = {}) {
//   //   console.log(config);
//   //   const { brand, model, price } = config;
//   this.brand = brand;
//   this.model = model;
//   this.price = price;

//   //   this.changePrice = function (newPrice) {
//   //     this.price = newPrice;
//   //   };
// };

// Car.prototype.sayHi = function () {
//   console.log('Car.prototype.sayHi -> this', this);
//   console.log('Hello ;)');
// };

// Car.prototype.changePrice = function (newPrice) {
//   this.price = newPrice;
// };

// console.log(Car.prototype);

// const myCar = new Car({ brand: 'Audi', model: 'Q3', price: 35000 });
// console.log(myCar);
// myCar.sayHi();
// myCar.changePrice(10000);
// console.log(myCar);

// const myCar2 = new Car({ brand: 'BMW', model: 'X6', price: 50000 });
// console.log(myCar2);
// myCar2.sayHi();

// const myCar3 = new Car({ brand: 'Audi', model: 'A6', price: 60000 });
// console.log(myCar3);
// myCar3.sayHi();

// const myCar4 = new Car();
// console.log(myCar4);
// myCar4.sayHi();

// ====================================================================

// const User = function ({ email, password } = {}) {
//   this.email = email;
//   this.password = password;
// };

// User.prototype.changeEmail = function (newEmail) {
//   this.email = newEmail;
// };

// const mango = new User({ email: 'mango@MediaList.com', password: '1111111' });
// console.log(mango);

// mango.changeEmail('my-new-email@mail.com');
// console.log(mango);

// ====================================================================

// class Car {
//   static description = 'опис авто';

//   static logInfo(carObj) {
//     console.log('Car.logInfo -> carObj', carObj);
//     }

//     #test = 'test';

//   constructor({ brand, model, price } = {}) {
//     // console.log('constructor');
//     // console.log(this);

//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }

//   changePrice(newPrice) {
//     this.price = newPrice;
//   }

//   updateModel(newModel) {
//     this.model = newModel;
//   }
// }

// // console.dir(Car);
// // console.log(Car.description);

// const carInstance = new Car({ brand: 'Audi', model: 'Q3', price: 35000 });
// console.log(carInstance);

// console.log(Object.getPrototypeOf(carInstance));
// console.log(Object.getPrototypeOf(carInstance) === Car.prototype);

// Car.logInfo(carInstance)

// console.log(carInstance.test);
// console.log(carInstance.#test);

// ====================================================================

// class Car {
//   static description = 'опис авто';

//   static logInfo(carObj) {
//     console.log('Car.logInfo -> carObj', carObj);
//   }

//   constructor({ brand, model, price } = {}) {
//     this.brand = brand;
//     this._model = model;
//     this._price = price;
//   }

//   get price() {
//     return this._price;
//   }

// //   changePrice(newPrice) {
// //     this._price = newPrice;
// //   }

//   set price(newPrice) {
//     this._price = newPrice;
//   }

//   //   getModel() {
//   //     return this.model;
//   //     }

//   get model() {
//     return this._model;
//   }

//   //     setModel(newModel) {
//   //     this.model = newModel;
//   //   }

//   set model(newModel) {
//     this._model = newModel;
//   }
// }

// const carInstance = new Car({ brand: 'Audi', model: 'Q3', price: 35000 });
// // console.log(carInstance);

// console.log(carInstance.model);
// carInstance.model = 'Q4';
// console.log(carInstance.model);

// console.log(carInstance.price);
// carInstance.price = 50000;
// console.log(carInstance.price);

// console.log(carInstance);

// ====================================================================

// class Hero {
//   constructor({ name = 'hero', xp = 0 } = {}) {
//     this.name = name;
//     this.xp = xp;
//   }

//   gainXp(amount) {
//     console.log(`${this.name} отримує ${amount} досвіту`);
//     this.xp += amount;
//   }
// }

// class Warrior extends Hero {
//   constructor({ weapon, ...restProps } = {}) {
//     super(restProps);

//     this.weapon = weapon;
//   }

//   attack() {
//     console.log(`${this.name} attackes with ${this.weapon}`);
//   }
// }

// class Berserk extends Warrior {
//   constructor({ warcry, ...restProps } = {}) {
//     super(restProps);

//     this.warcry = warcry;
//   }

//   babyRage() {
//     console.log(this.warcry);
//   }
// }

// class Mage extends Hero {
//   constructor({ spells, ...restProps } = {}) {
//     super(restProps);

//     this.spells = spells;
//   }

//   cast() {
//     console.log(`${this.name} casts ${this.spells}`);
//   }
// }

// const mango = new Warrior({ name: 'Mango', xp: 1000, weapon: 'alebarda' });
// console.log(mango);

// mango.attack();
// mango.gainXp(1000);

// const poly = new Mage({ name: 'Poly', xp: 500, spells: ['fireball'] });
// console.log(poly);

// poly.cast();
// poly.gainXp(200);

// const ajax = new Berserk({ name: 'Ajax', xp: 500, weapon: 'axe', warcry: 'waaaaakaaaa' });
// console.log(ajax);

// ajax.babyRage();
// ajax.attack();
// ajax.gainXp(300);

// ====================================================================

// const obj = {
//   name: 'user',
//   sayHello() {
//     return 'Hello';
//   },
// };

// // console.log(obj);

// const user = Object.create(obj);

// user.age = 18;

// // console.log(user);
// // console.log(user.sayHello());

// const admin = Object.create(user);

// console.log(admin.age);
// console.log(admin);

// admin.sayHello = function () {
//   return 'Hello from ADMIN!!!!!';
// };

// console.log(admin);
// console.log(admin.sayHello());

// ====================================================================

// class User {
//   static Roles = {
//     ADMIN: 'Admin',
//     USER: 'User',
//   };

//   static total = 0;

//   static counter() {
//     User.total += 1;
//     console.log(User.total);
//   }

//   #password;
//   constructor(val1, val2, val3, val4) {
//     this.name = val1;
//     this.email = val2;
//     this.#password = val3;
//     this.role = val4;
//     User.counter();
//   }

//   get mail() {
//     console.log(this.email);
//   }

//   set mail(newEmail) {
//     if (this.email !== newEmail) {
//       this.email = newEmail;
//     }
//   }

//   get password() {
//     return this.#password;
//   }

//   set password(newPassword) {
//     this.#checkPassword(newPassword);
//   }

//   #checkPassword(newPassword) {
//     if (newPassword.length > 5) {
//       this.#password = newPassword;
//     } else {
//       console.log('Потрібно більше символів');
//     }
//   }
// }

// const objA = new User('User', 'user@mail.com', '12345', User.Roles.USER);
// console.log(objA);
// // console.log(objA.mail);
// // objA.mail = 'test@mail.com';
// // console.log(objA);

// const objB = new User('Admin', 'admin@mail.com', '12345', User.Roles.ADMIN);
// // console.log(objB);
// // objB.password = '123';
// // objB.password = '1234567890';
// console.log(objB);

// const objC = new User('Gamer', 'gamer@mail.com', '12345', User.Roles.USER);
// console.log(objC);

// ====================================================================

// class Blogger {
//   constructor({ name, age, numberOfPosts, topics }) {
//     this.name = name;
//     this.age = age;
//     this.numberOfPosts = numberOfPosts;
//     this.topics = topics;
//     }

//     getInfo() {
//         return `User ${this.name} is ${this.age} years old and has ${this.numberOfPosts} posts`
//     }

//     updatePostCount(value) {
//         this.numberOfPosts += value;
//     }
// }

// const mango = new Blogger({
//   name: 'mango@mail.com',
//   age: 24,
//   numberOfPosts: 20,
//   topics: ['tech', 'cooking'],
// });

// console.log(mango);
// console.log(mango.getInfo());
// mango.updatePostCount(5);
// console.log(mango.getInfo());

// ====================================================================

// class Storage {
//   constructor(arr) {
//     this.items = arr;
//     }

//   getItems() {
//     return this.items;
//     }

//     addItem(item) {
//         this.items.push(item);
//     }

//     removeItem(item) {
//         if (this.items.includes(item)) {
//             const idx = this.items.indexOf(item);
//             this.items.splice(idx, 1);
//         }
//     }
// }

// const storage = new Storage(['🍎', '🍋', '🍇', '🍑']);
// // console.log(storage);

// storage.addItem('🍌');
// // console.log(storage);

// storage.removeItem('🍎');
// // console.log(storage);

// ====================================================================

// class User {
//     #login
//     #email

//     constructor({login, email}) {
//         this.#login = login;
//         this.#email = email;
//     }

//     get login() {
//         return this.#login;
//     }

//     set login(newLogin) {
//         this.#login = newLogin;
//     }

//       get email() {
//         return this.#email;
//     }

//     set email(newEmail) {
//         this.#email = newEmail;
//     }
// }

// const mango = new User({ login: 'Mango', email: 'mango@dog.woof' });

// console.log(mango);
// mango.login
// mango.login = 'Poly';
// console.log(mango);

// mango.email;
// mango.email = 'poly@MediaList.com';
// console.log(mango);

// ====================================================================

// class Notes {
//   static Priority = {
//     LOW: 'low',
//     NORMAL: 'normal',
//     HIGH: 'high',
//   };

//   constructor(arr) {
//     this.items = arr;
//   }

//   addNote(note) {
//     this.items.push(note);
//   }

//   //   removeNote(text) {
//   //     const idx = this.items.findIndex(({ text: itemText }) => itemText === text);
//   //     console.log(idx);
//   //     if (!!~idx) {
//   //       this.items.splice(idx, 0);
//   //     } else {
//   //         console.log('not found');
//   //     }
//   //   }

//   removeNote(text) {
//     const inArr = this.items.some(item => item.text === text);
//     if (inArr) {
//       const idx = this.items.findIndex(({ text: itemText }) => itemText === text);
//       this.items.splice(idx, 0);
//     } else {
//       console.log('not found');
//     }
//   }

//     updatePriority(text, newPriority) {
//         const inArr = this.items.find(item => item.text === text);
//         if (inArr) {
//             inArr.priority = newPriority;
//         } else {
//             console.log('not found');
//         }
//   }
// }

// const myNotes = new Notes([]);
// myNotes.addNote({ text: 'Моя перша нотатка', priority: Notes.Priority.LOW });
// console.log(myNotes.items);

// myNotes.addNote({ text: 'Моя друга нотатка', priority: Notes.Priority.NORMAL });
// console.log(myNotes.items);

// myNotes.removeNote('Моя перша нотатка');
// console.log(myNotes.items);

// myNotes.updatePriority('Моя друга нотатка', Notes.Priority.HIGH);
// console.log(myNotes.items);

// ====================================================================

// class Toggle {
//   // on: false
//   constructor({ isOpen = false } = {}) {
//     this.on = isOpen;
//   }
// }

// const firstToggle = new Toggle({ isOpen: true });
// console.group(firstToggle);
// console.log(firstToggle.on);
// // firstToggle.toggle();
// console.log(firstToggle.on);
// console.groupEnd(firstToggle);

// const secondToggle = new Toggle();
// console.group(secondToggle);
// console.log(secondToggle.on);
// // secondToggle.toggle();
// console.log(secondToggle.on);
// console.groupEnd(secondToggle);

// ====================================================================

// class User {
//   static Roles = {
//     ADMIN: 'Admin',
//     USER: 'User',
//   };

//   static total = 0;

//   static counter() {
//     User.total += 1;
//     console.log(User.total);
//   }

//   #password;
//   constructor(val1, val2, val3, val4) {
//     this.name = val1;
//     this.email = val2;
//     this.#password = val3;
//     this.role = val4;
//     User.counter();
//   }

//   get mail() {
//     console.log(this.email);
//   }

//   set mail(newEmail) {
//     if (this.email !== newEmail) {
//       this.email = newEmail;
//     }
//   }

//   get password() {
//     return this.#password;
//   }

//   set password(newPassword) {
//     this.#checkPassword(newPassword);
//   }

//   #checkPassword(newPassword) {
//     if (newPassword.length > 5) {
//       this.#password = newPassword;
//     } else {
//       console.log('Потрібно більше символів');
//     }
//   }
// }

// class Admin extends User {
//   constructor(name, email, password, role, icon) {
//     super(name, email, password, role);
//     this.icon = icon;
//   }
// }

// const objA = new Admin('Admin', 'admin@mail.com', '12345', User.Roles.ADMIN, 'cool icon');
// console.log(objA);

// ====================================================================

// let arr = [1, 2, 3, 'a', 4, 5, 6];
// arr = arr.filter(item => typeof item === 'number');
// console.log(arr);

// ====================================================================

// function calcDays(depth) {
//     const daylySpeed = 7;
//     const nightSpeed = 2;
//     let total = 0;
//     days = 0;
//     while (total < depth) {
//         total += daylySpeed;
//         days += 1;
//         if (total < depth) {
//             total -= nightSpeed;
//         }
//     }
// }

// calcDays(42);
// calcDays(17);
// calcDays(18);
