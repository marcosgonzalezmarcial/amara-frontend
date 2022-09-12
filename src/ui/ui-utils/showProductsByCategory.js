import { paintProducts } from './paintProducts'
export default function ($productsFilter, categoryButtons) {
  $productsFilter.addEventListener('click', function (e) {
    e.stopPropagation()
    if (e.target.tagName === 'BUTTON') {
      // removing active class from all the buttons except the clicked one
      categoryButtons.forEach(
        (btn) => e.target !== btn && btn.classList.remove('active')
      )
      e.target.classList.toggle('active')
      paintProducts(e.target.firstChild.data)
    }
  })
}
