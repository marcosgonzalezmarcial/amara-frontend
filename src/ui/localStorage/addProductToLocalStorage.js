/* global localStorage */
export const addProductToLocalStorage = (product) => {
  let products = JSON.parse(localStorage.getItem('products')) || []

  const uniqueProduct = products.find((el) => el.id === product.id)
  if (uniqueProduct) {
    uniqueProduct.qty += 1
  } else {
    product = { ...product, qty: 1 }
    products = [...products, product]
  }

  localStorage.setItem('products', JSON.stringify(products))
}
