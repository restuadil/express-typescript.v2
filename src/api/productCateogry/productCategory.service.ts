import { prisma } from "../../config/prisma";
import { ProductCategoryRequest } from "../../types/productCategory";
import { Validation } from "../../utils/validation";
import { ProductCategoryValidation } from "./productCategory.validation";

export const ProductCategory = {
  getAllCategoryProduct: async (id: string) => {},
  getById: async () => {},
  create: async (data: ProductCategoryRequest) => {
    const validatedData = Validation.validate(
      ProductCategoryValidation.CREATE,
      data
    );
    const response = await prisma.productCategory.create({
      data: validatedData,
    });
    return response;
  },
  update: async () => {},
  delete: async () => {},
};
