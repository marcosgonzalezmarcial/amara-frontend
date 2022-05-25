// "use strict";

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");

const navElemArr = [overlay, navOpenBtn, navCloseBtn];

for (let i = 0; i < navElemArr.length; i++) {
  navElemArr[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}

/**
 * add active class on header when scrolled 50px from top
 */

const header = document.querySelector("[data-header]");
const headerActions = document.querySelector(".header-actions");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 90) {
    header.classList.add("active");
    headerActions.classList.add("active");
  } else {
    header.classList.remove("active");
    headerActions.classList.remove("active");
  }
});
