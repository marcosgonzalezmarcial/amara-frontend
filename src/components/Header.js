// import { TriangleBorder } from "./TriangleBorder";

import { ShoppingBag } from './shoppingBag/ShoppingBag'

export const Header = () => {
  const header = document.createElement('header')
  header.classList.add('header')

  header.innerHTML = /* html */`
    <div class="container-fluid">
      <div class="overlay navbar-slide"></div>

      <!-- <div class="header-search">
              <input
              type="search"
              name="search"
              placeholder="Buscar Producto..."
        class="input-field"
        />
        
        <button class="search-btn" aria-label="Search">
        <ion-icon name="search-outline"></ion-icon>
        </button>
        </div> -->

      <!-- Navbar -->
      <nav class="navbar">
        <div class="navbar-top">
          <a href="#" class="logo">
            <img
              src="https://rawcdn.githack.com/marcosgonzalezmarcial/e-commerce-mvp/ab306b7ce30924bb2f7c0e079c28b07f562e9211/src/assets/images/brand-log-amara.png"
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
          src="https://rawcdn.githack.com/marcosgonzalezmarcial/e-commerce-mvp/ab306b7ce30924bb2f7c0e079c28b07f562e9211/src/assets/images/brand-log-amara.png"
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

          <div class="btn-badge green" aria-hidden="true">3</div>
        </button>

        <button class="header-action-btn">
          <ion-icon name="heart-outline" aria-hidden="true"></ion-icon>

          <p class="header-action-label">Favoritos</p>

          <div class="btn-badge" aria-hidden="true">2</div>
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
