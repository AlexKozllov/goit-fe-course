"use strict";

const credits = 23500;
const prisePerDroid = 3000;
let numberOfDroid = prompt("Какое количество дроидов Вы хотите  купить?");
let totalPrice;
let balance;
let validData;
if (numberOfDroid === null) {
  console.log("Отменено пользователем!");
} else {
  totalPrice = Number(numberOfDroid) * prisePerDroid;
  if (totalPrice > credits) {
    console.log("Недостаточно средств на счету!");
  } else if (totalPrice == false) {
    console.log("Обновите страницу и пропробуйте сново");
  } else {
    balance = credits - totalPrice;
    if (isNaN(balance)) {
      console.log("Введите корректные данные");
    } else {
      console.log(
        `Вы купили ${numberOfDroid} дроидов, на счету осталось ${balance} кредитов.`
      );
    }
  }
}
