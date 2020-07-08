import users from "./users.js";



const getNamesSortedByFriendsCount = users => {
    return users.sort((user1, user2) => {return user1.age - user2.age}).map(user => `${user.name} - ${user.age}`)
  };
  
  console.log(getNamesSortedByFriendsCount(users));
  // [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]