"use strict";

// Напиши скрипт, который бы при потере фокуса на инпуте,
//   проверял его содержимое на правильное количество символов.
// Сколько символов должно быть в инпуте, указывается в его
// атрибуте data - length.
// Если введено подходящее количество, то border инпута
// становится зеленым, если неправильное - красным.

const myInput = document.querySelector("#validation-input");
myInput.addEventListener("blur", () => {
  if (myInput.value.length === +myInput.dataset.length) {
    myInput.classList.remove("invalid");
    myInput.classList.add("valid");
  } else {
    myInput.classList.remove("valid");
    myInput.classList.add("invalid");
  }
});
