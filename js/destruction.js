 // Task 1

// function calcBMI({ weight, height }) {
//   const numericWeight = Number(weight.replace(',', '.'));
//   const numericHeight = Number(height.replace(',', '.'));
//   return Number((numericWeight / numericHeight ** 2).toFixed(1));
// }

// console.log(calcBMI({ weight: '88,3', height: '1.75' }));
// // console.log(calcBMI('68,3', '1.65'));
// console.log(calcBMI('118,3', '1.95'));

// Task 2

// function printContactsInfo({ names, phones }) {
//   const nameList = names.split(',');
//   const phoneList = phones.split(',');
//   for (let i = 0; i < nameList.length, i < phoneList.length; i += 1) {
//     console.log(`${nameList[i]}: ${phoneList[i]}`);
//   }
// }

// printContactsInfo({
//   names: 'Jacob,William,Solomon,Artemis, Anna',
//   phones: '89001234567,89001112233,890055566377,890055566300',
// });

// Task 3

// /**
//  * Get string with info about company and return info string
//  * @param {Object} object
//  * @returns {String} Info string
//  */
// function getBotReport({ companyName, bots: { repairBots, defenceBots } }) {
//   console.log('companyName', companyName);
//   //   console.log('bots', bots);
//   console.log('repairBots', repairBots);
//   console.log('defenceBots', defenceBots);
//   return `${companyName} has ${repairBots + defenceBots} both in stock`;
// }

// console.log(
//   getBotReport({ companyName: 'Cyberdyne Systems', bots: { repairBots: 150, defenceBots: 50 } })
// );

// Task 4
// /**
//  * Get object with company and return info about stock
//  * @param {Object} object
//  * @returns {String} info about stock in company
//  */
// function getStockReport({ companyName, stock }) {
//   const values = Object.values(stock);
//   let total = 0;
//   for (const value of values) {
//     total += value;
//   }
//   return `${companyName} has ${total} items in stock`;
// }

// console.log(
//   getStockReport({ companyName: 'Cyberdyne Systems', stock: { repairBots: 150, defenceBots: 50 } })
// );

// console.log(getStockReport({ companyName: 'Belacci', stock: { shoes: 20, skirts: 10, hats: 5 } }));

// Task 5

// function createContact(partialContact) {
//   return {
//     id: generateId(),
//     list: 'default',
//     ...partialContact,
//   };
// }

// console.log(
//   createContact({
//     name: 'Mango',
//     email: 'mango@mail.com',
//     list: 'friends',
//   })
// );

// console.log(
//   createContact({
//     name: 'Poly',
//     email: 'poly@mail.com',
//   })
// );

// function generateId() {
//   return '_' + Math.random().toString(36).substr(2, 9);
// }

// Task 6

// function transformUsername({ firstName, lastName, ...info }) {
//   //   console.log('firstname:', firstName);
//   //   console.log('lastname:', lastName);
//   //     console.log(info);
//   return {
//     fullName: `${firstName} ${lastName}`,
//     ...info,
//   };
// }

// console.log(
//   transformUsername({
//     id: 1,
//     firstName: 'Jacob',
//     lastName: 'Mercer',
//     email: 'j.mercer@mail.com',
//     friendsCount: 40,
//   })
// );

// console.log(
//   transformUsername({
//     id: 2,
//     firstName: 'Adrian',
//     lastName: 'Cross',
//     email: 'a.cross@mail.com',
//     friendsCount: 20,
//   })
// );

// const arr = [1, 2, 3, 4];
// // const min = Math.min(...arr);

// // console.log(min);

// // const arr2 = [...arr];

// const [firstValue, secondValue, ...args] = arr;

// console.log('firstValue:', firstValue);
// console.log('secondValue:', secondValue);
// console.log('OthersValue:', args);

function createContact(arr) {
  //   for (let i = 0; i < arr.length; i += 1) {
  //     arr[i] = {
  //       id: generateId(),
  //       list: 'default',
  //       ...arr[i],
  //     };
  //   }

  for (let obj of arr) {
    obj.id = generateId();
    if (!obj.hasOwnProperty('list')) {
      obj.list = 'default';
    }
    // obj = {
    //   id: generateId(),
    //   list: 'default',
    //   ...obj,
    // };
  }
  console.log(arr);
}

console.log(
  createContact([
    {
      name: 'Mango',
      email: 'mango@mail.com',
      list: 'friends',
    },
    {
      name: 'Poly',
      email: 'poly@mail.com',
    },
  ])
);

function generateId() {
  return '_' + Math.random().toString(36).substr(2, 9);
}
