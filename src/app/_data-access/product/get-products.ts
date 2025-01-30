import 'server-only'
import { db } from "@/lib/prisma"

export async function getProducts() {
  const products = await db.product.findMany()
  return products
}