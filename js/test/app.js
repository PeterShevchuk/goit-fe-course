const perent = document.querySelector('#parent');
const perent1 = document.querySelector('#child');
const perent2 = document.querySelector('#inner-child');

perent.addEventListener('click', () => {
    alert('Alert1')
    console.log('Alert1')
})
perent1.addEventListener('click', () => {
    alert('Alert2')
    console.log('Alert2')
})
perent2.addEventListener('click', () => {
    alert('Alert3')
    console.log('Alert3')
})