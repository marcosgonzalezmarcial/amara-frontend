export const Services = () => {
  const services = document.createElement('section')
  services.classList.add('section')
  services.classList.add('service')

  services.innerHTML = /* html */ `
    <div class="container-fluid">
      <ul class="service__list">
        <li class="service__item">
          <div class="service__icon">
            <img
              src="https://res.cloudinary.com/dn9mr6kwc/image/upload/v1661334313/Amara-ecommerce/services-icons/bike-delivery-icon_swqj89_vueqgr.svg"
              alt="Service icon"
            />
          </div>

          <div>
            <p class="service__title">Envío gratuito</p>
            <p class="service__subtitle">Pedidos mayores a 100€</p>
          </div>
        </li>

        <li class="service__item">
          <div class="service__icon">
            <img
              src="https://res.cloudinary.com/dn9mr6kwc/image/upload/v1661266924/Amara-ecommerce/services-icons/return-box-icon_zzgqmr.svg"
              alt="Service icon"
            />
          </div>

          <div>
            <p class="service__title">Devolución simple</p>
            <p class="service__subtitle">Hasta 30 días después</p>
          </div>
        </li>

        <li class="service__item">
          <div class="service__icon">
            <img
              src="https://res.cloudinary.com/dn9mr6kwc/image/upload/v1661267449/Amara-ecommerce/services-icons/payment-icon_x0p6nh.svg"
              alt="ícono servicio de pago"
            />
          </div>

          <div>
            <p class="service__title">Pago seguro</p>
            <p class="service__subtitle">Pago 100% garantizado</p>
          </div>
        </li>

        <li class="service__item">
          <div class="service__icon">
            <img
              src="https://res.cloudinary.com/dn9mr6kwc/image/upload/v1661267623/Amara-ecommerce/services-icons/headphone-icon_phnbrr.svg"
              alt="Service icon"
            />
          </div>

          <div>
            <p class="service__title">Atención al cliente</p>
            <p class="service__subtitle">24/7 soporte dedicado</p>
          </div>
        </li>
      </ul>
    </div>
`
  return services
}
