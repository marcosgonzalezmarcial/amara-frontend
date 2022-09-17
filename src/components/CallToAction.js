export const CallToAction = () => {
  const CallToAction = document.createElement('section')
  CallToAction.classList.add('section')
  CallToAction.classList.add('call-to-action')

  CallToAction.innerHTML = /*html*/ `
  <div class="call-to-action__container">
    <div class="call-to-action__content">
      <h2 class="call-to-action__title">
        Hasta un <span>50% de descuento</span> para vestir el verano
      </h2>
      <button class="call-to-action__btn">
        Colección verano
      </button>
    </div>
  </div>
  `
  return CallToAction
}
