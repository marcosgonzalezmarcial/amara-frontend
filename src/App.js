import { triangleBorder } from "../src/components/triangleBorder";

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const header = document.querySelector("[data-header]");
// const headerActions = document.querySelector(".header-actions");
const cartBtnEl = document.querySelector(
  "button.header-action-btn ion-icon[name='cart-outline']"
);
const shoppingBagEl = document.querySelector(".shopping-bag-box");

// appending triangle-border for the cart

const cartBtnPos = cartBtnEl.getBoundingClientRect().left;
header.appendChild(triangleBorder(cartBtnPos));

const triangleBorderEl = document.querySelector(".arrow");

// setting triangle border position on first load
document.documentElement.style.setProperty(
  "--triangle-border-left",
  `${cartBtnPos + 15}px`
);

// showing cart with triangle-border when the cart is clicked

cartBtnEl.parentElement.addEventListener("click", () => {
  triangleBorderEl.classList.toggle("arrow-up");
  shoppingBagEl.classList.toggle("show-bag");

  // stopping the undesired scrolling effect on the shopping-bag
  if (document.querySelector(".stop-scroll")) {
    document.querySelector("main").classList.toggle("stop-scroll");
    document.querySelector("footer").classList.toggle("stop-scroll");
  } else {
    setTimeout(() => {
      document.querySelector("main").classList.toggle("stop-scroll");
    }, 300);
    setTimeout(() => {
      document.querySelector("footer").classList.toggle("stop-scroll");
    }, 300);
  }
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

function bagResize() {
  if (window.innerWidth < 992) {
    console.log(window.innerWidth);
    shoppingBagEl.style.animation = null;
    document.querySelector(".show-bag").style.animation = null;
  }
}

window.addEventListener("DOMContentLoaded", bagResize);
