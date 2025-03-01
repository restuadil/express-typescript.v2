import { z } from "zod";

export const CategoryValidation = {
  CREATE: z.object({
    name: z.string().min(3, "Category at least have 3 character").trim(),
  }),
  UPDATE: z.object({
    id: z.string().uuid(),
    name: z.string().min(3, "Category at least have 3 character").trim(),
  }),
  QUERY: z.object({
    search: z.string().optional(),
    page: z.coerce.number().int().positive().default(1),
    limit: z.coerce.number().int().positive().default(20),
  }),
};
