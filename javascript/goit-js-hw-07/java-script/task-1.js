"use strict";
// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов
// li.item.Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст
// заголовка элемента(тега h2) и количество элементов в категории(всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4

const ulCategories = document.querySelector("#categories");
const Categories = ulCategories.querySelectorAll("ul");

console.log(`В списке ${Categories.length} категории.`);

const liIitem = document.querySelector("ul");
console.log(`Категория: ${liIitem.querySelector("h2").textContent}`);

const ulLI = document.querySelector("li.item");
const ulLIitem = ulLI.querySelectorAll("li");
console.log(`Количество элементов: ${ulLIitem.length}`);
