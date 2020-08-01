"use strict";

const ADMIN_PASSWORD = "jqueryismyjam";
let message;

const inPassword = prompt("Введите пароль");

if (inPassword === ADMIN_PASSWORD) {
  message = "Добро пожаловать!";
} else if (inPassword === null) {
  message = "Отменено пользователем!";
} else {
  message = "Доступ запрещен, неверный пароль!";
}
console.log(message);
