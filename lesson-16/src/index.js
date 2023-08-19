// const names = ['Alice', 'Kate', 'Emma'];
// const keys = {
//   names: 'Array of names',
// };

// const btnLs = document.querySelector('.js-ls');
// const btnSs = document.querySelector('.js-ss');

// // localStorage.setItem(keys.names, JSON.stringify(names));

// // console.log(localStorage.getItem(keys.names));
// // console.log(JSON.parse(localStorage.getItem(keys.names)));

// // localStorage.removeItem(keys.names);

// btnLs.addEventListener('click', handlerAddLs);
// btnSs.addEventListener('click', handlerAddSs);

// function handlerAddLs() {
//   localStorage.setItem(keys.names, JSON.stringify(names));
// }

// function handlerAddSs() {
//   sessionStorage.setItem(keys.names, JSON.stringify(names));
// }

// =============================================================

// function add(a, b) {
//   return a + b;
// }

// localStorage.setItem('function', JSON.stringify(add));
// localStorage.setItem('function', add);

// console.log(localStorage.getItem('function'));

// console.log(JSON.parse(localStorage.getItem('function')));

// =============================================================

import instruments from './products.json';
// console.log(instruments);

import { createMarkup } from './templates/templatePLP';
// console.log(createMarkup);

import common from './common.json';
// console.log(common);

const products = JSON.parse(localStorage.getItem(common.LS_PRODUCTS)) ?? [];
const selectors = {
  list: document.querySelector('.js-list'),
};

selectors.list.insertAdjacentHTML('beforeend', createMarkup(instruments));
selectors.list.addEventListener('click', handlerAdd);

function handlerAdd(evt) {
  if (!evt.target.classList.contains('js-add')) {
    return;
  }

  const product = evt.target.closest('.js-product');
  const productId = Number(product.dataset.id);
  const currentProduct = instruments.find(({ id }) => id === productId);
  const idx = products.findIndex(({ id }) => id === productId);

  if (idx !== -1) {
    products[idx].qty += 1;
  } else {
    currentProduct.qty = 1;
    products.push(currentProduct);
  }

  localStorage.setItem(common.LS_PRODUCTS, JSON.stringify(products));

  console.log(currentProduct);
}
