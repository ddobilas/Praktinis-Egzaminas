"use strict";

const burgerMenu = document.querySelector(".hamburgerMenu");
const navLinks = document.querySelector("nav");

burgerMenu.addEventListener("click", function () {
  navLinks.classList.toggle("hidden");
});

let tabs = document.querySelectorAll(".tabs");
let buttons = document.querySelectorAll(".buttons");

for (let i = 0; i < 3; i++) {
  buttons[i].addEventListener("click", function () {
    if (i == 0) {
      tabs[0].style.display = "flex";
      tabs[1].style.display = "none";
      tabs[2].style.display = "none";
    } else if (i == 1) {
      tabs[0].style.display = "none";
      tabs[1].style.display = "flex";
      tabs[2].style.display = "none";
    } else if (i == 2) {
      tabs[0].style.display = "none";
      tabs[1].style.display = "none";
      tabs[2].style.display = "flex";
    }
  });
}
