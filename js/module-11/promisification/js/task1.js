//   const delay = (ms, cb1, cb2) => {
//       setTimeout(() => {
//           let numberRandom = Math.random()>0.5;
//         //   console.log(numberRandom);
//           numberRandom? cb1() : cb2();
//       }, ms)
//   }

//   function cb1() {
//       console.log('success');
//   }
//   function cb2() {
//     console.log('error');
// }
// delay(1000, cb1, cb2);

// const delay = (ms) => {
//   const promise = new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(ms);
//     }, ms);
//   });
//   //   console.log(promise)
//   return promise;
// };

// const logger = (time) => console.log(`Resolved after ${time}ms`);

// // Виклич функції для перевірки
// delay(2000).then(logger).catch().finally(); // Resolved after 2000ms
// delay(1000).then(logger); // Resolved after 1000ms
// delay(1500).then(logger); // Resolved after 1500ms

const cars = [
  { name: "ferrary", speed: 200, isOn: false },
  { name: "vaz", speed: 10, isOn: false },
  { name: "mazda", speed: 250, isOn: true },
  { name: "opel", speed: 150, isOn: false },
];



function toShowCars(car) {
    


    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
        car.speed >= 150? resolve('ok') : reject('error');
        }, 0);
    });
    return promise;
}

for (const car of cars) {
    toShowCars(car).then(result => console.log(result)).catch(error => console.log(error)).finally( () => {console.log('finally'); cars.isOn = true} )
}

