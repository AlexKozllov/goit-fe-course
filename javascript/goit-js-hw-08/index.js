"use strict";

import gallery from "./gallery-items.js";

const ulGallery = document.querySelector(".js-gallery");
const lightboxImage = document.querySelector(".lightbox__image");
const lightboxButton = document.querySelector(".lightbox__button");
const lightbox = document.querySelector(".lightbox");

gallery.forEach((object) => {
  const img = document.createElement("img");
  img.classList.add("gallery__image");
  img.setAttribute("src", object.preview);
  img.setAttribute("data-sourse", object.original);
  img.setAttribute("alt", object.description);
  const link = document.createElement("a");
  link.classList.add("gallery__link");
  link.append(img);
  const item = document.createElement("li");
  item.classList.add("gallery__item");
  item.append(link);
  ulGallery.append(item);
});

function NewGallery(object) {}

ulGallery.addEventListener("click", (event) => {
  const newSrc = event.target.dataset.sourse;

  lightbox.classList.add("is-open");
  lightboxImage.src = newSrc;
  //   window.addEventListener("keydown", (event) => {
  //     console.log(event);
  console.dir(ulGallery);

  //     if (event.code === "ArrowRight") {
  //       ulGallery.childNodes[1];
  //       // console.log(ulGallery.childNodes[i]);
  //     }
  //   });
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
