import { db } from "@/lib/prisma"
import { NextRequest } from "next/server"

export async function GET(request: NextRequest, { params }: { params: { id: string }}) {
  const productID = params.id
  // const searchParams = request.nextUrl.searchParams
  // const query = searchParams.get('nomedoparametro')
  const product = await db.product.findUnique({
    where: { id: productID },
  })
  if(!product) {
    return Response.json({ status: 404, message: 'Product not found' })
  }

  return Response.json(product, { status: 200 })
}

export async function DELETE(request: Request, { params }: { params: { id: string }}) {
  await db.product.delete({
    where: { id: params.id },
  })
  return Response.json({ message: 'Product deleted successfully' }, { status: 200 })
}