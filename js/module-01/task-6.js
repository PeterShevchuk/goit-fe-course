'use strict';

let input = true;
let total = 0;

    for (total = 0; Boolean(input) !== false; total+=input) {
      input = Number(prompt('Введіть будь яке число: '));
      if (Boolean(input) === false) {
        alert('Загальна сума чисел дорівнює: '+total);
        break;
      }       
    }
