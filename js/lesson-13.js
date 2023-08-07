// const container = document.querySelector('.js-container');

// container.addEventListener('click', onClick);

// function onClick(evt) {
//   if (evt.target.nodeName !== 'BUTTON') {
//     return;
//   }

//   // console.log(evt.target.nodeName);
//   console.dir(evt.target.textContent);
// }

// const addBtn = document.querySelector('.js-add-btn');
// let labelCounter = 6;

// addBtn.addEventListener('click', onAddBtnClick);

// function onAddBtnClick() {
//   const btn = document.createElement('button');
//   btn.textContent = `Кнопка ${labelCounter}`;
//   btn.type = 'button';

//   container.append(btn);
//   labelCounter += 1;
// }

// =========================================================

// const tagsContainer = document.querySelector('.js-tags');
// let selectedTag = null;

// tagsContainer.addEventListener('click', onTagsContainerClick);

// function onTagsContainerClick(evt) {
//   if (evt.target.nodeName !== 'BUTTON') {
//     return;
//   }

//   const currentActiveBtn = document.querySelector('.tags__btn--active');
//   //   console.log(currentActiveBtn);

//   if (currentActiveBtn) {
//     currentActiveBtn.classList.remove('tags__btn--active');
//   }

//   //   currentActiveBtn?.classList.remove('tags__btn--active');

//   const nextActiveBtn = evt.target;
//   nextActiveBtn.classList.add('tags__btn--active');
//   // console.log(nextActiveBtn);

//   selectedTag = nextActiveBtn.dataset.value;
//   console.log(selectedTag);
// }

// =========================================================

// const tagsContainer = document.querySelector('.js-tags');
// // const selectedTags = [];
// const selectedTags = new Set();

// tagsContainer.addEventListener('click', onTagsContainerClick);

// function onTagsContainerClick(evt) {
//   if (evt.target.nodeName !== 'BUTTON') {
//     return;
//   }

//   const btn = evt.target;
//   const tag = btn.dataset.value;
//   const isActive = btn.classList.contains('tags__btn--active');

//   if (isActive) {
//     selectedTags.delete(tag);
//   } else {
//     selectedTags.add(tag);
//   }

//   // console.log(evt.target);
//   btn.classList.toggle('tags__btn--active');

//   // selectedTag.push(evt.target.dataset.value);
//   console.log(selectedTags);
// }

// =========================================================

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#e91e63', rgb: '233,30,99' },
//   { hex: '#9c27b0', rgb: '156,39,176' },
//   { hex: '#673ab7', rgb: '103,58,183' },
//   { hex: '#3f51b5', rgb: '63,81,181' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#00bcd4', rgb: '0,188,212' },
//   { hex: '#009688', rgb: '0,150,136' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
//   { hex: '#ff9800', rgb: '255,152,0' },
//   { hex: '#795548', rgb: '121,85,72' },
//   { hex: '#607d8b', rgb: '96,125,139' },
// ];

// const paletteContainer = document.querySelector('.js-palette');
// const cardsMarkup = createColorCardsMarkup(colors);

// paletteContainer.insertAdjacentHTML('beforeend', cardsMarkup);

// paletteContainer.addEventListener('click', onPaletteContainerClick);

// function createColorCardsMarkup(colors) {
//   return colors
//     .map(({ hex, rgb }) => {
//       return `
//     <div class="color-card" style="outline: 3px solid ${hex}">
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
//       </div>`;
//     })
//     .join('');
// }

// function onPaletteContainerClick(evt) {
//   const isColorSwatchEl = evt.target.classList.contains('color-swatch');

//   if (!isColorSwatchEl) {
//     return;
//   }

//   const swatchEl = evt.target;
//   const parentColorCard = swatchEl.closest('.color-card');

//   removeActiveCardClass();
//   addActiveCardClass(parentColorCard);
//   setBodyBgColor(swatchEl.dataset.hex);
// }

// function setBodyBgColor(color) {
//   document.body.style.backgroundColor = color;
// }

// function removeActiveCardClass() {
//   const currentActiveCard = document.querySelector('.color-card.is-active');

//   if (currentActiveCard) {
//     currentActiveCard.classList.remove('is-active');
//   }
// }

// function addActiveCardClass(card) {
//   card.classList.add('is-active');
// }

// =========================================================

// const instruments = [
//   {
//     id: 1,
//     img: 'https://static.dnipro-m.ua/cache/products/1755/catalog_origin_261195.jpg',
//     name: 'Молоток',
//     price: 150,
//   },
//   {
//     id: 2,
//     img: 'https://static.dnipro-m.ua/cache/products/5587/catalog_origin_190742.jpg',
//     name: 'Перфоратор',
//     price: 3000,
//   },
//   {
//     id: 3,
//     img: 'https://static.dnipro-m.ua/cache/products/4601/catalog_origin_271394.jpg',
//     name: 'Рівень',
//     price: 2000,
//   },
// ];

// const basket = [];
// const favorites = [];
// const list = document.querySelector('.list');
// const markup = instruments
//   .map(
//     ({ id, img, name, price }) =>
//       `
//     <li data-id="${id}">
//       <img src="${img}" alt="${name}" width="300px"/>
//       <h2>${name}</h2>
//       <p>Ціна: ${price}</p>
//       <div>
//         <button class="js-add">Купити</button>
//         <button class="js-favorite">В обране</button>
//         <button class="js-delete" disabled>Видалити</button>
//       </div>
//     </li>
//     `
//   )
//   .join('');

// list.insertAdjacentHTML('beforeend', markup);

// list.addEventListener('click', onClick);

// function onClick(evt) {
//   if (evt.target.classList.contains('js-add')) {
//     const currentIdx = Number(evt.target.closest('li').dataset.id);
//     const currentProduct = { ...instruments.find(({ id }) => id === currentIdx) };

//     const inBasket = basket.find(({ id }) => id === currentIdx);
//     if (!inBasket) {
//       currentProduct.qty = 1;
//         basket.push(currentProduct);
//         evt.target.parentElement.lastElementChild.removeAttribute('disabled');
//     } else {
//       inBasket.qty += 1;
//       }
//       console.log(basket);
//   }

//   if (evt.target.classList.contains('js-favorite')) {
//     const currentIdx = Number(evt.target.closest('li').dataset.id);
//     const currentProduct = { ...instruments.find(({ id }) => id === currentIdx) };

//     const inFavorites = basket.find(({ id }) => id === currentIdx);
//     if (!inFavorites) {
//       currentProduct.qty = 1;
//       favorites.push(currentProduct);
//     } else {
//       inFavorites.qty += 1;
//     }
//   }

//   if (evt.target.classList.contains('js-delete')) {
//     const currentIdx = Number(evt.target.closest('li').dataset.id);
//     const idxInBasket = basket.findIndex(({ id }) => id === currentIdx);

//       basket.splice(idxInBasket, 1);
//       evt.target.setAttribute('disabled', true);
//     console.log(basket);
//   }
// }

// =========================================================

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

// const content = document.querySelector('.content');
// const restartBtn = document.querySelector('.js-restart');

// let player = 'X';

// function createMarkup() {
//   let markup = '';
//   for (let i = 1; i <= 9; i += 1) {
//     markup += `<div class="item" data-id="${i}"></div>`;
//   }

//   return markup;
// }

// content.insertAdjacentHTML('beforeend', createMarkup());

// content.addEventListener('click', onClick);
// restartBtn.addEventListener('click', onRestartBtnClick);

// function onClick(evt) {
//   if (!evt.target.textContent) {
//     evt.target.textContent = player;
//     player = player === 'X' ? 'O' : 'X';
//   }
// }

// function onRestartBtnClick() {
//   player = 'X';
//   content.innerHTML = createMarkup();
// }

// =========================================================

const refs = {
  input: document.querySelector('input'),
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  boxes: document.querySelector('#boxes'),
}

refs.createBtn.addEventListener('click', createBoxes);
refs.destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes() {
  const quantity = refs.input.value;
  let size = 30;
  let markup = '';

  for (let i = 0; i < quantity; i += 1) {
    markup+= `<div></div>`
  }
}

function destroyBoxes() {
  refs.boxes.textContent = '';
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
