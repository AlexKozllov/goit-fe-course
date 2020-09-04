"use strict";
// Используй массив объектов images для создания тегов img вложенных в li.
// Для создания разметки используй шаблонные строки и insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через
// css - классы.

const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const gallery = document.querySelector("#gallery");
console.log(gallery);

images.forEach((el) => {
  const imgOfGallery = `<li><img src="${el.url}" alt="${el.alt}" class='myImg'> </li>`;
  console.log(imgOfGallery);
  // return imgOfGallery;
  // const newItemLi = document.querySelectorAll(".myImg");
  gallery.insertAdjacentHTML("afterbegin", imgOfGallery);
});
// console.log(liOfGallery);

const newItemLi = document.querySelectorAll(".myImg");
console.log(newItemLi);

newItemLi.forEach((element) => {
  console.dir(element);
  element.style.width = "250px";
});

gallery.style.listStyle = "none";
gallery.style.display = "flex";
gallery.style.flexDirection = "row";
gallery.style.justifyContent = "space-between";
