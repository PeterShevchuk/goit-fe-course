'use strict';

const products = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроїд', price: 400, quantity: 7 },
    { name: 'Захоплення', price: 1200, quantity: 2 },
  ];
  
  const calculateTotalPrice = (allProdcuts, productName) => {
    for (const item in allProdcuts) {
        const {name, price, quantity} = allProdcuts[item];
        if (name === productName) {return price*quantity}
    } 

  };
  
  /*
   * Викличи функції для перевірки працездатності твоєї реалізації.
   */
  console.log(calculateTotalPrice(products, 'Радар')); // 5200
  
  console.log(calculateTotalPrice(products, 'Дроїд')); // 2800