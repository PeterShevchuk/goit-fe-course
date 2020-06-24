const findLongestWord = function (string) {
    let strSplit = string.split(' ');
    let longestWord = 0;
    let longStr;

    for(var i = 0; i < strSplit[i].length; i++){
      if(strSplit[i].length > longestWord){ 
      longestWord = strSplit[i].length;
      longStr = strSplit[i];
  }
}
    let message = `В реченні "${string}", найдовше слово: ${longStr}, його довжина: ${longestWord} символів.`; 

    return message;
};

/*
 * Виклич функції для перевірки працездатності твоєї реалізації.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'