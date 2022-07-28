export const fetchProductsByCategory = async (category) => {
  switch (category) {
    case "Lo último":
      category = "Lo%20%C3%BAltimo";
      break;
    case "Hot collection":
      category = "Hot%20collection";
      break;
    case "Tendencias":
      category = "Tendencias";
      break;
    case "Más vendido":
      category = "M%C3%A1s%20vendido";
      break;
    default:
      break;
  }

  let categoriesFilteredUrl = `https://amara-ecommerce.herokuapp.com/api/categories?fields[0]=name&filters[name][$eq]=${category}&populate[products][fields][0]=name&populate[products][fields][1]=price&populate[products][fields][2]=imgUrl`;

  try {
    const response = await fetch(`${categoriesFilteredUrl}`);

    const newData = await response.json();
    const {
      data: [
        {
          attributes: {
            products: { data: products },
          },
        },
      ],
    } = newData;

    return products;
  } catch (err) {
    console.log(err);
  }
};
