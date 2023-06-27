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
