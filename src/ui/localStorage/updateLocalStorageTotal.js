/* global localStorage */

export const updateLocalStorageTotal = (product) => {
  const bagSubtotal = document.querySelector('.shopping-bag-subtotal')
  // if no totalSum item found on localStorage the totalSum is the product price
  if (!JSON.parse(localStorage.getItem('totalSum'))) {
    localStorage.setItem('totalSum', product.price.toFixed(2))
  } else {
    const newTotal =
      JSON.parse(localStorage.getItem('totalSum')) + product.price
    localStorage.setItem('totalSum', newTotal.toFixed(2))
  }

  bagSubtotal.textContent = `€${localStorage.getItem('totalSum')}`

  // console.log(bagSubtotal)
}
