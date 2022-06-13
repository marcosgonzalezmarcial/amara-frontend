import { triangleBorder } from "../src/components/triangleBorder";

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const header = document.querySelector("[data-header]");
const cartBtnEl = document.querySelector(
  "button.header-action-btn ion-icon[name='cart-outline']"
).parentElement;

const shoppingBagEl = document.querySelector(".shopping-bag-container");

header.appendChild(triangleBorder());

const triangleBorderEl = document.querySelector(".arrow");

// showing shopping-bag with triangle-border when the shopping-bag is clicked

cartBtnEl.addEventListener("click", () => {
  triangleBorderEl.classList.toggle("arrow-up");
  shoppingBagEl.classList.toggle("show-bag");

  // stopping the undesired scrolling effect at the back the shopping-bag
  setTimeout(() => {
    document.body.classList.toggle("stop-scroll");
  }, 300);
});

/**
 * navbar toggle
 */
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

// window.addEventListener("scroll", function () {
//   if (window.scrollY >= 90) {
//     header.classList.add("active");
//     // headerActions.classList.add("active");
//   } else {
//     header.classList.remove("active");
//     // headerActions.classList.remove("active");
//   }
// });

// function bagResize() {
//   if (window.innerWidth < 992) {
//     console.log(window.innerWidth);
//     shoppingBagEl.style.animation = null;
//     document.querySelector(".show-bag").style.animation = null;
//   }
// }

// window.addEventListener("DOMContentLoaded", alert("Hola Mundo"));
