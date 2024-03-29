import { showBag } from '../../..'
import { fetchProductById } from '../../api/fetchProductById'
import { addProductToLocalStorage } from '../localStorage/addProductToLocalStorage'
import { updateLocalStorageTotal } from '../localStorage/updateLocalStorageTotal'
import { deleteItem } from './deleteItem'
import { updateBagTotal } from './updateBagTotal'

export const addProductToCart = async (id) => {
  const product = await fetchProductById(id)

  addProductToLocalStorage(product)
  updateLocalStorageTotal(product)

  // getting the qty from the last product to render the correct amount in the bag item
  const productsFromLocalStorage = JSON.parse(window.localStorage.getItem('products'))

  const shoppingBagBody = document.querySelector('.shopping-bag-body')

  let shoppingBagProduct = ''

  productsFromLocalStorage.forEach((product) => {
    shoppingBagProduct += /* html */ `
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
  `
  })

  // adding painted item to the bag
  shoppingBagBody.innerHTML = shoppingBagProduct

  // updating the number of items in the bag title
  updateBagTotal()
  // show the bag when a products is added
  showBag()

  // adding deletion functionality to delete btns in each item
  const deleteBtns = document.querySelectorAll(
    '.item-description-bottom-text-right'
  )
  deleteBtns.forEach((btn) => {
    btn.addEventListener('click', (event) => {
      deleteItem(event.target.dataset.id)
    })
  })
}
