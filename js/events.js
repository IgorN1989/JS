// const targetBtn = document.querySelector(".js-target-btn");
// const addListenerBtn = document.querySelector(".js-add-listener");
// const removeListenerBtn = document.querySelector(".js-remove-listener");

// addListenerBtn.addEventListener("click", (event) => {
//     console.log(event);
//     console.log("Додаю слухача події на цільову кнопку");

//     targetBtn.addEventListener("click", onTargetBtnClick);
// });

// removeListenerBtn.addEventListener("click", (event) => {
//     console.log(event);
//     console.log("Видаляю слухача події з цільової кнопки");

//     targetBtn.removeEventListener("click", onTargetBtnClick)
// })

// function onTargetBtnClick(event) {
//     console.log(event);
//      console.log("Клік по цільовій кнопці");
// }

// function logMessage() {
//     console.log("click");
// }

// const cars = [
//   {
//     id: 1,
//     car: 'Honda',
//     type: 'CR-V',
//     price: 24045,
//     img: './images/cars/Honda_CR-V_2.2.jpg',
//   },
//   {
//     id: 2,
//     car: 'volvo',
//     type: 'accord',
//     price: 22455,
//     img: './images/cars/2018_Honda_Accord_12.17.17.jpg',
//   },
//   {
//     id: 3,
//     car: 'mercedes',
//     type: 'Accord',
//     price: 22455,
//     img: './images/cars/2021_Honda_Accord_Sport_11.30.21.jpg',
//   },
//   {
//     id: 4,
//     car: 'Mazda',
//     type: 'Mazda 6',
//     price: 24195,
//     img: './images/cars/MAZDA6_SEDAN_100th.jpg',
//   },
// ];

// const listRef = document.querySelector('.js-list');
// const form = document.querySelector('.js-search');
// form.addEventListener('submit', onSearch);

// function onSearch(evt) {
//   evt.preventDefault();

//   // console.dir(evt.currentTarget);
//   // console.log(evt.currentTarget.elements.searchQuery);
//   // console.log(evt.currentTarget.elements.searchKey);

//   const { searchQuery, searchKey } = evt.currentTarget.elements;

//   //     const { elements: { searchQuery, searchKey } } = evt.currentTarget;

//   // console.log(searchQuery.value);
//   // console.log(searchKey.value);

//   // const currentCars = cars.filter(item => item[searchKey.value].toLowerCase() === searchQuery.value.trim().toLowerCase());
//   const currentCars = cars.filter(item =>
//     item[searchKey.value].toLowerCase().includes(searchQuery.value.trim().toLowerCase())
//     );
//     if (currentCars.length) {
//           listRef.innerHTML = createMarkup(currentCars);
//     } else {
//         listRef.innerHTML = `<li></li><img src="./images/apple1-md@1x.png" alt="404" width="150"></li>`
//     }
    
// }

// function createMarkup(array) {
//   return array
//     .map(
//       ({ id, car, type, price, img }) => `<li data-id=${id}>
//       <img src="${img}" alt="${type}" width="300">
//       <h2>Марка: ${car}</h2>
//       <h2>Модель: ${type}</h2>
//       <p>Ціна: ${price}</p>
//     </li>`
//     )
//     .join('');
// }

// listRef.insertAdjacentHTML('beforeend', createMarkup(cars));

// const input = document.querySelector(".js-input");
// const title = document.querySelector(".js-title");

// input.addEventListener("input", onSearchInput)
// input.addEventListener("change", onSearchChange)

// function onSearchInput(evt) {
//     console.log(evt);
//     console.dir(evt.currentTarget);
//     title.textContent = evt.currentTarget.value
// }

// function onSearchChange() {
//     alert("Return!!!!")
// }



const clickMe = document.querySelector(".js-click");
clickMe.addEventListener("click", onClickMe);

let counter = 1;

function onClickMe(evt) {
    const changeValue = 50 *counter;
    counter += 1;
    evt.currentTarget.style.margin = `${changeValue}px ${changeValue}px`;
    // document.addEventListener("keydown", onKey, {once: true}); 
      document.addEventListener("keydown", onKey); 
}



// document.addEventListener("keydown", onKey);
function onKey(evt) {
    console.log(evt);
    if (evt.code === "Escape") {
        document.body.classList.toggle("test");
        document.removeEventListener("keydown", onKey)
    }

}

