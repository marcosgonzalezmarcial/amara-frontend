export const Products = () => {
  const Products = document.createElement('section')
  Products.classList.add('section')
  Products.classList.add('products')
  Products.setAttribute('id', 'products-section')

  Products.innerHTML = /* html */ `
    <div class="container-fluid">
      <h2 class="products__title">Productos de la semana</h2>
      <ul class="products__filter">
        <li>
          <button class="products__filter-btn active">Más vendidos</button>
        </li>
        <li>
          <button class="products__filter-btn">Hot collection</button>
        </li>
        <li>
          <button class="products__filter-btn">Tendencias</button>
        </li>
        <li>
          <button class="products__filter-btn">Lo último</button>
        </li>
      </ul>
      <ul class="products__list"></ul>
      <button class="products__btn">Ver todos los productos</button>
    </div>
        `
  return Products
}
