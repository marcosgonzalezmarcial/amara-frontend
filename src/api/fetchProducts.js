const BASE_URL = "https://amara-ecommerce.herokuapp.com/api";

export const fetchProducts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/products/?pagination[limit]=8`);

    const newData = await response.json();
    const { data: products } = newData;

    return products;
  } catch (err) {
    console.log(err);
  }
};
