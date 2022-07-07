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
                src="https://raw.githack.com/marcosgonzalezmarcial/e-commerce-mvp/main/src/assets/images/mochila-producto.jpg"
                alt="Mochila deportiva"
                loading="lazy"    
              />
            </a>

            <div class="card-badge red">-25%</div>

            <div class="card-actions">
              <button class="card-action-btn cart-btn">
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
            <ion-icon name="heart-outline"></ion-icon>
            </div>
            
        </div>
      </li>

      <li>
      <div class="product-card">
      <figure class="card-banner">
      <a href="#">
      <img
      src="https://raw.githack.com/marcosgonzalezmarcial/e-commerce-mvp/main/src/assets/images/camisa_denim_mujer.jpg"
                alt="Camisa denim mujer"
                loa"
                
                />
                </a>
                
                <div class="card-badge green">New</div>
                
                <div class="card-actions">

                <button class="card-action-btn cart-btn">
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
              <ion-icon name="heart-outline"></ion-icon>
              </div>
        </div>
        </li>
        
        <li>
        <div class="product-card">
        <figure class="card-banner">
          <a href="#">
          <img
          src="https://raw.githack.com/marcosgonzalezmarcial/e-commerce-mvp/main/src/assets/images/bota-producto.jpg"
          alt="Bota"
          loading="lazy"
              />
            </a>

            <div class="card-actions">
            
              <button class="card-action-btn cart-btn">
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
            <ion-icon name="heart-outline"></ion-icon>
            </div>
        </div>
        </li>
        
        <li>
        <div class="product-card">
        <figure class="card-banner">
        <a href="#">
        <img
        src="https://raw.githack.com/marcosgonzalezmarcial/e-commerce-mvp/main/src/assets/images/camisa-lisa-mujer-producto.jpg"
        alt="Camisa lis               loading="
              />
              </a>
              
              <div class="card-actions">
                <button class="card-action-btn cart-btn">
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
            <ion-icon name="heart-outline"></ion-icon>
            </div>
        </div>
        </li>
        
        <li>
        <div class="product-card">
        <figure class="card-banner">
        <a href="#">
              <img
                src="https://raw.githack.com/marcosgonzalezmarcial/e-commerce-mvp/main/src/assets/images/camiseta-verde-de-hombre-fibras-naturales.jpg"
                alt="Camiseta verde               loading="
                />
                </a>
                
                <div class="card-actions">

                <button class="card-action-btn cart-btn">
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
              <ion-icon name="heart-outline"></ion-icon>
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

                <button class="card-action-btn cart-btn">
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
              <ion-icon name="heart-outline"></ion-icon>
              </div>
              </div>
              </li>
              
              <li>
              <div class="product-card">
              <figure class="card-banner">
              <a href="#">
              <img
              src="https://raw.githack.com/marcosgonzalezmarcial/e-commerce-mvp/main/src/assets/images/camisa-rayas-hombre-producto.jpg"
              alt="Camisa de rayas               loading="
              />
              </a>
              
                <div class="card-actions">
                
                  <button class="card-action-btn cart-btn">
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
            <ion-icon name="heart-outline"></ion-icon>
            </div>
            </div>
            </li>
            
      <li>
        <div class="product-card">
        <figure class="card-banner">
        <a href="#">
              <img
              src="https://raw.githack.com/marcosgonzalezmarcial/e-commerce-mvp/main/src/assets/images/blazer-mujer-producto.jpg"
              alt="Blazer"
              loading="lazy"
              />
            </a>

            <div class="card-actions">
            
              <button class="card-action-btn cart-btn">
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
            <ion-icon name="heart-outline"></ion-icon>
          </div>
        </div>
        </li>
        
        
        </ul>
        <button class="btn btn-outline">Ver todos los productos</button>
        </div>
        `;
  return Products;
};

// <button
//   class="card-action-btn"
//   aria-label="Añadir a favoritos"
// >
//   <ion-icon name="heart-outline"></ion-icon>
// </button>
