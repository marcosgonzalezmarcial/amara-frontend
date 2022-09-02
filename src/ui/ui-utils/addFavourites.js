export const addFavourites = () => {
  const productList = document.querySelector('.product-list')

  productList.addEventListener('click', (e) => {
    e.stopPropagation()
    if (
      e.target.tagName === 'DIV' &&
      e.target.classList.contains('heart-icon-wrapper')
    ) {
      e.target.children[0].classList.toggle('heart-icon-hide')
      e.target.children[1].classList.toggle('heart-icon-filled-show')
    }
  })
}
