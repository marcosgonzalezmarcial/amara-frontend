import { paintProductsLocalStorage } from '../../ui/ui-utils/paintProductsLocalStorage'

/* global localStorage */
export const paintShoppingBag = () => {
  const productsFromLocalStorage =
  JSON.parse(localStorage.getItem('products')) || []

  const getTotalSumFromLocalStorage =
  JSON.parse(localStorage.getItem('totalSum')) || 0

  let renderShoppingBag = ''

  if (productsFromLocalStorage.length === 0) {
    renderShoppingBag = /* html */`
    <div class="shopping-bag-header">
      <div class="bag-title">
        Bolsa <span>(${productsFromLocalStorage.length})</span>
      </div>
      <button class="bag-close-btn" aria-label="Close Menu">
        <ion-icon
          name="close-outline"
          role="img"
          class="md hydrated"
          aria-label="close outline"
        ></ion-icon>
      </button>
    </div>
    <div class="shopping-bag-body"></div>
    <div class="shopping-bag-footer">
      <div class="shopping-bag-footer-item">
        <div class="shopping-bag-subtotal-text">Subtotal:</div>
        <div class="shopping-bag-subtotal">
          ${getTotalSumFromLocalStorage.toFixed(2)}€
        </div>
      </div>
      <div class="shopping-bag-footer-item">
        <div class="shopping-bag-delivery-text">Envío:</div>
        <div class="shopping-bag-delivery-cost">Gratis</div>
      </div>
      <button class="shopping-bag-checkout-btn">Comenzar pedido</button>
    </div>
    `
  }
  if (productsFromLocalStorage.length > 0) {
    let totalItems = 0

    productsFromLocalStorage.forEach((product) => {
      totalItems += product.qty
    })

    renderShoppingBag = /* html */`
    <div class="shopping-bag-header">
      <div class="bag-title">
        Bolsa <span>(${totalItems})</span>
      </div>
      <button class="bag-close-btn" aria-label="Close Menu">
        <ion-icon
          name="close-outline"
          role="img"
          class="md hydrated"
          aria-label="close outline"
        ></ion-icon>
      </button>
    </div>

    <div class="shopping-bag-body">${paintProductsLocalStorage()}</div>

    <div class="shopping-bag-footer">
      <div class="shopping-bag-footer-item">
        <div class="shopping-bag-subtotal-text">Subtotal:</div>
        <div class="shopping-bag-subtotal">
          ${getTotalSumFromLocalStorage.toFixed(2)}€
        </div>
      </div>
      <div class="shopping-bag-footer-item">
        <div class="shopping-bag-delivery-text">Envío:</div>
        <div class="shopping-bag-delivery-cost">Gratis</div>
      </div>
      <button class="shopping-bag-checkout-btn">Comenzar pedido</button>
    </div>
    `
  }

  return renderShoppingBag
}
