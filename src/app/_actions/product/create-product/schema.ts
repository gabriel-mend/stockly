import { z } from "zod";

export const createProductSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório").trim(),
  price: z.number().min(0.01, "Preço deve ser maior que zero"),
  stock: z.coerce
    .number()
    .positive({ message: "Estoque deve ser positiva" })
    .int()
    .min(0, "Estoque não pode ser negativo"),
});

export type CreateProductSchemaType = z.infer<typeof createProductSchema>;
