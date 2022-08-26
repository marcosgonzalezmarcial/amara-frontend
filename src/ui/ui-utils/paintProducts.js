import { fetchProductsByCategory } from "../../api/fetchProductsByCategory";
import { addFavourites } from "./addFavourites";
import { addProductToCart } from "./addProductToCart";

export const paintProducts = async (category) => {
  const productsData = await fetchProductsByCategory(category);

  const addedProducts = productsData.map((product) => {
    return /* html */ `
    <li>
      <div class="product-card">
        <figure class="card-banner">
          <a href="#">
            <img
              src="${product.attributes.imgUrl}"
              alt="${product.attributes.name}"
              loading="lazy"
            />
          </a>
          <div class="card-actions">
            <button data-id="${product.id}" class="card-action-btn">
              <p>Añadir</p>
            </button>
          </div>
        </figure>
        <div class="card-content">
          <div class="card-price">
            <data value="${product.attributes.price}">
              &euro;${product.attributes.price}
            </data>
            <data value="${product.attributes.price}">
              &euro;${product.attributes.price}
            </data>
          </div>
          <div class="card-title">
            <p href="#">${product.attributes.name}</p>
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
    `;
  });

  const ulProducts = document.querySelector(".product-list");
  // temporary fixing a render error
  if (ulProducts) ulProducts.innerHTML = addedProducts.join(" ");

  // add product to favorites logic, this could be in another file...
  addFavourites();

  // adding product to cart fuctionality
  const addToShoppingBagButtons = [
    ...document.querySelectorAll(".card-action-btn")
  ];
  addToShoppingBagButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      addProductToCart(e.target.dataset.id);
    });
  });

  return productsData;
};
