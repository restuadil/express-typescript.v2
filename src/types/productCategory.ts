import { z } from "zod";
import { ProductCategoryValidation } from "../api/productCateogry/productCategory.validation";

export type ProductCategoryRequest = z.infer<
  typeof ProductCategoryValidation.CREATE
>;

export type ProductCategoryResponse = {
  id: string;
  productId: string;
  categoryId: string;
};
