"use strict";

// Напиши скрипт создания и очистки коллекции элементов.Пользователь
// вводит количество элементов в input и нажимает кнопку Создать,
//   после чего рендерится коллекция.При нажатии на кнопку Очистить,
//     коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр
// amount - число.Функция создает столько div, сколько указано в amount
// и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше
// предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const numberDiv = document.querySelector("#controls");
const createBtn = document.querySelector('[data-action="render"]');
const destroyBtn = document.querySelector('[data-action="destroy"]');

console.log(numberDiv.value);
console.log(createBtn);
console.log(destroyBtn);

numberDiv.addEventListener("input", () => {});
createBtn.addEventListener("input", () => {
  numberDiv.input.value = "9999";
});
//
//
// class Collection {
//   constructor() {
//     this.numberDiv = document.querySelector("#controls");
//     this.createBtn = document.querySelector('[data-action="render"]');
//     this.destroyBtn = document.querySelector('[data-action="destroy"]');
//   }
// }

// const a = new Collection();

// console.log(a.numberDiv.value);
