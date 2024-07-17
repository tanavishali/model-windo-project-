"use strict";
let modal = document.querySelector(".modal");
let overlay = document.querySelector(".overlay");
let close_modal = document.querySelector(".close-modal");
let show_modal = document.querySelectorAll(".show-modal");
// console.log(show_modal, typeof show_modal, show_modal.length);
let openmodel = function () {
  // console.log("button click");
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
let close_modalfunc = function () {
  modal.classList.add("hidden");

  overlay.classList.add("hidden");
};

for (let i = 0; i < show_modal.length; i++)
  show_modal[i].addEventListener("click", openmodel);

close_modal.addEventListener("click", close_modalfunc);

overlay.addEventListener("click", close_modalfunc);

document.addEventListener("keydown", function (e) {
  console.log(e.key);
  if (e.key === "Escape") {
    if (!modal.classList.contains("hidden")) {
      close_modalfunc();
    }
  }
});
