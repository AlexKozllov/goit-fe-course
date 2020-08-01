"use strict";

let input;
const numbers = [];
let total = 0;

for (
  input = prompt("Введите число");
  input !== null;
  input = prompt("Введите число")
) {
  if (isNaN(Number(input))) {
    alert("Было введено не число, попробуйте еще раз");
    continue;
  }
  if (input.length === 0) {
    continue;
  }
  numbers.push(+input);
  console.log(numbers);
}
if (numbers.length > 0) {
  for (let number of numbers) {
    total = total + number;
  }
}

if (numbers.length !== 0) {
  console.log(`Общая сумма чисел равна ${total}`);
} else {
  console.log("Массив пуст. Перезагрузите страницу и введите число");
}
