"use strict";
let modal = document.querySelector(".modal");
let overlay = document.querySelector(".overlay");
let close_modal = document.querySelector(".close-modal");
let show_modal = document.querySelectorAll(".show-modal");
console.log(show_modal);
for (let i = 0; i < show_modal.length; i++) {
  console.log(
    show_modal[i].addEventListener("click", function () {
      console.log(document.querySelector(".show_model").textContent);
    })
  );
}
