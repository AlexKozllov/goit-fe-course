"use strict";
import * as user from "./users.js";
console.log(user);
const users = user.default;
console.log(users);

// Задание 1
// Получить массив имен всех пользователей(поле name).

const getUserNames = (users) => {
  return users.map((el) => el.name);
  // users.forEach((element) => {
  //   element.name;
  // });
};

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

/////////////////////////////////////////////////////////////////////////

// Задание 2
// Получить массив объектов пользователей по цвету глаз(поле eyeColor).

const getUsersWithEyeColor = (users, color) => {
  return users.filter((el) => el.eyeColor === color);
};

console.log(getUsersWithEyeColor(users, "blue")); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

///////////////////////////////////////////////////////////////////////////

// Задание 3
// Получить массив имен пользователей по полу(поле gender).

const getUsersWithGender = (users, gender) => {
  return users.filter((el) => el.gender === gender).map((elem) => elem.name);
};

console.log(getUsersWithGender(users, "male")); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson'

///////////////////////////////////////////////////////////////////////////////

// Задание 4
// Получить массив только неактивных пользователей(поле isActive).

const getInactiveUsers = (users) => {
  return users.filter((el) => el.isActive === false);
};

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

//////////////////////////////////////////////////////////////////////////////

// Задание 5
// Получить пользоваля(не массив) по email(поле email, он уникальный).

const getUserWithEmail = (users, email) => {
  return users.find((el) => el.email === email);
};

console.log(getUserWithEmail(users, "shereeanthony@kog.com")); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, "elmahead@omatom.com")); // {объект пользователя Elma Head}

///////////////////////////////////////////////////////////////////////////////

// Задание 6
// Получить массив пользователей попадающих в возрастную категорию от min до max лет(поле age).

const getUsersWithAge = (users, min, max) => {
  return users.filter((el) => el.age >= min && el.age <= max);
};

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

////////////////////////////////////////////////////////////////////////////////

// Задание 7
// Получить общую сумму баланса(поле balance) всех пользователей.

const calculateTotalBalance = (users) => {
  return users.reduce((acc, el) => acc + el.balance, 0);
};

console.log(calculateTotalBalance(users)); // 20916
