'use strict';

let input = 0;
let total = 0;

do {
  total += parseInt(input);
  input = prompt('ведіть число:');
} while (input != null)
alert('Загальна сума чисел дорівнює ' + total);