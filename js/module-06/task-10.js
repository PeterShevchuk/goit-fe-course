import users from "./users.js";
let con;

const getSortedUniqueSkills = users => {
    return users.reduce((acc, elm) => {
        return [...new Set([...acc, ...elm.skills])]
    }, '').sort()
  };
  
  console.log(getSortedUniqueSkills(users));
  // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]