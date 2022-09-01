/* global localStorage */
import { ShoppingBag } from './shoppingBag/ShoppingBag'

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
      <div class="overlay navbar-slide"></div>
      <!-- Navbar -->
      <nav class="navbar">
        <div class="navbar-top">
          <a href="#" class="logo">
            <img
              src="https://res.cloudinary.com/dn9mr6kwc/image/upload/c_scale,h_200,q_auto:good/v1661238538/Amara-ecommerce/logo/brand-log-amara_dniyo1.webp"
              alt="Amara logo"
              width="130"
              height="31"
            />
          </a>

          <button
            class="nav-close-btn navbar-slide"
            data-navbar-close-btn
            aria-label="Close Menu"
          >
            <ion-icon name="close-outline"></ion-icon>
          </button>
        </div>

        <ul class="navbar-list">
          <li>
            <a href="#" class="navbar-link">Home</a>
          </li>

          <li>
            <a href="#" class="navbar-link">Tienda</a>
          </li>

          <li>
            <a href="#" class="navbar-link">Sobre nosotros</a>
          </li>

          <li>
            <a href="#blog" class="navbar-link">Blog</a>
          </li>

          <li>
            <a href="#" class="navbar-link">Contacto</a>
          </li>
        </ul>
      </nav>
      <!-- enf of Navbar -->

      <!-- logo img -->
      <a href="#" class="logo">
        <img
          src="https://res.cloudinary.com/dn9mr6kwc/image/upload/c_scale,h_200,q_auto:good/v1661238538/Amara-ecommerce/logo/brand-log-amara_dniyo1.webp"
          alt="Amara logo"
        />
      </a>
      <!-- enf of logo img -->

      <!-- header actions -->
      <div class="header-actions">
        <button class="header-action-btn">
          <ion-icon name="person-outline" aria-hidden="true"></ion-icon>

          <p class="header-action-label">Iniciar sesión</p>
        </button>

        <button class="header-action-btn">
          <ion-icon name="search-outline" aria-hidden="true"></ion-icon>

          <p class="header-action-label">Buscar</p>
        </button>
        <button class="header-action-btn shopping-bag-btn">
       
          <ion-icon name="cart-outline" aria-hidden="true"></ion-icon>

          <p class="header-action-label">Carrito</p>

          <div class="btn-badge green" aria-hidden="true">${totalItems}</div>
        </button>

        <button class="header-action-btn">
          <ion-icon name="heart-outline" aria-hidden="true"></ion-icon>

          <p class="header-action-label">Favoritos</p>

          <div class="btn-badge" aria-hidden="true">0</div>
        </button>
      </div>
      <!-- end of header actions -->

      <!-- hamburguer menu btn -->
      <button
        class="nav-open-btn navbar-slide"
        data-navbar-open-btn
        aria-label="Open Menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <!-- end of hamburguer menu btn -->
    </div>
  `

  header.appendChild(ShoppingBag())
  // header.appendChild(TriangleBorder());
  // document.querySelector("header").innerHTML = TriangleBorder();
  return header
}
