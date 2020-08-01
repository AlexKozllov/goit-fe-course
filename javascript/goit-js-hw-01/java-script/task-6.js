"use strict";

let input;
let total = 0;
let i = 1;
while (i > null) {
  input = prompt("Введите число");
  if (input === null) {
    break;
  }
  input = +input;
  if (isNaN(input)) {
    alert("Введите число");
    continue;
  }
  total = total + input;
}
alert(`Общая сумма чисел равна ${total}`);
