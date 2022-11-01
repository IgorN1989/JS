// const friends = ["Mango", "Kiwi", "Poly", "Ajax"];

// console.table(friends)

// friends[1] = "qwwrer";
// friends[4] = "sdfgh";
// friends[5] = 12334;
// friends[6] = {name: "Igor", age: 32}

// console.table(friends)

// const lastIndex = friends.length - 1
// console.log(lastIndex);

// console.log([5] === [5]);

// const friends = ["Mango", "Kiwi", "Poly", "Ajax"];
// // console.table(friends)

// // for (let i = 0; i <= friends.length - 1; i += 1) {
// //     friends[i] += "-1"
// // }
// //   console.table(friends);

// for (const friend of friends) {
//     console.log(friend);
// }
  
function withdraw(amount, balance) {
  if (amount === 0) {
    console.log("Для проведення операції введіть суму більшу за нуль");
  } else if (amount > balance) {
    console.log("Недостатньо коштів на рахунку");
  } else {
    console.log("Операція зняття коштів проведена успішно");
  }
}

withdraw(0, 300); // "Для проведення операції введіть суму більшу за нуль"
// withdraw(500, 300); // "Недостатньо коштів на рахунку"
// withdraw(100, 300); // "Операція зняття коштів проведена успішно"