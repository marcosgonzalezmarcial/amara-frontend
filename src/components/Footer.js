export const Footer = () => {
  const footer = document.createElement('footer')
  footer.classList.add('footer')

  footer.innerHTML = /* html */ `
    <div class="footer__top">
        <div class="footer__brand">
          <a href="#" class="footer__logo">
            <img
              src="https://res.cloudinary.com/dn9mr6kwc/image/upload/c_scale,h_200,q_auto:good/v1661238538/Amara-ecommerce/logo/brand-log-amara_dniyo1.webp"
              alt="Amara logo"
            />
          </a>
          <p class="footer__brand-text">
            Amara es una empresa de moda que presenta un armario completo de
            ropa étnica, casual vanguardista y accesorios de diseño único
            inspirado en los conceptos más contemporáneos.
          </p>
          <ul class="footer__social-list">
            <li>
              <a href="#" class="footer__social-link">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>
            <li>
              <a href="#" class="footer__social-link">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>
            <li>
              <a href="#" class="footer__social-link">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>
            <li>
              <a href="#" class="footer__social-link">
                <ion-icon name="logo-pinterest"></ion-icon>
              </a>
            </li>
          </ul>
        </div>
        <ul class="footer__list">
          <li>
            <p class="footer__list-title">Información</p>
          </li>
          <li>
            <a href="#" class="footer__list-link">Sobre nosotros</a>
          </li>
          <li>
            <a href="#" class="footer__list-link">Tipos de pago</a>
          </li>
          <li>
            <a href="#" class="footer__list-link">Ganadores de premios</a>
          </li>
          <li>
            <a href="#" class="footer__list-link">World Media Partner</a>
          </li>
          <li>
            <a href="#" class="footer__list-link">Trabaja con nosotros</a>
          </li>
          <li>
            <a href="#" class="footer__list-link">Política de reembolsos</a>
          </li>
        </ul>
        <ul class="footer__list">
          <li>
            <p class="footer__list-title">Categoría</p>
          </li>
          <li>
            <a href="#" class="footer__list-link">Bolsos y carteras</a>
          </li>
          <li>
            <a href="#" class="footer__list-link">Ropa de mujer</a>
          </li>
          <li>
            <a href="#" class="footer__list-link">Más tallas</a>
          </li>
          <li>
            <a href="#" class="footer__list-link">Completa tu look</a>
          </li>
          <li>
            <a href="#" class="footer__list-link">Rincón del bebé</a>
          </li>
          <li>
            <a href="#" class="footer__list-link">Zapatos de hombre y mujer</a>
          </li>
        </ul>
        <ul class="footer__list">
          <li>
            <p class="footer__list-title">Ayuda & soporte</p>
          </li>
          <li>
            <a href="#" class="footer__list-link">Vendedores & Agentes</a>
          </li>
          <li>
            <a href="#" class="footer__list-link">FAQ Information</a>
          </li>
          <li>
            <a href="#" class="footer__list-link">Devolución de productos</a>
          </li>
          <li>
            <a href="#" class="footer__list-link">Política de envíos</a>
          </li>
          <li>
            <a href="#" class="footer__list-link">Localiza tu pedido</a>
          </li>
          <li>
            <a href="#" class="footer__list-link">Lista de tiendas</a>
          </li>
        </ul>
      
    </div>

    <div class="footer__bottom">
        <div class="footer__copyright"> 
          <a target="_blank" href="https://twitter.com/kodimarc"> @kodimarc</a>
          <p>&copy; 2022</p>
          <p>Todos los derechos reservados</p>
        </div>
        <ul class="footer__bottom-list">
          <li>
            <a href="#" class="footer__bottom-link">Política de privacidad</a>
          </li>
          <li>
            <a href="#" class="footer__bottom-link">Términos y condiciones</a>
          </li>
          <li>
            <a href="#" class="footer__bottom-link">Sitemap</a>
          </li>
        </ul>
        <div class="footer__payment">
          <p>Aceptamos</p>
          <img
            src="https://res.cloudinary.com/dn9mr6kwc/image/upload/v1661336074/Amara-ecommerce/payment-img_qr14gx.png"
            alt="Logos pagos online"
            class="payment-img"
          />
        </div>
    </div>
`

  return footer
}
