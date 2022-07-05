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
            src="https://raw.githack.com/marcosgonzalezmarcial/e-commerce-mvp/new-images/src/assets/images/casual%20&%20outdoor.jpg" 
            alt="Casual & outdoor"
            loading="lazy"
            // width="510"
            // height="600"
            class="w-100"
          />
        </figure>

        <a href="#" class="btn btn-secondary">Casual & Outdoor</a>
      </li>

      <li class="category-item">
        <figure class="category-banner">
          <img
            src="https://raw.githack.com/marcosgonzalezmarcial/e-commerce-mvp/new-images/src/assets/images/winter-fashion.jpg"
            alt="Colección invierno"
            loading="lazy"
            width="510"
            height="600"
            class="w-100"
          />
        </figure>

        <a href="#" class="btn btn-secondary">Colección invierno</a>
      </li>

      <li class="category-item">
        <figure class="category-banner">
          <img
            src="https://raw.githack.com/marcosgonzalezmarcial/e-commerce-mvp/new-images/src/assets/images/zapatos-botas.jpg"
            alt="Calzado exclusivo"
            loading="lazy"
            width="510"
            height="600"
            class="w-100"
          />
        </figure>

        <a href="#" class="btn btn-secondary">Calzado exclusivo</a>
      </li>

      <li class="category-item">
        <figure class="category-banner">
          <img
            src="https://raw.githack.com/marcosgonzalezmarcial/e-commerce-mvp/new-images/src/assets/images/gafas-accesorios.jpg"
            alt="Gafas"
            loading="lazy"
            width="510"
            height="600"
            class="w-100"
          />
        </figure>
        <a href="#" class="btn btn-secondary">Gafas y accesorios</a>
      </li>
      <li class="category-item">
        <figure class="category-banner">
          <img
            src="https://raw.githack.com/marcosgonzalezmarcial/e-commerce-mvp/new-images/src/assets/images/bijou.jpg"
            alt="Bojouterie"
            loading="lazy"
            width="510"
            height="600"
            class="w-100"
          />
        </figure>

        <a href="#" class="btn btn-secondary">Bijouteria</a>
      </li>

      <li class="category-item">
        <figure class="category-banner">
          <img
            src="https://raw.githack.com/marcosgonzalezmarcial/e-commerce-mvp/new-images/src/assets/images/casual-fashion.jpg"
            alt="Gorras deportivas"
            loading="lazy"
            width="510"
            height="600"
            class="w-100"
          />
        </figure>

        <a href="#" class="btn btn-secondary">Complementos</a>
      </li>
    </ul>
  </div>
  `;
  return Category;
};
