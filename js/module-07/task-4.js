document.querySelector('#counter').style.display = 'block';

let value = document.querySelector('#value');
const btnAdd = document.querySelector('[data-action="increment"]');
const btnRemove = document.querySelector('[data-action="decrement"]');

let numb = Number(value.textContent);

btnAdd.addEventListener('click', increment);
btnRemove.addEventListener('click', decrement);

function increment(event) {
  numb += 1;
  value.textContent = numb;
}

function decrement(event) {
  if (numb > 0) {
    numb -= 1;
    value.textContent = numb;
  }
}