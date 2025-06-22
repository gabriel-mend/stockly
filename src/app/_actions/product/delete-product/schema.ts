import { z } from "zod";

export type DeleteProductSchema = z.infer<typeof deleteProductSchema>;

export const deleteProductSchema = z.object({
  id: z.string().uuid("Invalid product ID"),
});
