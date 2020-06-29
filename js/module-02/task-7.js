const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = (login) => {let len = login.length; return len >= 4 && len <= 16? false : true;}

const isLoginUnique = (allLogins, login) => allLogins.includes(login);

const addLogin = function (allLogins, login) {
    let loginValid = isLoginValid(login);
    if (loginValid === true) {
        return 'Помилка! Логін повинен бути від 4 до 16 символів';
    } 

    let isLogin = isLoginUnique(allLogins, login);
    if (isLogin === true) {
        return 'Такий логін вже використовується!';
    }
     
    logins.push(login);
    return 'Логін успішно доданий!';
};

/*
 * Виклич функції для перевірки працездатності твоєї реалізації.
 */
console.log(addLogin(logins, 'Ajax')); // 'Логін успішно доданий!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такий логін вже використовується!'
console.log(addLogin(logins, 'Zod')); // 'Помилка! Логін повинен бути від 4 до 16 символів'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Помилка! Логін повинен бути від 4 до 16 символів'