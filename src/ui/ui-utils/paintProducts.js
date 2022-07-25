import { fetchProducts } from "../../api/fetchProducts";
import { addFavourites } from "./addFavourites";

export const paintProducts = async () => {
  const productsData = await fetchProducts();

  const adddedProducts = productsData.map((product) => {
    return `<li>
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
            <button class="card-action-btn">
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
            </li>`;
  });
  const ulProducts = document.querySelector(".product-list");

  console.log(adddedProducts);

  ulProducts.innerHTML = adddedProducts.join(" ");

  // add product to favorites logic
  addFavourites();

  return productsData;
};
