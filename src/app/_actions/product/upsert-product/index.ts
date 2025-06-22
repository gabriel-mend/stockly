"use server";
// uma server action e uma funcao que e transormada em uma rota http
import { db } from "@/lib/prisma";
import { revalidateTag } from "next/cache";
import { upsertProductSchema, UpsertProductSchemaType } from "./schema";

export const upsertProduct = async (data: UpsertProductSchemaType) => {
  upsertProductSchema.parse(data);
  console.log("upsertProduct", data);
  await db.product.upsert({
    where: { id: data.id ?? "" },
    update: data,
    create: data,
  });

  revalidateTag("get-products");
  // o next pega a resposta da server action e retorna a resposta a nova pagina que foi revalidada
};
