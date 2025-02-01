import 'server-only'

export async function getProducts() {
  const response = await fetch('http://localhost:3000/api/products', {
    method: 'GET',
    cache: 'no-cache'
  })
  const products = await response.json()
  return products
}