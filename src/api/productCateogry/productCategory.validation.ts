import { z } from "zod";

export const ProductCategoryValidation = {
  CREATE: z.object({
    productId: z.string().uuid(),
    categoryId: z.string().uuid(),
  }),
};
