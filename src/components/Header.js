/* global localStorage */
import { ShoppingBag } from './shoppingBag/ShoppingBag'
// import { TriangleBorder } from './TriangleBorder'

export const Header = () => {
  const header = document.createElement('header')
  header.classList.add('header')

  // getting the total amount of items form localStorage
  let totalItems = 0
  const products = JSON.parse(localStorage.getItem('products')) || []
  products.forEach((product) => {
    totalItems += product.qty
  })

  header.innerHTML = /* html */ `
    <div class="container-fluid">
      <div class="overlay" data-navbar-btn></div>
      <!-- Navbar -->
      <nav class="navbar">
        <div class="navbar__top">
          <a href="#" class="navbar__logo">
            <img
              src="https://res.cloudinary.com/dn9mr6kwc/image/upload/c_scale,h_200,q_auto:good/v1661238538/Amara-ecommerce/logo/brand-log-amara_dniyo1.webp"
              alt="Amara logo"
            />
          </a>

          <button
            class="navbar__close-btn"
            data-navbar-btn
            aria-label="Cerrar Menu"
          >
            <ion-icon name="close-outline"></ion-icon>
          </button>
        </div>

        <ul class="navbar__list">
          <li>
            <a href="#" class="navbar__link">Home</a>
          </li>

          <li>
            <a href="#products-section" data-nav-link-products class="navbar__link">Productos</a>
          </li>

          <li>
            <a href="#" class="navbar__link">Sobre nosotros</a>
          </li>

          <li>
            <a href="#blog-section" class="navbar__link">Blog</a>
          </li>

          <li>
            <a href="#" class="navbar__link">Contacto</a>
          </li>
        </ul>
      </nav>
      <!-- enf of Navbar -->

      <!-- header logo img -->
      <a href="#" class="header__logo">
        <img
          src="https://res.cloudinary.com/dn9mr6kwc/image/upload/c_scale,h_200,q_auto:good/v1661238538/Amara-ecommerce/logo/brand-log-amara_dniyo1.webp"
          alt="Amara logo"
        />
      </a>
      <!-- enf of header logo img -->

      <!-- header actions -->
      <div class="header-actions">
        <button class="header-action__btn">
          <ion-icon name="person-outline" aria-hidden="true"></ion-icon>
          <p class="header-action__label">Iniciar sesión</p>
        </button>

        <button class="header-action__btn">
          <ion-icon name="search-outline" aria-hidden="true"></ion-icon>

          <p class="header-action__label">Buscar</p>
        </button>
        <button class="header-action__btn" data-bag-btn>

          <ion-icon name="cart-outline" aria-hidden="true"></ion-icon>

          <p class="header-action__label">Carrito</p>

          <div class="header-action__btn-badge header-action__btn-badge--green" aria-hidden="true">${totalItems}</div>
        </button>

        <button class="header-action__btn">
          <ion-icon name="heart-outline" aria-hidden="true"></ion-icon>

          <p class="header-action__label">Favoritos</p>

          <div class="header-action__btn-badge" aria-hidden="true">0</div>
        </button>
      </div>
      <!-- end of header actions -->

      <!-- hamburguer menu btn -->
      <button
        class="header__hamburger-btn"
        data-navbar-btn
        aria-label="Abrir Menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <!-- end of hamburger menu btn -->
    </div>
  `

  header.appendChild(ShoppingBag())
  // header.appendChild(TriangleBorder())

  // header.appendChild(TriangleBorder());
  // document.querySelector("header").innerHTML = TriangleBorder();
  return header
}
