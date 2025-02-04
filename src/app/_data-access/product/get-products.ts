import 'server-only'

export async function getProducts() {
  const response = await fetch('http://localhost:3000/api/products', {
    // se nao houver um no cache o codigo cai em request memorization
    method: 'GET',
    cache: 'no-cache'
  })
  const products = await response.json()
  return products
}