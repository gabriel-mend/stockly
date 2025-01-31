import { db } from "@/lib/prisma";
import { Product } from "@prisma/client";

export async function GET() {
  const products = await db.product.findMany()
  return Response.json(products, { status: 200 })
}

export async function POST(request: Request) {
  const body = await request.json() as Product | null
  const { name, price, stock } = body as Product
  await db.product.create({
    data: { name, price, stock },
  })
  return Response.json({ message: 'Product created successfully' }, { status: 201 })
}