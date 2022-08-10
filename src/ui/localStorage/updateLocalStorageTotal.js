/* global localStorage */

export const updateLocalStorageTotal = (product) => {
  const total = product.price

  if (!JSON.parse(localStorage.getItem('totalSum'))) {
    localStorage.setItem('totalSum', JSON.stringify(total))
  } else {
    const newTotal =
      JSON.parse(localStorage.getItem('totalSum')) + product.price
    localStorage.setItem('totalSum', newTotal)
  }
}
