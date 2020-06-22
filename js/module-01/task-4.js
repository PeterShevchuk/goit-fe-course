'use strict';

const credits = 23580;
const pricePerDroid = 3000;     
let totalDroid;
let message;
let totalPrice;


totalDroid = prompt('Введіть кількість дроїдів, яку хоче купити');

if (totalDroid === null) {

    message = 'Скасовано користувачем!';

} else if (Number(totalDroid) > 0) {
    totalPrice = credits - (totalDroid * pricePerDroid);

    if (totalPrice < 0 ) {
        message = 'Недостатньо коштів на рахунку!';
    } else {
        message = 'Ви купили '+totalDroid+' дроїдів, на рахунку залишилося '+totalPrice+' кредитів.'
    }
} else {
    message = 'Невірно введена кількість';
}

alert(message);