"use strict";
// Напиши скрипт, который для каждого элемента массива ingredients
// создаст отдельный li после чего вставит все li за одну операцию в
// список ul.ingredients. Для создания DOM - узлов используй
// document.createElement().

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

// let textlI;
const ulIngredients = document.getElementById("ingredients");
// console.dir(ulIngredients);

ingredients.forEach((el) => {
  const textLi = document.createElement("li");
  console.log(textLi);
  textLi.textContent = el;
  ulIngredients.append(textLi);
});
