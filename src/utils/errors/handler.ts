import { NextFunction, Request, Response } from "express";
import ApiError from "./api.error";

const apiErrorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof ApiError) {
    return res.status(err.status).json({ error: err.message });
  }
  res.status(500).json({ error: "Oops. Something broke on the server" });

  next(err);
};

export default apiErrorHandler;
