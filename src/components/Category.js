export const Category = () => {
  let Category = document.createElement("section");
  Category.classList.add("section");
  Category.classList.add("category");

  Category.innerHTML = `
  <div class="container-fluid">
    <ul class="category-list">
      <li class="category-item">
        <figure class="category-banner">
          <img
            src="https://raw.githack.com/marcosgonzalezmarcial/e-commerce-mvp/main/src/assets/images/casual-outdoor.jpg" 
            alt="Casual & outdoor"
            loading="lazy"
          />
        </figure>

        <a href="#" class="btn btn-secondary">Casual & Outdoor</a>
      </li>

      <li class="category-item">
        <figure class="category-banner">
          <img
            src="https://raw.githack.com/marcosgonzalezmarcial/e-commerce-mvp/main/src/assets/images/winter-fashion.jpg"
            alt="Colección invierno"
            loading="lazy"
          />
        </figure>

        <a href="#" class="btn btn-secondary">Colección invierno</a>
      </li>

      <li class="category-item">
        <figure class="category-banner">
          <img
            src="https://raw.githack.com/marcosgonzalezmarcial/e-commerce-mvp/main/src/assets/images/zapatos-botas.jpg"
            alt="Calzado exclusivo"
            loading="lazy"
          />
        </figure>

        <a href="#" class="btn btn-secondary">Calzado exclusivo</a>
      </li>

      <li class="category-item">
        <figure class="category-banner">
          <img
            src="https://raw.githack.com/marcosgonzalezmarcial/e-commerce-mvp/main/src/assets/images/gafas-complentos.jpg"
            alt="Gafas"
            loading="lazy"
          />
        </figure>
        <a href="#" class="btn btn-secondary">Gafas y accesorios</a>
      </li>
      <li class="category-item">
        <figure class="category-banner">
          <img
            src="https://raw.githack.com/marcosgonzalezmarcial/e-commerce-mvp/main/src/assets/images/bijoux.jpg"
            alt="Bisutería"
            loading="lazy"
          />
        </figure>

        <a href="#" class="btn btn-secondary">Bijouteria</a>
      </li>

      <li class="category-item">
        <figure class="category-banner">
          <img
            src="https://raw.githack.com/marcosgonzalezmarcial/e-commerce-mvp/main/src/assets/images/casual-fashion.jpg"
            alt="Gorras deportivas"
            loading="lazy"
          />
        </figure>

        <a href="#" class="btn btn-secondary">Complementos</a>
      </li>
    </ul>
  </div>
  `;
  return Category;
};
