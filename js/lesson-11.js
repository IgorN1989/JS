// ===========================  TASK 1  ==================================

// const refs = {
//     parent: document.querySelector("#parent"),
//     child: document.querySelector("#child"),
//     innerChild: document.querySelector("#inner-child"),
// };

// refs.parent.addEventListener("click", onParentClick);
// refs.child.addEventListener("click", onChildClick);
// refs.innerChild.addEventListener("click", onInnerChildClick);

// function onParentClick(e) {
//     console.log("onParentClick");
//     console.log("onParentClick -> e.target", e.target);
//     console.log("onParentClick -> e.currentTarget", e.currentTarget);
// };

// function onChildClick(e) {
//     console.log("onChildClick");
//     console.log("onChildClick -> e.target", e.target);
//     console.log("onChildClick -> e.currentTarget", e.currentTarget);
// };

// function onInnerChildClick(e) {
//     console.log("onInnerChildClick");
//     console.log("onInnerChildClick -> e.target", e.target);
//     console.log("onInnerChildClick -> e.currentTarget", e.currentTarget);
// }

// ===========================  TASK 2  ==================================

// const container = document.querySelector(".js-container");

// container.addEventListener("click", onClick)

// function onClick(e) {
//     if (e.target.nodeName !== "BUTTON") {
//         return;
//     }
//     console.log(e.target.textContent);
//     console.log(e.target.nodeName);

// }

// const addBtn = document.querySelector(".js-add-btn");
// let labelCounter = 6;

// addBtn.addEventListener("click", onAddBtnClick);

// function onAddBtnClick() {
//     const btn = document.createElement("button");
//     btn.textContent = `Кнопка ${labelCounter}`;
//     btn.type = "button";

//     container.appendChild(btn);
//     labelCounter += 1;
// }

// ===========================  TASK 3  ==================================

// const tagsContainer = document.querySelector(".js-tags");
// let selectedTags = null;

// tagsContainer.addEventListener("click", onTagsContainerClick);

// function onTagsContainerClick(evt) {
//     if (evt.target.nodeName !== "BUTTON") {
//         return;
//     }

//     const currentActiveBtn = document.querySelector(".tags__btn-active");

//     // console.log(currentActiveBtn);

//     if (currentActiveBtn) {
//         currentActiveBtn.classList.remove("tags__btn-active");
//     }

//     // currentActiveBtn?.classList.remove("tags__btn-active");

//     const nextActiveBtn = evt.target;
//     nextActiveBtn.classList.add("tags__btn-active");
//     selectedTags = nextActiveBtn.dataset.value;

//     console.log(selectedTags);
// }

// ===========================  TASK 4  ==================================

// const tagsContainer = document.querySelector(".js-tags");
// const selectedTags = new Set;

// tagsContainer.addEventListener("click", onTagsContainerClick);

// function onTagsContainerClick(evt) {
//     if (evt.target.nodeName !== "BUTTON") {
//         return;
//     }

//     const btn = evt.target;
//     const tag = btn.dataset.value;
//     const isActive = btn.classList.contains("tags__btn-active");

//     if (isActive) {
//         selectedTags.delete(tag)
//     } else {
//         selectedTags.add(tag);
//     }

//     btn.classList.toggle("tags__btn-active");

//     console.log(selectedTags);
// }

// ===========================  TASK 5  ==================================

// const colors = [
//     { hex: "#f44336", rgb: "244,67,54" },
//     { hex: "#e91e63", rgb: "233,30,99" },
//     { hex: "#9c27b0", rgb: "156,39,176" },
//     { hex: "#673ab7", rgb: "103,58,183" },
//     { hex: "#3f51b5", rgb: "63,81,181" },
//     { hex: "#2196f3", rgb: "33,150,243" },
//     { hex: "#00bcd4", rgb: "0,188,212" },
//     { hex: "#009688", rgb: "0,150,136" },
//     { hex: "#4caf50", rgb: "76,175,80" },
//     { hex: "#ffeb3b", rgb: "255,235,59" },
//     { hex: "#ff9800", rgb: "255,152,0" },
//     { hex: "#795548", rgb: "121,85,72" },
//     { hex: "#607d8b", rgb: "96,125,139" },
// ];

// const paletteContainer = document.querySelector(".js-palette");
// const cardsMarkup = createColorCardsMarkup(colors);

// paletteContainer.insertAdjacentHTML("beforeend", cardsMarkup);

// paletteContainer.addEventListener("click", onPaletteContainerClick);

// function createColorCardsMarkup(colors) {
//     return colors.map(({hex, rgb}) => {
//         return `
//       <div class="color-card">
//         <div
//           class="color-swatch"
//           data-hex="${hex}"
//           data-rgb="${rgb}"
//           style="background-color: ${hex}"
//         ></div>
//         <div class="color-meta">
//           <p>HEX: ${hex}</p>
//           <p>RGB: ${rgb}</p>
//         </div>
//       </div>
//     `
//     }).join("");
// }

// function onPaletteContainerClick(evt) {
//     const isColorSwatchEl = evt.target.classList.contains("color-swatch");
//     if (!isColorSwatchEl) {
//         return;
//     }

//     const swatchEl = evt.target;
//     const parentColorCard = swatchEl.closest(".color-card");

//     removeActiceCardClass();
//     addActiveCardClass(parentColorCard);
//     setBodyBgColor(swatchEl.dataset.hex);
// }

// function removeActiceCardClass() {
//      const currentActiveCard = document.querySelector('.color-card.is-active');

//     if (currentActiveCard) {
//         currentActiveCard.classList.remove("is-active");
//     }
// }

// function addActiveCardClass(card) {
//     card.classList.add("is-active");
// }

// function setBodyBgColor(color) {
//     document.body.style.backgroundColor = color;
// }

// ===========================  TASK 6  ==================================

// const instruments = [
//     {
//         id: 1,
//         img: "./images/cars/2018_Honda_Accord_12.17.17.jpg",
//         name: "Молоток",
//         price: 150,
//     },
//     {
//         id: 2,
//         img: "./images/cars/Honda_CR-V_2.2.jpg",
//         name: "Перфоратор",
//         price: 3000,
//     },
//     {
//         id: 3,
//         img: "./images/cars/MAZDA6_SEDAN_100th.jpg",
//         name: "Рівень",
//         price: 2000,
//     },
// ];

// const basket = [];
// const list = document.querySelector(".list");

// const markup = instruments.map(({ id, img, name, price }) => `
//     <li data-id="${id}" >
//         <img src="${img}" alt="${name}" width="300"/>
//         <h2>${name}</h2>
//         <p>${price}</p>
//         <div>
//           <button class="js-add">Купити</button>
//           <button class="js-favorite">В обране</button>
//           <button class="js-delete" disabled>Видалити</button>
//         </div>
//       </li>`).join("");

// list.insertAdjacentHTML("beforeend", markup);

// list.addEventListener("click", onClick);

// function onClick(evt) {
//     if (evt.target.classList.contains("js-add")) {
//         const currentIdx = Number(evt.target.closest("li").dataset.id);
//         console.log(currentIdx);
//         const currentProduct = { ...instruments.find(({ id }) => id === currentIdx) };
//         const inBasket = basket.find(({ id }) => id === currentIdx);

//         if (!inBasket) {
//             currentProduct.qty = 1;
//             basket.push(currentProduct);
//             evt.target.parentElement.lastElementChild.removeAttribute("disabled");
//         } else {
//             inBasket.qty += 1;
//         }

//         // console.log(inBasket);

//         console.log(basket);
//     }

//     // if (evt.target.classList.contains("js-favorite")) {
//     //     console.log(evt.target);
//     // }

//     if (evt.target.classList.contains("js-delete")) {
//         const currentIdx = Number(evt.target.closest("li").dataset.id);
//         const idxInBasket = basket.findIndex(({ id }) => id === currentIdx);
//         console.log(idxInBasket);

//         basket.splice(idxInBasket, 1);
//         evt.target.setAttribute("disabled", true);
//         console.log(basket);
//     }
// }

// ===========================  TASK 7  ==================================

// const content = document.querySelector('.content');
// const restart = document.querySelector('.js-restart');
// content.insertAdjacentHTML('beforeend', createMarkup());
// content.addEventListener('click', onClick);
// restart.addEventListener('click', onRestart);
// const X_KEY = 'PlayerX';
// const O_KEY = 'PlayerO';
// let player = 'X';
// let stepX = JSON.parse(localStorage.getItem(X_KEY)) || [];
// let stepO = JSON.parse(localStorage.getItem(O_KEY)) || [];

// const win = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
//   [1, 4, 7],
//   [2, 5, 8],
//   [3, 6, 9],
//   [1, 5, 9],
//   [3, 5, 7],
// ];

// function startGame() {
//   [...content.children].forEach(item => {
//     const id = Number(item.dataset.id);
//     if (stepX.includes(id)) {
//       item.textContent = "X";
//     } else if (stepO.includes(id)) {
//       item.textContent = "O";
//     }
//   });
// }
// startGame()

// function createMarkup() {
//   let markup = '';
//   for (let i = 1; i <= 9; i += 1) {
//     markup += `<div class="item" data-id=${i}></div>`;
//   }
//   return markup;
// }

// function onClick(evt) {
//   if (!evt.target.textContent) {
//     evt.target.textContent = player;
//     const id = Number(evt.target.dataset.id);
//     let result = false;
//     if (player === 'X') {
//       stepX.push(id);
//       localStorage.setItem(X_KEY, JSON.stringify(stepX));;
//       result = isWinner(stepX);
//     } else {
//       stepO.push(id);
//       localStorage.setItem(O_KEY, JSON.stringify(stepO));
//       result = isWinner(stepO);
//     }

//     setTimeout(() => {
//       if (result) {
//         alert(`Winner ${player}`);
//         onRestart();
//         return;
//       }
//       player = player === 'X' ? 'O' : 'X';
//     })
//   } else {
//     alert('Change!!!');
//   }
// }

// function isWinner(arr) {
//   return win.some(item => item.every(id => arr.includes(id)));
// }

// function onRestart() {
//   player = 'X';
//   stepX = [];
//   stepO = [];
//   localStorage.clear();
//   content.innerHTML = createMarkup();
// }

// ===========================  l  ==================================

// const session = document.querySelector('.session');
// const local = document.querySelector('.local');
// const remove = document.querySelector('.remove');
// const arr = [1, 2, 3, 4, 5];

// session.addEventListener('click', onSession);

// // function onSession() {
// //     const data = JSON.parse(localStorage.getItem("local")) || [];
// //     data.forEach(element => { console.log(element) });
// // }

// function onSession() {
//   try {
//       const data = JSON.parse(localStorage.getItem('local'));
//       if (!data) {
//           throw new Error("Array is empty")
//       }
//       console.log(data);
//     data.forEach(element => {
//       console.log(element);
//     });
//   } catch (e) {
//     console.log(e);
//   } finally {
//     console.log('world');
//   }
// }

// local.addEventListener('click', onLocal);

// function onLocal() {
//   localStorage.setItem('local', JSON.stringify(arr));
//   localStorage.setItem('local-1', JSON.stringify(arr));
//   localStorage.setItem('local-2', JSON.stringify(arr));
// }

// remove.addEventListener('click', onRemove);

// function onRemove() {
//   // localStorage.removeItem("message")
//   localStorage.clear();
// }

// ====================================================================

// console.log(document);

// const body = document.body;
// console.log(body);

// const list = body.firstElementChild;
// console.log(list);

// const firstListItem = list.firstElementChild;
// console.log(firstListItem);

// const listItems = list.children;
// console.log(listItems);

// ====================================================================

// const listWithId = document.querySelector('#menu');
// listWithId.style.textTransform = 'uppercase';
// listWithId.style.fontSize = '24px';
// console.log(listWithId);

// const listWithClass = document.querySelector('.menu');
// console.log(listWithClass);

// const menuItemsByTagName = document.querySelectorAll("li");
// console.log(menuItemsByTagName);

// const menuItemsByClass = document.querySelectorAll(".menu-item");
// console.log(menuItemsByClass);

// const firstMenuItem = document.querySelector(".menu-item");
// firstMenuItem.style.color = 'tomato';
// console.log(firstMenuItem);

// ====================================================================

// const article = document.querySelector(".article");
// console.log(article.innerHTML);

// const title = document.querySelector(".article .title");
// console.log(title.innerHTML);

// const text = document.querySelector(".article .text");
// console.log(text.innerHTML);

// const link = document.querySelector(".article .link");
// console.log(link.innerHTML);

// const navEl = document.querySelector('ul');
// console.log(navEl);

// const navEl = document.querySelector('.site-nav__item');
// console.log(navEl);
// console.log(navEl.classList);
// // navEl.classList.add('first');
// // navEl.classList.remove('site-nav__item');

// // const navLinksEl = document.querySelectorAll('.site-nav__item');
// // console.log(navLinksEl);

// const magicBtn = document.querySelector('.js-mag-btn');

// magicBtn.addEventListener('click', () => {
//   navEl.classList.toggle('qwerty');
// });

// const currentPageUrl = '/portfolio';

// const linkEl = document.querySelector(`.site-nav__link[href="${currentPageUrl}"]`);
// console.log(linkEl);

// const titleEl = document.createElement('h1');
// titleEl.classList.add('page-title');
// titleEl.textContent = 'Це заголовок сторінки';

// // console.log(titleEl);

// // document.body.appendChild(titleEl);

// const imageEl = document.createElement('img');
// imageEl.src =
//   'https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80';
// imageEl.alt = 'This is cat';
// // imageEl.setAttribute('width', 640);
// imageEl.width = 240;

// console.log(imageEl.width);
// console.log(imageEl);

// // document.body.appendChild(imageEl);

// const navEl = document.querySelector('.site-nav');
// // const newEl = document.createElement('p');
// // newEl.textContent = 'HEEEEEEEELLOOOOOOOOOOOOOOOOO';
// // navEl.appendChild(newEl);

// const navItemEl = document.createElement('li');
// navItemEl.classList.add('site-nav__item');

// const navLinkEl = document.createElement('a');
// navLinkEl.classList.add('site-nav__link');
// navLinkEl.textContent = 'Особистий кабінет';
// navLinkEl.href = '/profile';

// console.log(navItemEl);
// console.log(navLinkEl);

// navItemEl.appendChild(navLinkEl);

// console.log(navItemEl);

// // navEl.appendChild(navItemEl);

// navEl.insertBefore(navItemEl, navEl.firstElementChild);

// const heroEl = document.createElement('hero');
// heroEl.append(titleEl, imageEl);

// document.body.insertBefore(heroEl, navEl);

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D88' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

// const option = colorPickerOptions[0];

// const buttonEl = document.createElement('button');
// buttonEl.type = 'button';
// buttonEl.textContent = option.label;
// buttonEl.style.backgroundColor = option.color;
// buttonEl.style.width = 140;

// console.log(buttonEl);

// const colorPickerContainerEl = document.querySelector('.js-color-picker');

// const elements = [];

// for (const color of colorPickerOptions) {
//   const buttonEl = document.createElement('button');
//   buttonEl.type = 'button';
//   buttonEl.textContent = color.label;
//   buttonEl.style.backgroundColor = color.color;
// //   buttonEl.style.width = '80px';
//     buttonEl.classList.add('color-picker__option')

//   elements.push(buttonEl);
// }

// console.log(elements);

// const colorPickerContainerEl = document.querySelector('.js-color-picker');

// // const elements = colorPickerOptions.map(option => {
// //   const buttonEl = document.createElement('button');
// //   buttonEl.type = 'button';
// //   buttonEl.classList.add('color-picker__option');
// //   buttonEl.textContent = option.label;
// //   buttonEl.style.backgroundColor = option.color;

// //   return buttonEl;
// // });

// // console.log(elements);

// // colorPickerContainerEl.append(...elements);

// const makeColorPickerOptions = options => {
//   return options.map(option => {
//     const buttonEl = document.createElement('button');
//     buttonEl.type = 'button';
//     buttonEl.classList.add('color-picker__option');
//     buttonEl.textContent = option.label;
//     buttonEl.style.backgroundColor = option.color;

//     return buttonEl;
//   });
// };

// const elements = makeColorPickerOptions(colorPickerOptions);
// colorPickerContainerEl.append(...elements);

// ====================================================================

// const product = {
//   name: 'Server',
//   description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
//   price: 2000,
//   available: true,
//   onSale: true,
// };

// const productEl = document.createElement('article');
// productEl.classList.add('product');

// const nameEl = document.createElement('h2');
// nameEl.textContent = product.name;
// nameEl.classList.add('product__name');

// const descrEl = document.createElement('p');
// descrEl.textContent = product.description;
// descrEl.classList.add('product__descr');

// const priceEl = document.createElement('p');
// priceEl.textContent = product.price;
// priceEl.classList.add('product__price');

// console.log(productEl);
// // console.log(nameEl);
// // console.log(descrEl);
// // console.log(priceEl);

// productEl.append(nameEl, descrEl, priceEl);

const products = [
  {
    name: 'Server',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    price: 2000,
    available: true,
    onSale: true,
  },
  {
    name: 'Monitor',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    price: 4000,
    available: true,
    onSale: true,
  },
  {
    name: 'Proccesor',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    price: 1200,
    available: true,
    onSale: true,
  },
  {
    name: 'Memory',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    price: 1000,
    available: true,
    onSale: true,
  },
];

console.log(products);

const productContainerEl = document.querySelector('.js-products');

const makeProductCard = ({ name, description, price }) => {
  const productEl = document.createElement('article');
  productEl.classList.add('product');

  const nameEl = document.createElement('h2');
  nameEl.textContent = name;
  nameEl.classList.add('product__name');

  const descrEl = document.createElement('p');
  descrEl.textContent = description;
  descrEl.classList.add('product__descr');

  const priceEl = document.createElement('p');
  priceEl.textContent = price;
  priceEl.classList.add('product__price');

  productEl.append(nameEl, descrEl, priceEl);

  return productEl;
};

// console.log(makeProductCard(products[2]));

const elements = products.map(makeProductCard);
console.log(elements);

productContainerEl.append(...elements);


