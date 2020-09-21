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

const div = document.querySelector("#contrlols");
const input = document.querySelector("#controls input");
const butCreate = document.querySelector('[data-action="render"]');
const butDestroy = document.querySelector('[data-action="destroy"]');
const divBoxes = document.querySelector("#boxes");

// !!!!!!!!!!!!!!!!!!!!!!!     Не понятно почему работает без єтих строк    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// let amount;
// input.addEventListener("input", () => {
//   amount = input.valueAsNumber;
// });
////////////////////////////////////////////////////////////////////////////////////////////////////////////

function createBoxes(amount) {
  const numBox = [];
  let sise = 30;
  for (let i = 1; i <= amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${sise}px`;
    box.style.height = `${sise}px`;
    box.style.background = `rgb(${Math.round(
      Math.random() * (255 - 0)
    )}, ${Math.round(Math.random() * (255 - 0))}, ${Math.round(
      Math.random() * (255 - 0)
    )})`;
    numBox.push(box);
    sise += 10;
  }
  divBoxes.append(...numBox);
}
butCreate.addEventListener("click", () => {
  divBoxes.innerHTML = "";
  createBoxes(input.value);
});
butDestroy.addEventListener("click", () => {
  divBoxes.innerHTML = "";
  // input.value = 0;
});
