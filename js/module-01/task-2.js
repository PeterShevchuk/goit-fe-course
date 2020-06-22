const total = 100;
let ordered = 50;

ordered = prompt('Введіть кількість одиниць');


if (ordered < total) {
    alert("Замовлення оформлено, з вами зв'яжеться менеджер")
} else {
    alert("На складі недостатньо товарів!");
}