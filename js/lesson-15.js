// console.log("До виклику setTimeout");

// setTimeout(() => {
//     console.log("Всередені callback для setTimeout");
// }, 2000);

// console.log("Після виклику setTimeout");

// for (let index = 0; index < 10000; index++) {
//     console.log(index);
// }

// const logger = time => {
//     console.log(`Лог через ${time} ms, тому що не відмінили таймаут`);
// };

// const timerId = setTimeout(logger, 2000, 2000);
// console.log(timerId);

// const shouldCancelTimer = Math.random() > 0.3;

// console.log(shouldCancelTimer);

// if (shouldCancelTimer) {
//     clearTimeout(timerId)
// }

// ===========================  TASK  ==================================

// const refs = {
//     notification: document.querySelector(".js-alert"),
// };

// refs.notification.addEventListener("click", onNotificationClick);

// showNotification();

// function onNotificationClick() {
//     hideNotification();
// }

// function showNotification() {
//     refs.notification.classList.add("is-visible");
// }

// function hideNotification() {
//     refs.notification.classList.remove("is-visible");
// }

// Налаштування
// const recordCollection = {
//   2548: {
//     albumTitle: 'Slippery When Wet',
//     artist: 'Bon Jovi',
//     tracks: ['Let It Rock', 'You Give Love a Bad Name']
//   },
//   2468: {
//     albumTitle: '1999',
//     artist: 'Prince',
//     tracks: ['1999', 'Little Red Corvette']
//   },
//   1245: {
//     artist: 'Robert Palmer',
//     tracks: []
//   },
//   5439: {
//     albumTitle: 'ABBA Gold'
//   }
// };

// // Змініть код лише під цим рядком
// function updateRecords(records, id, prop, value) {
//     if (prop !== "tracks" && value !== "") {
//         records[prop] = value;
//     } else if (prop === "tracks" && !records.hasOwnProperty("tracks") {
//         records[prop] = tracks
//   }

//   return records;
// }

// updateRecords(recordCollection, 5439, 'artist', 'ABBA');

// function getExtremeElements(array) {
//   // return array.splice(0, 1).concat(array.splice(array.length-1));
// }

// console.log(getExtremeElements([1,2,3,4,5,6,7,8,9,10]));

// =======================================================================
// =======================================================================
// =======================================================================
// =======================================================================
// =======================================================================
