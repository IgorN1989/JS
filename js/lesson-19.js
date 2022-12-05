// const date1 = Date.now();
// console.log("date1:", date1);

// setTimeout(() => {
//     const date2 = Date.now();
//     console.log("date1:", date1);
//     console.log("date2:", date2);

//     console.log(date2-date1);
// }, 3000);

// ===============================================

const timer = {
  start() {
    const startTime = Date.now();

    setInterval(() => {
      const currentTime = Date.now();
        const deltaTime = currentTime - startTime;
        const timeComponents = getTimeComponents(deltaTime);
        console.log(timeComponents);
    }, 1000);
  },
};

timer.start();

function getTimeComponents(time) {
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((time % (1000 * 60)) / 1000);

  return { hours, mins, secs };
}
