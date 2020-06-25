const findLongestWord = function (string) {
    let strSplit = string.split(' ');
    // let longestWord = 0;
    let longStr = strSplit[0];

    for (const strVal of strSplit) {
      if (strVal.length > longStr.length) {
        // longestWord = strVal.length;
        longStr = strVal;
      }
    }


//     for(var i = 0; i < strSplit[i].length; i+=1){
//       if(strSplit[i].length > longestWord) { 
//       longestWord = strSplit[i].length;
//       longStr = strSplit[i];
//   }
// }
    let message = `В реченні "${string}", найдовше слово: ${longStr}.`; 

    return message;
};

/*
 * Виклич функції для перевірки працездатності твоєї реалізації.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'