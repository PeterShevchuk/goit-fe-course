const checkForSpam = function (message) {
    let mesTest = false;
    message = message.toLowerCase();

    if (message.match('sale') || message.match('spam')) {
        mesTest = true;
    } 

    return mesTest;
  };
  
  /*
   * Викличи функції для перевірки працездатності твоєї реалізації.
   */
  console.log(checkForSpam('Latest technology news')); // false
  
  console.log(checkForSpam('JavaScript weekly newsletter')); // false
  
  console.log(checkForSpam('Get best sale offers now!')); // true
  
  console.log(checkForSpam('[SPAM] How to earn fast money?')); // true