'use strict';

let price;
let message;
const country = prompt('Введіть країну одержувача:');


switch (country.toLowerCase()) {
  case 'китай':
    price = 100;
    break;
  case 'чилі':
    price = 250;
    break;
  case 'австралія':
    price = 170;
    break;
case 'індія':
    price = 80;
    break;
case 'ямайка':
    price = 120;
    break;
    default: 
    message = 'У вашій країні доставка недоступна';
          
}
if (price !== undefined) {message = 'Доставка в '+country+' буде коштувати '+price+' кредитів';}

alert(message);