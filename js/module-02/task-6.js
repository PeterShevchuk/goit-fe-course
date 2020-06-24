let input;
const numbers = [];
let total = 0;
let inputNumber;
let numbersTotal = 0;

for (let i = 0; i < 100000000; i++) {
    input = prompt('Введіть число:');
    inputNumber = Number(input);
    if (input === null) {
        for(let i = 0; i < numbers.length; i++){
            numbersTotal += numbers[i];
        }
        console.log('Загальна сума чисел дорівнює: '+numbersTotal);
        break;
    } else if (Boolean(inputNumber) === false) {
        alert('Було введено не число, попробуйте ще раз');
    }  else {
        numbers.push(inputNumber);
    }
}