const refs = {
  input: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('button'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

refs.startBtn.disabled = true;

console.log();

// refs.startBtn.addEventListener('click', onStartBtnClick);



// class Timer {
//   constructor(rootSelector, targetDate) {
//     this.rootSelector = rootSelector;
//     this.targetTime = targetTime;
//   }

//   start() {
//     const intervalId = setInterval(() => {

//       const leftedTime = this.targetTime - new Date()
//     }, 1000);
//     console.log(leftedTime);
//     console.log(intervalId);

    
//   }
// }








// const timer = new Timer (refs.input, targetTime)

// function onStartBtnClick() {
//   refs.startBtn.disabled = true;
//   refs.input.disabled = true;
//   timer.start()


// }



const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  // onClose(selectedDates) {
  //   console.log(selectedDates[0]);
  //   let targetTime = selectedDates[0];
  //   if (currentTime > targetTime) {
  //     window.alert("Please choose a date in the future");
  //     return;
  //   } else {
  //     refs.startBtn.disabled = false;
  //   }
  // },
};

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}


flatpickr(refs.input, options)





// console.log(targetTime);
// console.log(new Date(refs.input.value));

const intervalId = setInterval(() => {
  const targetTime = new Date(refs.input.value);
  
  const leftedTime = targetTime - new Date();
    console.log(convertMs(leftedTime));
    }, 1000);
  






