import { Router } from "express";
import { CategoryController } from "./category.controller";
import { uuidMiddleware } from "../../middleware/uuidMiddleware";

export const CategoryRouter = Router();
CategoryRouter.get("/category", CategoryController.get);
CategoryRouter.get("/category/:id", uuidMiddleware, CategoryController.get);
CategoryRouter.post("/category", CategoryController.create);
CategoryRouter.put("/category/:id", CategoryController.update);
CategoryRouter.delete("/category/:id", CategoryController.delete);
