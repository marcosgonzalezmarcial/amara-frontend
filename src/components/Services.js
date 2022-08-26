export const Services = () => {
  const services = document.createElement("section")
  services.classList.add("section")
  services.classList.add("service")

  services.innerHTML = /* html */ `
    <div class="container">
      <ul class="service-list">
        <li class="service-item">
          <div class="service-item-icon">
            <img
              src="https://res.cloudinary.com/dn9mr6kwc/image/upload/v1661334313/Amara-ecommerce/services-icons/bike-delivery-icon_swqj89_vueqgr.svg"
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
              src="https://res.cloudinary.com/dn9mr6kwc/image/upload/v1661266924/Amara-ecommerce/services-icons/return-box-icon_zzgqmr.svg"
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
              src="https://res.cloudinary.com/dn9mr6kwc/image/upload/v1661267449/Amara-ecommerce/services-icons/payment-icon_x0p6nh.svg"
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
              src="https://res.cloudinary.com/dn9mr6kwc/image/upload/v1661267623/Amara-ecommerce/services-icons/headphone-icon_phnbrr.svg"
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
`
  return services
}
