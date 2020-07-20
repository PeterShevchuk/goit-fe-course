const colors = ["#FFFFFF", "#2196F3", "#4CAF50", "#FF9800", "#009688", "#795548"];
const btnStart = document.querySelector('[data-action="start"]');
const btnStop = document.querySelector('[data-action="stop"]');
let idInterval = 0;
let randomNumber = 0;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function start() {
  idInterval = setInterval(function () {
    randomNumber = randomIntegerFromInterval(0, colors.length - 1);
    document.body.style.backgroundColor = colors[randomNumber];
  }, 1000);
}
function stop() {
  clearInterval(idInterval);
}

btnStart.addEventListener("click", start);
btnStop.addEventListener("click", stop);
