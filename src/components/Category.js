export const Category = () => {
  const Category = document.createElement('section')
  Category.classList.add('section')
  Category.classList.add('category')

  Category.innerHTML = /* html */ `
  <div class="container-fluid">
    <ul class="category__list">
      <li class="category__item">
        <figure class="category__card">
          <img
            src="https://res.cloudinary.com/dn9mr6kwc/image/upload/c_scale,q_auto:eco,w_550/v1661334463/Amara-ecommerce/categories/casual-outdoor_guc3id.webp" 
            alt="Casual & outdoor"
            loading="lazy"
          />
        </figure>
        <a href="#" class="category__item-btn">Casual & Outdoor</a>
      </li>
      <li class="category__item">
        <figure class="category__card">
          <img
            src="https://res.cloudinary.com/dn9mr6kwc/image/upload/c_scale,q_auto:eco,w_550/v1661334463/Amara-ecommerce/categories/winter-fashion_pmnb6r.webp"
            alt="Colección invierno"
            loading="lazy"
          />
        </figure>

        <a href="#" class="category__item-btn">Colección invierno</a>
      </li>

      <li class="category__item">
        <figure class="category__card">
          <img
            src="https://res.cloudinary.com/dn9mr6kwc/image/upload/c_scale,q_auto:eco,w_550/v1661334463/Amara-ecommerce/categories/calzado-exclusivo_eqiymc.webp"
            alt="Calzado exclusivo"
            loading="lazy"
          />
        </figure>

        <a href="#" class="category__item-btn">Calzado exclusivo</a>
      </li>

      <li class="category__item">
        <figure class="category__card">
          <img
            src="https://res.cloudinary.com/dn9mr6kwc/image/upload/c_scale,q_auto:eco,w_550/v1661334463/Amara-ecommerce/categories/gafas-complentos_zjqyvi.webp"
            alt="Gafas y accesorios"
            loading="lazy"
          />
        </figure>
        <a href="#" class="category__item-btn">Gafas y accesorios</a>
      </li>
      <li class="category__item">
        <figure class="category__card">
          <img
            src="https://res.cloudinary.com/dn9mr6kwc/image/upload/c_scale,q_auto:eco,w_550/v1661334463/Amara-ecommerce/categories/bijoux_hwab5k.webp"
            alt="Bisutería"
            loading="lazy"
          />
        </figure>

        <a href="#" class="category__item-btn">Bisutería</a>
      </li>

      <li class="category__item">
        <figure class="category__card">
          <img
            src="https://res.cloudinary.com/dn9mr6kwc/image/upload/c_scale,q_auto:eco,w_550/v1661334463/Amara-ecommerce/categories/complementos_lpaqmy.webp"
            alt="hombre con ropa moderna"
            loading="lazy"
          />
        </figure>

        <a href="#" class="category__item-btn">Complementos</a>
      </li>
    </ul>
  </div>
  `
  return Category
}
