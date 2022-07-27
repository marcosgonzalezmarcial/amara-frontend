export const addProductToLocalStorage = (product) => {
  let products = JSON.parse(localStorage.getItem("products")) || [];

  products = [...products, product];
  let totalSum = 0;
  products.forEach((product) => {
    totalSum += product.price;
  });

  localStorage.setItem("products", JSON.stringify(products));
};
