export const Services = () => {
  let services = document.createElement("section");
  services.classList.add("section");
  services.classList.add("service");

  services.innerHTML = `
          <div class="container">
            <ul class="service-list">
              <li class="service-item">
                <div class="service-item-icon">
                  <img
                    src="https://raw.githack.com/marcosgonzalezmarcial/e-commerce-mvp/new-images/src/assets/images/svg-logos/service-icon-1.svg"
                    alt="Service icon"
                  />
                </div>

                <div class="service-content">
                  <p class="service-item-title">Envío gratuito</p>

                  <p class="service-item-text">Pedidos mayores a 100€</p>
                </div>
              </li>

              <li class="service-item">
                <div class="service-item-icon">
                  <img
                    src="https://raw.githack.com/marcosgonzalezmarcial/e-commerce-mvp/new-images/src/assets/images/svg-logos/service-icon-2.svg"
                    alt="Service icon"
                  />
                </div>

                <div class="service-content">
                  <p class="service-item-title">Devolución simple</p>

                  <p class="service-item-text">Hasta 30 días después</p>
                </div>
              </li>

              <li class="service-item">
                <div class="service-item-icon">
                  <img
                    src="https://raw.githack.com/marcosgonzalezmarcial/e-commerce-mvp/new-images/src/assets/images/svg-logos/service-icon-3.svg"
                    alt="Service icon"
                  />
                </div>

                <div class="service-content">
                  <p class="service-item-title">Pago seguro</p>

                  <p class="service-item-text">Pago 100% garantizado</p>
                </div>
              </li>

              <li class="service-item">
                <div class="service-item-icon">
                  <img
                    src="https://raw.githack.com/marcosgonzalezmarcial/e-commerce-mvp/new-images/src/assets/images/svg-logos/service-icon-4.svg"
                    alt="Service icon"
                  />
                </div>

                <div class="service-content">
                  <p class="service-item-title">Atención al cliente</p>

                  <p class="service-item-text">24/7 soporte dedicado</p>
                </div>
              </li>
            </ul>
          </div>
`;
  return services;
};
