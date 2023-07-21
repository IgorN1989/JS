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
