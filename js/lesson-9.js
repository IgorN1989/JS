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

// function foo() {
//     console.log(this);
// }

// foo();

// const obj = {
//     logCtx: foo,
// }

// console.log(obj.logCtx);
// obj.logCtx()

// ====================================================================

// const objA = {
//     name: "objA",
//     logCtx() {
//         console.log(this);
//     }
// };

// objA.logCtx();

// const objB = {
//     name: 'objB',
//     foo: objA.logCtx,
// };

// console.log(objB.foo);
// objB.foo()

// ====================================================================

// const foo = () => { console.log(this); }
// foo();

// ====================================================================

// const obj = {
//     objThis: this,
//     foo: () => {
//         console.log(this);
//     }
// }

// // console.log(obj.objThis);
// obj.foo();

// ====================================================================

// const foo = () => {
//     console.log(this);
// }

// const obj = {
//     key: foo,
// }

// obj.key();

// ====================================================================

// const chopShop = {
//   stones: [
//     {
//       name: 'Emerald',
//       price: 1300,
//       quantity: 4,
//     },
//     {
//       name: 'Diamond',
//       price: 2700,
//       quantity: 3,
//     },
//     {
//       name: 'Sapphire',
//       price: 1400,
//       quantity: 7,
//     },
//     {
//       name: 'Ruby',
//       price: 800,
//       quantity: 2,
//     },
//   ],
//   //   calcTotalPrice(stoneName) {
//   //     return this.stones.reduce((acc, { name, price, quantity }) => {
//   //       if (name === stoneName) {
//   //         return price * quantity;
//   //       }
//   //       return acc;
//   //     }, 0);
//   //   },

// //   calcTotalPrice(stoneName) {
// //     return this.stones.reduce(
// //       (acc, { name, price, quantity }) => (name === stoneName ? (acc = price * quantity) : acc),
// //       0
// //     );
// //   },

//     calcTotalPrice(stoneName) {
//         const {price, quantity} = this.stones.find(item => item.name === stoneName)
//         return price * quantity;
//     }
// };

// console.log(chopShop.calcTotalPrice('Emerald'));
// console.log(chopShop.calcTotalPrice('Diamond'));
// console.log(chopShop.calcTotalPrice('Sapphire'));
// console.log(chopShop.calcTotalPrice('Ruby'));

// ====================================================================

const phonebook = {
  contacts: [],
  add(contact) {
    const newContact = {
      list: 'default',
      ...contact,
      id: this.generateId(),
      createdAt: this.getDate(),
    };
    this.contacts.push(newContact);
  },
  generateId() {
    return '-' + Math.random().toString(36).substr(2, 9);
  },
  getDate() {
    return Date.now();
  },
};

console.log(phonebook.add({ name: 'Mango', email: 'mango@mail.com', list: 'friends' }));

// ====================================================================
// ====================================================================
