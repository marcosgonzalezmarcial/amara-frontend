import { triangleBorder } from "./components/triangleBorder";

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const header = document.querySelector("[data-header]");
const actionsButtons = [
  ...document.querySelectorAll("button.header-action-btn")
];

const shoppingBagEl = document.querySelector(".shopping-bag-container");
const root = document.querySelector(":root");
const headerActionsBottom = document.querySelector(".header-actions");

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

document.addEventListener("DOMContentLoaded", setHeaderHeight);
window.addEventListener("resize", setHeaderHeight);

function setHeaderHeight() {
  root.style.setProperty(
    "--triangle-border-top",
    `${header.offsetHeight - 5}px`
  );
  root.style.setProperty("--header-top", `${header.offsetHeight}px`);
}

// i'd do this with media queries

if (window.innerWidth > 579) {
  root.style.setProperty("--header-top", "60px");
  root.style.setProperty("--triangle-border-top", "55px");
}
if (window.innerWidth > 991) {
  root.style.setProperty("--header-top", "62px");
  root.style.setProperty("--triangle-border-top", "58px");
}
if (window.innerWidth > 1199) {
  root.style.setProperty("--header-top", "72px");
  root.style.setProperty("--triangle-border-top", "68px");
}

function setHeaderActionsBottomHeight() {
  root.style.setProperty(
    "--navbar-bottom-height",
    `${headerActionsBottom.offsetHeight}px`
  );
}

document.addEventListener("DOMContentLoaded", setHeaderActionsBottomHeight);
window.addEventListener("resize", setHeaderActionsBottomHeight);

if (window.innerWidth > 767) {
  root.style.setProperty("--navbar-bottom-height", "67px");
}
