export const addFavourites = () => {
  const productList = document.querySelector('.products__list')
  if (!productList) return

  productList.addEventListener('click', (e) => {
    e.stopPropagation()
    if (
      e.target.tagName === 'DIV' &&
        e.target.classList.contains('product-card__heart-icon-wrapper')
    ) {
      e.target.children[0].classList.toggle('product-card__heart-icon-hide')
      e.target.children[1].classList.toggle(
        'product-card__heart-icon-filled-show'
      )
    }
  })
}
