'use strict';

const ADMIN_PASSWORD = '123';
let message;

message = prompt('Введіть пароль');

if (message === null) {

    message = 'Скасовано користувачем!';

} else if (message === ADMIN_PASSWORD) {
    message = 'Ласкаво просимо!';

} else {
    message = 'Доступ заборонений, невірний пароль!';
}

alert(message);

