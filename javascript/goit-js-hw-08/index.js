"use strict";

import gallery from "./gallery-items.js";

const ulGallery = document.querySelector(".js-gallery");
const lightboxImage = document.querySelector(".lightbox__image");
const lightboxButton = document.querySelector(".lightbox__button");
const lightbox = document.querySelector(".lightbox");
const lightboxContent = document.querySelector("lightbox__overlay");

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
});
ulGallery.append(...arrGallery);

let newIndex;

const hendleIndex = (ev) => {
  if (ev.code === "ArrowRight") {
    newIndex++;
  }
  if (ev.code === "ArrowLeft") {
    newIndex--;
  }
  if (newIndex > ulGallery.childElementCount) {
    newIndex = 1;
  }
  if (newIndex < 1) {
    newIndex = ulGallery.childElementCount;
  }
  lightboxImage.src = gallery[newIndex - 1].original;
};

const hendleEscape = (event) => {
  if (event.code === "Escape") {
    lightbox.classList.remove("is-open");
    lightboxImage.src = "";
    window.removeEventListener("keydown", hendleEscape);
    window.removeEventListener("keydown", hendleIndex);
  }
};

const hendleGalleryClick = (event) => {
  if (event.target.nodeName !== "IMG") {
    return;
  }
  lightbox.classList.add("is-open");
  newIndex = event.target.dataset.index;
  lightboxImage.src = gallery[newIndex - 1].original;
  window.addEventListener("keydown", hendleIndex);
  window.addEventListener("keydown", hendleEscape);
};

const closeLightBox = () => {
  lightbox.classList.remove("is-open");
  lightboxImage.src = "";
  window.removeEventListener("keydown", hendleEscape);
  window.removeEventListener("keydown", hendleIndex);
};

ulGallery.addEventListener("click", hendleGalleryClick);

lightboxButton.addEventListener("click", closeLightBox);

lightbox.addEventListener("click", closeLightBox);
