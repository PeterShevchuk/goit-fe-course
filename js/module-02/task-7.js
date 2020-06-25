const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
let message;

const isLoginValid = function (login) {
    return login.length >= 4 && login.length <= 16? false : true;
};

const isLoginUnique = function (allLogins, login) {
    return allLogins.includes(login);
};

const addLogin = function (allLogins, login) {
    let loginValid = isLoginValid(login);
    let isLogin = isLoginUnique(allLogins, login);

    if (loginValid === true) {
        message = 'Помилка! Логін повинен бути від 4 до 16 символів';
    } else if (isLogin === true) {
        message = 'Такий логін вже використовується!';
    } else  {
        logins.push(login);
        message = 'Логін успішно доданий!';
    }
    return message;
};

/*
 * Виклич функції для перевірки працездатності твоєї реалізації.
 */
console.log(addLogin(logins, 'Ajax')); // 'Логін успішно доданий!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такий логін вже використовується!'
console.log(addLogin(logins, 'Zod')); // 'Помилка! Логін повинен бути від 4 до 16 символів'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Помилка! Логін повинен бути від 4 до 16 символів'