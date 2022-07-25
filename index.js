import { App } from "./src/App";

document.querySelector("body").appendChild(App());

/* DOM Elements variables */
const actionsButtons = [
  ...document.querySelectorAll("button.header-action-btn")
];
const shoppingBagEl = document.querySelector(".shopping-bag-container");

/*****************************************
 ******** shopping-bag toggle ************/

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

console.log(document.querySelector(".arrow"));

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
/**** end of shopping-bag toggle ****/
