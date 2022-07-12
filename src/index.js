import { App } from "./App";
import { TriangleBorder } from "./components/TriangleBorder";

document.querySelector("body").appendChild(App());

/* DOM Elements variables */
const navElemArr = document.querySelectorAll(".navbar-slide");
const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-navbar-overlay]");
const header = document.querySelector("header");
const actionsButtons = [
  ...document.querySelectorAll("button.header-action-btn")
];

const shoppingBagEl = document.querySelector(".shopping-bag-container");
const root = document.querySelector(":root");
const headerActionsBottom = document.querySelector(".header-actions");

// Inserting triangle border to the Header once the App is mounted
header.appendChild(TriangleBorder());

/**
 * shopping-bag toggle
 */

actionsButtons.forEach((btn) => {
  btn.addEventListener("click", function () {
    // removing active class from all the buttons except the clicked one
    actionsButtons.forEach(
      (btn) => this !== btn && btn.classList.remove("active")
    );
    this.classList.toggle("active");
  });

  btn.children[1].innerText === "Carrito"
    ? btn.addEventListener("click", toggleBag)
    : btn.addEventListener("click", hideBag);
});

// showing shopping-bag with triangle-border when the shopping-bag btn is clicked
function toggleBag() {
  document.querySelector(".arrow").classList.toggle("arrow-up");
  shoppingBagEl.classList.toggle("show-bag");
  // avoid page scrolling on the back when the bag is open
  document.body.classList.toggle("stop-scroll");
}

function hideBag() {
  document.querySelector(".arrow").classList.remove("arrow-up");
  shoppingBagEl.classList.remove("show-bag");

  // avoid page scrolling on the back when the bag is open
  document.body.classList.remove("stop-scroll");
}

/**
 * side-navbar menu toggle
 */

navElemArr.forEach((el) => {
  el.addEventListener("click", () => {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("stop-scroll");
  });
});

window.addEventListener("resize", setHeaderCustomProps);

function setHeaderCustomProps() {
  root.style.setProperty(
    "--triangle-border-top",
    `${header.offsetHeight - 4}px`
  );

  // root.style.setProperty("--header-top", `${header.offsetHeight}px`);

  if (window.innerWidth > 991) {
    root.style.setProperty("--header-top", `61px`);
  } else {
    root.style.setProperty("--header-top", `50px`);
  }
}

// setting variables for header components relative to window innerWidth size on first load - >i'd do this with media queries
// document.addEventListener(
//   "DOMContentLoaded",
//   setIntialHeaderComponentCustomProps
// );

// function setIntialHeaderComponentCustomProps() {
if (/*window.innerWidth > 579 && */ window.innerWidth < 992) {
  root.style.setProperty("--header-top", "50px");
  root.style.setProperty("--triangle-border-top", "55px");
}
if (window.innerWidth > 991 && window.innerWidth < 1200) {
  root.style.setProperty("--header-top", "61px");
  root.style.setProperty("--triangle-border-top", "57px");
}
if (window.innerWidth > 1199) {
  root.style.setProperty("--header-top", "61px");
  root.style.setProperty("--triangle-border-top", "56px");
}
// }

// document.addEventListener("DOMContentLoaded", setHeaderActionsBottomHeight);
window.addEventListener("resize", setHeaderActionsBottomHeight);

function setHeaderActionsBottomHeight() {
  // if (window.innerWidth <= 768) {
  //   root.style.setProperty("--navbar-bottom-height", `64px`);
  // }
  // if (window.innerWidth > 768) {
  //   root.style.setProperty("--navbar-bottom-height", `66px`);
  // }
  root.style.setProperty(
    "--header-actions-height",
    `${headerActionsBottom.offsetHeight}px`
  );
}
if (window.innerWidth <= 768) {
  root.style.setProperty("--header-actions-height", `64px`);
}
if (window.innerWidth > 768) {
  root.style.setProperty("--header-actions-height", `66px`);
}

//
const heartIconWrappers = [...document.querySelectorAll(".heart-icon-wrapper")];

heartIconWrappers.forEach((el) => {
  el.addEventListener("click", (e) => {
    if (e.target.children[0].classList.contains("heart-icon")) {
      e.target.children[0].classList.toggle("heart-icon-hide");
      e.target.children[1].classList.toggle("heart-icon-filled-show");
    }
  });
});
