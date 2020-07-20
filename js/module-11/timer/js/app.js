// Варіант без класу

// let time;
// const elm = [
//   document.querySelector('[data-value="days"]'),
//   document.querySelector('[data-value="hours"]'),
//   document.querySelector('[data-value="mins"]'),
//   document.querySelector('[data-value="secs"]'),
// ];
// function innerTimer(time) {
//   elm[0].textContent = fix(Math.floor(time / (1000 * 60 * 60 * 24)));
//   elm[1].textContent = fix(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
//   elm[2].textContent = fix(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//   elm[3].textContent = fix(Math.floor((time % (1000 * 60)) / 1000));
// }
// function fix(num) {
//   return String(num < 10 ? "0" + num : num);
// }
// const interval = setInterval(() => {
//   time = Date.now() - new Date("Jul 17, 2019");
//   innerTimer(time);
// }, 1000);

// Варіант з класом (плагін)
class CountdownTimer {
  constructor(obj) {
    this.selector = [
      document.querySelector(obj.selector).querySelector('[data-value="days"]'),
      document.querySelector(obj.selector).querySelector('[data-value="hours"]'),
      document.querySelector(obj.selector).querySelector('[data-value="mins"]'),
      document.querySelector(obj.selector).querySelector('[data-value="secs"]'),
    ];
    this.date = obj.targetDate;
    this.innerTimer = this.innerTimer.bind(this);
    this.startTimer = this.startTimer.bind(this);
  }
  innerTimer() {
    this.time = Date.now() - this.date;
    this.selector[0].textContent = this.fix(Math.floor(this.time / (1000 * 60 * 60 * 24)));
    this.selector[1].textContent = this.fix(Math.floor((this.time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    this.selector[2].textContent = this.fix(Math.floor((this.time % (1000 * 60 * 60)) / (1000 * 60)));
    this.selector[3].textContent = this.fix(Math.floor((this.time % (1000 * 60)) / 1000));
  }
  startTimer() {
    this.timerId = setInterval(this.innerTimer, 1000);
  }
  fix(num) {
    if (Math.sign(num) === -1) {num *= -1}
    return String(num < 10 && num >= 0 ? "0" + num : num);
  }
}

// Таймер на збільшення часу
const timer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jul 17, 2019"),
});
timer.startTimer();

// Таймер на зменшення часу
const timer2 = new CountdownTimer({
  selector: "#timer-2",
  targetDate: new Date("Jan 1, 2021"),
});
timer2.startTimer();

// Таймер на зменшення часу
const timer3 = new CountdownTimer({
  selector: "#timer-3",
  targetDate: new Date("Apr 2, 2021"),
});
timer3.startTimer();
