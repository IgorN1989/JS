// ===========================  TASK 1  ==================================

// const coordsOutputRef = document.querySelector(".js-coords");
// let mouseMoveCbInvocationCounter = 0;

// // window.addEventListener("mousemove", _.throttle(onMouseMove, 250));

// function onMouseMove(event) {
//     mouseMoveCbInvocationCounter += 1;

//     coordsOutputRef.textContent = `
//     Кількість викликів onMouseMove: ${mouseMoveCbInvocationCounter},
//     X: ${event.clientX},
//     Y: ${event.clientY}`;
// }

// const inputRef = document.querySelector(".js-input");
// const outputRef = document.querySelector(".js-output");
// let inputCbInvocationCounter = 0;

// inputRef.addEventListener("input", _.debounce(onInputChange, 1000));

// function onInputChange(event) {
//     inputCbInvocationCounter += 1;

//     outputRef.textContent = `Кількість викликів onInputChange: ${inputCbInvocationCounter},
//     Значення: ${event.target.value}`;
// }

// ===========================  TASK 2  ==================================

// const tech = [
//     { label: "HTML" },
//     { label: "CSS" },
//     { label: "JavaScript" },
//     { label: "Node.js" },
//     { label: "React" },
//     { label: "Vue" },
//     { label: "Next.js" },
//     { label: "Mobx" },
//     { label: "Redux" },
//     { label: "React Router" },
//     { label: "GraphQl" },
//     { label: "PostgreSQL" },
//     { label: "MongoDB" },
// ];

// const refs = {
//     list: document.querySelector(".js-list"),
//     input: document.querySelector("#filter"),
// };

// refs.input.addEventListener("input", _.debounce(onFilterChange, 1000));

// const listItemsMarkup = createListItemsMarkUp(tech);
// popularList(listItemsMarkup);

// function createListItemsMarkUp(items) {
//     return items.map(item => `<li>${item.label}</li>`).join("");
// }

// function onFilterChange(evt) {
//     const filter = evt.target.value.toLowerCase();

//     const filteredItems = tech.filter(t => t.label.toLowerCase().includes(filter));

//     const listItemsMarkup = createListItemsMarkUp(filteredItems);

//     popularList(listItemsMarkup);
// }

// function popularList(markup) {
//     refs.list.innerHTML = markup;
// }

// ======================================================================
// ======================================================================
// ======================================================================
// ======================================================================
// ======================================================================

// const buttonRef = document.querySelector('.js-button');

// // buttonRef.addEventListener('click', () => {
// //     console.log("Button was clicked");
// // })

// const handleClick = (event) => {
//   console.log("event: ", event);
//   console.log("event type: ", event.type);
//   console.log("currentTarget: ", event.currentTarget);
// };

// buttonRef.addEventListener("click", handleClick);

// document.addEventListener("keydown", event => {
//   console.log("key: ", event.key);
//   console.log("code: ", event.code);
// });

// ======================================================================

// const targetBtn = document.querySelector('.js-target-btn');
// const addListenerBtn = document.querySelector('.js-add-listener');
// const removeListenerBtn = document.querySelector('.js-remove-listener');

// targetBtn.addEventListener('click', () => {
//   console.log('CLICK');
// });

// function handleTargetButtonClick() {
//     console.log('CLICK');
// };

// function targetButtonClickHandler() {
//     console.log('CLICK');
// };

// function onTargetButtonClick() {
//      console.log('CLICK');
// };

// addListenerBtn.addEventListener('click', () => {
//   console.log('Додаю слухача подій на цільву кнопку');

//   targetBtn.addEventListener('click', onTargetBtnClick);
// });

// removeListenerBtn.addEventListener('click', () => {
//   console.log('Знімаю слухача подій з цільової кнопки');

//   targetBtn.removeEventListener('click', onTargetBtnClick);
// });

// function onTargetBtnClick() {
//   console.log('CLICK');
// }

// function logMessage() {
//   console.log('Клік по цільовій кнопці');
// }

// ======================================================================

// const form = document.querySelector('.js-register-form');

// form.addEventListener('submit', onFormSubmit);

// function onFormSubmit(event) {
//   event.preventDefault();

//   // console.log(event);
//   // console.dir(event.currentTarget);
//   // console.dir(event.currentTarget.elements.subscription.value);

//   // console.log('Це сабміт форми');

//   //   const formElements = event.currentTarget.elements;

//   //   const mail = formElements.email.value;
//   //   const password = formElements.password.value;
//   //   const subscription = formElements.subscription.value;

//   //   //   console.log(mail);
//   //   //   console.log(password);
//   //   //   console.log(subscription);

//   //   const formData = {
//   //     mail,
//   //     password,
//   //     subscription,
//   //     };

//   //     console.log(formData);

//   const formData = new FormData(event.currentTarget);

//     console.log(formData);

//     formData.forEach((value, name) => {
//         console.log('onFormSubmit -> value:', value);
//         console.log('onFormSubmit -> name:', name);
//     })
// }

// ======================================================================

// const refs = {
//   input: document.querySelector('.js-input'),
//   nameLabel: document.querySelector('.js-button > span'),
//   licenseCheckbox: document.querySelector('.js-license'),
//   btn: document.querySelector('.js-button'),
// };

// // refs.input.addEventListener('focus', onInputFocus);
// // refs.input.addEventListener('blur', onInputBlur);
// // refs.input.addEventListener('change', onInputChange);
// // refs.input.addEventListener('input', onInputChange);

// refs.input.addEventListener('input', onInputChange);
// refs.licenseCheckbox.addEventListener('change', onLicenseChange);

// function onInputFocus() {
//   console.log('Інпут отримав фокус - подія focus');
// };

// function onInputBlur() {
//   console.log('Інпут втратив фокус - подія blur');
// };

// function onInputChange(event) {
//   console.log(event.currentTarget.value);
//   refs.nameLabel.textContent = event.currentTarget.value;
// };

// function onLicenseChange(event) {
//   console.log(event.currentTarget.checked);
//   console.log(refs.btn.disabled);

//   refs.btn.disabled = !event.currentTarget.checked;
// };

// ======================================================================

// const refs = {
//     output: document.querySelector('.js-output'),
//     clearBtn: document.querySelector('.js-clear'),
// };

// window.addEventListener('keydown', onKeypress);
// refs.clearBtn.addEventListener('click', onCleanOutput);

// function onKeypress(event) {
//     console.log('event.key:', event.key);
//     console.log('event.code:', event.code);

//     refs.output.textContent += event.key;
// };

// function onCleanOutput() {
//     refs.output.textContent = '';
// };

// ======================================================================

// const boxRef = document.querySelector('.js-box');

// boxRef.addEventListener('mouseenter', onMouseEnter);
// boxRef.addEventListener('mouseleave', onMouseLeave);
// // boxRef.addEventListener('mouseover', onMouseEnter);
// // boxRef.addEventListener('mouseout', onMouseLeave);
// boxRef.addEventListener('mousemove', onMouseMove);

// function onMouseEnter(event) {
//     const box = event.currentTarget;
//     box.classList.add('box--active');
// };

// function onMouseLeave(event) {
//     const box = event.currentTarget;
//     box.classList.remove('box--active');
// };

// function onMouseMove(event) {
//     console.log(event);
// };

// ======================================================================

// const refs = {
//   openModalBtn: document.querySelector('[data-action="open-modal"]'),
//   closeModalBtn: document.querySelector('[data-action="close-modal"]'),
//   backdrop: document.querySelector('.js-backdrop'),
// };

// refs.openModalBtn.addEventListener('click', onOpenModal);
// refs.closeModalBtn.addEventListener('click', onCloseModal);
// refs.backdrop.addEventListener('click', onBackdropClick);

// function onOpenModal() {
//   window.addEventListener('keydown', onEscKeyPress);
//   document.body.classList.add('show-modal');
// }

// function onCloseModal() {
//   window.removeEventListener('keydown', onEscKeyPress);
//   document.body.classList.remove('show-modal');
// }

// function onBackdropClick(event) {
//   // console.log('Клік по backdrop');

//   // console.log(event.currentTarget);
//   // console.log(event.target);

//   if (event.currentTarget === event.target) {
//     // console.log('Клік саме по backdrop');
//     onCloseModal();
//   }
// }

// function onEscKeyPress(event) {
//   // console.log(event.code);
//   const ESC_KEY_CODE = 'Escape';

//   if (event.code === ESC_KEY_CODE) {
//     onCloseModal();
//   }
// }

// ======================================================================

// const cars = [
//   {
//     id: 1,
//     car: 'Honda',
//     type: 'Civic',
//     price: 12000,
//     img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU',
//   },
//   {
//     id: 2,
//     car: 'Audi',
//     type: 'Q7',
//     price: 40000,
//     img: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg',
//   },
//   {
//     id: 3,
//     car: 'BMW',
//     type: '5 siries',
//     price: 9000,
//     img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU',
//   },
//   {
//     id: 4,
//     car: 'Honda',
//     type: 'Accord',
//     price: 20000,
//     number: '+380000000000',
//     img: 'https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg',
//   },
//   {
//     id: 5,
//     car: 'Volvo',
//     type: 'XC60',
//     price: 7000,
//     img: 'https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320',
//   },
// ];

// const listRef = document.querySelector('.js-list');
// const form = document.querySelector('.js-search');

// form.addEventListener('submit', onSearch);

// function onSearch(event) {
//   event.preventDefault();

//   const { searchQuery, searchKey } = event.currentTarget.elements;

//   // OR

//   // const { elements: { searchQuery, searchKey } } = event.currentTarget;

//   //   console.dir(event.currentTarget);
//   //   console.log(event.currentTarget.searchQuery);
//   //   console.log(event.currentTarget.elements.searchKey);
//   //   console.log(searchQuery.value);
//   //   console.log(searchKey.value);

//   //   const currentCars = cars.filter(
//   //     item => item[searchKey.value].toLowerCase() === searchQuery.value.trim().toLowerCase()
//   //   );

//   const currentCars = cars.filter(item =>
//     item[searchKey.value].toLowerCase().includes(searchQuery.value.trim().toLowerCase())
//   );

//   //   console.log(currentCars);
//   if (currentCars.length) {
//     listRef.innerHTML = createMarkup(currentCars);
//   } else {
//     listRef.innerHTML = '404';
//   }
// }

// function createMarkup(arr) {
//   return arr
//     .map(
//       ({ id, car, price, type, img }) =>
//         `<li data-id=${id}>
//       <img src="${img}" alt="${type}" class="img-car" />
//       <h2>Марка: ${car}</h2>
//       <h2>Модель: ${type}</h2>
//       <p>Ціна: ${price}</p>
//     </li>`
//     )
//     .join('');
// }

// listRef.insertAdjacentHTML('beforeend', createMarkup(cars));

// ======================================================================

// const input = document.querySelector('.js-input');
// // console.log(input);
// const title = document.querySelector('.js-title');

// input.addEventListener('input', onSearchInput);
// input.addEventListener('change', onChangeChange);

// function onSearchInput(evt) {
//     console.log(evt.currentTarget.value);
//     title.textContent = evt.currentTarget.value;
// }

// function onChangeChange() {
//     alert('Return to INPUT!!!');
// }

// ======================================================================

// const clickMe = document.querySelector('.js-click');
// clickMe.addEventListener('click', onClickMe);

// let counter = 1;

// function onClickMe(evt) {
//     const changeValue = 50 * counter;
//     counter += 1;
//     console.log(evt);
//     evt.currentTarget.style.margin = `${changeValue}px ${changeValue}px`;
// }

// ======================================================================

// document.addEventListener('keydown', onKey);

// function onKey(evt) {
//     if (evt.code === 'Escape') {
//         alert('Escape')
//    }
// }

// document.addEventListener('keydown', onKey);
// // document.addEventListener('keydown', onKey, { once: true });

// function onKey(evt) {
//   console.log(evt);
//   if (evt.code === 'Escape') {
//     document.body.classList.toggle('test');
//     // document.removeEventListener('keydown', onKey);
//   }
// }
