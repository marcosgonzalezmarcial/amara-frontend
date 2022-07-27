export const ShoppingBag = () => {
  const ShoppingBag = document.createElement("div");
  ShoppingBag.classList.add("shopping-bag-container");

  const productsFromLocalStorage =
    JSON.parse(localStorage.getItem("products")) || [];

  const shoppingBagTotalFromLocalStorage =
    JSON.parse(localStorage.getItem("totalSum")) || 0;

  let shoppingBagProductsFromLocalStorage = "";

  productsFromLocalStorage.map((product) => {
    shoppingBagProductsFromLocalStorage += `
      <div class="shopping-bag-content-container">
        <div class="shopping-bag-content-container-img-container">
          <img
            src=${product.imgUrl}
            alt="product 1"
          />
        </div>
        <div
          class="shopping-bag-content-container-item-description-container"
        >
          <div class="item-description-top">
            <div class="item-description-top-right">
              <p>${product.name}</p>
              <p>Cant: 1</p>
              <p>Talla: M</p>
              <p>Negro</p>
            </div>
            <div class="item-description-top-left">
              <p>&euro;${product.price}</p>
            </div>
          </div>
          <div class="item-description-bottom">
            <p>eliminar</p>
          </div>
        </div>
      </div>
    `;
  });

  let renderShoppingBag = "";

  if (productsFromLocalStorage.length > 0) {
    renderShoppingBag = `
    <div class="bag-title">Bolsa (${productsFromLocalStorage.length})</div>
    <div class="shopping-bag-content">
    ${shoppingBagProductsFromLocalStorage}
          </div>
          <div class="shopping-bag-footer">
            <div class="shopping-bag-footer-item">
              <div class="shopping-bag-subtotal-text">Subtotal:</div>
              <div class="shopping-bag-subtotal">${shoppingBagTotalFromLocalStorage}€</div>
            </div>
            <div class="shopping-bag-footer-item">
              <div class="shopping-bag-delivery-text">Envío:</div>
              <div class="shopping-bag-delivery-cost">Gratis</div>
            </div>
            <button class="shopping-bag-checkout-btn">Comenzar pedido</button>
            </div>
            `;
  } else {
    debugger;
    renderShoppingBag = `
            <div class="bag-title">Bolsa (${productsFromLocalStorage.length})</div>
            <div class="shopping-bag-content">
            </div>
            <div class="shopping-bag-footer">
            <div class="shopping-bag-footer-item">
            <div class="shopping-bag-subtotal-text">Subtotal:</div>
            <div class="shopping-bag-subtotal">${shoppingBagTotalFromLocalStorage}€</div>
            </div>
            <div class="shopping-bag-footer-item">
            <div class="shopping-bag-delivery-text">Envío:</div>
            <div class="shopping-bag-delivery-cost">Gratis</div>
            </div>
            <button class="shopping-bag-checkout-btn">Comenzar pedido</button>
            </div>
            `;
  }

  ShoppingBag.innerHTML = `
    <div class="shopping-bag">
      ${renderShoppingBag}
    <div>
    `;

  return ShoppingBag;
};

// <p>No tienes productos en la cesta de compra</p>
