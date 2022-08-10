import { paintShoppingBag } from './paintShoppingBag'

export const ShoppingBag = () => {
  const ShoppingBag = document.createElement('div')
  ShoppingBag.classList.add('shopping-bag-container')

  ShoppingBag.innerHTML = /* html */`
    <div class="shopping-bag">
      ${paintShoppingBag()}
    <div>
    `
  return ShoppingBag
}

// <p>No tienes productos en la cesta de compra</p>
