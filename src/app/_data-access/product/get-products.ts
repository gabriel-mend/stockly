import 'server-only'
import { db } from "@/lib/prisma"

export async function getProducts() {
  const response = await fetch('http://localhost:3000/api/products')
  const products = await response.json()
  return products
}