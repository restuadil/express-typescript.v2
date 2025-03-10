import { NextFunction, Request, Response } from "express";
import { z } from "zod";

export const uuidMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const result = z.string().uuid().safeParse(id);

  if (!result.success) {
    res.status(400).json({
      status: false,
      statusCode: 400,
      message: "Invalid UUID",
    });
    return; // ⬅️ Tambahkan return agar middleware tidak lanjut ke `next()`
  }

  next(); // ⬅️ Pastikan `next()` selalu dipanggil jika tidak ada error
};
