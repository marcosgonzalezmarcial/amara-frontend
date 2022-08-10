export const fetchProductById = async (id) => {
  const response = await fetch(
    `https://amara-ecommerce.herokuapp.com/api/products/${id}?fields[0]=name&fields[1]=price&fields[2]=imgUrl&fields[3]=thumbImgUrl`
  )

  const productData = await response.json()

  const {
    data: { attributes: product }
  } = productData

  return product
}
