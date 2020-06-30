const findBestEmployee = function (employees) {
  let objVal = Object.values(employees);
  let objKey = Object.keys(employees);
  let maxNumber = objVal[0];
  let nameLider = objKey[0];

  for (let i = 0; i < objVal.length; i+=1) {
    if (objVal[i] > maxNumber) { maxNumber = objVal[i]; nameLider = objKey[i];}
  }
  
  return `${nameLider}: ${maxNumber}`;
};

/*
 * Викличи функції для перевірки працездатності твоєї реалізації.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux