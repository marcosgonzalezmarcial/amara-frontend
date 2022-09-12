import { hideBag, toggleBag } from '../../..'

export default function (shopBagBtn, headerActions, actionsButtons) {
  shopBagBtn.addEventListener('click', toggleBag)

  headerActions.addEventListener('click', function (e) {
    e.stopPropagation()
    if (e.target.tagName === 'BUTTON') {
      actionsButtons.forEach(
        (btn) => {
          e.target !== btn && btn.classList.remove('active')
          e.target.children[1].innerText === 'Carrito'
            ? toggleBag()
            : hideBag()
        }
      )
      e.target.classList.toggle('active')
    }
  })
}
