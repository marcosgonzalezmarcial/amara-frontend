export const Category = () => {
  let Category = document.createElement("section");
  Category.classList.add("section");
  Category.classList.add("category");

  Category.innerHTML = `
  <div class="container">
    <ul class="category-list">
      <li class="category-item">
        <figure class="category-banner">
          <img
            src="https://rawcdn.githack.com/marcosgonzalezmarcial/e-commerce-mvp/ab306b7ce30924bb2f7c0e079c28b07f562e9211/src/assets/images/category-2.jpg"
            alt="Casual & outdoor"
            loading="lazy"
            width="510"
            height="600"
            class="w-100"
          />
        </figure>

        <a href="#" class="btn btn-secondary">Casual & Outdoor</a>
      </li>

      <li class="category-item">
        <figure class="category-banner">
          <img
            src="https://rawcdn.githack.com/marcosgonzalezmarcial/e-commerce-mvp/ab306b7ce30924bb2f7c0e079c28b07f562e9211/src/assets/images/category-3.jpg"
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
            src="https://rawcdn.githack.com/marcosgonzalezmarcial/e-commerce-mvp/ab306b7ce30924bb2f7c0e079c28b07f562e9211/src/assets/images/category-4.jpg"
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
            src="https://rawcdn.githack.com/marcosgonzalezmarcial/e-commerce-mvp/ab306b7ce30924bb2f7c0e079c28b07f562e9211/src/assets/images/category-1.jpg"
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
            src="https://rawcdn.githack.com/marcosgonzalezmarcial/e-commerce-mvp/ab306b7ce30924bb2f7c0e079c28b07f562e9211/src/assets/images/category-5.jpg"
            alt="Joyas"
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
            src="https://rawcdn.githack.com/marcosgonzalezmarcial/e-commerce-mvp/ab306b7ce30924bb2f7c0e079c28b07f562e9211/src/assets/images/category-6.jpg"
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
