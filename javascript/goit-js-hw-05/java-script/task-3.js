"use strict";
// Напиши класс Storage, который будет создавать объекты для управления складом
// товаров.При вызове будет получать один аргумент - начальный массив товаров,
// и записывать его в свойство items.

// Добавь методы класса:

// getItems() - возвращает массив текущих товаров
// addItem(item) - получает новый товар и добавляет его к текущим
// removeItem(item) - получет товар и, если он есть, удаляет его из текущих

class Storage {
  constructor(array) {
    this.items = array;
  }
  getItems() {
    console.log(this.items);
    // return this.items;
  }
  addItem(array) {
    this.items.push(array);
    return this.items;
  }
  removeItem(array) {
    if (this.items.indexOf(array) !== -1) {
      this.items.splice(this.items.indexOf(array), 1);
    }
    return this.items;
  }
}

const storage = new Storage([
  "Нанитоиды",
  "Пролонгер",
  "Железные жупи",
  "Антигравитатор",
]);

const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem("Дроид");
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem("Пролонгер");
console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
