export const Newsletter = () => {
  const newsletter = document.createElement('section')
  newsletter.classList.add('section')
  newsletter.classList.add('newsletter')

  newsletter.innerHTML = /*html*/ `
    <div class="newsletter-card">
      <h2 class="newsletter-card__title">Suscríbete al Newsletter</h2>
      <p class="newsletter-card__text">
        Ingresa tu email para ser el primero en concer nuestras nuevas
        colecciones y productos.
      </p>

      <form action="" class="newsletter-card__form">
        <div class="newsletter-card__input-wrapper">
          <ion-icon name="mail-outline"></ion-icon>
          <input
            type="email"
            name="emal"
            placeholder="Ingresa tu email"
            required
            class="newsletter-card__input-field"
          />
        </div>
        <button type="submit" class="newsletter-card__btn">
          <span>Suscríbete</span>
          <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
        </button>
      </form>
    </div>
`
  return newsletter
}
