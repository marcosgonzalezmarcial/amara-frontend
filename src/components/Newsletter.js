export const Newsletter = () => {
  let newsletter = document.createElement("section");
  newsletter.classList.add("section");
  newsletter.classList.add("newsletter");

  newsletter.innerHTML = `
  <div class="container">
    <div class="newsletter-card"
        style="background-image: url('https://rawcdn.githack.com/marcosgonzalezmarcial/e-commerce-mvp/ab306b7ce30924bb2f7c0e079c28b07f562e9211/src/assets/images/newsletter-bg.png')">
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

          <button type="submit" class="btn btn-primary w-100">
            <span>Suscríbete</span>
            <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
          </button>
        </form>
      </div>
  </div>
`;
  return newsletter;
};
