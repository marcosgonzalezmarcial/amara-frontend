/* global localStorage */
export const updateBagTotal = () => {
  const bagTitle = document.querySelector(".bag-title");
  const cartBadge = document.querySelector(".header-action__btn-badge--green");
  let totalItems = 0;
  const products = JSON.parse(localStorage.getItem("products")) || [];

  products.forEach((product) => {
    totalItems += product.qty;
  });

  bagTitle.innerHTML = `Bolsa <span>(${totalItems})</span>`;
  cartBadge.textContent = totalItems;
};
