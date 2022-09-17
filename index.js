import { App } from './src/App'
import { addFavourites } from './src/ui/ui-utils/addFavourites'
import addHeaderBorderOnScroll from './src/ui/ui-utils/addHeaderBorderOnScroll'
import { deleteItem } from './src/ui/ui-utils/deleteItem'
import launchLoader from './src/ui/ui-utils/launchLoader'
import showBagActionBtn from './src/ui/ui-utils/showBagActionBtn'
import showProductsByCategory from './src/ui/ui-utils/showProductsByCategory'

if (!document.getElementById('root').innerHTML) {
  document.querySelector('body').appendChild(App())
}

/* DOM Elements variables */
const actionsButtons = [
  ...document.querySelectorAll('button.header-action__btn')
]
const headerActions = document.querySelector('.header-actions')
const $productsFilter = document.querySelector('.products__filter')
const $productsFilterBtns = [
  ...document.querySelectorAll('.products__filter-btn')
]
const shoppingBagEl = document.querySelector('.shopping-bag-container')
const shopBagBtn = document.querySelector('[data-bag-btn]')
const shopBagCloseBtn = document.querySelector('.bag-close-btn')

/* -----------------------------------*\
  * shopping-bag display logic
\*----------------------------------- */

showBagActionBtn(shopBagBtn, headerActions, actionsButtons)

export function toggleBag () {
  document.querySelector('.arrow').classList.toggle('arrow-up')
  shoppingBagEl.classList.toggle('show-bag')
  // avoid page scrolling on the back when the bag is open
  document.body.classList.toggle('scroll-control')
  // document.documentElement.classList.toggle('scroll-control')
}

export function showBag () {
  if (shoppingBagEl.classList.contains('show-bag')) return
  document.querySelector('.arrow').classList.toggle('arrow-up')
  shoppingBagEl.classList.toggle('show-bag')
  // avoid page scrolling on the back when the bag is open
  document.body.classList.toggle('scroll-control')

  // removing active on all the action buttons
  actionsButtons.forEach(
    (btn) => { btn.classList.remove('active') }
  )
  shopBagBtn.classList.toggle('active')
}

export function hideBag () {
  document.querySelector('.arrow').classList.remove('arrow-up')
  shoppingBagEl.classList.remove('show-bag')

  // avoid page scrolling on the back when the bag is open
  document.body.classList.remove('scroll-control')
  // document.documentElement.classList.toggle('scroll-control')
}

/* -----------------------------------*\
  * fetching products by category in Products section
  - TODO -> this should be in the products file
\*----------------------------------- */

showProductsByCategory($productsFilter, $productsFilterBtns)

/* -----------------------------------*\
  * closing bag logic
\*----------------------------------- */

shopBagCloseBtn.addEventListener('click', () => {
  hideBag()
  shopBagBtn.classList.toggle('active')
})

/* -----------------------------------*\
  * adding delete logic to bag items on first load
\*----------------------------------- */

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

// dynamically adding border to the header when hero section is not intersecting the viewport
addHeaderBorderOnScroll()

// add product to favorites logic, this could be in another file...
addFavourites()
