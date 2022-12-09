const refs = {
  input: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('button'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

refs.startBtn.disabled = true;

refs.startBtn.addEventListener('click', onStartBtnClick);



const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      window.alert('Please choose a date in the future');
      return;
    }
    refs.startBtn.disabled = false;
    return selectedDates[0];
  },
};

flatpickr(refs.input, options);

// Якщо все ж таки через класс, то все має бути всередині класса)
// Та в конструкторі отримайте посилання на рефи)

// ініціалізувати бібліотеку flatpickr також в констукторі
// додати в класс метод, наприклад
// setTargetDate = (targetDate) => {
//    this.targetDate = targetDate;
// }
// і потім викликати цей метод в onClose() який в опціях і записувати таргет дату на інстанс класса)
// Але там потрібно бути уважним з контекстом)

// бо в вас в методі onClose який всередині options this посилається на options, а targetDate потрібно записувати на інстанс класса)

// ну і взагалі, всі методи класса краще писати стрілочними функціями, щоб не прийшлось байндити контекст

// Плюс потрібно продумати як ви там будете слухачі вішати (в конструкторі, або написати якийсь метод, який будете викликати на інстансі). Плю продумати що нам потрібно передавати в конструктор і так далі)

// Класси це підхід ООП, а один із головних принципів ООП це інкапсуляція)









