"use strict";
// Счетчик состоит из спана и кнопок, которые должны увеличивать
// и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее
// значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения
// значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление
// интерфейса

const refs = {
  btnDecr: document.querySelector('[data-action="decrement"]'),
  span: document.querySelector("#value"),
  btnInc: document.querySelector('[data-action="increment"]'),
};

let counterValue = refs.span.textContent;
refs.btnDecr.addEventListener("click", () => {
  if (counterValue > 0) {
    counterValue--;
    refs.span.textContent = counterValue;
  }
});

refs.btnInc.addEventListener("click", () => {
  counterValue++;
  refs.span.textContent = counterValue;
});
