const logItems = function (array) {
    let len = array.length;

    for (let i = 0; i < array.length; i++) {
        console.log(i+' - '+array[i])
    }
  };

  /*
  * Виклич функції для перевірки працездатності твоєї реалізації.
  */
 logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
 
 logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);