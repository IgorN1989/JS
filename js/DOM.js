// const elem = document.querySelector(".js-elem")

// console.dir(elem);

// const refs = {
//     staticItems: document.querySelectorAll(".js-item"),

//     dynemicItems: document.getElementsByClassName("js-item"),

//     ul: document.querySelector("ul"),
// }



// // const li = document.createElement("li");
// // console.log(li);

// const arr = [];

// for (let i = 0; i < 3; i += 1){
//     const li = document.createElement("li");
//     li.classList.add("js-item");
//     li.textContent = Number(refs.ul.lastElementChild.textContent) + i+1
//     arr.push(li);
// }

// refs.ul.append(...arr);

// // ul.appendChild(li);
// console.log(refs.staticItems);
// console.log(refs.dynemicItems);



// const arr = [];

// for (let i = 1; i <= 11; i += 1){
//     const markup = `<li class="js-item">${Number(refs.ul.lastElementChild.textContent) + i}</li>`
    
//     arr.push(markup)
// }

// refs.ul.insertAdjacentHTML("beforeend", arr.join(""))

// console.log(arr);

// const refs = {
//     text: document.querySelector("h1"),
//     input: document.querySelector("input"),
// }

// console.dir(refs.text.dataset.id);
// console.log(refs.text.getAttribute("data-id"));
// console.log(refs.text.getAttribute("id"));
// refs.input.value = refs.text.textContent
// console.log(refs.input.value);

// console.dir(refs.input);

// const cars = [{
//         id: 1,
//         car: 'Honda',
//         type: 'CR-V',
//         price: 24045,
//         img: "./images/apple-lg@1x.png",
//     },
//     {
//         id: 2,
//         car: 'Honda',
//         type: 'accord',
//         price: 22455,
//         img: "./images/gamburger.png",
//     },
//     {
//         id: 3,
//         car: 'Honda',
//         type: 'Accord',
//         price: 22455,
//         img: "./images/apple-shadow-lg@1x.png",
//     },
//     {
//         id: 4,
//         car: 'Mazda',
//         type: 'Mazda 6',
//         price: 24195,
//         img: "./images/apple-sm@1x.png",
//     },
// ];

// const listRef = document.querySelector(".js-list");

// console.time("map");
// const markup = cars.map(({ id, car, type, price, img }) => `<li data-id=${id}>
//       <img src="${img}" alt="${type}" width="300">
//       <h2>Марка: ${car}</h2>
//       <h2>Модель: ${type}</h2>
//       <p>Ціна: ${price}</p>
//     </li>`).join("");
// console.timeEnd("map")
// console.log(markup);


// const listRef = document.querySelector(".js-list");
// // console.time("reduce");
// const markup = cars.reduce((acc,{ id, car, type, price, img }) => acc + `<li data-id=${id}>
//       <img src="${img}" alt="${type}" width="300">
//       <h2>Марка: ${car}</h2>
//       <h2>Модель: ${type}</h2>
//       <p>Ціна: ${price}</p>
//     </li>`, "");
// // console.timeEnd("reduce")

// listRef.style.listStyle = "none";

// listRef.style.display = "flex";

// listRef.style.flexWrap = "wrap";

// listRef.style.justifyContent = "space-between"

// listRef.insertAdjacentHTML('beforeend', markup)


 