"use server";

import { db } from "@/lib/prisma";
import { deleteProductSchema, DeleteProductSchema } from "./schema";
import { revalidateTag } from "next/cache";

export const deleteProduct = async ({ id }: DeleteProductSchema) => {
  deleteProductSchema.parse({ id });
  try {
    await db.product.delete({
      where: { id },
    });

    revalidateTag("get-products");
  } catch (error) {
    console.error("Error deleting product:", error);
  }
};
