export const Products = () => {
  let Products = document.createElement("section");
  Products.classList.add("section");
  Products.classList.add("product");

  Products.innerHTML = `
    <div class="container-fluid">
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
                  src="https://raw.githack.com/marcosgonzalezmarcial/e-commerce-mvp/main/src/assets/images/mochila-producto.jpg"
                  alt="Mochila deportiva"
                  loading="lazy"
                />
              </a>

              <div class="card-badge red">-25%</div>

              <div class="card-actions">
                <button class="card-action-btn ">
                  <p>Añadir</p>
                </button>
              </div>
            </figure>

            <div class="card-content">
              <div class="card-price">
                <data value="48.75">&euro;48.75</data>
                <data value="65.00">&euro;65.00</data>
              </div>

              <div class="card-title">
                <p href="#">Varsi mochila de cuero</p>
              </div>

              <div class="heart-icon-wrapper">
                <img
                  class="heart-icon"
                  src="https://img.icons8.com/material-outlined/48/000000/like--v1.png"
                />
                <img
                  class="heart-icon-filled"
                  src="https://img.icons8.com/material/48/000000/like--v1.png"
                />
              </div>
            </div>
          </div>
        </li>

        <li>
          <div class="product-card">
            <figure class="card-banner">
              <a href="#">
                <img
                  src="https://raw.githack.com/marcosgonzalezmarcial/e-commerce-mvp/main/src/assets/images/camisa-denim-mujer.jpg"
                  alt="Camisa denim mujer"
                  loading="lazy"
                />
              </a>

              <div class="card-badge green">New</div>

              <div class="card-actions">
                <button class="card-action-btn">
                  <p>Añadir</p>
                </button>
              </div>
            </figure>

            <div class="card-content">
              <div class="card-price">
                <data value="48.75">&euro;48.75</data>
                <data value="65.00">&euro;65.00</data>
              </div>
              <div class="card-title">
                <p href="#">Varsi mochila de cuero</p>
              </div>
              <div class="heart-icon-wrapper">
                <img
                  class="heart-icon"
                  src="https://img.icons8.com/material-outlined/48/000000/like--v1.png"
                />
                <img
                  class="heart-icon-filled"
                  src="https://img.icons8.com/material/48/000000/like--v1.png"
                />
              </div>
            </div>
          </div>
        </li>

        <li>
          <div class="product-card">
            <figure class="card-banner">
              <a href="#">
                <img
                  src="https://raw.githack.com/marcosgonzalezmarcial/e-commerce-mvp/main/src/assets/images/botas-mujer.jpg"
                  alt="Botas de mujer"
                  loading="lazy"
                />
              </a>
              <div class="card-actions">
                <button class="card-action-btn ">
                  <p>Añadir</p>
                </button>
              </div>
            </figure>

            <div class="card-content">
              <div class="card-price">
                <data value="48.75">&euro;48.75</data>
                <data value="65.00">&euro;65.00</data>
              </div>
              <div class="card-title">
                <p href="#">Varsi mochila de cuero</p>
              </div>
              <div class="heart-icon-wrapper">
                <img
                  class="heart-icon"
                  src="https://img.icons8.com/material-outlined/48/000000/like--v1.png"
                />
                <img
                  class="heart-icon-filled"
                  src="https://img.icons8.com/material/48/000000/like--v1.png"
                />
              </div>
            </div>
          </div>
        </li>

        <li>
          <div class="product-card">
            <figure class="card-banner">
              <a href="#">
                <img
                  src="https://raw.githack.com/marcosgonzalezmarcial/e-commerce-mvp/main/src/assets/images/camisa-lisa-mujer.jpg"
                  alt="Camisa lisa mujer"
                  loading="lazy"
                />
              </a>

              <div class="card-actions">
                <button class="card-action-btn ">
                  <p>Añadir</p>
                </button>
              </div>
            </figure>

            <div class="card-content">
              <div class="card-price">
                <data value="48.75">&euro;48.75</data>
                <data value="65.00">&euro;65.00</data>
              </div>
              <div class="card-title">
                <p href="#">Varsi mochila de cuero</p>
              </div>
              <div class="heart-icon-wrapper">
                <img
                  class="heart-icon"
                  src="https://img.icons8.com/material-outlined/48/000000/like--v1.png"
                />
                <img
                  class="heart-icon-filled"
                  src="https://img.icons8.com/material/48/000000/like--v1.png"
                />
              </div>
            </div>
          </div>
        </li>

        <li>
          <div class="product-card">
            <figure class="card-banner">
              <a href="#">
                <img
                  src="https://raw.githack.com/marcosgonzalezmarcial/e-commerce-mvp/main/src/assets/images/camiseta-verde-apagado-hombre.jpg"
                  alt="Camiseta verde hombre"
                  loading="lazy"
                />
              </a>

              <div class="card-actions">
                <button class="card-action-btn ">
                  <p>Añadir</p>
                </button>
              </div>
            </figure>

            <div class="card-content">
              <div class="card-price">
                <data value="48.75">&euro;48.75</data>
                <data value="65.00">&euro;65.00</data>
              </div>
              <div class="card-title">
                <p href="#">Varsi mochila de cuero</p>
              </div>
              <div class="heart-icon-wrapper">
                <img
                  class="heart-icon"
                  src="https://img.icons8.com/material-outlined/48/000000/like--v1.png"
                />
                <img
                  class="heart-icon-filled"
                  src="https://img.icons8.com/material/48/000000/like--v1.png"
                />
              </div>
            </div>
          </div>
        </li>

        <li>
          <div class="product-card">
            <figure class="card-banner">
              <a href="#">
                <img
                  src="https://raw.githack.com/marcosgonzalezmarcial/e-commerce-mvp/main/src/assets/images/gafa-producto.jpg"
                  alt="Amara Gafas"
                  loading="lazy"
                />
              </a>

              <div class="card-actions">
                <button class="card-action-btn ">
                  <p>Añadir</p>
                </button>
              </div>
            </figure>

            <div class="card-content">
              <div class="card-price">
                <data value="48.75">&euro;48.75</data>
                <data value="65.00">&euro;65.00</data>
              </div>
              <div class="card-title">
                <p href="#">Varsi mochila de cuero</p>
              </div>
              <div class="heart-icon-wrapper">
                <img
                  class="heart-icon"
                  src="https://img.icons8.com/material-outlined/48/000000/like--v1.png"
                />
                <img
                  class="heart-icon-filled"
                  src="https://img.icons8.com/material/48/000000/like--v1.png"
                />
              </div>
            </div>
          </div>
        </li>

        <li>
          <div class="product-card">
            <figure class="card-banner">
              <a href="#">
                <img
                  src="https://raw.githack.com/marcosgonzalezmarcial/e-commerce-mvp/main/src/assets/images/camisa-rayas-hombre-producto.jpg"
                  alt="Camisa de rayas para hombre"
                  loading="lazy"
                />
              </a>

              <div class="card-actions">
                <button class="card-action-btn ">
                  <p>Añadir</p>
                </button>
              </div>
            </figure>

            <div class="card-content">
              <div class="card-price">
                <data value="48.75">&euro;48.75</data>
                <data value="65.00">&euro;65.00</data>
              </div>
              <div class="card-title">
                <p href="#">Varsi mochila de cuero</p>
              </div>
              <div class="heart-icon-wrapper">
                <img
                  class="heart-icon"
                  src="https://img.icons8.com/material-outlined/48/000000/like--v1.png"
                />
                <img
                  class="heart-icon-filled"
                  src="https://img.icons8.com/material/48/000000/like--v1.png"
                />
              </div>
            </div>
          </div>
        </li>

        <li>
          <div class="product-card">
            <figure class="card-banner">
              <a href="#">
                <img
                  src="https://raw.githack.com/marcosgonzalezmarcial/e-commerce-mvp/main/src/assets/images/vestido-mujer.jpg"
                  alt="Vestido mujer"
                  loading="lazy"
                />
              </a>

              <div class="card-actions">
                <button class="card-action-btn ">
                  <p>Añadir</p>
                </button>
              </div>
            </figure>

            <div class="card-content">
              <div class="card-price">
                <data value="48.75">&euro;48.75</data>
                <data value="65.00">&euro;65.00</data>
              </div>
              <div class="card-title">
                <p href="#">Varsi mochila de cuero</p>
              </div>
              <div class="heart-icon-wrapper">
                <img
                  class="heart-icon"
                  src="https://img.icons8.com/material-outlined/48/000000/like--v1.png"
                />
                <img
                  class="heart-icon-filled"
                  src="https://img.icons8.com/material/48/000000/like--v1.png"
                />
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
