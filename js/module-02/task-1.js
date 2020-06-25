const logItems = function (array) {
    let len = array.length;

    // let i = 0;
    // for (const arrayOf of array) {
    //     i += 1;
    //     console.log(`${i} - ${arrayOf}`);
    // }


    for (let i = 0; i < len; i += 1) {
        console.log(`${i+1} - ${array[i]}`);
    }
  };

  /*
  * Виклич функції для перевірки працездатності твоєї реалізації.
  */
 logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
 
 logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);