/* global localStorage */
import { showBag } from '../../..'
import { fetchProductById } from '../../api/fetchProductById'
import { addProductToLocalStorage } from '../localStorage/addProductToLocalStorage'
import { updateLocalStorageTotal } from '../localStorage/updateLocalStorageTotal'

export const addProductToCart = async (id) => {
  const product = await fetchProductById(id)

  const shoppingBagContent = document.querySelector('.shopping-bag-content')

  const shoppingBagProduct = /* html */`
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
    `

  const totalItems = JSON.parse(localStorage.getItem('products')) || []

  addProductToLocalStorage(product)
  updateLocalStorageTotal(product)
  showBag()

  function updateShoppingBag () {
    const bagTitle = document.querySelector('.bag-title')
    const bagSubtotal = document.querySelector('.shopping-bag-subtotal')
    bagTitle.innerHTML = `Bolsa <span>(${totalItems.length + 1})</span>`

    const newTotal = JSON.parse(localStorage.getItem('totalSum'))

    bagSubtotal.textContent = `€${newTotal.toFixed(2)}`
  }

  updateShoppingBag()
  shoppingBagContent.innerHTML += shoppingBagProduct
}
