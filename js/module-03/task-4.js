'use strict';

const countTotalSalary = (employees) => {
  let objVal = Object.values(employees);
  let objKey = Object.keys(employees);
  let totalSum = 0;

  for (let i = 0; i < objVal.length; i+=1) {
    console.log(`${objKey[i]}: ${objVal[i]}`);
    totalSum +=objVal[i];
  }
  

  return totalSum !== 0? `Загальна сума зарплат: ${totalSum}` : `Немає даних`;
};

/*
 * Викличи функції для перевірки працездатності твоєї реалізації.
 */
console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
); // 400