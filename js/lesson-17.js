// const date1 = Date.now();
// console.log("date1:", date1);

// setTimeout(() => {
//     const date2 = Date.now();
//     console.log("date1:", date1);
//     console.log("date2:", date2);

//     console.log(date2-date1);
// }, 3000);

// ===============================================
// const refs = {
//   startBtn: document.querySelector('button[data-action-start]'),
//   stopBtn: document.querySelector('button[data-action-stop]'),
//   clockface: document.querySelector('.js-clockface'),
// };

// class Timer {
//   constructor({ onTick }) {
//     this.intervalId = null;
//     this.isActive = false;
//     this.onTick = onTick;
//     this.init();
//   }

//   init() {
//     const time = this.getTimeComponents(0);
//     this.onTick(time);
//   }

//   start() {
//     if (this.isActive) {
//       return;
//     }

//     const startTime = Date.now();
//     this.isActive = true;

//     this.intervalId = setInterval(() => {
//       const currentTime = Date.now();
//       const deltaTime = currentTime - startTime;
//       const time = this.getTimeComponents(deltaTime);
//       this.onTick(time);
//     }, 1000);
//   }

//   stop() {
//     clearInterval(this.intervalId);
//     this.isActive = false;
//     const time = this.getTimeComponents(0);
//     this.onTick(time);
//   }

//   getTimeComponents(time) {
//     const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
//     const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//     const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

//     return { hours, mins, secs };
//   }

//   pad(value) {
//     return String(value).padStart(2, '0');
//   }
// }

// const timer = new Timer({
//   onTick: updateClockface,
// });

// refs.startBtn.addEventListener('click', timer.start.bind(timer));
// refs.stopBtn.addEventListener('click', timer.stop.bind(timer));

// function updateClockface({ hours, mins, secs }) {
//   refs.clockface.textContent = `${hours}:${mins}:${secs}`;
// }

// ====================================================================

// const logMessage = () => {
//   console.log('Лог при виклику callback-функції через 3 секунди');
// };

// console.log('До виклику setTimeout');

// setTimeout(() => {
//   console.log('Всередині callback для setTimeout');
// }, 2000);

// console.log('Після виклику setTimeout');

// ====================================================================

// const logger = time => {
//   console.log(`Лог через ${time}ms, тому що не відмінили Timeout`);
// };

// const timerId = setTimeout(logger, 2000, 2000);

// console.log(timerId);

// const shouldCancelTimer = Math.random() > 0.3;
// console.log(shouldCancelTimer);

// if (shouldCancelTimer) {
//   clearTimeout(timerId);
// }

// ====================================================================

// const logger = time => console.log(`Лог кожні ${time}ms - ${Date.now()}`);

// console.log('До виклику setInterval');
// const intervalId = setInterval(logger, 2000, 2000);
// console.log('Після виклику setInterval');

// const shouldCancelInterval = Math.random() > 0.3;
// console.log(shouldCancelInterval);

// if (shouldCancelInterval) {
//   clearInterval(intervalId);
// }

// ====================================================================
// ====================================================================
// ====================================================================
// ====================================================================
// ====================================================================

// const NOTIFICATION_DELAY = 3000;
// let timeoutId = null;

// const refs = {
//   notification: document.querySelector('.js-alert'),
// };

// refs.notification.addEventListener('click', onNotificationClick);

// showNotification();

// function onNotificationClick() {
//   hideNotification();
//   clearTimeout(timeoutId);
// }

// function showNotification() {
//   refs.notification.classList.add('is-visiable');

//   timeoutId = setTimeout(() => {
//     console.log('Закриваєм алерт автоматично');
//     hideNotification();
//   }, NOTIFICATION_DELAY);
// }

// function hideNotification() {
//   refs.notification.classList.remove('is-visiable');
// }

// ======================================================

// const PROMPT_DELAY = 1000;
// const MAX_PROMPT_ATTEMPTS = 3;

// let promptCounter = 0;
// let hasSubscribed = false;

// const intervalId = setInterval(() => {
//   if (promptCounter === MAX_PROMPT_ATTEMPTS || hasSubscribed) {
//     console.log('Зупиняємо інтервал');
//     clearInterval(intervalId);
//     return;
//   }
//   console.log('Підпишись на розсилку - ' + Date.now());
//   promptCounter += 1;
// }, PROMPT_DELAY);

// ======================================================

// import { Modal } from 'bootstrap.native';
// import {
//   Alert,
//   Button,
//   Carousel,
//   Collapse,
//   Dropdown,
//   Modal,
//   Offcanvas,
//   Popover,
//   ScrollSpy,
//   Tab,
//   Toast,
//   Tooltip,
//   initCallback,
//   removeDataAPI,
// } from 'bootstrap.native';

// const modal = new Modal('#subscription-modal');
// console.log(modal);

// const PROMPT_DELAY = 3000;
// const MAX_PROMPT_ATTEMPTS = 3;

// setTimeout(() => {
//   console.log('Відкриваємо модалку');
//   modal.show();
// }, PROMPT_DELAY);

// ======================================================

// const date = new Date();
// console.log(date);

// console.log(date.getDay());
// console.log(date.getFullYear());
// console.log(date.getHours());
// console.log(date.getTime());

// const date1 = new Date();
// console.log('date1', date1);

// setTimeout(() => {
//   const date2 = new Date();

//   console.log('date1', date1);
//   console.log('date2', date2);

//   console.log(date2-date1);
// }, 5000);

// ======================================================

// const date1 = new Date().getTime();
// console.log('date1', date1);

// setTimeout(() => {
//   const date2 = new Date().getTime();

//   console.log('date1', date1);
//   console.log('date2', date2);

//   console.log(date2 - date1);
// }, 3000);

// ======================================================

// const date1 = Date.now();
// console.log('date1', date1);

// setTimeout(() => {
//   const date2 = Date.now();

//   console.log('date1', date1);
//   console.log('date2', date2);

//   console.log(date2 - date1);
// }, 3000);

// ======================================================

// const refs = {
//   startBtn: document.querySelector('button[data-action-start]'),
//   stopBtn: document.querySelector('button[data-action-stop]'),
//   clockface: document.querySelector('.js-clockface'),
// };

// const timer = {
//   intervalId: null,
//   isActive: false,

//   start() {
//     if (this.isActive) {
//       return;
//     }
//     const startTime = Date.now();
//     this.isActive = true;

//     this.intervalId = setInterval(() => {
//       const currentTime = Date.now();
//       const deltaTime = currentTime - startTime;
//       const { hours, mins, secs } = getTimeComponents(deltaTime);

//       updateClockface({ hours, mins, secs });

//       console.log(`${hours}:${mins}:${secs}`);
//     }, 1000);
//   },

//   stop() {
//     clearInterval(this.intervalId);
//     this.isActive = false;
//   },
// };

// refs.startBtn.addEventListener('click', () => {
//   timer.start();
// });

// refs.stopBtn.addEventListener('click', () => {
//   timer.stop();
// });

// function updateClockface({ hours, mins, secs }) {
//   refs.clockface.textContent = `${hours}:${mins}:${secs}`;
// }

// function pad(value) {
//   return String(value).padStart(2, '0');
// }

// function getTimeComponents(time) {
//   const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
//   const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//   const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

//   return { hours, mins, secs };
// }

// ======================================================

// const refs = {
//   startBtn: document.querySelector('button[data-action-start]'),
//   stopBtn: document.querySelector('button[data-action-stop]'),
//   clockface: document.querySelector('.js-clockface'),
// };

// class Timer {
//   constructor({ onTick }) {
//     this.intervalId = null;
//     this.isActive = false;
//     this.onTick = onTick;

//     this.init();
//   }

//   init() {
//     const { hours, mins, secs } = this.getTimeComponents(0);
//     this.onTick({ hours, mins, secs });
//   }

//   start() {
//     if (this.isActive) {
//       return;
//     }
//     const startTime = Date.now();
//     this.isActive = true;

//     this.intervalId = setInterval(() => {
//       const currentTime = Date.now();
//       const deltaTime = currentTime - startTime;
//       const { hours, mins, secs } = this.getTimeComponents(deltaTime);
//       this.onTick({ hours, mins, secs });
//     }, 1000);
//   }

//   stop() {
//     clearInterval(this.intervalId);
//     this.isActive = false;
//     const { hours, mins, secs } = this.getTimeComponents(0);
//     this.onTick({ hours, mins, secs });
//   }

//   getTimeComponents(time) {
//     const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
//     const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//     const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

//     return { hours, mins, secs };
//   }

//   pad(value) {
//     return String(value).padStart(2, '0');
//   }
// }

// const timer = new Timer({
//   onTick: updateClockface,
// });

// refs.startBtn.addEventListener('click', timer.start.bind(timer));
// refs.stopBtn.addEventListener('click', timer.stop.bind(timer));

// function updateClockface({ hours, mins, secs }) {
//   refs.clockface.textContent = `${hours}:${mins}:${secs}`;
// }

// ======================================================

// setInterval(() => {
//   const date = new Date();
//   const hours = date.getHours();
//   const minutes = date.getMinutes();
//   const seconds = date.getSeconds();
//   console.log(`${hours}:${minutes}:${seconds}`);
// }, 1000);

// ======================================================

// const elements = {
//   content: document.querySelector('.js-content'),
//   text: document.querySelector('.js-text'),
// };

// let counter = 10;

// elements.text.textContent = `Залишилось ${counter} секунд`;
// const id = setInterval(() => {
//   counter -= 1;
//   elements.text.textContent = `Залишилось ${counter} секунд`;
// }, 1000);

// setTimeout(() => {
//   clearInterval(id);
//   elements.content.style.display = 'none';
// }, counter * 1000 + 100);

// ======================================================

// console.log('start');

// setTimeout(() => {
//   console.log('setTimeout');
// }, 0);

// console.log('finish');

// ======================================================

// setTimeout(() => {
//   console.log('Hello world');
// }, 0);

// console.time('for');

// for (let i = 0; i < 1000; i += 1) {
//   console.log(i);
// }

// console.timeEnd('for');

// ======================================================
