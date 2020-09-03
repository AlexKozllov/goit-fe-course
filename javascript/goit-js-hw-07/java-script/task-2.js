"use strict";
// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
//     после чего вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM - узлов используй document.createElement().

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
// let textlI;
// const ulIngredients = document.querySelector("#ingredients");
// ingredients.forEach((el) => {
//   textlI = document.createElement("li");
//   console.log(textlI);
//   textlI.textContent += el;
// });
// ulIngredients.append(textlI);

let textlI;
const ulIngredients = document.querySelector("#ingredients");
ingredients.forEach((el) => {
  textlI = document.createElement("li");
  console.log(textlI);
  // textlI.textContent += el;
  textlI.textContent = el;
  ulIngredients.append(textlI);
});
