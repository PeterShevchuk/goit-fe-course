let list = document.querySelector('#counter');
list.style.display = 'block';
let counterValue = document.querySelector('#value').textContent;
let ev = document.querySelectorAll('button')

ev.addEventListener('click', function (event) {
  		console.log(event);
  		// event.preventDefault(); // Отменить повдение по умолчанию
  	});


function onClick() {
  console.log(ev)
  
}

onClick();
