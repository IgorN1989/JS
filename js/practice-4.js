// const makeChangeColor = function () {
//   const changeColor = function (color) {
//     console.log('this:', this);
//     this.color = color;
//   };

//   const sweater = {
//     color: 'teal',
//   };

//   sweater.changeColor = changeColor;

//   return sweater.changeColor;
// };

// const changeColor = makeChangeColor();

// changeColor('blue');

// ===================================================================

// const User = function ({ name, age, numberOfPosts } = {}) {
//   this.name = name;
//   this.age = age;
//   this.numberOfPosts = numberOfPosts;
// };

// User.prototype.getInfo = function () {
//   return `Користувачеві ${this.name} ${this.age} років і в нього ${this.numberOfPosts} публікацій`;
// };

// const poly = new User({ name: 'Poly', age: 20, numberOfPosts: 100 });

// console.log(poly.getInfo());

// ===================================================================

// class Client {
//   #login;
//   #email;

//   constructor({ login, email } = {}) {
//     this.#login = login;
//     this.#email = email;
//   }

//   get login() {
//     return this.#login;
//   }

//   set login(newLogin) {
//     this.#login = newLogin;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const mango = new Client({ login: 'Mango', email: 'mango@mail.com' });
// console.log(mango);
// console.log(mango.login);
// mango.login = 'Poly';
// console.log(mango.login);

// console.log(mango.email);
// mango.email = 'poly@mail.com';
// console.log(mango.email);

// ===================================================================

// const listEl = document.createElement('ol');
// const addBtn = document.createElement('button');
// addBtn.textContent = 'ADD';
// const removeBtn = document.createElement('button');
// removeBtn.textContent = 'REMOVE';
// const inputEl = document.createElement('input');

// document.body.append(inputEl, addBtn, removeBtn, listEl);

// addBtn.addEventListener('click', onAddBtnClick);
// removeBtn.addEventListener('click', onRemoveBtnClick);

// function onAddBtnClick(value) {
//   value = inputEl.value;
//   const item = document.createElement('li');
//   item.textContent = value ? value : 'qwe';
//   listEl.append(item);
//   inputEl.value = '';

//   const childrenCount = listEl.children.length;
//   item.style.backgroundColor = childrenCount % 2 === 0 ? 'red' : 'blue';
//   console.log(childrenCount);
// }

// function onRemoveBtnClick() {
//   if (!listEl.hasChildNodes()) {
//     return;
//   }
//   listEl.lastElementChild.remove();
// }
