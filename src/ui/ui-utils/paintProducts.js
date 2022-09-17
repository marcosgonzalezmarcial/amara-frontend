import { fetchProductsByCategory } from '../../api/fetchProductsByCategory'
import { addProductToCart } from './addProductToCart'

export const paintProducts = async (category) => {
  const productsData = await fetchProductsByCategory(category)

  const addedProducts = productsData.map((product) => {
    return /* html */ `
    <li>
      <div class="product-card">
        <figure class="product-card__banner">
          <a href="#">
            <img
              src="${product.attributes.imgUrl}"
              alt="${product.attributes.name}"
              loading="lazy"
            />
          </a>
          <div class="product-card__actions">
            <button data-id="${product.id}" class="product-card__btn">
              <p>Añadir</p>
            </button>
          </div>
        </figure>
        <div class="product-card__content">
          <div class="product-card__price">
            <data value="${product.attributes.price}">
              &euro;${product.attributes.price}
            </data>
            <data value="${product.attributes.price}">
              &euro;${product.attributes.price}
            </data>
          </div>
          <div class="product-card__title">
            <p href="#">${product.attributes.name}</p>
          </div>
          <div class="product-card__heart-icon-wrapper">
            <img
              class="product-card__heart-icon"
              src="https://img.icons8.com/material-outlined/48/000000/like--v1.png"
            />
            <img
              class="product-card__heart-icon-filled"
              src="https://img.icons8.com/material/48/000000/like--v1.png"
            />
          </div>
        </div>
      </div>
    </li>
    `
  })

  const ulProducts = document.querySelector('.products__list')
  // temporary fixing a render error
  if (ulProducts) ulProducts.innerHTML = addedProducts.join(' ')

  // adding product to cart functionality
  const addToShoppingBagButtons = [
    ...document.querySelectorAll('.product-card__btn')
  ]
  addToShoppingBagButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      addProductToCart(e.target.dataset.id)
    })
  })

  return productsData
}
