import { Request, Response, NextFunction } from "express";
import { AnyZodObject } from "zod";

const validateResourceSchema =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    schema.parse({
      body: req.body,
      params: req.params,
      query: req.query,
    });

    next();
  };

export default { validateResourceSchema };
