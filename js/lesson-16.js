// const dog = {
//   name: 'Mango',
//   age: 3,
//   isHappy: true,
// };

// const dogJSON = JSON.stringify(dog);
// console.log(dogJSON);

// ==========================================================

// const user = {
//   name: 'Mango',
//   age: 25,
// };

// console.log(JSON.stringify(user));

// const savedUsrData = '{"name":"Mango","age":45}';

// console.log(JSON.parse(savedUsrData));

// ==========================================================

// console.log(localStorage);

// localStorage.setItem('mydata', JSON.stringify({ name: 'Igor', age: 33 }));

// const savedData = localStorage.getItem('mydata');
// console.log('savedData', savedData);

// const parsedData = JSON.parse(savedData);
// console.log('parsedData', parsedData);

// ==========================================================

// // import throttle from 'lodash.throttle';
// // console.log(throttle);

// const STORAGE_KEY = 'feedback-msg';

// const formData = {};

// const refs = {
//   form: document.querySelector('.js-feedback-form'),
//   textarea: document.querySelector('.js-feedback-form textarea'),
// };

// refs.form.addEventListener('submit', onFormSubmit);
// refs.textarea.addEventListener('input', onTextareaInput);
// // refs.textarea.addEventListener('input', throttle(onTextareaInput, 4000));

// refs.form.addEventListener('input', e => {
//   //   console.log(e.target.name);
//   //   console.log(e.target.value);

//   formData[e.target.name] = e.target.value;
//   console.log(formData);
//   localStorage.setItem('formData', JSON.stringify(formData));
// });

// populateTextarea();

// function onFormSubmit(evt) {
//   evt.preventDefault();

//   console.log('Send form');

//   evt.currentTarget.reset();
//   localStorage.removeItem(STORAGE_KEY);
// }

// function onTextareaInput(evt) {
//   const message = evt.target.value;

//   localStorage.setItem(STORAGE_KEY, message);
// }

// function populateTextarea() {
//   const savedMessage = localStorage.getItem(STORAGE_KEY);

//   if (savedMessage) {
//     console.log(savedMessage);
//     refs.textarea.value = savedMessage;
//   }
// }

// ==========================================================
