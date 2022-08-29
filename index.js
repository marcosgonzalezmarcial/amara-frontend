import { App } from "./src/App";
import { deleteItem } from "./src/ui/ui-utils/deleteItem";
import { paintProducts } from "./src/ui/ui-utils/paintProducts";

if (!document.getElementById("root").innerHTML) {
  document.querySelector("body").appendChild(App());
}

/* DOM Elements variables */
const actionsButtons = [
  ...document.querySelectorAll("button.header-action-btn")
];

const categoryButtons = [...document.querySelectorAll(".filter-btn")];
const shoppingBagEl = document.querySelector(".shopping-bag-container");
const shopBagBtn = document.querySelector(".shopping-bag-btn");
const shopBagCloseBtn = document.querySelector(".bag-close-btn");

/*****************************************
 ******** shopping-bag display logic ************/

actionsButtons.forEach((btn) => {
  btn.addEventListener("click", function () {
    // removing active class from all the buttons except the clicked one
    actionsButtons.forEach(
      (btn) => this !== btn && btn.classList.remove("active")
    );
    this.classList.toggle("active");
  });

  // show and hide bag when the action buttons are clikced
  btn.children[1].innerText === "Carrito"
    ? btn.addEventListener("click", toggleBag)
    : btn.addEventListener("click", hideBag);
});

export function toggleBag() {
  document.querySelector(".arrow").classList.toggle("arrow-up");
  shoppingBagEl.classList.toggle("show-bag");
  // avoid page scrolling on the back when the bag is open
  document.body.classList.toggle("scroll-control");
}

export function showBag() {
  if (shoppingBagEl.classList.contains("show-bag")) return;
  document.querySelector(".arrow").classList.toggle("arrow-up");
  shoppingBagEl.classList.toggle("show-bag");
  // avoid page scrolling on the back when the bag is open
  document.body.classList.toggle("scroll-control");
}

export function hideBag() {
  document.querySelector(".arrow").classList.remove("arrow-up");
  shoppingBagEl.classList.remove("show-bag");

  // avoid page scrolling on the back when the bag is open
  document.body.classList.remove("scroll-control");
}

/* *************** fetching products by category in Products section ****
 * TODO -> this should be in the produts file ************************* */

// paint products from api on first load category "Más vendidos"
paintProducts("Más vendidos");

categoryButtons.forEach((btn) => {
  btn.addEventListener("click", function () {
    // removing active class from all the buttons except the clicked one
    categoryButtons.forEach(
      (btn) => this !== btn && btn.classList.remove("active")
    );
    this.classList.toggle("active");
    paintProducts(btn.firstChild.data);
  });
});

/*****************************************
 ******** closing bag logic ************/
shopBagCloseBtn.addEventListener("click", () => {
  hideBag();
  shopBagBtn.classList.toggle("active");
});

/*****************************************
 ******** adding delete logic to bag items on first load************/
const deleteBtns = document.querySelectorAll(".item-description-bottom-text");
deleteBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    event.preventDefault();
    deleteItem(event.target.dataset.id);
  });
});
