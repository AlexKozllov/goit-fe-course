"use strict";
// Напиши скрипт который, при наборе текста в инпуте
// input#name - input(событие input), подставляет
// его текущее значение в span#name - output.Если
// инпут пустой, в спане должна отображаться строка
// 'незнакомец'.

const myInput = document.querySelector("#name-input");

const mySpan = document.querySelector("#name-output");

myInput.addEventListener("input", () => {
  if (myInput.value === "") {
    mySpan.textContent = "незнакомец";
  } else {
    mySpan.textContent = myInput.value;
  }
});
