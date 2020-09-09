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

// const numberDiv = document.querySelector("#controls");
// const createBtn = document.querySelector('[data-action="render"]');
// const destroyBtn = document.querySelector('[data-action="destroy"]');

// console.log(numberDiv.value);
// console.log(createBtn);
// console.log(destroyBtn);

// numberDiv.addEventListener("input", () => {});
// createBtn.addEventListener("input", () => {
//   numberDiv.input.value = "9999";
// });
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

const div = document.querySelector("#contrlols");
console.dir(div);
const input = document.querySelector("#controls input");
const buttonLeft = document.querySelector('[data-action="render"]');
const buttonRight = document.querySelector('[data-action="destroy"]');
const divBoxes = document.querySelector("#boxes");
// const input = document.querySelector("#");
// const input = document.querySelector("#");
// const input = document.querySelector("#boxses");

input.addEventListener("input", () => {
  const amount = input.value;
  // console.log(amaunt);
  console.dir(input);
});

function createBoxes(amount) {
  let sise = 30;
  const box = document.createElement("div");
  box.style.width = `${sise}px`;
  box.style.height = `${sise}px`;
  box.style.color = `rgb(${Math.round(Math.random() * (255 - 0))},${Math.round(
    Math.random() * (255 - 0)
  )},${Math.round(Math.random() * (255 - 0))})`;
  // div.append(box);

  for (let i = 2; i <= amount; i++) {
    const box = document.createElement("div");
    sise += 10;
    box.style.width = `${sise}px`;
    box.style.height = `${sise}px`;
    box.style.color = `rgb(${Math.round(
      Math.random() * (255 - 0)
    )}, ${Math.round(Math.random() * (255 - 0))}, ${Math.round(
      Math.random() * (255 - 0)
    )})`;
    // box.style.color = `rgb(200, 150, 40)`;
    divBoxes.append(box);
  }
}
buttonLeft.addEventListener("click", () => {
  divBoxes.innerHTML = "";
  createBoxes(input.value);
});
buttonRight.addEventListener("click", () => {
  divBoxes.innerHTML = "";
});
// const boxes = document.querySelector("#boxes");

// const div = createElement;
