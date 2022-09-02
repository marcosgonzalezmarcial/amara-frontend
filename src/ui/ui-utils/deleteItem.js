/* global localStorage */

import { updateBagTotal } from './updateBagTotal'

// import updateLocalStorageTotal from '../localStorage/updateLocalStorageTotal'
export const deleteItem = (id) => {
  const productsFromLocalStorage =
    JSON.parse(localStorage.getItem('products')) || []
  const product = productsFromLocalStorage.filter((item) => item.id === id)[0]

  const shoppingBagBody = document.querySelector('.shopping-bag-body')

  const productsArrFiltered = productsFromLocalStorage.filter(
    (item) => item.id !== id
  )

  localStorage.setItem('products', JSON.stringify(productsArrFiltered))

  const currentTotal = JSON.parse(localStorage.getItem('totalSum')) || 0

  const newTotal = currentTotal - product.price * product.qty
  localStorage.setItem('totalSum', newTotal.toFixed(2))

  let renderProducts = ''

  productsArrFiltered.map(
    (product) =>
      (renderProducts += /* html */ `
      <div class="shopping-bag-item">
        <figure class="shopping-bag-item-banner">
          <img src="${product.imgUrl}" alt="product 1" />
        </figure>
        <div class="shopping-bag-item-description">
          <div class="item-description-top">
            <div class="item-description-top-right">
              <p>${product.name}</p>
              <p>Cant: ${product.qty}</p>
              <p>Talla: M</p>
              <p>Negro</p>
            </div>
            <div class="item-description-top-left">
              <p>&euro;${product.price}</p>
            </div>
          </div>
          <div class="item-description-bottom">
          <button data-id=${product.id} class="item-description-bottom-text-left">Añadir a favoritos
            </button>         
            <button data-id=${product.id} class="item-description-bottom-text-right">Eliminar
            </button> 
          </div>
        </div>
      </div>  
    `)
  )

  // adding painted item to the bag
  shoppingBagBody.innerHTML = renderProducts

  const bagSubtotal = document.querySelector('.shopping-bag-subtotal')
  bagSubtotal.textContent = `€${localStorage.getItem('totalSum')}`

  updateBagTotal()

  const deleteBtns = document.querySelectorAll(
    '.item-description-bottom-text-right'
  )
  deleteBtns.forEach((btn) => {
    btn.addEventListener('click', (event) => {
      deleteItem(event.target.dataset.id)
    })
  })
}
