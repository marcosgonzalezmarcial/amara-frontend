export const Newsletter = () => {
  const newsletter = document.createElement('section')
  newsletter.classList.add('section')
  newsletter.classList.add('newsletter')

  newsletter.innerHTML = /*html*/ `
    <div class="container">
      <div class="newsletter-card"
       
        <h2 class="card-title">Suscríbete al Newsletter</h2>

        <p class="card-text">
          Ingresa tu email para ser el primero en concer nuestras nuevas
          colecciones y productos.
        </p>

        <form action="" class="card-form">
          <div class="input-wrapper">
            <ion-icon name="mail-outline"></ion-icon>

            <input
              type="email"
              name="emal"
              placeholder="Ingresa tu email"
              required
              class="input-field"
            />
          </div>

          <button type="submit" class="btn btn-primary">
            <span>Suscríbete</span>
            <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
          </button>
        </form>
      </div>
  </div>
`
  return newsletter
}
