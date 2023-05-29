// const planets = ["Земля", "Марс", "Венера", "Юпітер"];

// const planetsUpperCase = planets.map(planet => planet.toUpperCase());
// console.log(planetsUpperCase);

// const planetsLowerCase = planets.map(planet => planet.toLowerCase());
// console.log(planetsLowerCase);

// console.log(planets);

// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Полі", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Ківі", score: 94 },
//   { name: "Х'юстон", score: 64 },
// ];

// const names = students.map(student => student.name);
// console.log(names);

// ====================================================================

// const students = [
//   { name: 'Манго', courses: ['математика', 'фізика'] },
//   { name: 'Полі', courses: ['інформатика', 'математика'] },
//   { name: 'Ківі', courses: ['фізика', 'біологія'] },
// ];

// const coursesArr = students.map(student => student.courses);
// console.log(coursesArr);

// const courses = students.flatMap(student => student.courses);
// console.log(courses);

// ====================================================================

// const values = [51, -3, 27, 21, -68, 42, -37];

// const positiveValues = values.filter(value => value >= 0);
// console.log(positiveValues);

// const negativeValues = values.filter(value => value < 0);
// console.log(negativeValues);

// const bigValues = values.filter(value => value > 1000);
// console.log(bigValues);

// console.log(values);

// ====================================================================

// const students = [
//   { name: 'Манго', courses: ['математика', 'фізика'] },
//   { name: 'Полі', courses: ['інформатика', 'математика'] },
//   { name: 'Ківі', courses: ['фізика', 'біологія'] },
// ];

// const allCourses = students.flatMap(student => student.courses);
// console.log(allCourses);

// const uniqueCourses = allCourses.filter((course, index, array) => array.indexOf(course) === index);
// console.log(uniqueCourses);

// ====================================================================

// const LOW_SCORE = 50;
// const HIGH_SCORE = 80;
// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Полі", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Ківі", score: 94 },
//   { name: "Х'юстон", score: 64 },
// ];

// const best = students.filter(student => student.score >= HIGH_SCORE);
// console.log(best);

// const worst = students.filter(student => student.score < LOW_SCORE);
// console.log(worst);

// const average = students.filter(({ score }) => score >= LOW_SCORE && score < HIGH_SCORE);
// console.log(average);

// ====================================================================

// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];

// const blue = colorPickerOptions.find(color => color.label === 'blue');
// console.log(blue);

// const pink = colorPickerOptions.find(color => color.label === 'pink');
// console.log(pink);

// const red = colorPickerOptions.find(color => color.label === 'red');
// console.log(red);

// ====================================================================

// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];

// const indexOfBlueColor = colorPickerOptions.findIndex(color => color.label === 'blue');
// console.log(indexOfBlueColor);

// const indexOfPinkColor = colorPickerOptions.findIndex(color => color.label === 'pink');
// console.log(indexOfPinkColor);

// const indexOfWhiteColor = colorPickerOptions.findIndex(({label}) => label === 'white');
// console.log(indexOfWhiteColor);

// ====================================================================

// const arr1 = [1, 2, 3, 4, 5];
// console.log(arr1.every(value => value >= 0));

// const arr2 = [1, 2, 3, -10, 4, 5];
// console.log(arr2.every(value => value >= 0));

// const arr3 = [1, 2, 3, 4, 5];
// console.log(arr3.some(value => value >= 0));

// const arr4 = [-7, -20, 3, -10, -14];
// console.log(arr4.some(value => value >= 0));

// const arr5 = [1, 2, 3, 4, 5];
// console.log(arr5.some(value => value < 0));

// const arr6 = [1, 2, 3, -10, 4, 5];
// console.log(arr6.some(value => value <0));

// ====================================================================

// const fruits = [
//   { name: "apples", amount: 100 },
//   { name: "bananas", amount: 0 },
//   { name: "grapes", amount: 50 },
// ];

// const allAvailable = fruits.every(fruit => fruit.amount > 0);
// console.log(allAvailable);

// const anyAvailable = fruits.some(({ amount }) => amount > 0);
// console.log(anyAvailable);

// ====================================================================

// const arr = [2, 7, 3, 14, 6];

// const total = arr.reduce((previousValue, number) => {
//     return previousValue + number;
// }, 0);

// console.log(total);

// ====================================================================

// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Полі", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Ківі", score: 94 },
//   { name: "Х'юстон", score: 64 },
// ];

// const totalScore = students.reduce((total, {score}) => { return total + score }, 0);
// console.log(totalScore);

// const averageScore = totalScore / students.length;
// console.log(averageScore);

// ====================================================================

// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];

// const likes = tweets.reduce((totalLikes, { likes }) => {
//   return totalLikes + likes;
// }, 0);
// console.log(likes);

// const countLikes = tweets => {
//   return tweets.reduce((totalLikes, { likes }) => {
//     return totalLikes + likes;
//   }, 0);
// };
// console.log(countLikes(tweets));

// const tags = tweets.reduce((allTags, { tags }) => {
//   allTags.push(...tags);
//   return allTags;
// }, []);
// console.log(tags);

// const getTags = tweets => tweets.reduce((allTags, { tags }) => {
//   allTags.push(...tags);
//   return allTags;
// }, []);
// console.log(getTags(tweets));

// const getTagsStats = (acc, tag) => {
//     if (!acc.hasOwnProperty(tag)) {
//         acc[tag] = 0;
//     }

//     acc[tag] += 1;

//     return acc;
// };

// const countTags = tags => tags.reduce(getTagsStats, {});

// const tagCount = countTags(tags);
// console.log(tagCount);

// ====================================================================

// const scores1 = [61, 19, 74, 35, 92, 56];
// scores1.sort();
// console.log(scores1);

// const scores2 = [27, 2, 41, 4, 7, 3, 75];
// scores2.sort();
// console.log(scores2);

// const students = ["Віка", "Андрій", "Олег", "Юля", "Борис", "Катя"];
// students.sort();
// console.log(students);

// const letters = ["b", "B", "a", "A", "c", "C"];
// letters.sort();
// console.log(letters);

// const scores = [61, 19, 74, 35, 92, 56];
// const ascendingScores = [...scores].sort();
// console.log(ascendingScores);
// console.log(scores);

// ====================================================================

// const scores = [61, 19, 74, 35, 92, 56];
// const ascendingScores = [...scores].sort((a, b) => a - b);
// console.log(ascendingScores);

// const descendingScores = [...scores].sort((a, b) => b - a);
// console.log(descendingScores);

// ====================================================================

// const students = ['Віка', 'Андрій', 'Олег', 'Юля', 'Борис', 'Катя'];

// const inAlphabetOrder = [...students].sort((a, b) => a.localeCompare(b));
// console.log(inAlphabetOrder);

// const inReversedOrder = [...students].sort((a, b) => b.localeCompare(a));
// console.log(inReversedOrder);

// ====================================================================

// const students = [
//   { name: 'Манго', score: 83 },
//   { name: 'Полі', score: 59 },
//   { name: 'Аякс', score: 37 },
//   { name: 'Ківі', score: 94 },
// ];

// const inAscendingScoreOrder = [...students].sort(
//   (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
// );
// console.log(inAscendingScoreOrder);

// const inDescendingScoreOrder = [...students].sort(
//   (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
// );
// console.log(inDescendingScoreOrder);

// const inAlphabeticalOrder = [...students].sort((firstStudent, secondStudent) =>
//   firstStudent.name.localeCompare(secondStudent.name)
// );
// console.log(inAlphabeticalOrder);

// console.log(students);

// ====================================================================

// const students = [
//   { name: 'Манго', score: 83, courses: ['математика', 'фізика'] },
//   { name: 'Полі', score: 59, courses: ['інформатика', 'математика'] },
//   { name: 'Аякс', score: 37, courses: ['фізика', 'біологія'] },
//   { name: 'Ківі', score: 94, courses: ['література', 'інформатика'] },
// ];

// // const sortedByAscendingScore = [...students].sort(
// //   (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
// // );
// // const names = sortedByAscendingScore.map(student => student.name);

// // console.log(names);

// const names = [...students]
//   .sort((firstStudent, secondStudent) => firstStudent.score - secondStudent.score)
//   .map(student => student.name);
// console.log(names);

// const uniqueSortedCourses = students
//   .flatMap(student => student.courses)
//   .filter((course, index, array) => array.indexOf(course) === index)
//   .sort((a, b) => a.localeCompare(b));

// console.log(uniqueSortedCourses);

// ====================================================================
// ====================================================================
// ====================================================================
// ====================================================================
// ====================================================================

// const numbers = [5, 10, 15, 20, 25];

// numbers.forEach(function (number, index, array) {
//     console.log(('number', number));
// });

// console.log(numbers);

// ====================================================================

// const numbers = [5, 10, 15, 20, 25];

// const doubledNums = numbers.map(number => number * 2);
// console.log(doubledNums);

// ====================================================================

// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//   { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
// ];

// const playersNames = players.map(({ name }) => name);
// console.log('playersNames', playersNames);

// const playersIds = players.map(({ id }) => id);
// console.log('playersIds', playersIds);

// const updatedPlayers = players.map(player => {
//   console.log(player);
//   return { ...player, points: (player.points * 110) / 100 };
// });

// console.table(updatedPlayers);

// const playerIdToUpdate = 'player-3';

// // const updatedPlayers1 = players.map(player => {
// //   if (playerIdToUpdate === player.id) {
// //     return { ...player, timePlayed: player.timePlayed + 100 };
// //   }

// //   return player;
// // });

// const updatedPlayers1 = players.map(player =>
//     playerIdToUpdate === player.id
//         ? { ...player, timePlayed: player.timePlayed + 100 }
//         : player,
// );

// console.table(updatedPlayers1);

// ====================================================================

// const numbers = [5, 10, 15, 20, 25];

// const filteredNumbers = numbers.filter(number => number < 10 || number > 15);

// console.log(filteredNumbers);
// console.log('numbers', numbers);

// ====================================================================

// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//   { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
// ];

// const onlinePlayers = players.filter(player => player.online);
// console.table(onlinePlayers);

// const offlinePlayers = players.filter(player => !player.online);
// console.table(offlinePlayers);

// ====================================================================

// const numbers = [5, 10, 15, 20, 25];

// const number = numbers.find(number => number === 10);
// console.log(number);

// ====================================================================

// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//   { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
// ];

// const playerIdToFind = 'player-3';
// const playerWithId = players.find(player => player.id === playerIdToFind);
// console.log(playerWithId);

// const playerNameToFind = 'Poly';
// const playerWithName = players.find(player => player.name === playerNameToFind);
// console.log(playerWithName);

// const findPlayerById = (allPlayers, playerId) => {
//     return allPlayers.find(player => player.id === playerId);
// };

// console.log(findPlayerById(players, 'player-4'));
// console.log(findPlayerById(players, 'player-5'));

// ====================================================================

// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//   { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
// ];

// const isAllOnline = players.every(player => player.online);
// console.log('isAllOnline:', isAllOnline);

// const isAnyOnline = players.some(player => player.online);
// console.log('isAnyOnline:', isAnyOnline);

// const anyHardcorePlayers = players.some(player => player.timePlayed > 450);
// console.log('anyHardcorePlayers:', anyHardcorePlayers);

// ====================================================================

// const numbers = [5, 10, 15, 20, 25];

// const total = numbers.reduce((acc, number) => {
//   console.log('number', number);
//   console.log('acc', acc);

//   return acc + number;
// }, 0);

// console.log(total);

// ====================================================================

// const salary = {
//   mango: 100,
//   poly: 50,
//   ajax: 150,
// };

// const totalSalary = Object.values(salary).reduce((total, value) => total + value, 0);
// console.log(totalSalary);

// ====================================================================

// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//   { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
// ];

// const totalTimePlayed = players.reduce((total, player) => total + player.timePlayed, 0);
// console.log(totalTimePlayed);

// ====================================================================

// const cart = [
//   { label: 'Apples', price: 100, quantity: 2 },
//   { label: 'Bananas', price: 120, quantity: 3 },
//   { label: 'Lemons', price: 70, quantity: 4 },
// ];

// const totalCost = cart.reduce((total, { price, quantity }) => total + price * quantity, 0);
// console.log(totalCost);

// ====================================================================

// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];

// // const allTags = tweets.flatMap(tweet => tweet.tags);
// const allTags = tweets.reduce((tags, tweet) => [...tags, ...tweet.tags], []);
// console.log(allTags);

// // const tagsStats = allTags.reduce((acc, tag) => {
// //     console.log(acc);

// //   if (acc[tag]) {
// //     acc[tag] += 1;

// //     return acc;
// //   }

// //   acc[tag] = 1;
// //   return acc;
// // }, {});

// const tagsStats = allTags.reduce(
//   (acc, tag) => ({
//     ...acc,
//     [tag]: acc[tag] ? acc[tag] + 1 : 1,
//   }),
//   {},
// );
// console.log(tagsStats);

// ====================================================================

// const numbers = [1, 9, 6, 2, 3];
// numbers.sort();
// console.log(numbers);

// const letters = ['b', 'B', 'a', 'A'];
// letters.sort();
// console.log(letters);

// ====================================================================

// const numbers = [1, 9, 6, 2, 3];
// // numbers.sort((curEl, nextEl) => {
// //     return curEl - nextEl;
// // });

// console.log(numbers);

// const copy = [...numbers];
// copy.sort();
// console.log(copy);
// console.log(copy === numbers);

// const descSortedNumbers = [...numbers].sort((a, b) => b - a);
// const ascSortedNumbers = [...numbers].sort((a, b) => a - b);

// console.log(descSortedNumbers);
// console.log(ascSortedNumbers);

// ====================================================================

// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//   { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
// ];

// const sortedByBestPlayers = [...players].sort(
//   (prevPlayer, nextPlayer) => prevPlayer.timePlayed - nextPlayer.timePlayed
// );

// const sortedByWorstPlayers = [...players].sort(
//   (prevPlayer, nextPlayer) => nextPlayer.timePlayed - prevPlayer.timePlayed
// );

// console.table(players);
// console.table(sortedByBestPlayers);
// console.table(sortedByWorstPlayers);

// const byName = [...players].sort((a, b) => {
//   const result = a.name > b.name;

//   if (result) {
//     return 1;
//   }

//   if (!result) {
//     return -1;
//   }
// });

// console.table(byName);

// ====================================================================

// const array = [1, 2, [4, [5]], [6, [7, 8, [9]]]];
// console.log(array.flat());
// console.log(array.flat(2));
// console.log(array.flat(3));

// ====================================================================

// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];

// // const allTags = tweets.reduce((tags, tweet) => [...tags, ...tweet.tags], []);
// // console.log(allTags);

// // const allTags = tweets.map(tweet => tweet.tags).flat();
// const allTags = tweets.flatMap(tweet => tweet.tags);
// console.log(allTags);

// ====================================================================

// const numbers = [1, 5, 2, 4, 3];

// const greaterThanTwo = numbers.filter(num => num > 2);
// console.log(greaterThanTwo);

// const multByThree = greaterThanTwo.map(num => num * 3);
// console.log(multByThree);

// const sorted = multByThree.sort((a, b) => a - b);
// console.log(sorted);

// const resulted = numbers
//   .filter(num => num > 2)
//   .map(num => num * 3)
//   .sort((a, b) => a - b);
// console.log(resulted);

// ====================================================================

// const players = [
//   { id: 'id-1', name: 'Mango', isOnline: true, rank: 800 },
//   { id: 'id-2', name: 'Poly', isOnline: false, rank: 600 },
//   { id: 'id-3', name: 'Ajax', isOnline: true, rank: 100 },
//   { id: 'id-4', name: 'Kiwi', isOnline: true, rank: 400 },
// ];

// const onlineAndSorted = players
//   .filter(player => player.isOnline)
//   .sort((prev, next) => prev.rank - next.rank);
// console.table(onlineAndSorted);

// ====================================================================

// const arr = [1, 2, 3, 4, 5];
// arr.forEach(value => console.log(value*19));
// console.table(arr);

// const result1 = arr.map(item => {
//     if (item > 3) {
//         return item;
//     }
// });
// console.table(result1);

// const result2 = arr.filter(item => item > 3);
// console.table(result2);

// ====================================================================

// Колекція об'єктів для всіх прикладів з автомобілями
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

// ====================================================================

// const allModels = cars.map(car => car.model);
// console.log(allModels);

// // const getModels = arr => {
// //     const models = arr.map(item => item.model);
// //     return models;
// // };
// // console.log(getModels(cars));

// const getModels = arr => arr.map(({model}) => model);
// console.log(getModels(cars));

// ====================================================================

// const makeCarsWithDiscount = (cars, discount) => {
//     const result = cars.map((car) => {
//         const changePrice = car.price / 100 * discount;
//         car.price -= changePrice;
//         return car;
//     })
//     return result;
// };

// console.log(makeCarsWithDiscount(cars, 6));

// const makeCarsWithDiscount = (cars, discount) => cars.map((car) => {
//         car.price -= car.price / 100 * discount;
//         return car;
//     })

// const makeCarsWithDiscount = (cars, discount) => cars.map((car) => {
//     car.price -= car.price / 100 * discount;
//     car.price = Math.ceil(car.price)
//         return car;
//     })

// console.table(makeCarsWithDiscount(cars, 6));
// console.table(makeCarsWithDiscount(cars, 11));

// ====================================================================

// const filterByPrice = (cars, threshold) => {
//     const result = cars.filter((item) => {
//         if (item.price < threshold) {
//             return item;
//         }
//     })
//     return result;
// };

// const filterByPrice = (cars, threshold) => cars.filter(({ price }) => price < threshold);

// console.table(filterByPrice(cars, 30000));
// console.table(filterByPrice(cars, 25000));

// ====================================================================

// const getCarsWithDiscount = cars => {
//     const result = cars.filter(car => {
//         if (car.onSale) {
//             return car;
//         }
//     })
//     return result;
// };

// const getCarsWithDiscount = cars => cars.filter(({ onSale }) => onSale);
// console.table(getCarsWithDiscount(cars));

// ====================================================================
// ====================================================================
// ====================================================================
// ====================================================================
