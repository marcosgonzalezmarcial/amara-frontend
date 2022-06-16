import { triangleBorder } from "./components/triangleBorder";

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const header = document.querySelector("[data-header]");
// const cartBtnEl = document.querySelector(
//   "button.header-action-btn ion-icon[name='cart-outline']"
// ).parentElement;
const actionsButtons = [
  ...document.querySelectorAll("button.header-action-btn"),
];

const shoppingBagEl = document.querySelector(".shopping-bag-container");

// Inserting triangle border to the Header
header.appendChild(triangleBorder());

const triangleBorderEl = document.querySelector(".arrow");

/**
 * shopping-bag toggle
 */

actionsButtons.forEach((btn) => {
  btn.addEventListener("click", function () {
    // removing active class (same styles than hover) from all the buttons except the clicked one
    actionsButtons.forEach(
      (btn) => this !== btn && btn.classList.remove("active")
    );
    this.classList.toggle("active");
  });

  btn.children[1].innerText === "Carrito"
    ? btn.addEventListener("click", toggleBag)
    : btn.addEventListener("click", hideBag);
});

// showing shopping-bag with triangle-border when the shopping-bag is clicked
function toggleBag() {
  triangleBorderEl.classList.toggle("arrow-up");
  shoppingBagEl.classList.toggle("show-bag");

  // avoid page scrolling on the back when the bag is open
  setTimeout(() => {
    document.body.classList.toggle("stop-scroll");
  }, 300);
}

function hideBag() {
  triangleBorderEl.classList.remove("arrow-up");
  shoppingBagEl.classList.remove("show-bag");
  // avoid page scrolling on the back when the bag is open
  setTimeout(() => {
    document.body.classList.remove("stop-scroll");
  }, 300);
}

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
