export const Header = () => {
  let header = document.createElement("header");
  header.classList.add("header");
  header.setAttribute = "data-header";

  header.innerHTML = `
  <div class="shopping-bag-container">
    <div class="shopping-bag">
      <div class="bag-title">Bolsa (1)</div>
      <div class="shopping-bag-content">
        <div class="shopping-bag-content-container">
          <div class="shopping-bag-content-container-img-container">
            <img
              src="https://rawcdn.githack.com/marcosgonzalezmarcial/e-commerce-mvp/ab306b7ce30924bb2f7c0e079c28b07f562e9211/src/assets/images/product-1.jpg"
              alt="product 1"
            />
          </div>
          <div
            class="shopping-bag-content-container-item-description-container"
          >
            <div class="item-description-top">
              <div class="item-description-top-right">
                <p>Mochila</p>
                <p>Cant: 1</p>
                <p>Talla: M</p>
                <p>Negro</p>
              </div>
              <div class="item-description-top-left">
                <p>&euro;49</p>
              </div>
            </div>
            <div class="item-description-bottom">
              <p>eliminar</p>
            </div>
          </div>
        </div>
        <div class="shopping-bag-content-container">
          <div class="shopping-bag-content-container-img-container">
            <img
              src="https://rawcdn.githack.com/marcosgonzalezmarcial/e-commerce-mvp/ab306b7ce30924bb2f7c0e079c28b07f562e9211/src/assets/images/product-1.jpg"
              alt="product 1"
            />
          </div>
          <div
            class="shopping-bag-content-container-item-description-container"
          >
            <div class="item-description-top">
              <div class="item-description-top-right">
                <p>Mochila</p>
                <p>Cant: 1</p>
                <p>Talla: M</p>
                <p>Negro</p>
              </div>
              <div class="item-description-top-left">
                <p>&euro;49</p>
              </div>
            </div>
            <div class="item-description-bottom">
              <p>eliminar</p>
            </div>
          </div>
        </div>
        <div class="shopping-bag-content-container">
          <div class="shopping-bag-content-container-img-container">
            <img
              src="https://rawcdn.githack.com/marcosgonzalezmarcial/e-commerce-mvp/ab306b7ce30924bb2f7c0e079c28b07f562e9211/src/assets/images/product-1.jpg"
              alt="product 1"
            />
          </div>
          <div
            class="shopping-bag-content-container-item-description-container"
          >
            <div class="item-description-top">
              <div class="item-description-top-right">
                <p>Mochila</p>
                <p>Cant: 1</p>
                <p>Talla: M</p>
                <p>Negro</p>
              </div>
              <div class="item-description-top-left">
                <p>&euro;49</p>
              </div>
            </div>
            <div class="item-description-bottom">
              <p>eliminar</p>
            </div>
          </div>
        </div>
        <div class="shopping-bag-content-container">
          <div class="shopping-bag-content-container-img-container">
            <img
              src="https://rawcdn.githack.com/marcosgonzalezmarcial/e-commerce-mvp/ab306b7ce30924bb2f7c0e079c28b07f562e9211/src/assets/images/product-1.jpg"
              alt="product 1"
            />
          </div>
          <div
            class="shopping-bag-content-container-item-description-container"
          >
            <div class="item-description-top">
              <div class="item-description-top-right">
                <p>Mochila</p>
                <p>Cant: 1</p>
                <p>Talla: M</p>
                <p>Negro</p>
              </div>
              <div class="item-description-top-left">
                <p>&euro;49</p>
              </div>
            </div>
            <div class="item-description-bottom">
              <p>eliminar</p>
            </div>
          </div>
        </div>
        <div class="shopping-bag-content-container">
          <div class="shopping-bag-content-container-img-container">
            <img
              src="https://rawcdn.githack.com/marcosgonzalezmarcial/e-commerce-mvp/ab306b7ce30924bb2f7c0e079c28b07f562e9211/src/assets/images/product-1.jpg"
              alt="product 1"
            />
          </div>
          <div
            class="shopping-bag-content-container-item-description-container"
          >
            <div class="item-description-top">
              <div class="item-description-top-right">
                <p>Mochila</p>
                <p>Cant: 1</p>
                <p>Talla: M</p>
                <p>Negro</p>
              </div>
              <div class="item-description-top-left">
                <p>&euro;49</p>
              </div>
            </div>
            <div class="item-description-bottom">
              <p>eliminar</p>
            </div>
          </div>
        </div>
        <div class="shopping-bag-content-container">
          <div class="shopping-bag-content-container-img-container">
            <img
              src="https://rawcdn.githack.com/marcosgonzalezmarcial/e-commerce-mvp/ab306b7ce30924bb2f7c0e079c28b07f562e9211/src/assets/images/product-1.jpg"
              alt="product 1"
            />
          </div>
          <div
            class="shopping-bag-content-container-item-description-container"
          >
            <div class="item-description-top">
              <div class="item-description-top-right">
                <p>Mochila</p>
                <p>Cant: 1</p>
                <p>Talla: M</p>
                <p>Negro</p>
              </div>
              <div class="item-description-top-left">
                <p>&euro;49</p>
              </div>
            </div>
            <div class="item-description-bottom">
              <p>eliminar</p>
            </div>
          </div>
        </div>
      </div>
      <div class="shopping-bag-footer">
        <div class="shopping-bag-footer-item">
          <div class="shopping-bag-subtotal-text">Subtotal:</div>
          <div class="shopping-bag-subtotal">20€</div>
        </div>
        <div class="shopping-bag-footer-item">
          <div class="shopping-bag-delivery-text">Envío:</div>
          <div class="shopping-bag-delivery-cost">Gratis</div>
        </div>

        <button class="shopping-bag-checkout-btn">Comenzar pedido</button>
      </div>
    </div>
  </div>

  <div class="container-fluid">
    <div class="overlay" data-overlay></div>

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
    <nav class="navbar" data-navbar>
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
          class="nav-close-btn"
          data-nav-close-btn
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
      <button class="header-action-btn">
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
    <button class="nav-open-btn" data-nav-open-btn aria-label="Open Menu">
      <span></span>
      <span></span>
      <span></span>
    </button>
    <!-- end of hamburguer menu btn -->
  </div>
  `;

  return header;
};
