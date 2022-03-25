import constants from "@utils/constants";
import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";
import ApiError from "./api.error";

const apiErrorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof ApiError) {
    const { message, errors } = err;
    return res.status(err.status).json({ message, errors });
  }
  if (err instanceof ZodError) {
    return res.status(400).json({
      message: err.issues[0].message,
    });
  }
  res.status(500).json({ error: "Oops. Something broke on the server" });

  next(err);
};

export default apiErrorHandler;
