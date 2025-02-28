import { Request, Response } from "express";

export const routeMiddleware = (req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    statusCode: 404,
    message: "Route not found",
  });
};
