/* global localStorage */
export const paintProductsLocalStorage = () => {
  const productsFromLocalStorage =
    JSON.parse(localStorage.getItem("products")) || [];

  let shoppingBagProductsFromLocalStorage = "";

  productsFromLocalStorage.map(
    (product) =>
      (shoppingBagProductsFromLocalStorage += /* html */ `
      <div class="shopping-bag-item">
        <figure class="shopping-bag-item-banner">
          <img src="${product.imgUrl}" alt="product 1" />
        </figure>
        <div class="shopping-bag-item-description">
          <div class="item-description-top">
            <div class="item-description-top-right">
              <p>${product.name}</p>
              <p>Cant: ${product.qty}</p>
              <p>Talla: M</p>
              <p>Negro</p>
            </div>
            <div class="item-description-top-left">
              <p>&euro;${product.price}</p>
            </div>
          </div>
          <div class="item-description-bottom">
            <button data-id=${product.id} class="item-description-bottom-text-left">Añadir a favoritos
            </button>         
            <button data-id=${product.id} class="item-description-bottom-text-right">Eliminar
            </button>         
          </div>
        </div>
      </div>  
    `)
  );

  return shoppingBagProductsFromLocalStorage;
};
