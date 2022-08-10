export const Footer = () => {
  const footer = document.createElement('footer')
  footer.classList.add('footer')

  footer.innerHTML = `
    <div class="footer-top">
      <div class="container">
        <div class="footer-brand">
          <a href="#" class="logo">
            <img
              src="https://rawcdn.githack.com/marcosgonzalezmarcial/e-commerce-mvp/ab306b7ce30924bb2f7c0e079c28b07f562e9211/src/assets/images/brand-log-amara.png"
              alt="Amara logo"
            />
          </a>

          <p class="footer-text">
            Amara es una empresa de moda que presenta un armario completo de
            ropa étnica, casual vanguardista y accesorios de diseño único
            inspirado en los conceptos más contemporáneos.
          </p>

          <ul class="social-list">
            <li>
              <a href="#" class="social-link">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" class="social-link">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" class="social-link">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" class="social-link">
                <ion-icon name="logo-pinterest"></ion-icon>
              </a>
            </li>
          </ul>
        </div>

        <ul class="footer-list">
          <li>
            <p class="footer-list-title">Información</p>
          </li>

          <li>
            <a href="#" class="footer-link">Sobre nosotros</a>
          </li>

          <li>
            <a href="#" class="footer-link">Tipos de pago</a>
          </li>

          <li>
            <a href="#" class="footer-link">Ganadores de premios</a>
          </li>

          <li>
            <a href="#" class="footer-link">World Media Partner</a>
          </li>

          <li>
            <a href="#" class="footer-link">Trabaja con nosotros</a>
          </li>

          <li>
            <a href="#" class="footer-link">Política de reembolsos</a>
          </li>
        </ul>

        <ul class="footer-list">
          <li>
            <p class="footer-list-title">Categoría</p>
          </li>

          <li>
            <a href="#" class="footer-link">Bolsos y carteras</a>
          </li>

          <li>
            <a href="#" class="footer-link">Ropa de mujer</a>
          </li>

          <li>
            <a href="#" class="footer-link">Más tallas</a>
          </li>

          <li>
            <a href="#" class="footer-link">Completa tu look</a>
          </li>

          <li>
            <a href="#" class="footer-link">Rincón del bebé</a>
          </li>

          <li>
            <a href="#" class="footer-link">Zapatos de hombre y mujer</a>
          </li>
        </ul>

        <ul class="footer-list">
          <li>
            <p class="footer-list-title">Ayuda & soporte</p>
          </li>

          <li>
            <a href="#" class="footer-link">Vendedores & Agentes</a>
          </li>

          <li>
            <a href="#" class="footer-link">FAQ Information</a>
          </li>

          <li>
            <a href="#" class="footer-link">Return Policy</a>
          </li>

          <li>
            <a href="#" class="footer-link">Shipping & Delivery</a>
          </li>

          <li>
            <a href="#" class="footer-link">Order Tranking</a>
          </li>

          <li>
            <a href="#" class="footer-link">List of Shops</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="container">
        <p class="copyright">
          &copy; 2022 <a href="#">@kodimarc</a>. Todos los derechos reservados
        </p>

        <ul class="footer-bottom-list">
          <li>
            <a href="#" class="footer-bottom-link">Política de privacidad</a>
          </li>

          <li>
            <a href="#" class="footer-bottom-link">Términos y condiciones</a>
          </li>

          <li>
            <a href="#" class="footer-bottom-link">Sitemap</a>
          </li>
        </ul>

        <div class="payment">
          <p class="payment-title">Aceptamos</p>

          <img
            src="https://rawcdn.githack.com/marcosgonzalezmarcial/e-commerce-mvp/ab306b7ce30924bb2f7c0e079c28b07f562e9211/src/assets/images/payment-img.png"
            alt="Logos pagos online"
            class="payment-img"
          />
        </div>
      </div>
    </div>
`

  return footer
}
