/* global localStorage */

export const addProductToLocalStorage = (product) => {
  let products = JSON.parse(localStorage.getItem('products')) || []

  products = [...products, product]

  localStorage.setItem('products', JSON.stringify(products))
}
