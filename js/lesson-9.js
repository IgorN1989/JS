// const petya = {
//     username: 'Petya',
//     showName() {
//         console.log(this.username);
//     },
// };

// petya.showName();

// console.log(this);

// function showThis() {
//     console.log('this is showThis:', this);
// }

// const user = {
//     username: 'Mango',
// };

// user.showContext = showThis;

// user.showContext()

// const customer = {
//   firstName: 'Jacob',
//   lastName: 'Mercer',
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// function makeMessage(callback) {
//   // callback() - це виклик методу getFullName без об'єкта
//   console.log(`Обробляємо заявку від ${callback()}.`);
// }

// console.log(customer.getFullName());

// makeMessage(customer.getFullName); // Буде помилка у виклику функції

// ====================================================================

// const user = {
//     tag: 'Mango',
//     showTag() {
//         console.log('showTag -> this', this);
//         console.log('showTag -> this.tag', this.tag);
//     }
// }

// user.showTag();

// const outerShowTag = user.showTag;

// outerShowTag();

// user.outerShowTag()

// ====================================================================

// ====================================================================

// ====================================================================