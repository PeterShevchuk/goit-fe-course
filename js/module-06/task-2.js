import users from "./users.js";

const getUsersWithEyeColor = (users, color) => {
    return users.filter(person => person.eyeColor === color)
  };
  
  console.log(getUsersWithEyeColor(users, 'blue')); // [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Carey Barr]