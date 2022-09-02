import { App } from './src/App'
import { deleteItem } from './src/ui/ui-utils/deleteItem'
import launchLoader from './src/ui/ui-utils/launchLoader'
import { paintProducts } from './src/ui/ui-utils/paintProducts'
import showBagActionBtn from './src/ui/ui-utils/showBagActionBtn'
import showProductsByCategory from './src/ui/ui-utils/showProductsByCategory'

if (!document.getElementById('root').innerHTML) {
  document.querySelector('body').appendChild(App())
}

/* DOM Elements variables */
const actionsButtons = [
  ...document.querySelectorAll('button.header-action-btn')
]
const headerActions = document.querySelector('.header-actions')
const filterList = document.querySelector('.filter-list')
const categoryButtons = [...document.querySelectorAll('.filter-btn')]
const shoppingBagEl = document.querySelector('.shopping-bag-container')
const shopBagBtn = document.querySelector('.shopping-bag-btn')
const shopBagCloseBtn = document.querySelector('.bag-close-btn')

/*****************************************
 ******** shopping-bag display logic ************/

showBagActionBtn(shopBagBtn, headerActions, actionsButtons)

export function toggleBag() {
  document.querySelector('.arrow').classList.toggle('arrow-up')
  shoppingBagEl.classList.toggle('show-bag')
  // avoid page scrolling on the back when the bag is open
  document.body.classList.toggle('scroll-control')
  // document.documentElement.classList.toggle('scroll-control')
}

export function showBag() {
  if (shoppingBagEl.classList.contains('show-bag')) return
  document.querySelector('.arrow').classList.toggle('arrow-up')
  shoppingBagEl.classList.toggle('show-bag')
  // avoid page scrolling on the back when the bag is open
  document.body.classList.toggle('scroll-control')
  // document.documentElement.classList.toggle('scroll-control')
  shopBagBtn.classList.toggle('active')
}

export function hideBag() {
  document.querySelector('.arrow').classList.remove('arrow-up')
  shoppingBagEl.classList.remove('show-bag')

  // avoid page scrolling on the back when the bag is open
  document.body.classList.remove('scroll-control')
  // document.documentElement.classList.toggle('scroll-control')
}

/* *************** fetching products by category in Products section ****
 * TODO -> this should be in the produts file ************************* */

// paint products from api on first load category "Más vendidos"
paintProducts('Más vendidos')

showProductsByCategory(filterList, categoryButtons)

/*****************************************
 ******** closing bag logic ************/
shopBagCloseBtn.addEventListener('click', () => {
  hideBag()
  shopBagBtn.classList.toggle('active')
})

/*****************************************
 ******** adding delete logic to bag items on first load************/
const deleteBtns = document.querySelectorAll(
  '.item-description-bottom-text-right'
)
deleteBtns.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    event.preventDefault()
    deleteItem(event.target.dataset.id)
  })
})

// start loader when page finishes loading resources
launchLoader()
