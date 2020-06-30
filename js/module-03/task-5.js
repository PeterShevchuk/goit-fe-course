'use strict';

const products = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроїд', price: 400, quantity: 7 },
    { name: 'Захоплення', price: 1200, quantity: 2 },
];

const getAllPropValues = function (arr, prop) {
    let message = [];
    for (let i = 0; i < arr.length; i+=1) {
        if (Boolean(arr[i][prop]) === true) {message.push(arr[i][prop])}
    }
    
    return message;
}
  
  /*
  * Викличи функції для перевірки працездатності твоєї реалізації.
  */
  console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроїд', 'Захоплення']
  
  console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]
  
  console.log(getAllPropValues(products, 'category')); // []

  console.log(getAllPropValues(products, 'price')); //  [1300, 2700, 400, 1200]