export const Products = () => {
  let Products = document.createElement("section");
  Products.classList.add("section");
  Products.classList.add("product");

  Products.innerHTML = `
  <div class="container">
    <h2 class="h2 section-title">Productos de la semana</h2>

    <ul class="filter-list">
      <li>
        <button class="filter-btn active">Más vendidos</button>
      </li>

      <li>
        <button class="filter-btn">Hot Collection</button>
      </li>

      <li>
        <button class="filter-btn">Tendencias</button>
      </li>

      <li>
        <button class="filter-btn">Lo último</button>
      </li>
    </ul>

    <ul class="product-list">
      <li>
        <div class="product-card">
          <figure class="card-banner">
            <a href="#">
              <img
                src="https://raw.githack.com/marcosgonzalezmarcial/e-commerce-mvp/new-images/src/assets/images/mochila-producto.jpg"
                alt="Mochila deportiva"
                loading="lazy"
                width="800"
                height="1034"
                class="w-100"
              />
            </a>

            <div class="card-badge red">-25%</div>

            <div class="card-actions">
              <button
                class="card-action-btn"
                aria-label="Vista rápida producto"
              >
                <ion-icon name="eye-outline"></ion-icon>
              </button>

              <button class="card-action-btn cart-btn">
                <ion-icon
                  name="bag-add-outline"
                  aria-hidden="true"
                ></ion-icon>

                <p>Añadir al carrito</p>
              </button>

              <button
                class="card-action-btn"
                aria-label="Añadir a favoritos"
              >
                <ion-icon name="heart-outline"></ion-icon>
              </button>
            </div>
          </figure>

          <div class="card-content">
            <h3 class="h4 card-title">
              <a href="#">Varsi mochila de cuero</a>
            </h3>

            <div class="card-price">
              <data value="48.75">&euro;48.75</data>

              <data value="65.00">&euro;65.00</data>
            </div>
          </div>
        </div>
      </li>

      <li>
        <div class="product-card">
          <figure class="card-banner">
            <a href="#">
              <img
                src="https://raw.githack.com/marcosgonzalezmarcial/e-commerce-mvp/new-images/src/assets/images/camisa-le%C3%B1adora-hombre.jpg"
                alt="Camisa leñadora hombre"
                loading="lazy"
                width="800"
                height="1034"
                class="w-100"
              />
            </a>

            <div class="card-badge green">New</div>

            <div class="card-actions">
              <button
                class="card-action-btn"
                aria-label="Vista rápida producto"
              >
                <ion-icon name="eye-outline"></ion-icon>
              </button>

              <button class="card-action-btn cart-btn">
                <ion-icon
                  name="bag-add-outline"
                  aria-hidden="true"
                ></ion-icon>

                <p>Añadir al carrito</p>
              </button>

              <button
                class="card-action-btn"
                aria-label="Añadir a favoritos"
              >
                <ion-icon name="heart-outline"></ion-icon>
              </button>
            </div>
          </figure>

          <div class="card-content">
            <h3 class="h4 card-title">
              <a href="#">Camisa denim mujer</a>
            </h3>

            <div class="card-price">
              <data value="62.00">&euro;62.00</data>
            </div>
          </div>
        </div>
      </li>

      <li>
        <div class="product-card">
          <figure class="card-banner">
            <a href="#">
              <img
                src="https://rawcdn.githack.com/marcosgonzalezmarcial/e-commerce-mvp/ab306b7ce30924bb2f7c0e079c28b07f562e9211/src/assets/images/product-3.jpg"
                alt="Botas Chukah"
                loading="lazy"
                width="800"
                height="1034"
                class="w-100"
              />
            </a>

            <div class="card-actions">
              <button
                class="card-action-btn"
                aria-label="Vista rápida producto"
              >
                <ion-icon name="eye-outline"></ion-icon>
              </button>

              <button class="card-action-btn cart-btn">
                <ion-icon
                  aria-hidden="true"
                  name="bag-add-outline"
                ></ion-icon>

                <p>Añadir al carrito</p>
              </button>

              <button
                class="card-action-btn"
                aria-label="Añadir a favoritos"
              >
                <ion-icon name="heart-outline"></ion-icon>
              </button>
            </div>
          </figure>

          <div class="card-content">
            <h3 class="h4 card-title">
              <a href="#">Botas Chukah</a>
            </h3>

            <div class="card-price">
              <data value="32.00">&euro;32.00</data>
            </div>
          </div>
        </div>
      </li>

      <li>
        <div class="product-card">
          <figure class="card-banner">
            <a href="#">
              <img
                src="https://rawcdn.githack.com/marcosgonzalezmarcial/e-commerce-mvp/ab306b7ce30924bb2f7c0e079c28b07f562e9211/src/assets/images/product-4.jpg"
                alt="Camisa Faux-Trim mujer"
                loading="lazy"
                width="800"
                height="1034"
                class="w-100"
              />
            </a>

            <div class="card-actions">
              <button
                class="card-action-btn"
                aria-label="Vista rápida producto"
              >
                <ion-icon name="eye-outline"></ion-icon>
              </button>

              <button class="card-action-btn cart-btn">
                <ion-icon
                  aria-hidden="true"
                  name="bag-add-outline"
                ></ion-icon>

                <p>Añadir al carrito</p>
              </button>

              <button
                class="card-action-btn"
                aria-label="Añadir a favoritos"
              >
                <ion-icon name="heart-outline"></ion-icon>
              </button>
            </div>
          </figure>

          <div class="card-content">
            <h3 class="h4 card-title">
              <a href="#">Camisa Faux-Trim mujer</a>
            </h3>

            <div class="card-price">
              <data value="84.00">&euro;84.00</data>
            </div>
          </div>
        </div>
      </li>

      <li>
        <div class="product-card">
          <figure class="card-banner">
            <a href="#">
              <img
                src="https://rawcdn.githack.com/marcosgonzalezmarcial/e-commerce-mvp/ab306b7ce30924bb2f7c0e079c28b07f562e9211/src/assets/images/product-5.jpg"
                alt="Polo Interlock"
                loading="lazy"
                width="800"
                height="1034"
                class="w-100"
              />
            </a>

            <div class="card-actions">
              <button
                class="card-action-btn"
                aria-label="Vista rápida producto"
              >
                <ion-icon name="eye-outline"></ion-icon>
              </button>

              <button class="card-action-btn cart-btn">
                <ion-icon
                  aria-hidden="true"
                  name="bag-add-outline"
                ></ion-icon>

                <p>Añadir al carrito</p>
              </button>

              <button
                class="card-action-btn"
                aria-label="Añadir a favoritos"
              >
                <ion-icon name="heart-outline"></ion-icon>
              </button>
            </div>
          </figure>

          <div class="card-content">
            <h3 class="h4 card-title">
              <a href="#">Polo Interlock</a>
            </h3>

            <div class="card-price">
              <data value="45.00">&euro;45.00</data>
            </div>
          </div>
        </div>
      </li>

      <li>
        <div class="product-card">
          <figure class="card-banner">
            <a href="#">
              <img
                src="https://rawcdn.githack.com/marcosgonzalezmarcial/e-commerce-mvp/ab306b7ce30924bb2f7c0e079c28b07f562e9211/src/assets/images/product-6.jpg"
                alt="Amara Smart Watch"
                loading="lazy"
                width="800"
                height="1034"
                class="w-100"
              />
            </a>

            <div class="card-actions">
              <button
                class="card-action-btn"
                aria-label="Vista rápida producto"
              >
                <ion-icon name="eye-outline"></ion-icon>
              </button>

              <button class="card-action-btn cart-btn">
                <ion-icon
                  name="bag-add-outline"
                  aria-hidden="true"
                ></ion-icon>

                <p>Añadir al carrito</p>
              </button>

              <button
                class="card-action-btn"
                aria-label="Añadir a favoritos"
              >
                <ion-icon name="heart-outline"></ion-icon>
              </button>
            </div>
          </figure>

          <div class="card-content">
            <h3 class="h4 card-title">
              <a href="#">Amara Smart Watch</a>
            </h3>

            <div class="card-price">
              <data value="30.00">&euro;30.00</data>

              <data value="38.00">&euro;38.00</data>
            </div>
          </div>
        </div>
      </li>

      <li>
        <div class="product-card">
          <figure class="card-banner">
            <a href="#">
              <img
                src="https://rawcdn.githack.com/marcosgonzalezmarcial/e-commerce-mvp/ab306b7ce30924bb2f7c0e079c28b07f562e9211/src/assets/images/product-7.jpg"
                alt="Amara Smart Glasses"
                loading="lazy"
                width="800"
                height="1034"
                class="w-100"
              />
            </a>

            <div class="card-actions">
              <button
                class="card-action-btn"
                aria-label="Vista rápida producto"
              >
                <ion-icon name="eye-outline"></ion-icon>
              </button>

              <button class="card-action-btn cart-btn">
                <ion-icon
                  name="bag-add-outline"
                  aria-hidden="true"
                ></ion-icon>

                <p>Añadir al carrito</p>
              </button>

              <button
                class="card-action-btn"
                aria-label="Añadir a favoritos"
              >
                <ion-icon name="heart-outline"></ion-icon>
              </button>
            </div>
          </figure>

          <div class="card-content">
            <h3 class="h4 card-title">
              <a href="#">Amara Smart Glasses</a>
            </h3>

            <div class="card-price">
              <data value="25.00">&euro;25.00</data>

              <data value="39.00">&euro;39.00</data>
            </div>
          </div>
        </div>
      </li>

      <li>
        <div class="product-card">
          <figure class="card-banner">
            <a href="#">
              <img
                src="https://rawcdn.githack.com/marcosgonzalezmarcial/e-commerce-mvp/ab306b7ce30924bb2f7c0e079c28b07f562e9211/src/assets/images/product-8.jpg"
                alt="Camisa de algodón hombre"
                loading="lazy"
                width="800"
                height="1034"
                class="w-100"
              />
            </a>

            <div class="card-actions">
              <button
                class="card-action-btn"
                aria-label="Vista rápida producto"
              >
                <ion-icon name="eye-outline"></ion-icon>
              </button>

              <button class="card-action-btn cart-btn">
                <ion-icon
                  name="bag-add-outline"
                  aria-hidden="true"
                ></ion-icon>

                <p>Añadir al carrito</p>
              </button>

              <button
                class="card-action-btn"
                aria-label="Añadir a favoritos"
              >
                <ion-icon name="heart-outline"></ion-icon>
              </button>
            </div>
          </figure>

          <div class="card-content">
            <h3 class="h4 card-title">
              <a href="#">Camisa de algodón hombre</a>
            </h3>

            <div class="card-price">
              <data value="85.00">&euro;85.00</data>

              <data value="99.00">&euro;99.00</data>
            </div>
          </div>
        </div>
      </li>

      <li>
        <div class="product-card">
          <figure class="card-banner">
            <a href="#">
              <img
                src="https://rawcdn.githack.com/marcosgonzalezmarcial/e-commerce-mvp/ab306b7ce30924bb2f7c0e079c28b07f562e9211/src/assets/images/product-9.jpg"
                alt="Blazer cruzado"
                loading="lazy"
                width="800"
                height="1034"
                class="w-100"
              />
            </a>

            <div class="card-actions">
              <button
                class="card-action-btn"
                aria-label="Vista rápida producto"
              >
                <ion-icon name="eye-outline"></ion-icon>
              </button>

              <button class="card-action-btn cart-btn">
                <ion-icon
                  name="bag-add-outline"
                  aria-hidden="true"
                ></ion-icon>

                <p>Añadir al carrito</p>
              </button>

              <button
                class="card-action-btn"
                aria-label="Añadir a favoritos"
              >
                <ion-icon name="heart-outline"></ion-icon>
              </button>
            </div>
          </figure>

          <div class="card-content">
            <h3 class="h4 card-title">
              <a href="#">Blazer cruzado</a>
            </h3>

            <div class="card-price">
              <data value="32.00">&euro;32.00</data>
            </div>
          </div>
        </div>
      </li>

      <li>
        <div class="product-card">
          <figure class="card-banner">
            <a href="#">
              <img
                src="https://rawcdn.githack.com/marcosgonzalezmarcial/e-commerce-mvp/ab306b7ce30924bb2f7c0e079c28b07f562e9211/src/assets/images/product-10.jpg"
                alt="Body de algodón"
                loading="lazy"
                width="800"
                height="1034"
                class="w-100"
              />
            </a>

            <div class="card-badge green">Nuevo</div>

            <div class="card-actions">
              <button
                class="card-action-btn"
                aria-label="Vista rápida producto"
              >
                <ion-icon name="eye-outline"></ion-icon>
              </button>

              <button class="card-action-btn cart-btn">
                <ion-icon
                  name="bag-add-outline"
                  aria-hidden="true"
                ></ion-icon>

                <p>Añadir al carrito</p>
              </button>

              <button
                class="card-action-btn"
                aria-label="Añadir a favoritos"
              >
                <ion-icon name="heart-outline"></ion-icon>
              </button>
            </div>
          </figure>

          <div class="card-content">
            <h3 class="h4 card-title">
              <a href="#">Body de algodón</a>
            </h3>

            <div class="card-price">
              <data value="71.00">&euro;71.00</data>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <button class="btn btn-outline">Ver todos los productos</button>
  </div>
  `;
  return Products;
};
