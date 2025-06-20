"use server";
// uma server action e uma funcao que e transormada em uma rota http
import { db } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { createProductSchema, CreateProductSchemaType } from "./schema";

export const createProduct = async (data: CreateProductSchemaType) => {
  createProductSchema.parse(data);
  await db.product.create({
    data,
  });

  revalidatePath("/products");
  // o next pega a resposta da server action e retorna a resposta a nova pagina que foi revalidada
};
