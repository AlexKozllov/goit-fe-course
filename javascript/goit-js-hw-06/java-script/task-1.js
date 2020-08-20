"use strict";
import * as user from "./users.js";
const users = user.default;

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

/////////////////////////////////////////////////////////////////////////////////

// Задание 8
// Массив имен всех пользователей у которых есть друг с указанным именем.

const getUsersWithFriend = (users, friendName) => {
  return users.reduce((acc, el) => {
    const friend = el.friends.find((elem) => elem === friendName);
    if (friend !== undefined) {
      acc.push(el.name);
    }
    return acc;
  }, []);
};

console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]

///////////////////////////////////////////////////////////////////////////////

// Задание 9
// Массив имен(поле name) людей, отсортированных в зависимости от количества их
// друзей(поле friends)

const getNamesSortedByFriendsCount = (users) => {
  // return users.reduce((acc, el) => {
  //   console.log(el.friends.sort((a, b) => a - b));
  //   return acc;
  // }, []);

  users.reduce((acc, el) => {
    el.numbOfFriends = el.friends.length;
  }, []);
  users.sort((a, b) => a.numbOfFriends - b.numbOfFriends);
  return users.reduce((bcc, element) => {
    bcc.push(element.name);
    return bcc;
  }, []);
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazque

//////////////////////////////////////////////////////////////////////////

// Задание 10
// Получить массив всех умений всех пользователей(поле skills), при этом не должно быть
// повторяющихся умений и они должны быть отсортированы в алфавитном порядке.

const getSortedUniqueSkills = (users) => {
  return users.reduce((acc, elem) => {
    acc.find((el) => el === elem.skills);
    acc.push(...elem.skills);
    acc.sort();
    return acc.filter((item, pos) => {
      return acc.indexOf(item) == pos;
    });
  }, []);
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'm
