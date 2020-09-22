"use strict";

import gallery from "./gallery-items.js";

const ulGallery = document.querySelector(".js-gallery");
const lightboxImage = document.querySelector(".lightbox__image");
const lightboxButton = document.querySelector(".lightbox__button");
const lightbox = document.querySelector(".lightbox");
const lightboxContent = document.querySelector("lightbox__overlay");

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

const galleryClick = (event) => {
  let newIndex = event.target.dataset.index;
  // let newIndex = event.target.attributes[4].value;
  // let newIndex = 1;
  lightboxImage.src = gallery[newIndex - 1].original;

  lightbox.classList.add("is-open");

  // const newSrc = event.target.dataset.indexNumber;
  function hendleIndex(ev) {
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
    console.log(newIndex);
    lightboxImage.src = gallery[newIndex - 1].original;
  }
  window.addEventListener("keydown", hendleIndex);
  window.addEventListener("keydown", escape);
  // window.removeEventListener("keydown", hendleIndex);
};
ulGallery.addEventListener("click", galleryClick);

lightboxButton.addEventListener("click", () => {
  lightbox.classList.remove("is-open");
  lightboxImage.src = "";
  // window.removeEventListener("keydown", hendleIndex);
});
lightbox.addEventListener("click", () => {
  lightbox.classList.remove("is-open");
  lightboxImage.src = "";
  // window.removeEventListener("keydown", hendleIndex);
});

const escape = (event) => {
  console.log(event);
  if (event.code === "Escape") {
    // window.removeEventListener("keydown", hendleIndex);

    lightbox.classList.remove("is-open");
    lightboxImage.src = "";
    window.removeEventListener("keydown", escape);
  }
};
