'use strict';

const products = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроїд', price: 400, quantity: 7 },
    { name: 'Захоплення', price: 1200, quantity: 2 },
];

const getAllPropValues = (arr, prop) => {
    let message = [];
    for (const item in arr) {
        Boolean(arr[item][prop])? message.push(arr[item][prop]) : null
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