let input;
const numbers = [];
let inputNumber;
let numbersTotal = 0;

const total = function (params) {
    for(let i = 0; i < params.length; i++){
        numbersTotal += params[i];
    }
    return numbersTotal;
};

for (let i = 0; i < 100000000; i++) {
    input = prompt('Введіть число:');
    inputNumber = Number(input);
    if (input === null) {
        console.log(total(numbers)); 
        break;
    } else if (Boolean(inputNumber) === false) {
        alert('Було введено не число, попробуйте ще раз');
    }  else {
        numbers.push(inputNumber);
    }
}

