"use strict";

// Напиши скрипт, который реагирует на изменение значения
// input#font - size - control(событие input) и изменяет инлайн - стиль
// span#text обновляя свойство font - size.В результате при перетаскивании
// ползунка будет меняться размер текста.

const sizeControl = {
  sizeValue: document.querySelector("#font-size-control"),
  spanSize: document.querySelector("#text"),
};

sizeControl.sizeValue.addEventListener("input", () => {
  sizeControl.spanSize.style.fontSize = `${sizeControl.sizeValue.value}px`;
});
