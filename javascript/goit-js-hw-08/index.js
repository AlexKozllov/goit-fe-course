"use strict";

import gallery from "./gallery-items.js";

const ulGallery = document.querySelector(".js-gallery");
const lightboxImage = document.querySelector(".lightbox__image");
const lightboxButton = document.querySelector(".lightbox__button");
const lightbox = document.querySelector(".lightbox");
const lightboxContent = document.querySelector(".lightbox__content");

// gallery.forEach((object) => {
//   let i = 0;
//   i = i + 1;
//   const img = document.createElement("img");
//   img.classList.add("gallery__image");
//   img.setAttribute("src", object.preview);
//   img.setAttribute("data-sourse", object.original);
//   img.setAttribute("alt", object.description);
//   img.setAttribute("data-index", i);

//   const link = document.createElement("a");
//   link.classList.add("gallery__link");
//   link.append(img);
//   const item = document.createElement("li");
//   item.classList.add("gallery__item");
//   item.append(link);
//   ulGallery.append(item);
// });

const arrGallery = gallery.map((object, index) => {
  const img = document.createElement("img");
  img.classList.add("gallery__image");
  img.setAttribute("src", object.preview);
  img.setAttribute("data-sourse", object.original);
  img.setAttribute("alt", object.description);
  img.setAttribute("data-index", index + 1);

  const link = document.createElement("a");
  link.classList.add("gallery__link");
  link.append(img);
  const item = document.createElement("li");
  item.classList.add("gallery__item");
  item.append(link);
  return item;
  // ulGallery.append(item);
  // return ulGallery;
});
ulGallery.append(...arrGallery);

ulGallery.addEventListener("click", (event) => {
  const newSrc = event.target.dataset.sourse;
  // const newSrc = event.target.dataset.indexNumber ;
  // console.log(event.target.dataset);
  lightbox.classList.add("is-open");
  lightboxImage.src = newSrc;
  //   window.addEventListener("keydown", (event) => {
  //     console.log(event);
  // console.dir(ulGallery);

  body.addEventListener("keydown", (event) => {
    console.log(5);
    console.log(event.target.dataset);
    // arrGallery.forEach(el => {
    // if (){}
    // }
    // )
  });
});

lightboxButton.addEventListener("click", () => {
  lightbox.classList.remove("is-open");
  lightboxImage.src = "";
});
lightbox.addEventListener("click", () => {
  lightbox.classList.remove("is-open");
  lightboxImage.src = "";
});

window.addEventListener("keydown", (event) => {
  console.log(event);
  if (event.code === "Escape") {
    lightbox.classList.remove("is-open");
    lightboxImage.src = "";
  }
});
